import { 
  Stat, 
  EducationItem, 
  ExperienceItem, 
  SkillCategory, 
  OrganizationItem, 
  ProjectItem, 
  AchievementItem 
} from './types';

export const personalInfo = {
  name: "Baihaqi Nur Muhammad",
  email: "baihaqinur85@gmail.com",
  phone: "+6281358441760",
  whatsapp: "https://wa.me/6281358441760",
  github: "https://github.com/baihaqi896",
  instagram: "https://www.instagram.com/baihaqi_nur_m?igsh=amhyeGQwdmRzYm9n&utm_source=qr",
  cvDownloadUrl: "#",
  ID: {
    title: "Mahasiswa Sains Data | Pemilik Bisnis | Antusias Analis Data",
    headlineSegments: [
      "Mahasiswa Sains Data",
      "Pemilik Bisnis",
      "Antusias Analis Data",
      "Praktisi Pemasaran Digital"
    ],
    about: "Saya merupakan mahasiswa Sains Data Universitas Pembangunan Nasional Veteran Jawa Timur dengan IPK 3,68. Memiliki pengalaman dalam pengembangan bisnis, analisis data, digital marketing, dan pengelolaan proyek organisasi. Saya berdedikasi tinggi untuk memecahkan tantangan bisnis yang rumit melalui pendekatan analitis berbasis data."
  },
  EN: {
    title: "Data Science Student | Business Owner | Data Analyst Enthusiast",
    headlineSegments: [
      "Data Science Student",
      "Business Owner",
      "Data Analyst Enthusiast",
      "Digital Marketing Practitioner"
    ],
    about: "I am a Data Science student at Universitas Pembangunan Nasional Veteran Jawa Timur with a GPA of 3.68. I have experience in business development, data analysis, digital marketing, and organizational project management. I am highly dedicated to solving complex business challenges using analytical, data-driven approaches."
  }
};

export const statsData: Record<'ID' | 'EN', Stat[]> = {
  ID: [
    {
      id: "stat-1",
      value: "3+",
      label: "Tahun Bisnis",
      icon: "Briefcase"
    },
    {
      id: "stat-2",
      value: "1500+",
      label: "Pesanan Terlayani",
      icon: "TrendingUp"
    },
    {
      id: "stat-3",
      value: "5+",
      label: "Organisasi & Volunteer",
      icon: "Users"
    },
    {
      id: "stat-4",
      value: "3+",
      label: "Proyek Data Science",
      icon: "Code"
    }
  ],
  EN: [
    {
      id: "stat-1",
      value: "3+",
      label: "Years in Business",
      icon: "Briefcase"
    },
    {
      id: "stat-2",
      value: "1500+",
      label: "Orders Fulfilled",
      icon: "TrendingUp"
    },
    {
      id: "stat-3",
      value: "5+",
      label: "Organizations & Volunteer",
      icon: "Users"
    },
    {
      id: "stat-4",
      value: "3+",
      label: "Data Science Projects",
      icon: "Code"
    }
  ]
};

export const educationData: Record<'ID' | 'EN', EducationItem> = {
  ID: {
    institution: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    major: "Sains Data",
    gpa: "3.68/4.00",
    period: "Agu 2024 – Sekarang",
    location: "Surabaya, Jawa Timur",
    courses: [
      "Pengembangan Pemasaran",
      "Manajemen Strategi",
      "Analisis Data",
      "Sains Data"
    ],
    description: "Aktif dalam berbagai program magang, kompetisi data science, dan organisasi kemahasiswaan selama masa studi untuk mengasah keterampilan analitis rill murni."
  },
  EN: {
    institution: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    major: "Data Science",
    gpa: "3.68/4.00",
    period: "Aug 2024 – Present",
    location: "Surabaya, East Java",
    courses: [
      "Marketing Development",
      "Strategic Management",
      "Data Analyst",
      "Data Scientist"
    ],
    description: "Actively involved in various internship programs, data science competitions, and student organizations to hone real-world pure analytical skills."
  }
};

