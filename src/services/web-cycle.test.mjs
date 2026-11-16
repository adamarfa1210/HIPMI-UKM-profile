import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { spawn } from "node:child_process";

const REVALIDATE_SECRET = "hipmi-revalidate-webhook-secret-token";

function makeBaselineState() {
  return {
    heroSlides: [
      {
        id: "hero-1",
        indexLabel: "01 / 01",
        title: "HERO BASELINE TITLE TEST",
        subtitle: "Subtitle hero baseline untuk pengujian siklus CMS tanpa foto.",
        imageSrc: null,
        imageAlt: null,
        sortOrder: 1,
      },
    ],
    tentang: {
      eyebrow: "01 / TENTANG BASELINE",
      title: "Judul Tentang Baseline Pengujian",
      description: "Deskripsi utama tentang baseline organisasi untuk verifikasi siklus CMS.",
      secondaryDescription: "Deskripsi penguat kedua baseline organisasi.",
      videoPosterSrc: null,
      videoUrl: null,
      pillars: [
        { id: "p-1", title: "Pilar Baseline Satu", description: "Deskripsi pilar baseline satu yang aktif." },
        { id: "p-2", title: "Pilar Baseline Dua", description: "Deskripsi pilar baseline dua yang aktif." },
        { id: "p-3", title: "Pilar Baseline Tiga", description: "Deskripsi pilar baseline tiga yang aktif." },
      ],
    },
    bidangs: [
      { id: "b-okk", slug: "okk", shortName: "OKK", title: "BIDANG OKK", compartmentSummary: "PSDM, ADKESKA" },
    ],
    announcements: [
      { id: "ann-1", title: "Berita Baseline 01", content: "Isi berita baseline pertama untuk ticker." },
    ],
    siteSettings: {
      secretariatAddress: "Alamat Sekretariat Baseline Bandung",
      officialEmail: "baseline@hipmipt.org",
      officialInstagram: "@hipmibaseline",
      whatsappContactLabel: "Kontak WA Baseline",
      whatsappContactUrl: "https://wa.me/6281234567890",
      copyrightText: "Copyright Baseline 2026",
      ctaCollaborationHref: "#kontak",
      ctaBusinessHref: "#kontak",
      ctaAchievementHref: "#kontak",
      googleDocsTemplateUrl: null,
    },
    partners: [
      {
        id: "part-1",
        name: "Mitra Baseline Satu",
        category: "Korporasi & BUMN",
        scope: "Ruang lingkup kemitraan baseline pertama untuk uji web profil.",
        period: "Periode 2026",
        status: "Aktif",
        imageSrc: null,
        imageAlt: "Mitra Baseline Satu",
        slotStatus: "pending-asset",
      },
    ],
    businesses: [
      {
        id: "biz-1",
        businessName: "Bisnis Baseline Satu",
        sector: "Teknologi & Jasa",
        description: "Deskripsi bisnis kader baseline pertama untuk pengujian direktori.",
        ownerLabel: "Pemilik Baseline",
        verifiedLabel: "Terverifikasi",
        imageSrc: null,
        imageAlt: "Bisnis Baseline Satu",
        slotStatus: "pending-asset",
      },
    ],
    achievements: [
      {
        id: "ach-1",
        title: "Prestasi Baseline Satu",
        category: "Kompetisi Bisnis",
        description: "Deskripsi prestasi kader baseline pertama untuk pengujian arsip.",
        recipientLabel: "Tim Baseline",
        organizerLabel: "Penyelenggara Baseline 2026",
        imageSrc: null,
        imageAlt: "Prestasi Baseline Satu",
        slotStatus: "pending-asset",
      },
    ],
    programs: [
      {
        id: "b-okk",
        slug: "okk",
        shortName: "OKK",
        title: "BIDANG OKK",
        eyebrow: "PROGRAM KERJA BIDANG OKK",
        description: "Deskripsi bidang OKK baseline untuk pengujian program kerja.",
        compartmentSummary: "PSDM, ADKESKA",
        summaryStats: "1 Kompartemen, 1 Program Kerja & 0 Jobdesk",
        compartments: [
          {
            id: "comp-1",
            code: "KOMPARTEMEN 1: PSDM",
            name: "Kompartemen PSDM",
            operationalPattern: "proker-only",
            patternLabel: "Hanya Program Kerja",
            prokerSlides: [
              {
                id: "slide-1",
                kind: "proker",
                title: "PROKER BASELINE SATU",
                description: "Deskripsi program kerja baseline pertama untuk uji stage.",
                mediaSourceLabel: "Arsip Baseline",
                imageSrc: null,
                imageAlt: "PROKER BASELINE SATU",
                slotStatus: "pending-asset",
              },
            ],
            jobdeskSlides: [],
          },
        ],
      },
    ],
    testimonials: [
      {
        id: "testi-1",
        category: "Kader & Alumni",
        quote: "Testimoni baseline terverifikasi yang memastikan halaman testimoni terisi.",
        authorLabel: "Narasumber Baseline",
        roleOrOrg: "Founder Baseline",
        verified: true,
      },
    ],
  };
}

