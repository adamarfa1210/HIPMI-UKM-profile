import type {
  AchievementItem,
  BidangProgramPage,
  BidangSlug,
  CompanyVideo,
  HeroSlide,
  KaderBusiness,
  PartnerItem,
  TestimonialItem,
} from "@/types/content";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-01",
    indexLabel: "01 / 05",
    title: "HIPMI PT UNIVERSITAS TELKOM",
    subtitle:
      "Wadah pengembangan pengusaha muda Universitas Telkom melalui inkubasi bisnis kader, jejaring kemitraan strategis, dan program kerja berdampak.",
    imageSrc: "/assets/01-hero-home/hero-slide-01.jpg",
    imageAlt:
      "Mahasiswa pengusaha Universitas Telkom berkolaborasi membahas konsep usaha di ruang kerja kreatif",
  },
  {
    id: "hero-02",
    indexLabel: "02 / 05",
    title: "KOLABORASI & JEJARING WIRAUSAHA",
    subtitle:
      "Menghubungkan founder mahasiswa dengan ekosistem pengusaha muda nasional untuk mempercepat validasi dan pertumbuhan bisnis.",
    imageSrc: "/assets/01-hero-home/hero-slide-02.jpg",
    imageAlt:
      "Diskusi kelompok kader wirausaha mahasiswa HIPMI PT Universitas Telkom bersama laptop dan rancangan produk",
  },
  {
    id: "hero-03",
    indexLabel: "03 / 05",
    title: "INKUBASI & MENTORING PRAKTISI",
    subtitle:
      "Pendampingan bisnis terstruktur bersama mentor dan alumni agar usaha kader naik kelas secara operasional dan finansial.",
    imageSrc: "/assets/01-hero-home/hero-slide-03.jpg",
    imageAlt:
      "Sesi mentoring bisnis antara mentor praktisi dan mahasiswa kader di ruang auditorium inovasi",
  },
  {
    id: "hero-04",
    indexLabel: "04 / 05",
    title: "ETALASE PRODUK & EKONOMI KREATIF",
    subtitle:
      "Panggung showcase karya dan rintisan usaha kader dari sektor teknologi, kuliner, kreatif, hingga ritel di tingkat kampus dan nasional.",
    imageSrc: "/assets/01-hero-home/hero-slide-04.jpg",
    imageAlt:
      "Showcase produk inovasi dan rintisan bisnis kreatif mahasiswa di aula pameran modern",
  },
  {
    id: "hero-05",
    indexLabel: "05 / 05",
    title: "EKSPANSI INDUSTRI & KEMITRAAN",
    subtitle:
      "Kunjungan perusahaan, dialog industri, dan kemitraan strategis untuk memperluas cakrawala bisnis kader Universitas Telkom.",
    imageSrc: "/assets/01-hero-home/hero-slide-05.jpg",
    imageAlt:
      "Delegasi mahasiswa HIPMI PT Universitas Telkom bertukar wawasan dalam kunjungan korporasi",
  },
];

export const COMPANY_VIDEO: CompanyVideo = {
  eyebrow: "01 / TENTANG KAMI",
  title: "Menggerakkan Ekosistem Wirausaha Mahasiswa Universitas Telkom",
  description:
    "UKM HIPMI PT Universitas Telkom merupakan unit kegiatan mahasiswa yang menjembatani semangat kewirausahaan kampus dengan jaringan pengusaha muda nasional melalui pembinaan usaha kader, program kerja terukur, dan kemitraan strategis.",
  posterSrc: "/assets/02-tentang-video/video-company-profile-poster.jpg",
  posterAlt:
    "Poster video profil kegiatan pengusaha mahasiswa di lingkungan kampus Universitas Telkom Bandung",
  videoUrl: null,
};