export const experienceData: Record<'ID' | 'EN', ExperienceItem[]> = {
  ID: [
    {
      id: "exp-1",
      role: "Business Owner",
      company: "Wish Wash",
      period: "Jan 2024 – Sekarang",
      location: "Surabaya, Jawa Timur",
      highlights: [
        "Mencapai omzet sebesar Rp 4.000.000 dalam satu bulan dengan total lebih dari 1.500 pesanan operasional.",
        "Mengembangkan dan menjalankan strategi pemasaran digital berbasis metrik serta perencanaan bisnis berkelanjutan untuk meningkatkan loyalitas konsumen.",
        "Mengelola media sosial secara penuh sekaligus menjalankan tugas komunikasi interaktif untuk customer service dan content creator."
      ]
    },
    {
      id: "exp-2",
      role: "Business Owner",
      company: "Wish Food",
      period: "Jan 2021 – Jan 2023",
      location: "Surabaya, Jawa Timur",
      highlights: [
        "Mengelola operasional harian bisnis makanan dan minuman (F&B), mulai dari pengadaan bahan baku, manajemen margin, hingga penyajian bermutu tinggi.",
        "Mengembangkan ragam menu baru dan strategi promosi multi-channel untuk mendongkrak retensi penjualan dan loyalitas pelanggan.",
        "Menangani publikasi media sosial dan merangkap peran interaktif (customer service) untuk menjaga feedback kepuasan pelanggan secara instan."
      ]
    }
  ],
  EN: [
    {
      id: "exp-1",
      role: "Business Owner",
      company: "Wish Wash",
      period: "Jan 2024 – Present",
      location: "Surabaya, East Java",
      highlights: [
        "Achieved a turnover of Rp 4,000,000 in a single month with a total of more than 1,500 operational orders.",
        "Developed and executed metrics-driven digital marketing strategies and sustainable business planning to drive customer loyalty.",
        "Fully managed social media accounts while managing interactive communication tasks for customer service and content creation."
      ]
    },
    {
      id: "exp-2",
      role: "Business Owner",
      company: "Wish Food",
      period: "Jan 2021 – Jan 2023",
      location: "Surabaya, East Java",
      highlights: [
        "Managed daily food and beverage (F&B) operations, from raw material procurement and margin management to premium-grade presentation.",
        "Developed new menu variations and multi-channel promotional strategies to boost customer retention and sales growth.",
        "Handled social media publications while concurrently taking on interactive customer service roles to ensure instant customer feedback satisfaction."
      ]
    }
  ]
};

export const skillCategories: Record<'ID' | 'EN', SkillCategory[]> = {
  ID: [
    {
      category: "Sains Data",
      skills: [
        { name: "Bahasa R", level: 85, iconName: "FileCode" },
        { name: "Machine Learning", level: 80, iconName: "BrainCircuits" },
        { name: "Data Extraction", level: 82, iconName: "Cpu" },
        { name: "Exploratory Data Analysis", level: 90, iconName: "BarChart3" },
        { name: "Pemrograman Python", level: 78, iconName: "Code2" }
      ]
    },
    {
      category: "Basis Data",
      skills: [
        { name: "MySQL", level: 85, iconName: "Database" },
        { name: "Dbeaver", level: 80, iconName: "Server" },
        { name: "Data Warehousing", level: 75, iconName: "Layers" }
      ]
    },
    {
      category: "Bisnis",
      skills: [
        { name: "Pemasaran Digital", level: 92, iconName: "Megaphone" },
        { name: "Analisis Bisnis", level: 88, iconName: "LineChart" },
        { name: "Manajemen Proyek", level: 85, iconName: "GitBranch" },
        { name: "Strategi Media Sosial", level: 90, iconName: "Share2" }
      ]
    },
    {
      category: "Alat & Teknologi",
      skills: [
        { name: "VS Code", level: 95, iconName: "Globe" },
        { name: "MS Excel & Office", level: 90, iconName: "FileSpreadsheet" },
        { name: "Adobe Premiere Pro", level: 82, iconName: "Video" },
        { name: "Filmora Video Editor", level: 85, iconName: "Film" },
        { name: "Figma & Desain Grafis", level: 80, iconName: "Palette" }
      ]
    },
    {
      category: "Keterampilan Non-Teknis",
      skills: [
        { name: "Manajemen Waktu", level: 92, iconName: "Clock" },
        { name: "Kerja Tim / Kolaborasi", level: 95, iconName: "Users2" },
        { name: "Pemecahan Masalah", level: 90, iconName: "Lightbulb" },
        { name: "Komunikasi Publik", level: 88, iconName: "MessageSquare" }
      ]
    }
  ],
  EN: [
    {
      category: "Data Science",
      skills: [
        { name: "R Language", level: 85, iconName: "FileCode" },
        { name: "Machine Learning", level: 80, iconName: "BrainCircuits" },
        { name: "Data Extraction", level: 82, iconName: "Cpu" },
        { name: "Exploratory Data Analysis", level: 90, iconName: "BarChart3" },
        { name: "Python Programming", level: 78, iconName: "Code2" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 85, iconName: "Database" },
        { name: "Dbeaver", level: 80, iconName: "Server" },
        { name: "Data Warehousing", level: 75, iconName: "Layers" }
      ]
    },
    {
      category: "Business",
      skills: [
        { name: "Digital Marketing", level: 92, iconName: "Megaphone" },
        { name: "Business Analysis", level: 88, iconName: "LineChart" },
        { name: "Project Management", level: 85, iconName: "GitBranch" },
        { name: "Social Media Strategist", level: 90, iconName: "Share2" }
      ]
    },
    {
      category: "Tools & Tech",
      skills: [
        { name: "VS Code", level: 95, iconName: "Globe" },
        { name: "MS Excel & Office", level: 90, iconName: "FileSpreadsheet" },
        { name: "Adobe Premiere Pro", level: 82, iconName: "Video" },
        { name: "Filmora Video Editor", level: 85, iconName: "Film" },
        { name: "Figma & Graphic Design", level: 80, iconName: "Palette" }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Time Management", level: 92, iconName: "Clock" },
        { name: "Teamwork / Collaboration", level: 95, iconName: "Users2" },
        { name: "Problem Solving", level: 90, iconName: "Lightbulb" },
        { name: "Public Speaking", level: 88, iconName: "MessageSquare" }
      ]
    }
  ]
};

