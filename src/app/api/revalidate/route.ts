import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const expectedSecret =
    process.env.REVALIDATE_SECRET || "hipmi-revalidate-webhook-secret-token";

  let body: { secret?: string; tags?: string[] } = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const headerSecret = request.headers.get("x-revalidate-secret");
  const providedSecret = headerSecret || body.secret;

  if (!providedSecret || providedSecret !== expectedSecret) {
    return NextResponse.json(
      { success: false, message: "Invalid revalidation secret" },
      { status: 401 }
    );
  }

  const tags = Array.isArray(body.tags) ? body.tags : [];
  for (const tag of tags) {
    if (typeof tag === "string" && tag.trim()) {
      revalidateTag(tag.trim());
    }
  }

  // Ensure layout and dynamic routes refresh cleanly on Next.js ISR
  revalidatePath("/", "layout");

  return NextResponse.json({
    success: true,
    revalidated: true,
    tags,
    timestamp: Date.now(),
  });
}