export const TENTANG_PILLARS = [
  {
    id: "pilar-01",
    title: "01 • Inkubasi Bisnis Kader",
    description:
      "Pendampingan usaha mahasiswa mulai dari validasi pasar hingga penguatan operasional bisnis.",
  },
  {
    id: "pilar-02",
    title: "02 • Jejaring Kemitraan",
    description:
      "Membuka akses kolaborasi lintas fakultas, alumni HIPMI, sponsor, dan mitra industri nasional.",
  },
  {
    id: "pilar-03",
    title: "03 • Kepemimpinan Wirausaha",
    description:
      "Menempa karakter kader melalui manajemen proyek kewirausahaan dan forum diskusi strategis.",
  },
] as const;

export const PARTNER_ITEMS: PartnerItem[] = [
  {
    id: "partner-01",
    name: "Mitra Korporasi & BUMN",
    category: "Korporasi & BUMN",
    scope:
      "Slot lembaga mitra korporasi dan BUMN untuk program kunjungan industri, sponsorship, dan mentoring karier.",
    period: "Menunggu konfirmasi daftar lembaga resmi (/api/partners)",
    status: "Slot Resmi Pengurus",
    imageSrc: "/assets/03-partnership/mitra-01-korporasi-bumn.jpg",
    imageAlt: "Emblem kategori mitra Korporasi dan BUMN HIPMI PT Telkom",
    slotStatus: "ready",
  },
  {
    id: "partner-02",
    name: "Jejaring BPC & BPD HIPMI",
    category: "Asosiasi & HIPMI",
    scope:
      "Sinergi perguruan tinggi dan pengurus cabang HIPMI daerah dalam forum pengusaha muda dan business matching.",
    period: "Menunggu konfirmasi daftar lembaga resmi (/api/partners)",
    status: "Slot Resmi Pengurus",
    imageSrc: "/assets/03-partnership/mitra-02-bpc-bpd-hipmi.jpg",
    imageAlt: "Emblem kategori asosiasi BPC dan BPD HIPMI",
    slotStatus: "ready",
  },
  {
    id: "partner-03",
    name: "Dinas & Inkubator Kampus",
    category: "Dinas & Inkubator",
    scope:
      "Kolaborasi klinik legalitas usaha, perizinan NIB/UMKM, dan pembinaan inkubasi tenant mahasiswa.",
    period: "Menunggu konfirmasi daftar lembaga resmi (/api/partners)",
    status: "Slot Resmi Pengurus",
    imageSrc: "/assets/03-partnership/mitra-03-dinas-inkubator.jpg",
    imageAlt: "Emblem kategori Dinas dan Inkubator Kewirausahaan",
    slotStatus: "ready",
  },
  {
    id: "partner-04",
    name: "Komunitas & Media Partner",
    category: "Komunitas & Media",
    scope:
      "Publikasi bersama kegiatan kewirausahaan, seminar nasional, dan liputan program kerja kampus.",
    period: "Menunggu konfirmasi daftar lembaga resmi (/api/partners)",
    status: "Slot Resmi Pengurus",
    imageSrc: "/assets/03-partnership/mitra-04-komunitas-media.jpg",
    imageAlt: "Emblem kategori Komunitas dan Media Partner",
    slotStatus: "ready",
  },
  {
    id: "partner-05",
    name: "Mitra Strategis Ekosistem",
    category: "Mitra Strategis",
    scope:
      "Dukungan ekosistem kolaborasi lintas sektor untuk akselerasi usaha kader Universitas Telkom.",
    period: "Menunggu konfirmasi daftar lembaga resmi (/api/partners)",
    status: "Slot Resmi Pengurus",
    imageSrc: "/assets/03-partnership/mitra-05-mitra-strategis-marquee.jpg",
    imageAlt: "Emblem kategori Mitra Strategis Ekosistem HIPMI PT Telkom",
    slotStatus: "ready",
  },
];