export const organizationData: Record<'ID' | 'EN', OrganizationItem[]> = {
  ID: [
    {
      id: "org-1",
      name: "Google Developer Groups (GDGs) ITS",
      role: "Anggota GDGs",
      period: "Aug 2025 – Sept 2025",
      location: "Surabaya, Jawa Timur",
      points: [
        "Secara kolaboratif membuat project dan sistem manajemen kepesertaan di acara-acara teknologi.",
        "Menyusun perencanaan target rill, timeline eksekusi, serta anggaran kegiatan dalam lingkup acara secara berkala."
      ]
    },
    {
      id: "org-2",
      name: "Diesnatalis Fakultas Ilmu Komputer UPN Jawa Timur",
      role: "Kepala Divisi Keamanan dan Perizinan",
      period: "Aug 2025 – Sept 2025",
      location: "Surabaya, Jawa Timur",
      points: [
        "Memimpin dan mengarahkan 5 anggota tim taktis serta membimbing mereka dalam melaksanakan seluruh Jobdesk operasional acara.",
        "Menyusun target mitigasi keamanan, time scheduling, serta alokasi anggaran kegiatan.",
        "Menyelesaikan perizinan legal dengan pihak internal/eksternal kampus serta mengeksekusi survei lokasi kegiatan."
      ]
    },
    {
      id: "org-3",
      name: "Akshaya 2025",
      role: "Anggota Divisi Perlengkapan",
      period: "Nov 2025 – Okt 2025",
      location: "Surabaya, Jawa Timur",
      points: [
        "Menyiapkan dan mengoordinasikan seluruh peralatan logistik teknis yang dibutuhkan selama pelaksanaan acara kampus.",
        "Mengkoordinasikan logistik transportasi perlengkapan acara untuk menjamin keaslian ketersediaan alat tanpa kendala keterlambatan.",
        "Mengelola rancangan tata letak (setup) dekorasi dan penataan visual venue sesuai konsep acara utama."
      ]
    },
    {
      id: "org-4",
      name: "Tech Support Launchpad Bootcamp",
      role: "Volunteer Acara Bootcamp",
      period: "Des 2025 – Jan 2026",
      location: "Surabaya, Jawa Timur",
      points: [
        "Mendokumentasikan rangkaian kegiatan bootcamp berkala dan memproduksi materi video aftermovie sinematik menggunakan Adobe Premiere Pro dan Filmora.",
        "Membantu penanganan infrastruktur teknis bootcamp teknologi, termasuk persiapan perangkat keras dan koordinasi check-in peserta."
      ]
    },
    {
      id: "org-5",
      name: "Seed Talk Community",
      role: "Volunteer Acara Seed Talk",
      period: "Des 2025 – Jan 2026",
      location: "Surabaya, Jawa Timur",
      points: [
        "Melakukan dokumentasi video-foto harian dan mengolah video aftermovie ringkas untuk publikasi media sosial.",
        "Berpartisipasi aktif dalam penggalangan dana sosial kemanusiaan selama 5 jam per sesi untuk membantu penanganan korban bencana."
      ]
    }
  ],
  EN: [
    {
      id: "org-1",
      name: "Google Developer Groups (GDGs) ITS",
      role: "GDG Member",
      period: "Aug 2025 – Sept 2025",
      location: "Surabaya, East Java",
      points: [
        "Collaboratively built project plans and participant management systems for technology-focused events.",
        "Formulated real target planning, execution timelines, and activity budgets periodically within the scope of events."
      ]
    },
    {
      id: "org-2",
      name: "Diesnatalis Fakultas Ilmu Komputer UPN Jawa Timur",
      role: "Head of Security and Licensing Division",
      period: "Aug 2025 – Sept 2025",
      location: "Surabaya, East Java",
      points: [
        "Led and directed 5 tactical team members, guiding them through all operational tasks during the event.",
        "Drafted security mitigation targets, scheduling timelines, and event budget allocations.",
        "Arranged legal licensing with internal and external campus stakeholders and executed on-site spatial surveys."
      ]
    },
    {
      id: "org-3",
      name: "Akshaya 2025",
      role: "Equipment & Logistics Division Member",
      period: "Nov 2025 – Oct 2025",
      location: "Surabaya, East Java",
      points: [
        "Prepared and coordinated all technical logistics and hardware needed during campus events.",
        "Coordinated event logistics transportation to ensure tool availability with zero delay constraints.",
        "Managed venue layout decor and aesthetic styling according to the main event concept."
      ]
    },
    {
      id: "org-4",
      name: "Tech Support Launchpad Bootcamp",
      role: "Bootcamp Event Volunteer",
      period: "Dec 2025 – Jan 2026",
      location: "Surabaya, East Java",
      points: [
        "Documented a series of bootcamp activities and produced high-quality cinematic aftermovie video materials using Adobe Premiere Pro and Filmora.",
        "Assisted in resolving technical infrastructure issues for tech bootcamps, including hardware setups and participant check-in coordination."
      ]
    },
    {
      id: "org-5",
      name: "Seed Talk Community",
      role: "Seed Talk Event Volunteer",
      period: "Dec 2025 – Jan 2026",
      location: "Surabaya, East Java",
      points: [
        "Carried out daily photo/video documentation and produced concise recap aftermovie videos for social media publishing.",
        "Participated actively in humanitarian social fundraising campaigns for 5 hours per session to assist disaster victims."
      ]
    }
  ]
};