function makeEmptyState() {
  return {
    heroSlides: [],
    tentang: {
      eyebrow: "",
      title: "",
      description: "",
      secondaryDescription: null,
      videoPosterSrc: null,
      videoUrl: null,
      pillars: [],
    },
    bidangs: [],
    announcements: [],
    siteSettings: {
      secretariatAddress: "",
      officialEmail: "",
      officialInstagram: "",
      whatsappContactLabel: "",
      whatsappContactUrl: "",
      copyrightText: "",
      ctaCollaborationHref: "#kontak",
      ctaBusinessHref: "#kontak",
      ctaAchievementHref: "#kontak",
      googleDocsTemplateUrl: null,
    },
    partners: [],
    businesses: [],
    achievements: [],
    programs: [
      {
        id: "b-okk",
        slug: "okk",
        shortName: "OKK",
        title: "",
        eyebrow: "",
        description: "",
        compartmentSummary: "",
        summaryStats: "0 Kompartemen, 0 Program Kerja & 0 Jobdesk",
        compartments: [],
      },
    ],
    testimonials: [],
  };
}

test("Web UKM Profile renders no photos, clears completely on empty CMS, restores, adds +2, and deletes +2", async () => {
  let state = makeBaselineState();

  const apiHits = [];
  const apiServer = http.createServer((req, res) => {
    apiHits.push(req.url);
    res.setHeader("Content-Type", "application/json");
    const url = req.url || "/";
    if (url === "/api/public/home") {
      const compCount = state.programs.reduce((s, b) => s + b.compartments.length, 0);
      const slideCount = state.programs.reduce(
        (s, b) => s + b.compartments.reduce((c, comp) => c + comp.prokerSlides.length + comp.jobdeskSlides.length, 0),
        0
      );
      res.end(
        JSON.stringify({
          success: true,
          data: {
            heroSlides: state.heroSlides,
            tentang: state.tentang,
            stats: {
              bidangCount: state.bidangs.length,
              compartmentCount: compCount,
              prokerJobdeskCount: slideCount,
              partnerCount: state.partners.length,
            },
            bidangs: state.bidangs,
            announcements: state.announcements,
            siteSettings: state.siteSettings,
          },
        })
      );
      return;
    }
    if (url === "/api/public/partners") {
      res.end(JSON.stringify({ success: true, data: state.partners }));
      return;
    }
    if (url === "/api/public/kader-businesses") {
      res.end(JSON.stringify({ success: true, data: state.businesses }));
      return;
    }
    if (url === "/api/public/achievements") {
      res.end(JSON.stringify({ success: true, data: state.achievements }));
      return;
    }
    if (url === "/api/public/testimonials") {
      res.end(JSON.stringify({ success: true, data: state.testimonials }));
      return;
    }
    if (url === "/api/public/site-config") {
      res.end(JSON.stringify({ success: true, data: state.siteSettings }));
      return;
    }
    if (url === "/api/public/program-kerja") {
      res.end(JSON.stringify({ success: true, data: state.programs }));
      return;
    }
    if (url.startsWith("/api/public/program-kerja/")) {
      const slug = url.split("/").pop();
      const found = state.programs.find((p) => p.slug === slug) || state.programs[0];
      res.end(JSON.stringify({ success: true, data: found }));
      return;
    }
    res.statusCode = 404;
    res.end(JSON.stringify({ success: false }));
  });

  await new Promise((resolve) => apiServer.listen(0, "127.0.0.1", resolve));
  const apiPort = apiServer.address().port;
  const webPort = 3099;
  const webBase = `http://127.0.0.1:${webPort}`;

  const nextProc = spawn(
    process.execPath,
    ["./node_modules/next/dist/bin/next", "start", "-p", String(webPort), "-H", "127.0.0.1"],
    {
      cwd: process.cwd(),
      env: {
        ...process.env,
        BACKEND_API_URL: `http://127.0.0.1:${apiPort}`,
        NEXT_PUBLIC_API_URL: `http://127.0.0.1:${apiPort}`,
        REVALIDATE_SECRET,
      },
      stdio: ["ignore", "pipe", "pipe"],
    }
  );

  try {
    // Wait until server responds
    for (let i = 0; i < 40; i++) {
      try {
        const r = await fetch(`${webBase}/`);
        if (r.ok) break;
      } catch {}
      await new Promise((r) => setTimeout(r, 250));
    }

    const triggerRevalidate = async () => {
      const rev = await fetch(`${webBase}/api/revalidate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-revalidate-secret": REVALIDATE_SECRET,
        },
        body: JSON.stringify({
          tags: ["home", "hero", "tentang", "partners", "businesses", "achievements", "programs", "program-okk", "testimonials", "settings", "announcements"],
        }),
      });
      assert.equal(rev.status, 200);
    };

    const fetchText = async (path) => {
      const r = await fetch(`${webBase}${path}`, { cache: "no-store" });
      assert.equal(r.status, 200);
      return await r.text();
    };

    // 1. Baseline without photos
    await triggerRevalidate();
    const home1 = await fetchText("/");
    assert.ok(home1.includes("HERO BASELINE TITLE TEST"));
    assert.ok(home1.includes("Judul Tentang Baseline Pengujian"));
    assert.ok(home1.includes("Mitra Baseline Satu"));
    assert.ok(home1.includes("Bisnis Baseline Satu"));
    assert.ok(home1.includes("Prestasi Baseline Satu"));
    assert.ok(home1.includes("Narasumber Baseline"));
    assert.ok(!home1.includes("/assets/0"), "Home should not contain hardcoded /assets/0*.jpg photos");

    const partner1 = await fetchText("/partnership");
    assert.ok(!partner1.includes("/assets/0"), "Partnership subpage should not contain hardcoded /assets/0*.jpg photos");

    // 2. Clear all texts -> Web UKM must show empty state (NO hardcoded mock fallback!)
    state = makeEmptyState();
    await triggerRevalidate();
    const homeEmpty = await fetchText("/");
    assert.ok(!homeEmpty.includes("HERO BASELINE TITLE TEST"));
    assert.ok(!homeEmpty.includes("HIPMI PT UNIVERSITAS TELKOM"), "Must not fall back to hardcoded HERO_SLIDES");
    assert.ok(!homeEmpty.includes("Menggerakkan Ekosistem Wirausaha"), "Must not fall back to hardcoded COMPANY_VIDEO");
    assert.ok(!homeEmpty.includes("Mitra Korporasi & BUMN"), "Must not fall back to hardcoded PARTNER_ITEMS");
    assert.ok(!homeEmpty.includes("[Slot Usaha Kader 01"), "Must not fall back to hardcoded KADER_BUSINESSES");
    assert.ok(!homeEmpty.includes("[Slot Prestasi Kader 01"), "Must not fall back to hardcoded ACHIEVEMENTS");
    assert.ok(homeEmpty.includes("HERO SLIDER KOSONG"));
    assert.ok(homeEmpty.includes("Konten Tentang &amp; Pilar belum dipublikasikan"));

    const prokerEmpty = await fetchText("/program-kerja/okk");
    assert.ok(prokerEmpty.includes("Konten Bidang Belum Dipublikasikan"));
    assert.ok(prokerEmpty.includes("Belum ada bidang program kerja yang aktif."));
    assert.ok(prokerEmpty.includes("Belum ada kompartemen atau slide program kerja pada bidang ini."));
    assert.ok(homeEmpty.includes("Alamat sekretariat belum diatur."));
    assert.ok(homeEmpty.includes("Kontak resmi belum diatur."));

    // 3. Restore baseline texts
    state = makeBaselineState();
    await triggerRevalidate();
    const homeRestored = await fetchText("/");
    assert.ok(homeRestored.includes("HERO BASELINE TITLE TEST"));
    assert.ok(homeRestored.includes("Judul Tentang Baseline Pengujian"));
    assert.ok(homeRestored.includes("Mitra Baseline Satu"));

    // 4. Add +2 to each addable element
    state.heroSlides.push(
      { id: "hero-add-1", indexLabel: "02 / 03", title: "HERO TAMBAHAN SATU", subtitle: "Subtitle hero tambahan satu yang panjangnya cukup.", imageSrc: null, imageAlt: null, sortOrder: 2 },
      { id: "hero-add-2", indexLabel: "03 / 03", title: "HERO TAMBAHAN DUA", subtitle: "Subtitle hero tambahan dua yang panjangnya cukup.", imageSrc: null, imageAlt: null, sortOrder: 3 }
    );
    state.announcements.push(
      { id: "ann-add-1", title: "Berita Tambahan 01", content: "Konten berita tambahan satu." },
      { id: "ann-add-2", title: "Berita Tambahan 02", content: "Konten berita tambahan dua." }
    );
    state.partners.push(
      { id: "part-add-1", name: "Mitra Tambahan Satu", category: "Mitra Strategis", scope: "Scope mitra tambahan satu.", period: "2026", status: "Aktif", imageSrc: null, imageAlt: "Mitra Tambahan Satu", slotStatus: "pending-asset" },
      { id: "part-add-2", name: "Mitra Tambahan Dua", category: "Mitra Strategis", scope: "Scope mitra tambahan dua.", period: "2026", status: "Aktif", imageSrc: null, imageAlt: "Mitra Tambahan Dua", slotStatus: "pending-asset" }
    );
    state.businesses.push(
      { id: "biz-add-1", businessName: "Bisnis Tambahan Satu", sector: "Kuliner / F&B", description: "Deskripsi bisnis tambahan satu yang cukup panjang.", ownerLabel: "Kader 1", verifiedLabel: "Verified", imageSrc: null, imageAlt: "Bisnis Tambahan Satu", slotStatus: "pending-asset" },
      { id: "biz-add-2", businessName: "Bisnis Tambahan Dua", sector: "Fesyen & Ritel", description: "Deskripsi bisnis tambahan dua yang cukup panjang.", ownerLabel: "Kader 2", verifiedLabel: "Verified", imageSrc: null, imageAlt: "Bisnis Tambahan Dua", slotStatus: "pending-asset" }
    );
    state.achievements.push(
      { id: "ach-add-1", title: "Prestasi Tambahan Satu", category: "Rekognisi", description: "Deskripsi prestasi tambahan satu.", recipientLabel: "Tim 1", organizerLabel: "Org 1", imageSrc: null, imageAlt: "Prestasi Tambahan Satu", slotStatus: "pending-asset" },
      { id: "ach-add-2", title: "Prestasi Tambahan Dua", category: "Tingkat Nasional", description: "Deskripsi prestasi tambahan dua.", recipientLabel: "Tim 2", organizerLabel: "Org 2", imageSrc: null, imageAlt: "Prestasi Tambahan Dua", slotStatus: "pending-asset" }
    );
    state.programs[0].compartments.push(
      {
        id: "comp-add-1",
        code: "KOMP TAMBAHAN 1",
        name: "Kompartemen Tambahan Satu",
        operationalPattern: "proker-only",
        patternLabel: "Hanya Program Kerja",
        prokerSlides: [
          { id: "slide-add-1", kind: "proker", title: "SLIDE TAMBAHAN SATU", description: "Deskripsi slide tambahan satu untuk pengujian web.", mediaSourceLabel: "Test", imageSrc: null, imageAlt: "SLIDE TAMBAHAN SATU", slotStatus: "pending-asset" },
        ],
        jobdeskSlides: [],
      },
      {
        id: "comp-add-2",
        code: "KOMP TAMBAHAN 2",
        name: "Kompartemen Tambahan Dua",
        operationalPattern: "jobdesk-only",
        patternLabel: "Hanya Jobdesk",
        prokerSlides: [],
        jobdeskSlides: [
          { id: "slide-add-2", kind: "jobdesk", title: "SLIDE TAMBAHAN DUA", description: "Deskripsi slide tambahan dua untuk pengujian web.", mediaSourceLabel: "Test", imageSrc: null, imageAlt: "SLIDE TAMBAHAN DUA", slotStatus: "pending-asset" },
        ],
      }
    );
    state.testimonials.push(
      { id: "testi-add-1", category: "Kader & Alumni", quote: "Testimoni tambahan satu yang panjangnya memenuhi batas.", authorLabel: "Penulis Tambahan Satu", roleOrOrg: "Alumni", verified: true },
      { id: "testi-add-2", category: "Mitra Kolaborasi", quote: "Testimoni tambahan dua yang panjangnya memenuhi batas.", authorLabel: "Penulis Tambahan Dua", roleOrOrg: "Mitra", verified: true }
    );

    await triggerRevalidate();
    const homeAdded = await fetchText("/");
    assert.ok(homeAdded.includes("Berita Tambahan 01"));
    assert.ok(homeAdded.includes("Berita Tambahan 02"));
    assert.ok(homeAdded.includes("Mitra Tambahan Satu"));
    assert.ok(homeAdded.includes("Mitra Tambahan Dua"));
    assert.ok(homeAdded.includes("Bisnis Tambahan Satu"));
    assert.ok(homeAdded.includes("Prestasi Tambahan Satu"));

    const partnerAdded = await fetchText("/partnership");
    assert.ok(partnerAdded.includes("Mitra Tambahan Satu"));
    assert.ok(partnerAdded.includes("Mitra Tambahan Dua"));

    const bizAdded = await fetchText("/bisnis-kader");
    assert.ok(bizAdded.includes("Bisnis Tambahan Satu"));
    assert.ok(bizAdded.includes("Bisnis Tambahan Dua"));

    const achAdded = await fetchText("/prestasi");
    assert.ok(achAdded.includes("Prestasi Tambahan Satu"));
    assert.ok(achAdded.includes("Prestasi Tambahan Dua"));

    const prokerAdded = await fetchText("/program-kerja/okk");
    assert.ok(prokerAdded.includes("Kompartemen Tambahan Satu"));
    assert.ok(prokerAdded.includes("SLIDE TAMBAHAN SATU"));
    assert.ok(prokerAdded.includes("Kompartemen Tambahan Dua"));
    assert.ok(prokerAdded.includes("SLIDE TAMBAHAN DUA"));

    const testiAdded = await fetchText("/testimoni");
    assert.ok(testiAdded.includes("Penulis Tambahan Satu"));
    assert.ok(testiAdded.includes("Penulis Tambahan Dua"));

    // 5. Delete +2 added items -> back to baseline
    state = makeBaselineState();
    await triggerRevalidate();
    const homeCleaned = await fetchText("/");
    assert.ok(homeCleaned.includes("HERO BASELINE TITLE TEST"));
    assert.ok(!homeCleaned.includes("Berita Tambahan 01"));
    assert.ok(!homeCleaned.includes("Mitra Tambahan Satu"));
    assert.ok(!homeCleaned.includes("Bisnis Tambahan Satu"));

    const testiCleaned = await fetchText("/testimoni");
    assert.ok(!testiCleaned.includes("Penulis Tambahan Satu"));
    assert.ok(testiCleaned.includes("Narasumber Baseline"));
  } finally {
    nextProc.kill();
    apiServer.close();
  }
});