export const KADER_BUSINESSES: KaderBusiness[] = [
  {
    id: "bisnis-01",
    businessName: "[Slot Usaha Kader 01 • Teknologi & Digital]",
    sector: "Teknologi & Jasa",
    description:
      "Kategori rintisan produk digital, perangkat lunak, dan layanan berbasis teknologi oleh kader Universitas Telkom. Data usaha spesifik terhubung ke /api/kader-businesses.",
    ownerLabel: "Pemilik: [Nama Kader & Angkatan]",
    verifiedLabel: "Menunggu input data pengurus",
    imageSrc: "/assets/04-bisnis-kader/bisnis-01-teknologi.jpg",
    imageAlt: "Ilustrasi usaha kader sektor teknologi dan digital",
    slotStatus: "ready",
  },
  {
    id: "bisnis-02",
    businessName: "[Slot Usaha Kader 02 • Kuliner / F&B]",
    sector: "Kuliner / F&B",
    description:
      "Kategori usaha kuliner, kopi spesialti, dan produk pangan inovatif kader Universitas Telkom. Data terhubung ke /api/kader-businesses.",
    ownerLabel: "Pemilik: [Nama Kader & Angkatan]",
    verifiedLabel: "Menunggu input data pengurus",
    imageSrc: null,
    imageAlt: "Slot visual usaha kader sektor kuliner",
    pendingLabel: "04-bisnis-kader/bisnis-02-kuliner.jpg (Menunggu Asset)",
    slotStatus: "pending-asset",
  },
  {
    id: "bisnis-03",
    businessName: "[Slot Usaha Kader 03 • Industri Kreatif]",
    sector: "Kreatif & Media",
    description:
      "Kategori studio desain, agensi kreatif, produksi konten visual, dan layanan komunikasi merek milik kader mahasiswa Telkom University.",
    ownerLabel: "Pemilik: [Nama Kader & Angkatan]",
    verifiedLabel: "Menunggu input data pengurus",
    imageSrc: "/assets/04-bisnis-kader/bisnis-03-kreatif.jpg",
    imageAlt: "Ilustrasi usaha kader sektor industri kreatif dan desain",
    slotStatus: "ready",
  },
  {
    id: "bisnis-04",
    businessName: "[Slot Usaha Kader 04 • Fesyen & Ritel]",
    sector: "Fesyen & Ritel",
    description:
      "Kategori brand fesyen, kriya, dan perdagangan ritel modern yang dikembangkan oleh anggota UKM HIPMI PT Universitas Telkom.",
    ownerLabel: "Pemilik: [Nama Kader & Angkatan]",
    verifiedLabel: "Menunggu input data pengurus",
    imageSrc: null,
    imageAlt: "Slot visual usaha kader sektor fesyen dan ritel",
    pendingLabel: "04-bisnis-kader/bisnis-04-fesyen-ritel.jpg (Menunggu Asset)",
    slotStatus: "pending-asset",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "prestasi-01",
    title: "[Slot Prestasi Kader 01 • Juara Kompetisi Bisnis]",
    category: "Kompetisi Bisnis",
    description:
      "Arsip keikutsertaan dan pencapaian kader pada lomba rencana bisnis dan business case tingkat regional maupun nasional (/api/achievements).",
    recipientLabel: "Peraih: [Nama Tim / Kader Terverifikasi]",
    organizerLabel: "Penyelenggara & Tahun: [Menunggu Data Pengurus]",
    imageSrc: null,
    imageAlt: "Slot dokumentasi kompetisi bisnis kader",
    pendingLabel: "05-prestasi/prestasi-01-kompetisi.jpg (Menunggu Asset)",
    slotStatus: "pending-asset",
  },
  {
    id: "prestasi-02",
    title: "[Slot Prestasi Kader 02 • Hibah & Pendanaan Wirausaha]",
    category: "Pendanaan & Hibah",
    description:
      "Catatan penerimaan hibah pembinaan kewirausahaan mahasiswa seperti P2MW, inkubasi startup, dan program akselerasi usaha kampus.",
    recipientLabel: "Peraih: [Nama Tim / Usaha Kader]",
    organizerLabel: "Program Hibah & Tahun: [Menunggu Data Pengurus]",
    imageSrc: null,
    imageAlt: "Slot dokumentasi hibah dan pendanaan usaha kader",
    pendingLabel: "05-prestasi/prestasi-02-hibah-pendanaan.jpg (Menunggu Asset)",
    slotStatus: "pending-asset",
  },
  {
    id: "prestasi-03",
    title: "[Slot Prestasi Kader 03 • Delegasi Tingkat Nasional]",
    category: "Tingkat Nasional",
    description:
      "Dokumentasi keterwakilan kader UKM HIPMI PT Universitas Telkom pada forum pengusaha muda dan ekshibisi nasional.",
    recipientLabel: "Delegasi: [Nama Kader Terverifikasi]",
    organizerLabel: "Agenda Nasional & Tahun: [Menunggu Data Pengurus]",
    imageSrc: null,
    imageAlt: "Slot dokumentasi capaian tingkat nasional",
    pendingLabel: "05-prestasi/prestasi-03-nasional.jpg (Menunggu Asset)",
    slotStatus: "pending-asset",
  },
  {
    id: "prestasi-04",
    title: "[Slot Prestasi Kader 04 • Rekognisi & Apresiasi]",
    category: "Rekognisi",
    description:
      "Penghargaan kelembagaan dan apresiasi eksternal atas inovasi produk, dampak sosial, serta kontribusi kader wirausaha muda.",
    recipientLabel: "Penerima: [Nama Kader / Unit Terverifikasi]",
    organizerLabel: "Pemberi Rekognisi & Tahun: [Menunggu Data Pengurus]",
    imageSrc: "/assets/05-prestasi/prestasi-04-rekognisi.jpg",
    imageAlt:
      "Seremoni penyerahan apresiasi dan penghargaan prestasi kewirausahaan kader",
    slotStatus: "ready",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-01",
    category: "Kader & Alumni",
    quote:
      "[Slot Testimoni Nyata 01: Menunggu kutipan resmi dari kader aktif atau alumni pengusaha UKM HIPMI PT Universitas Telkom yang terhubung dengan /api/testimonials.]",
    authorLabel: "[Nama Kader / Alumni Terverifikasi]",
    roleOrOrg: "[Peran / Nama Usaha Kader]",
    verified: false,
  },
  {
    id: "testi-02",
    category: "Mitra Kolaborasi",
    quote:
      "[Slot Testimoni Nyata 02: Menunggu tanggapan resmi perwakilan lembaga mitra industri atau pembicara program kerja HIPMI PT Universitas Telkom sesuai standar R-18.]",
    authorLabel: "[Nama Perwakilan Mitra Terverifikasi]",
    roleOrOrg: "[Instansi / Perusahaan Mitra]",
    verified: false,
  },
  {
    id: "testi-03",
    category: "Kader & Alumni",
    quote:
      "[Slot Testimoni Nyata 03: Menunggu testimoni anggota aktif mengenai dampak program pendampingan bisnis, pelatihan kader, dan kolaborasi antar bidang.]",
    authorLabel: "[Nama Anggota Aktif Terverifikasi]",
    roleOrOrg: "[Fakultas / Unit Bisnis Kader]",
    verified: false,
  },
];