export const projectsData: Record<'ID' | 'EN', ProjectItem[]> = {
  ID: [
    {
      id: "proj-1",
      title: "Membuat Chatbot Data Mining",
      category: "Natural Language Processing (NLP)",
      description: "Hub cerdas penjawab interaktif kesehatan mental yang dirancang untuk merespons kondisi emosional secara empati dan real-time menggunakan kecerdasan komputasi.",
      techStack: ["BERT Model", "Python", "Data Mining", "Tokenization", "Emotion Analysis"],
      highlights: [
        "Chatbot kesehatan mental berbasis model BERT dengan dataset bahasa Indonesia.",
        "Menggunakan klasifikasi emosi terintegrasi untuk mendeteksi 5+ tingkat kecemasan / stres.",
        "Mengembangkan generasi respons adaptif yang ramah, etis, dan responsif."
      ],
      imagePlaceholder: {
        gradient: "from-cyan-500/30 to-purple-500/30",
        icon: "Brain"
      },
      period: "Jan 2026 – Sekarang",
      academicDetails: "Mata Kuliah Data Mining (Nilai: 4.00/4.00), UPN Jawa Timur"
    },
    {
      id: "proj-2",
      title: "Analisis Data Eksploratif & Pemodelan Machine Learning",
      category: "Exploratory Data Analysis (EDA)",
      description: "Studi dan eksplorasi statistik komparatif mendalam mengenai korelasi arsitektur mekanikal kendaraan bermotor terhadap efisiensi konsumsi bahan bakar minyak.",
      techStack: ["EDA", "R Language", "Regression Analysis", "Machine Learning", "ggplot2"],
      highlights: [
        "Merancang korelasi statistik antara jumlah silinder mesin, bobot total kendaraan, dan kekuatan tenaga mesin.",
        "Menggunakan teknik regresi linear ganda dan metode supervised learning untuk mengukur efisiensi BBM.",
        "Membuat visualisasi interaktif data sebaran serta grafik matriks korelasi multi-dimensi."
      ],
      imagePlaceholder: {
        gradient: "from-purple-500/30 to-amber-500/30",
        icon: "LineChart"
      },
      period: "Nov 2025 – Des 2025",
      academicDetails: "Mata Kuliah EDA (Nilai: 3.80/4.00), UPN Jawa Timur"
    },
    {
      id: "proj-3",
      title: "Sistem Basis Data 'CepatkanBayar'",
      category: "Database System Design",
      description: "Perancangan arsitektur database relasional berskala penuh untuk menyokong backend platform pemesanan dan checkout barang kebutuhan harian secara integratif.",
      techStack: ["MySQL", "Dbeaver", "Database Schema", "Query Optimization", "ER Diagram"],
      highlights: [
        "Mendesain struktur Entity Relationship (ER) diagram dengan 10+ tabel saling berelasi normal.",
        "Menulis queries dan prosedur trigger otomatis untuk kalkulasi diskon, inventori, dan mutasi saldo.",
        "Mengoptimalkan indeks MySQL untuk meminimalkan performa delay baca transaksi tinggi."
      ],
      imagePlaceholder: {
        gradient: "from-amber-500/30 to-cyan-500/30",
        icon: "Database"
      },
      period: "Jun 2025 – Jul 2025",
      academicDetails: "Mata Kuliah Basis Data (Nilai: 4.00/4.00), UPN Jawa Timur"
    }
  ],
  EN: [
    {
      id: "proj-1",
      title: "Mental Health Chatbot Development",
      category: "Natural Language Processing (NLP)",
      description: "An intelligent, empathetic mental health chatbot hub designed to respond dynamically in real-time to emotional signals using advanced computational modeling.",
      techStack: ["BERT Model", "Python", "Data Mining", "Tokenization", "Emotion Analysis"],
      highlights: [
        "Mental health chatbot leveraging fine-tuned BERT models trained on Indonesian language corpus.",
        "Integrates sentiment and emotion classifiers tracking 5+ distinct stress / anxiety scales.",
        "Ensures supportive, ethical, conversational, and highly response-adaptive design."
      ],
      imagePlaceholder: {
        gradient: "from-cyan-500/30 to-purple-500/30",
        icon: "Brain"
      },
      period: "Jan 2026 – Present",
      academicDetails: "Data Mining Course (Grade: 4.00/4.00), UPN Jawa Timur"
    },
    {
      id: "proj-2",
      title: "Exploratory Data Analysis & Machine Learning Modeling",
      category: "Exploratory Data Analysis (EDA)",
      description: "A comprehensive statistical and multidimensional exploratory research project mapping vehicle component layout profiles to fuel economy efficiency rates.",
      techStack: ["EDA", "R Language", "Regression Analysis", "Machine Learning", "ggplot2"],
      highlights: [
        "Developed clear mathematical correlation structures tying cylinder metrics, engine power metrics, and total vehicle weight.",
        "Built robust multiple linear regressions and predictive machine learning schemes measuring fuel optimization points.",
        "Rendered high-detail scatter tables and multidimensional matrix correlations using ggplot2."
      ],
      imagePlaceholder: {
        gradient: "from-purple-500/30 to-amber-500/30",
        icon: "LineChart"
      },
      period: "Nov 2025 – Dec 2025",
      academicDetails: "EDA Course (Grade: 3.80/4.00), UPN Jawa Timur"
    },
    {
      id: "proj-3",
      title: "Database System for 'CepatkanBayar'",
      category: "Database System Design",
      description: "Custom-architecture end-to-end relational database mapping designed to bolster the transaction and inventory checkout engine for a grocery application.",
      techStack: ["MySQL", "Dbeaver", "Database Schema", "Query Optimization", "ER Diagram"],
      highlights: [
        "Drafted standard third-normal form (3NF) Entity-Relationship diagrams tracking 10+ core tables.",
        "Wrote optimize SQL query blocks and custom transaction triggers automating stock depletion, discounts, and ledger transactions.",
        "Optimized MySQL search keys and storage indexes to minimize API latency at peak throughput rates."
      ],
      imagePlaceholder: {
        gradient: "from-amber-500/30 to-cyan-500/30",
        icon: "Database"
      },
      period: "Jun 2025 – Jul 2025",
      academicDetails: "Database Systems Course (Grade: 4.00/4.00), UPN Jawa Timur"
    }
  ]
};

export const achievementsData: Record<'ID' | 'EN', AchievementItem[]> = {
  ID: [
    {
      id: "ach-1",
      title: "Top 154 Delegasi SejutaCita Future Leaders Competition 2025",
      institution: "Dealls",
      year: "2025",
      rank: "Nasional",
      icon: "Award"
    }
  ],
  EN: [
    {
      id: "ach-1",
      title: "Top 154 Delegate SejutaCita Future Leaders Competition 2025",
      institution: "Dealls",
      year: "2025",
      rank: "National",
      icon: "Award"
    }
  ]
};
