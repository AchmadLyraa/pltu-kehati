// data/kehati/dataFaunaFlora.js
const TAHUN = [2021,2022,2023,2024,2025,2026];
const totalPerTahun = (species) =>
  TAHUN.map((tahun) => ({
    tahun,
    jumlah: species.reduce((s, sp) => s + (sp.data[tahun] || 0), 0),
  }));

const floraSpecies = [
  {
    nama: "Bakau",
    data: { 2021: 500, 2022: 1250, 2023: 2560, 2024: 3740, 2025: 8740, 2026: 15480 },
  },
  {
    nama: "Lacang",
    data: { 2021: 230, 2022: 300, 2023: 420, 2024: 510, 2025: 3510, 2026: 3510 },
  },
  {
    nama: "Palem Ekor Tupai",
    data: { 2021: 75, 2022: 75, 2023: 75, 2024: 75, 2025: 75, 2026: 75 },
  },
  {
    nama: "Palem Sadeng",
    data: { 2021: 50, 2022: 50, 2023: 50, 2024: 50, 2025: 50, 2026: 50 },
  },
  {
    nama: "Ketapang Kencana",
    data: { 2021: 20, 2022: 20, 2023: 21, 2024: 21, 2025: 27, 2026: 27 },
  },
  {
    nama: "Trembesi",
    data: { 2021: 10, 2022: 10, 2023: 10, 2024: 10, 2025: 10, 2026: 10 },
  },
  {
    nama: "Spatodea",
    data: { 2021: 10, 2022: 10, 2023: 10, 2024: 10, 2025: 10, 2026: 10 },
  },
  {
    nama: "Palem Sikas",
    data: { 2021: 6, 2022: 6, 2023: 6, 2024: 6, 2025: 6, 2026: 6 },
  },
  {
    nama: "Palem Merah",
    data: { 2021: 5, 2022: 5, 2023: 5, 2024: 5, 2025: 12, 2026: 12 },
  },
  {
    nama: "Pandan Bali",
    data: { 2021: 4, 2022: 4, 2023: 4, 2024: 4, 2025: 4, 2026: 4 },
  },
  {
    nama: "Cemara Udang",
    data: { 2021: 2, 2022: 2, 2023: 2, 2024: 2, 2025: 2, 2026: 2 },
  },
  {
    nama: "Pucuk Merah",
    data: { 2021: 0, 2022: 1, 2023: 11, 2024: 27, 2025: 50, 2026: 67 },
  },
  {
    nama: "Palem",
    data: { 2021: 0, 2022: 1, 2023: 1, 2024: 48, 2025: 175, 2026: 213 },
  },
  {
    nama: "Lamtoro",
    data: { 2021: 0, 2022: 800, 2023: 800, 2024: 1100, 2025: 1225, 2026: 1225 },
  },
  {
    nama: "Gamal",
    data: { 2021: 0, 2022: 80, 2023: 80, 2024: 101, 2025: 101, 2026: 111 },
  },
  {
    nama: "Kaliandra",
    data: { 2021: 0, 2022: 150, 2023: 150, 2024: 150, 2025: 168, 2026: 168 },
  },
  {
    nama: "Asoka",
    data: { 2021: 0, 2022: 0, 2023: 300, 2024: 450, 2025: 527, 2026: 549 },
  },
  {
    nama: "Rambusa",
    data: { 2021: 0, 2022: 0, 2023: 155, 2024: 155, 2025: 155, 2026: 168 },
  },
  {
    nama: "Tabebuya",
    data: { 2021: 0, 2022: 0, 2023: 8, 2024: 26, 2025: 54, 2026: 54 },
  },
  {
    nama: "Kelapa",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 24, 2026: 24 },
  },
  {
    nama: "Bintaro",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 20, 2026: 20 },
  },
  {
    nama: "Palem Kipas",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 5, 2026: 9 },
  },
  {
    nama: "Palem Putri",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 5, 2026: 13 },
  },
  {
    nama: "Cemara Lilin",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 3, 2026: 3 },
  },
  {
    nama: "Walisongo",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 3, 2026: 3 },
  },
  {
    nama: "Anggrek Hitam",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 20, 2026: 20 },
  },
];

const faunaSpecies = [
  {
    nama: "Tupai Indochina",
    data: { 2021: 0, 2022: 0, 2023: 5, 2024: 5, 2025: 5, 2026: 5 },
  },
  {
    nama: "Biawak",
    data: { 2021: 0, 2022: 0, 2023: 5, 2024: 5, 2025: 5, 2026: 5 },
  },
  {
    nama: "Cucak Kutilang",
    data: { 2021: 0, 2022: 0, 2023: 15, 2024: 15, 2025: 15, 2026: 5 },
  },
  {
    nama: "Kadal Mangrove",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 2, 2026: 3 },
  },
  {
    nama: "Capung Biru Rawa",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 2, 2026: 2 },
  },
  {
    nama: "Ikan Tembakul",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 0, 2026: 6 },
  },
  {
    nama: "Perenjak Jawa",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 0, 2026: 5 },
  },
  {
    nama: "Kipasan Belang",
    data: { 2021: 0, 2022: 0, 2023: 0, 2024: 0, 2025: 0, 2026: 9 },
  },
];

const dataFaunaFlora = {
  kawasanKonservasi: [
  { tahun: 2021, luas: 6.77 },
  { tahun: 2022, luas: 6.77 },
  { tahun: 2023, luas: 12.05 },
  { tahun: 2024, luas: 12.05 },
  { tahun: 2025, luas: 12.05 },
  { tahun: 2026, luas: 12.05 },
],
  flora: { satuan: "Pohon", species: floraSpecies, total: totalPerTahun(floraSpecies) },
  fauna: { satuan: "Ekor", species: faunaSpecies, total: totalPerTahun(faunaSpecies) },
};

export default dataFaunaFlora;
