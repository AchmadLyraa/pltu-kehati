// AUTO-GENERATED oleh scripts/kehati/generate_kehati_data.py
// Sumber: UPKT_2026_Pelaporan_KEHATI_15_10_26.xlsx (2026 = data Januari-Juni 2026)
// Jangan edit manual; ubah Excel/JSON lalu jalankan ulang generator.

const rekapSdgData = {
  tahun: ["2023", "2024", "2025", "2026"],
  indikator: [
    {
      targetSdg: "15.3 Pada tahun 2030, menghentikan penggurunan, memulihkan lahan dan tanah kritis, termasuk lahan yang terkena penggurunan, kekeringan, banjir, dan berusaha mencapai dunia yang bebas dari lahan terdegradasi",
      indikator: "15.3.1 Proporsi lahan yang terdegradasi terhadap luas lahan keseluruhan",
      satuan: "Ha",
      nilai: {
        2023: { target: "450,000", capaian: "2.41", persentase: "0.0005%" },
        2024: { target: "475,000", capaian: "2.41", persentase: "0.0005%" },
        2025: { target: "528,000", capaian: "2.41", persentase: "0.0005%" },
        "2026": { target: "625,000", capaian: "2.95", persentase: "0.0005%" },
      },
      grafik: {
        tipe: "persen5",
        domain: [0, 1e-05],
        data: [
          { tahun: "2023", capaian: 5e-06 },
          { tahun: "2024", capaian: 5.073684e-06 },
          { tahun: "2025", capaian: 4.564394e-06 },
          { tahun: "2026", capaian: 4.72e-06 },
        ],
      },
    },
    {
      targetSdg: "15.5 Melakukan tindakan cepat dan signifikan untuk mengurangi degradasi habitat alami, menghentikan kehilangan keanekaragaman hayati, dan, pada tahun 2030, melindungi dan mencegah lenyapnya spesies yang terancam punah",
      indikator: "15.5.1 Indeks daftar merah (Red-list index)",
      satuan: "Jenis",
      nilai: {
        2023: { target: "25", capaian: "0.00", persentase: "0.00%" },
        2024: { target: "25", capaian: "0", persentase: "0.00%" },
        2025: { target: "25", capaian: "1", persentase: "4.00%" },
        "2026": { target: "25", capaian: "1", persentase: "4.00%" },
      },
      grafik: {
        tipe: "plain",
        domain: [0, 0.05],
        data: [
          { tahun: "2023", capaian: 0 },
          { tahun: "2024", capaian: 0 },
          { tahun: "2025", capaian: 0.04 },
          { tahun: "2026", capaian: 0.04 },
        ],
      },
    },
    {
      targetSdg: "15.9 Pada tahun 2030, mengintegrasikan nilai-nilai ekosistem dan keanekaragaman hayati ke dalam perencanaan pembangunan nasional dan lokal, proses pengurangan kemiskinan, dan strategi pembangunan",
      indikator: "15.9.1 Jumlah negara yang menetapkan target yang jelas tentang integrasi nilai keanekaragaman hayati ke dalam kebijakan nasional dan perencanaan pembangunan",
      satuan: "Indeks (H')",
      nilai: {
        2023: { target: "0.40", capaian: "2.73", persentase: "681.91%" },
        2024: { target: "0.42", capaian: "2.91", persentase: "692.98%" },
        2025: { target: "0.44", capaian: "3.58", persentase: "813.48%" },
        "2026": { target: "0.47", capaian: "5.29", persentase: "1126.53%" },
      },
      grafik: {
        tipe: "fixed2",
        domain: [6, 12],
        data: [
          { tahun: "2023", capaian: 6.819057527 },
          { tahun: "2024", capaian: 6.92983375 },
          { tahun: "2025", capaian: 8.134755569 },
          { tahun: "2026", capaian: 11.26526073 },
        ],
      },
    },
  ],
  jumlahProgram: { 2023: 3, 2024: 3, 2025: 5, "2026": 6 },
  catatan: "Kolom 2023 dipertahankan dari website lama (tidak ada di Excel). 2026 = data Januari-Juni 2026.",
};

export default rekapSdgData;
