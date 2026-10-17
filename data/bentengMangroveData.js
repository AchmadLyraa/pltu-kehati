// AUTO-GENERATED oleh scripts/kehati/generate_kehati_data.py
// Sumber: UPKT_2026_Pelaporan_KEHATI_15_10_26.xlsx (2026* = data Januari-Juni 2026)
// Jangan edit manual; ubah Excel/JSON lalu jalankan ulang generator.

const bentengMangroveData = {
  "2026": {
    species: [
      {
        no: 1,
        namaLokal: "Bakau",
        namaIlmiah: "Rhizophora sp",
        jumlah: 3740,
        pi: 1,
        lnPi: 0,
        piLnPi: 0,
      },
    ],
    akumulasiSpesies: 3740,
    indeksH: 0,
    fauna: {
      species: [
        {
          no: 1,
          namaLokal: "Biawak",
          namaIlmiah: "Varanus Salvator",
          jumlah: 1,
          pi: 0.053,
          lnPi: -2.944,
          piLnPi: -0.155,
        },
        {
          no: 2,
          namaLokal: "Kadal Mangrove",
          namaIlmiah: "Emoia Atrocostata",
          jumlah: 1,
          pi: 0.053,
          lnPi: -2.944,
          piLnPi: -0.155,
        },
        {
          no: 3,
          namaLokal: "Cucak Kutilang",
          namaIlmiah: "Pycnonotus Aurigaster",
          jumlah: 1,
          pi: 0.053,
          lnPi: -2.944,
          piLnPi: -0.155,
        },
        {
          no: 4,
          namaLokal: "Ikan Tembakul",
          namaIlmiah: "Periophthalmus sp",
          jumlah: 2,
          pi: 0.105,
          lnPi: -2.251,
          piLnPi: -0.237,
        },
        {
          no: 5,
          namaLokal: "Perenjak Jawa",
          namaIlmiah: "Prinia familiaris",
          jumlah: 5,
          pi: 0.263,
          lnPi: -1.335,
          piLnPi: -0.351,
        },
        {
          no: 6,
          namaLokal: "Kipasan Belang",
          namaIlmiah: "Rhipidura javanica",
          jumlah: 9,
          pi: 0.474,
          lnPi: -0.747,
          piLnPi: -0.354,
        },
      ],
      akumulasiSpesies: 19,
      indeksH: 0.702,
    },
  },
};


export const deskripsiProgram = ["Kegiatan penanaman mangrove dengan penahan ombak berbahan limbah FABA (Fly Ash and Bottom Ash) merupakan salah satu upaya rehabilitasi ekosistem pesisir yang mengintegrasikan pemanfaatan limbah hasil pembakaran batu bara dengan perlindungan tanaman mangrove. Inovasi ini dirancang untuk meningkatkan keberhasilan pertumbuhan mangrove pada area pesisir yang memiliki tingkat gelombang dan energi arus yang relatif tinggi. Penahan ombak dibuat dengan memanfaatkan material FABA yang dicetak melalui proses pengecoran menjadi elemen berbentuk silinder menyerupai paralon. Penahan tersebut memiliki ketinggian ±60 cm dan ketebalan ±5 cm. Bentuk silinder dipilih agar struktur dapat berfungsi sebagai penghalang energi gelombang sekaligus tetap memberikan ruang bagi proses sedimentasi dan perkembangan sistem perakaran mangrove. Penahan ombak ditempatkan pada area sekitar lokasi penanaman dengan memperhatikan pola gelombang, arah arus, kondisi substrat, serta jarak tanam mangrove. Struktur ini tidak dimaksudkan untuk membentuk penghalang yang kedap atau menutup seluruh area perairan, tetapi berfungsi sebagai pemecah dan peredam energi gelombang sehingga tekanan langsung terhadap bibit mangrove dapat dikurangi.", "Penggunaan FABA sebagai material penahan ombak juga merupakan bagian dari pendekatan circular economy, yaitu mengoptimalkan material sisa hasil kegiatan pembangkitan untuk menghasilkan produk yang memiliki fungsi perlindungan lingkungan. Dengan demikian, kegiatan tidak hanya berorientasi pada pengurangan dampak gelombang terhadap bibit mangrove, tetapi juga mendorong pemanfaatan material FABA secara lebih bernilai guna. Salah satu aspek penting dalam desain penahan ombak ini adalah tidak menghambat perkembangan akar mangrove dalam jangka panjang. Struktur dibuat dengan konfigurasi yang tidak membentuk penghalang permanen di sekitar zona perakaran, sehingga akar mangrove tetap memiliki ruang untuk tumbuh, menyebar, dan berkembang mengikuti kondisi substrat. Seiring pertumbuhan tanaman dan terbentuknya sistem perakaran yang lebih kuat, struktur penahan ombak diharapkan dapat berfungsi sebagai perlindungan awal pada fase pertumbuhan mangrove tanpa mengganggu akses dan perkembangan akar pada tahap selanjutnya. Secara ekologis, keberadaan penahan ombak diharapkan dapat membantu menciptakan kondisi perairan yang lebih tenang di sekitar area penanaman, mengurangi erosi dan penggerusan substrat, serta meningkatkan peluang terjadinya akumulasi sedimen. Kondisi tersebut mendukung pembentukan media tumbuh yang lebih stabil bagi mangrove dan meningkatkan tingkat keberhasilan rehabilitasi ekosistem pesisir. Dengan konsep tersebut, kegiatan Penanaman Mangrove dengan Penahan Ombak Berbahan FABA diharapkan menjadi inovasi pengelolaan lingkungan yang menggabungkan tiga aspek utama, yaitu rehabilitasi ekosistem pesisir, perlindungan kawasan pantai, dan pemanfaatan limbah FABA, dengan tetap mempertimbangkan keberlanjutan pertumbuhan mangrove dan fungsi ekologis kawasan pesisir."];

export const metodePerhitungan = ["Perhitungan absolut merupakan akumulatif individu dari berbagai spesies yang dilaksanakan sesuai program. Kemudian, dilakukan peritungan indeks fauna keanekaragaman jenis (H'). Indeks keragaman jenis dapat diketahui menggunakan metode Shannon-Wienner (Odum, 1996) dengan rumus:", "H'  = - ∑ Pi Ln (Pi), dimana Pi = (ni/N)", "Keterangan:", "H'  = Indeks keanekaragaman Shannon-Wienner", "ni  = Jumlah individu jenis ke-i", "N  = Jumlah individu seluruh jenis", "Kriteria nilai indeks keanekaragaman Shannon-Wiener (H')", "H' ≤ 1  = keanekaragaman rendah", "1 < H' < 3  = keanekaragaman sedang", "H' ≥ 3  = keanekaragaman tinggi", "Contoh perhitungan absolut pada tahun 2025 sebagai berikut:", "1) Total individu pada tahun 2026 → 19 ekor", "2) Perhitungan indeks fauna keanekaragaman hayati (H') tahun 2025:", "- Contoh spesies Perenjak Jawa (Prinia familiaris )di tahun 2025 → 5 Individu", "- Total individu fauna di tahun 2025 → 19 individu", "maka :", "pi = jumlah individu suatu spesies/jumlah total seluruh spesies", "- Kemudian dilakukan perhitungan h' (Pi x ln pi) pada setiap spesies dan mengakumulasi nilai h' (Pi x ln pi) dari masing-masing spesies", "Sehingga indeks keanekaragaman hayati tahun 2025 berdasarkan Shannon-Wiener adalah:", "→ indeks keanekaragaman hayati fauna tahun 2025 adalah 0,702 dengan keanekaragaman rendah"];

export default bentengMangroveData;
