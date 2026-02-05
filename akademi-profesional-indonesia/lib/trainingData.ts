export interface PriceOption {
  type: string;
  price: string;
  description: string;
}

export interface Training {
  title: string;
  date: string;
  location: string;
  seats: number;
  available: number;
  price: string;
  priceOptions: PriceOption[];
  status: string;
  duration: string;
  materials: string[];
  facilitators: string[];
  schedule: { day: string; time: string; topic: string }[];
}

export const trainingSchedules = [
  {
    month: 'Maret 2026',
    trainings: [
      {
        title: 'Arsitektur Finansial & Unit Cost',
        date: '10-11 Maret 2026',
        location: 'Jakarta',
        seats: 25,
        available: 8,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dasar Activity Based Costing (ABC) dalam perhitungan unit cost',
          'Identifikasi dan klasifikasi biaya langsung dan tidak langsung',
          'Metode alokasi biaya overhead yang akurat',
          'Perhitungan unit cost untuk berbagai jenis layanan kesehatan',
          'Analisis profitabilitas layanan dan penetapan tarif yang kompetitif',
          'Implementasi sistem unit cost calculator berbasis teknologi',
          'Studi kasus dan praktik langsung perhitungan unit cost',
          'Studi kasus implementasi unit cost di rumah sakit'
        ],
        facilitators: [
          'Dr. Ahmad Budiman, M.Kes - Pakar Manajemen Keuangan Rumah Sakit dengan pengalaman 15 tahun',
          'Ir. Siti Nurhaliza, MBA - Konsultan Activity Based Costing untuk berbagai rumah sakit terkemuka',
          'Drs. Budi Santoso, Ak., CA - Praktisi Akuntansi Kesehatan bersertifikat internasional'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Pengenalan ABC dan Konsep Unit Cost' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Identifikasi dan Klasifikasi Biaya' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Metode Alokasi Biaya dan Perhitungan Unit Cost' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Analisis Profitabilitas dan Studi Kasus' }
        ]
      },
      {
        title: 'Navigasi Strategis Manajemen RS',
        date: '17-18 Maret 2026',
        location: 'Bandung',
        seats: 30,
        available: 15,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dan prinsip manajemen strategis rumah sakit modern',
          'Analisis lingkungan internal dan eksternal (SWOT Analysis)',
          'Perumusan visi, misi, dan tujuan strategis organisasi',
          'Penyusunan rencana strategis jangka pendek dan jangka panjang',
          'Implementasi strategi dan manajemen perubahan',
          'Monitoring dan evaluasi kinerja strategis dengan Balanced Scorecard',
          'Kepemimpinan strategis dan pengambilan keputusan efektif',
          'Studi kasus transformasi manajemen strategis rumah sakit'
        ],
        facilitators: [
          'Prof. Dr. Bambang Sutrisno, M.Sc - Guru Besar Manajemen Rumah Sakit Universitas Indonesia',
          'Dr. Ratna Dewi, MBA, MHA - Direktur RS Terkemuka dengan track record transformasi organisasi',
          'Ir. Hendra Wijaya, MM - Konsultan Manajemen Strategis berpengalaman 20 tahun'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Manajemen Strategis dan Analisis SWOT' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Perumusan Visi, Misi, dan Strategi' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Implementasi Strategi dan Change Management' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Monitoring Kinerja dan Studi Kasus' }
        ]
      },
      {
        title: 'Benteng Pertahanan: Risk Management',
        date: '24-25 Maret 2026',
        location: 'Surabaya',
        seats: 25,
        available: 3,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'limited',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dasar manajemen risiko dalam layanan kesehatan',
          'Identifikasi dan pemetaan risiko klinis dan non-klinis',
          'Analisis dan evaluasi tingkat risiko (risk assessment)',
          'Strategi mitigasi dan pengendalian risiko',
          'Sistem pelaporan insiden dan pembelajaran organisasi',
          'Budaya keselamatan pasien (patient safety culture)',
          'Implementasi sistem manajemen risiko terintegrasi',
          'Studi kasus penanganan insiden dan risk management'
        ],
        facilitators: [
          'Dr. Siti Aminah, MARS - Pakar Patient Safety dan Risk Management',
          'dr. Agus Setiawan, Sp.An, MARS - Ketua Komite Mutu dan Keselamatan Pasien RS',
          'Dra. Lina Marlina, M.Kes - Konsultan Manajemen Risiko Rumah Sakit'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Risk Management dan Identifikasi Risiko' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Risk Assessment dan Analisis Risiko' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Strategi Mitigasi dan Pengendalian Risiko' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Implementasi Sistem dan Studi Kasus' }
        ]
      }
    ]
  },
  {
    month: 'April 2026',
    trainings: [
      {
        title: 'Resonansi Layanan: Complaint Management',
        date: '7-8 April 2026',
        location: 'Yogyakarta',
        seats: 30,
        available: 20,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dan pentingnya manajemen pengaduan dalam layanan kesehatan',
          'Sistem penerimaan dan dokumentasi pengaduan yang efektif',
          'Teknik komunikasi dan penanganan keluhan pasien',
          'Analisis akar masalah (root cause analysis) pengaduan',
          'Strategi penyelesaian konflik dan pemulihan kepercayaan',
          'Monitoring dan evaluasi penanganan pengaduan',
          'Transformasi pengaduan menjadi peluang perbaikan layanan',
          'Studi kasus penanganan komplain dan service recovery'
        ],
        facilitators: [
          'Dr. Maya Kusuma, M.Psi - Psikolog Klinis dan Pakar Komunikasi Kesehatan',
          'Drs. Eko Prasetyo, MM - Praktisi Customer Service Excellence di Rumah Sakit',
          'dr. Fitri Handayani, MARS - Kepala Humas dan Manajemen Komplain RS'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Complaint Management dan Sistem Penerimaan' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Teknik Komunikasi dan Penanganan Keluhan' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Root Cause Analysis dan Penyelesaian Konflik' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Monitoring dan Studi Kasus' }
        ]
      },
      {
        title: 'Ekselensi Operasional Rumah Sakit',
        date: '14-15 April 2026',
        location: 'Jakarta',
        seats: 25,
        available: 12,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Prinsip-prinsip operational excellence dalam rumah sakit',
          'Lean management dan eliminasi pemborosan (waste)',
          'Optimalisasi alur proses layanan (process flow)',
          'Manajemen kapasitas dan utilisasi sumber daya',
          'Sistem antrian dan waktu tunggu pasien',
          'Key Performance Indicators (KPI) operasional',
          'Continuous improvement dan inovasi layanan',
          'Studi kasus implementasi lean management di rumah sakit'
        ],
        facilitators: [
          'Ir. Dedi Kurniawan, MBA - Konsultan Lean Hospital Management',
          'Dr. Retno Wulandari, MARS - Direktur Operasional RS dengan sertifikasi Six Sigma',
          'Drs. Hadi Purnomo, MM - Praktisi Process Improvement di Healthcare'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Operational Excellence dan Lean Management' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Identifikasi dan Eliminasi Waste' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Optimalisasi Process Flow dan KPI Operasional' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Continuous Improvement dan Studi Kasus' }
        ]
      },
      {
        title: 'Otoritas Klinis: Nursing Leadership',
        date: '21-22 April 2026',
        location: 'Semarang',
        seats: 20,
        available: 0,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'full',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Peran dan tanggung jawab kepemimpinan keperawatan',
          'Gaya kepemimpinan efektif dalam tim keperawatan',
          'Manajemen konflik dan pengambilan keputusan klinis',
          'Motivasi dan pengembangan tim keperawatan',
          'Delegasi tugas dan supervisi yang efektif',
          'Quality assurance dan clinical governance',
          'Kepemimpinan transformasional dalam keperawatan',
          'Studi kasus kepemimpinan keperawatan'
        ],
        facilitators: [
          'Ns. Sri Wahyuni, S.Kep., M.Kep - Direktur Keperawatan RS dan Dosen Keperawatan',
          'Ns. Budi Hartono, S.Kep., MARS - Konsultan Nursing Management',
          'Dr. Ani Suryani, S.Kep., M.Kes - Pakar Leadership dan Organizational Behavior'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Nursing Leadership dan Gaya Kepemimpinan' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Manajemen Konflik dan Decision Making' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Motivasi Tim dan Delegasi Efektif' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Quality Assurance dan Studi Kasus' }
        ]
      },
      {
        title: 'Arsitektur Finansial & Unit Cost',
        date: '28-29 April 2026',
        location: 'Bali',
        seats: 25,
        available: 18,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dasar Activity Based Costing (ABC) dalam perhitungan unit cost',
          'Identifikasi dan klasifikasi biaya langsung dan tidak langsung',
          'Metode alokasi biaya overhead yang akurat',
          'Perhitungan unit cost untuk berbagai jenis layanan kesehatan',
          'Analisis profitabilitas layanan dan penetapan tarif yang kompetitif',
          'Implementasi sistem unit cost calculator berbasis teknologi',
          'Studi kasus dan praktik langsung perhitungan unit cost',
          'Studi kasus implementasi unit cost di rumah sakit'
        ],
        facilitators: [
          'Dr. Ahmad Budiman, M.Kes - Pakar Manajemen Keuangan Rumah Sakit dengan pengalaman 15 tahun',
          'Ir. Siti Nurhaliza, MBA - Konsultan Activity Based Costing untuk berbagai rumah sakit terkemuka',
          'Drs. Budi Santoso, Ak., CA - Praktisi Akuntansi Kesehatan bersertifikat internasional'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Pengenalan ABC dan Konsep Unit Cost' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Identifikasi dan Klasifikasi Biaya' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Metode Alokasi Biaya dan Perhitungan Unit Cost' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Analisis Profitabilitas dan Studi Kasus' }
        ]
      }
    ]
  },
  {
    month: 'Mei 2026',
    trainings: [
      {
        title: 'Navigasi Strategis Manajemen RS',
        date: '5-6 Mei 2026',
        location: 'Medan',
        seats: 30,
        available: 25,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dan prinsip manajemen strategis rumah sakit modern',
          'Analisis lingkungan internal dan eksternal (SWOT Analysis)',
          'Perumusan visi, misi, dan tujuan strategis organisasi',
          'Penyusunan rencana strategis jangka pendek dan jangka panjang',
          'Implementasi strategi dan manajemen perubahan',
          'Monitoring dan evaluasi kinerja strategis dengan Balanced Scorecard',
          'Kepemimpinan strategis dan pengambilan keputusan efektif',
          'Studi kasus transformasi manajemen strategis rumah sakit'
        ],
        facilitators: [
          'Prof. Dr. Bambang Sutrisno, M.Sc - Guru Besar Manajemen Rumah Sakit Universitas Indonesia',
          'Dr. Ratna Dewi, MBA, MHA - Direktur RS Terkemuka dengan track record transformasi organisasi',
          'Ir. Hendra Wijaya, MM - Konsultan Manajemen Strategis berpengalaman 20 tahun'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Manajemen Strategis dan Analisis SWOT' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Perumusan Visi, Misi, dan Strategi' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Implementasi Strategi dan Change Management' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Monitoring Kinerja dan Studi Kasus' }
        ]
      },
      {
        title: 'Benteng Pertahanan: Risk Management',
        date: '12-13 Mei 2026',
        location: 'Makassar',
        seats: 25,
        available: 10,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'available',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Konsep dasar manajemen risiko dalam layanan kesehatan',
          'Identifikasi dan pemetaan risiko klinis dan non-klinis',
          'Analisis dan evaluasi tingkat risiko (risk assessment)',
          'Strategi mitigasi dan pengendalian risiko',
          'Sistem pelaporan insiden dan pembelajaran organisasi',
          'Budaya keselamatan pasien (patient safety culture)',
          'Implementasi sistem manajemen risiko terintegrasi',
          'Studi kasus penanganan insiden dan risk management'
        ],
        facilitators: [
          'Dr. Siti Aminah, MARS - Pakar Patient Safety dan Risk Management',
          'dr. Agus Setiawan, Sp.An, MARS - Ketua Komite Mutu dan Keselamatan Pasien RS',
          'Dra. Lina Marlina, M.Kes - Konsultan Manajemen Risiko Rumah Sakit'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Risk Management dan Identifikasi Risiko' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Risk Assessment dan Analisis Risiko' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Strategi Mitigasi dan Pengendalian Risiko' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Implementasi Sistem dan Studi Kasus' }
        ]
      },
      {
        title: 'Ekselensi Operasional Rumah Sakit',
        date: '19-20 Mei 2026',
        location: 'Jakarta',
        seats: 25,
        available: 5,
        price: '2.500.000 - 3.500.000',
        priceOptions: [
          { type: 'Tanpa Menginap', price: '2.500.000', description: 'Pelatihan tanpa akomodasi' },
          { type: 'Menginap Twin Sharing', price: '3.000.000', description: 'Pelatihan dengan akomodasi twin sharing' },
          { type: 'Menginap Single', price: '3.500.000', description: 'Pelatihan dengan akomodasi single room' }
        ],
        status: 'limited',
        duration: '2 hari (08.00 - 16.00 WIB)',
        materials: [
          'Prinsip-prinsip operational excellence dalam rumah sakit',
          'Lean management dan eliminasi pemborosan (waste)',
          'Optimalisasi alur proses layanan (process flow)',
          'Manajemen kapasitas dan utilisasi sumber daya',
          'Sistem antrian dan waktu tunggu pasien',
          'Key Performance Indicators (KPI) operasional',
          'Continuous improvement dan inovasi layanan',
          'Studi kasus implementasi lean management di rumah sakit'
        ],
        facilitators: [
          'Ir. Dedi Kurniawan, MBA - Konsultan Lean Hospital Management',
          'Dr. Retno Wulandari, MARS - Direktur Operasional RS dengan sertifikasi Six Sigma',
          'Drs. Hadi Purnomo, MM - Praktisi Process Improvement di Healthcare'
        ],
        schedule: [
          { day: 'Hari 1', time: '08.00-12.00', topic: 'Konsep Operational Excellence dan Lean Management' },
          { day: 'Hari 1', time: '13.00-16.00', topic: 'Identifikasi dan Eliminasi Waste' },
          { day: 'Hari 2', time: '08.00-12.00', topic: 'Optimalisasi Process Flow dan KPI Operasional' },
          { day: 'Hari 2', time: '13.00-16.00', topic: 'Continuous Improvement dan Studi Kasus' }
        ]
      }
    ]
  }
];