export const BIDANG_PROGRAMS: Record<BidangSlug, BidangProgramPage> = {
  okk: {
    slug: "okk",
    shortName: "OKK",
    title: "BIDANG OKK",
    eyebrow: "PROGRAM KERJA BIDANG OKK",
    description:
      "Bidang Organisasi, Kaderisasi, dan Keanggotaan yang berfokus pada pengembangan kapasitas individu, sistem keorganisasian, serta kesejahteraan dan advokasi kader HIPMI PT Universitas Telkom.",
    summaryStats: "2 Kompartemen, 2 Program Kerja & 2 Jobdesk",
    compartmentSummary: "PSDM, ADKESKA",
    compartments: [
      {
        id: "okk-psdm",
        code: "KOMPARTEMEN 1: PSDM",
        name: "Kompartemen PSDM",
        operationalPattern: "proker-only",
        patternLabel: "Hanya Program Kerja",
        prokerSlides: [
          {
            id: "psdm-open-mind-yec",
            kind: "proker",
            title: "OPEN MIND, YEC & LDKK",
            description:
              "Peningkatan kapasitas individu kader melalui pelatihan, pengembangan soft skill, dan pembentukan karakter guna menciptakan jiwa kewirausahaan.",
            imageSrc:
              "/assets/06-program-kerja/okk/psdm-proker-01b-yec.jpg",
            imageAlt:
              "Poster resmi Program Kerja Young Entrepreneur Camp (YEC) HIPMI PT Telkom",
            mediaSourceLabel: "Poster IG @yechipmitelkom",
            slotStatus: "ready",
          },
          {
            id: "psdm-dies-natalis",
            kind: "proker",
            title: "DIES NATALIS & STAFF MUDA PENGUSAHA",
            description:
              "Momentum perayaan hari lahir organisasi sekaligus wadah pengenalan dan pelantikan staff muda ke dalam ekosistem kaderisasi HIPMI PT Universitas Telkom.",
            imageSrc: null,
            imageAlt: "Slot poster Dies Natalis dan Staff Muda Pengusaha",
            mediaSourceLabel:
              "06-program-kerja/okk/psdm-proker-02-dies-natalis-staff-muda.jpg",
            slotStatus: "pending-asset",
          },
        ],
        jobdeskSlides: [],
      },
      {
        id: "okk-adkeska",
        code: "KOMPARTEMEN 2: ADKESKA",
        name: "Kompartemen ADKESKA",
        operationalPattern: "proker-jobdesk",
        patternLabel: "Program Kerja & Jobdesk",
        prokerSlides: [
          {
            id: "adkeska-sekolah-pengusaha",
            kind: "proker",
            title: "SEKOLAH PENGUSAHA",
            description:
              "Peningkatan pengetahuan dan mentalitas wirausaha kader melalui seminar interaktif, bedah kasus bisnis, dan pembinaan terstruktur.",
            imageSrc:
              "/assets/06-program-kerja/okk/adkeska-proker-01-sekolah-pengusaha.jpg",
            imageAlt:
              "Poster resmi Program Kerja Sekolah Pengusaha HIPMI PT Universitas Telkom",
            mediaSourceLabel: "Poster IG @sekolahpengusaha_hipmitelu",
            slotStatus: "ready",
          },
        ],
        jobdeskSlides: [
          {
            id: "adkeska-adkescare",
            kind: "jobdesk",
            title: "ADKESCARE",
            description:
              "Jobdesk layanan kesejahteraan, penghimpunan aspirasi, dan advokasi anggota untuk memastikan kenyamanan serta keberlanjutan keaktifan kader.",
            imageSrc: null,
            imageAlt: "Slot dokumentasi jobdesk AdkesCare",
            mediaSourceLabel: "06-program-kerja/okk/adkeska-jobdesk-01-adkescare.jpg",
            slotStatus: "pending-asset",
          },
          {
            id: "adkeska-invest-preneur",
            kind: "jobdesk",
            title: "INVEST PRENEUR",
            description:
              "Jobdesk edukasi literasi finansial, pencatatan keuangan dasar, dan kesiapan investasi modal bagi usaha rintisan kader.",
            imageSrc: null,
            imageAlt: "Slot dokumentasi jobdesk Invest Preneur",
            mediaSourceLabel:
              "06-program-kerja/okk/adkeska-jobdesk-02-invest-preneur.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
    ],
  },
  medkominfo: {
    slug: "medkominfo",
    shortName: "Medkominfo",
    title: "BIDANG MEDKOMINFO",
    eyebrow: "PROGRAM KERJA BIDANG MEDKOMINFO",
    description:
      "Bidang Media Komunikasi dan Informasi yang mengelola strategi komunikasi visual, publikasi digital, serta branding organisasi HIPMI PT Universitas Telkom.",
    summaryStats: "2 Kompartemen, 0 Program Kerja & 3 Jobdesk",
    compartmentSummary: "Media Komunikasi, Media Kreatif",
    compartments: [
      {
        id: "medkom-komunikasi",
        code: "KOMPARTEMEN 1: MEDIA KOMUNIKASI",
        name: "Kompartemen Media Komunikasi",
        operationalPattern: "jobdesk-only",
        patternLabel: "Hanya Jobdesk",
        prokerSlides: [],
        jobdeskSlides: [
          {
            id: "medkom-hipmi-talks",
            kind: "jobdesk",
            title: "HIPMI TALKS & NEXTPRENEUR TALKS",
            description:
              "Wadah diskusi inspiratif dalam bentuk talkshow dan forum interaktif bersama narasumber bisnis serta praktisi industri.",
            imageSrc: null,
            imageAlt: "Slot visual HIPMI Talks dan NextPreneur Talks",
            mediaSourceLabel:
              "06-program-kerja/medkominfo/medkom-jobdesk-01-hipmi-talks-nextpreneur.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
      {
        id: "medkom-kreatif",
        code: "KOMPARTEMEN 2: MEDIA KREATIF",
        name: "Kompartemen Media Kreatif",
        operationalPattern: "jobdesk-only",
        patternLabel: "Hanya Jobdesk",
        prokerSlides: [],
        jobdeskSlides: [
          {
            id: "medkre-digital-hub",
            kind: "jobdesk",
            title: "HIPMI DIGITAL HUB",
            description:
              "Pengelolaan pusat informasi digital, desain konten kreatif, dan publikasi terpadu HIPMI PT Universitas Telkom.",
            imageSrc: null,
            imageAlt: "Slot visual HIPMI Digital HUB",
            mediaSourceLabel:
              "06-program-kerja/medkominfo/medkre-jobdesk-01-hipmi-digital-hub.jpg",
            slotStatus: "pending-asset",
          },
          {
            id: "medkre-digital-entrepreneur",
            kind: "jobdesk",
            title: "DIGITAL ENTREPRENEUR",
            description:
              "Kampanye visual, showcase produk digital, dan produksi materi konten penggerak minat wirausaha di kanal resmi UKM.",
            imageSrc: null,
            imageAlt: "Slot visual Digital Entrepreneur",
            mediaSourceLabel:
              "06-program-kerja/medkominfo/medkre-jobdesk-02-digital-entrepreneur.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
    ],
  },
  eksternal: {
    slug: "eksternal",
    shortName: "Eksternal",
    title: "BIDANG EKSTERNAL",
    eyebrow: "PROGRAM KERJA BIDANG EKSTERNAL",
    description:
      "Bidang Eksternal yang membangun relasi nasional, kemitraan industri strategis, serta kontribusi pengabdian masyarakat HIPMI PT Universitas Telkom.",
    summaryStats: "3 Kompartemen, 3 Program Kerja & 3 Jobdesk",
    compartmentSummary: "Relation, Partnership, Pengabdian Masyarakat",
    compartments: [
      {
        id: "eksternal-relasi",
        code: "KOMPARTEMEN 1: RELASI (RELATION)",
        name: "Kompartemen Relasi",
        operationalPattern: "proker-jobdesk",
        patternLabel: "Program Kerja & Jobdesk",
        prokerSlides: [
          {
            id: "relasi-business-show",
            kind: "proker",
            title: "BUSINESS SHOW",
            description:
              "Pameran dan ajang promosi bisnis kader HIPMI PT Universitas Telkom di tingkat eksternal untuk membuka peluang pasar dan investor.",
            imageSrc: null,
            imageAlt: "Slot visual Program Kerja Business Show",
            mediaSourceLabel:
              "06-program-kerja/eksternal/relasi-proker-01-business-show.jpg",
            slotStatus: "pending-asset",
          },
        ],
        jobdeskSlides: [
          {
            id: "relasi-goes-nasional",
            kind: "jobdesk",
            title: "HIPMI GOES NASIONAL",
            description:
              "Penjalinan relasi kelembagaan lintas kampus dan keterwakilan organisasi pada jejaring HIPMI perguruan tinggi tingkat nasional.",
            imageSrc: null,
            imageAlt: "Slot visual jobdesk HIPMI Goes Nasional",
            mediaSourceLabel:
              "06-program-kerja/eksternal/relasi-jobdesk-01-hipmi-goes-nasional.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
      {
        id: "eksternal-partnership",
        code: "KOMPARTEMEN 2: PARTNERSHIP",
        name: "Kompartemen Partnership",
        operationalPattern: "proker-jobdesk",
        patternLabel: "Program Kerja & Jobdesk",
        prokerSlides: [
          {
            id: "partnership-company-visit",
            kind: "proker",
            title: "COMPANY VISIT",
            description:
              "Kunjungan langsung ke perusahaan inspiratif untuk memperluas jejaring serta wawasan operasional bisnis kader.",
            imageSrc:
              "/assets/06-program-kerja/eksternal/partnership-proker-01-company-visit.jpg",
            imageAlt:
              "Poster resmi Program Kerja Company Visit HIPMI PT Universitas Telkom",
            mediaSourceLabel: "Poster IG @comvis.hipmitelu",
            slotStatus: "ready",
          },
        ],
        jobdeskSlides: [
          {
            id: "partnership-explore-business",
            kind: "jobdesk",
            title: "EXPLORE BUSINESS",
            description:
              "Penjajakan mitra bisnis baru, sponsorship program kerja, dan pemetaan peluang kolaborasi antara UKM dan dunia usaha.",
            imageSrc: null,
            imageAlt: "Slot visual jobdesk Explore Business",
            mediaSourceLabel:
              "06-program-kerja/eksternal/partnership-jobdesk-01-explore-business.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
      {
        id: "eksternal-pengmas",
        code: "KOMPARTEMEN 3: PENGABDIAN MASYARAKAT",
        name: "Kompartemen Pengabdian Masyarakat",
        operationalPattern: "proker-jobdesk",
        patternLabel: "Program Kerja & Jobdesk",
        prokerSlides: [
          {
            id: "pengmas-hipmi-village",
            kind: "proker",
            title: "HIPMI VILLAGE",
            description:
              "Pengembangan potensi desa dan UMKM lokal melalui edukasi manajemen usaha serta pemberdayaan masyarakat berkelanjutan.",
            imageSrc:
              "/assets/06-program-kerja/eksternal/pengmas-proker-01-hipmi-village.jpg",
            imageAlt:
              "Poster resmi Program Kerja HIPMI Goes to Village HIPMI PT Universitas Telkom",
            mediaSourceLabel: "Poster IG @hipmivillage",
            slotStatus: "ready",
          },
        ],
        jobdeskSlides: [
          {
            id: "pengmas-hipmi-sosial",
            kind: "jobdesk",
            title: "HIPMI SOSIAL",
            description:
              "Aksi tanggap sosial, santunan komunitas, dan kolaborasi kemanusiaan yang melibatkan kader pengusaha mahasiswa.",
            imageSrc: null,
            imageAlt: "Slot visual jobdesk HIPMI Sosial",
            mediaSourceLabel:
              "06-program-kerja/eksternal/pengmas-jobdesk-01-hipmi-sosial.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
    ],
  },
  ekraf: {
    slug: "ekraf",
    shortName: "Ekraf",
    title: "BIDANG EKRAF",
    eyebrow: "PROGRAM KERJA BIDANG EKRAF",
    description:
      "Bidang Ekonomi Kreatif yang membina unit bisnis organisasi, keikutsertaan kompetisi nasional, dan akselerasi usaha kader HIPMI PT Universitas Telkom.",
    summaryStats: "3 Kompartemen, 3 Program Kerja & 2 Jobdesk",
    compartmentSummary: "Kompetisi, BUMH, Pengembangan Bisnis",
    compartments: [
      {
        id: "ekraf-kompetisi",
        code: "KOMPARTEMEN 1: KOMPETISI",
        name: "Kompartemen Kompetisi",
        operationalPattern: "proker-jobdesk",
        patternLabel: "Program Kerja & Jobdesk",
        prokerSlides: [
          {
            id: "kompetisi-hnc",
            kind: "proker",
            title: "HIPMI NASIONAL COMPETITION",
            description:
              "Fasilitator kompetisi kewirausahaan bagi seluruh anggota HIPMI PT Universitas Telkom serta mahasiswa Indonesia.",
            imageSrc: null,
            imageAlt: "Slot visual HIPMI Nasional Competition",
            mediaSourceLabel:
              "06-program-kerja/ekraf/kompetisi-proker-01-hipmi-nasional-competition.jpg",
            slotStatus: "pending-asset",
          },
        ],
        jobdeskSlides: [
          {
            id: "kompetisi-champion",
            kind: "jobdesk",
            title: "HIPMI CHAMPION",
            description:
              "Pendampingan penyiapan delegasi lomba bisnis kader, pemetaan jadwal kompetisi nasional, dan coaching deck presentasi.",
            imageSrc: null,
            imageAlt: "Slot visual jobdesk HIPMI Champion",
            mediaSourceLabel:
              "06-program-kerja/ekraf/kompetisi-jobdesk-01-hipmi-champion.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
      {
        id: "ekraf-bumh",
        code: "KOMPARTEMEN 2: BUMH",
        name: "Kompartemen BUMH",
        operationalPattern: "jobdesk-only",
        patternLabel: "Hanya Jobdesk",
        prokerSlides: [],
        jobdeskSlides: [
          {
            id: "bumh-hive-project",
            kind: "jobdesk",
            title: "HIVE PROJECT",
            description:
              "Inkubator usaha internal untuk mewujudkan kemandirian ekonomi organisasi HIPMI PT Universitas Telkom.",
            imageSrc: null,
            imageAlt: "Slot visual jobdesk Hive Project BUMH",
            mediaSourceLabel:
              "06-program-kerja/ekraf/bumh-jobdesk-01-hive-project.jpg",
            slotStatus: "pending-asset",
          },
        ],
      },
      {
        id: "ekraf-pengbis",
        code: "KOMPARTEMEN 3: PENGEMBANGAN BISNIS",
        name: "Kompartemen Pengembangan Bisnis",
        operationalPattern: "proker-only",
        patternLabel: "Hanya Program Kerja",
        prokerSlides: [
          {
            id: "pengbis-business-class",
            kind: "proker",
            title: "BUSINESS CLASS",
            description:
              "Program mentoring dan pendampingan kapasitas bisnis mahasiswa bersama praktisi serta mentor wirausaha.",
            imageSrc:
              "/assets/06-program-kerja/ekraf/pengbis-proker-01-business-class.jpg",
            imageAlt:
              "Poster resmi Program Kerja Business Class HIPMI PT Universitas Telkom",
            mediaSourceLabel: "Poster IG @businessclass_hipmi",
            slotStatus: "ready",
          },
          {
            id: "pengbis-kajian-strategis",
            kind: "proker",
            title: "KAJIAN STRATEGIS",
            description:
              "Forum diskusi tren ekonomi, riset sektor usaha potensial, dan penyusunan analisis strategi pengembangan bisnis kader.",
            imageSrc: null,
            imageAlt: "Slot visual Kajian Strategis Pengembangan Bisnis",
            mediaSourceLabel:
              "06-program-kerja/ekraf/pengbis-jobdesk-02-kajian-strategis.jpg",
            slotStatus: "pending-asset",
          },
        ],
        jobdeskSlides: [],
      },
    ],
  },
};

export const BIDANG_LIST: BidangProgramPage[] = [
  BIDANG_PROGRAMS.okk,
  BIDANG_PROGRAMS.medkominfo,
  BIDANG_PROGRAMS.eksternal,
  BIDANG_PROGRAMS.ekraf,
];

export function isValidBidang(slug: string): slug is BidangSlug {
  return slug in BIDANG_PROGRAMS;
}
