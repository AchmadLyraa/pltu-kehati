import { readFileSync, writeFileSync } from "node:fs";

const SUMBER = process.argv[2] ?? "data/sumber/kehati-2026.json";
const OUT = "data/kehati";
const j = JSON.parse(readFileSync(SUMBER, "utf8"));

// ---------- util ----------
const tahun = (t) => Number(String(t).replace("*", "")); // "2026*" -> 2026
const r3 = (n) => Math.round(n * 1000) / 1000;
const judul = (s) =>
  s.trim().split(/\s+/).map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");
const ilmiah = (s) =>
  s.trim().split(/\s+/).map((w, i) => (i === 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w.toLowerCase())).join(" ");

function hitungShannon(items) {
  const total = items.reduce((s, x) => s + x.jumlah, 0);
  let h = 0;
  const species = items.map((x, i) => {
    const pi = x.jumlah / total;
    const lnPi = Math.log(pi);
    h -= pi * lnPi;
    return {
      no: i + 1,
      namaLokal: x.namaLokal,
      namaIlmiah: x.namaIlmiah,
      jumlah: x.jumlah,
      pi: r3(pi),
      lnPi: r3(lnPi),
      piLnPi: r3(pi * lnPi),
    };
  });
  return { species, akumulasiSpesies: total, indeksH: r3(h) };
}

const kunci = (k) => (/^\d+$/.test(k) || /^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k));
function ser(v, ind = 0) {
  const pad = "  ".repeat(ind);
  const pad1 = "  ".repeat(ind + 1);
  if (Array.isArray(v)) {
    return v.length ? `[\n${v.map((x) => pad1 + ser(x, ind + 1)).join(",\n")},\n${pad}]` : "[]";
  }
  if (v && typeof v === "object") {
    const e = Object.entries(v);
    if (!e.length) return "{}";
    if (e.every(([, x]) => typeof x === "number")) {
      return `{ ${e.map(([k, x]) => `${kunci(k)}: ${x}`).join(", ")} }`;
    }
    return `{\n${e.map(([k, x]) => `${pad1}${kunci(k)}: ${ser(x, ind + 1)}`).join(",\n")},\n${pad}}`;
  }
  return JSON.stringify(v);
}

const tulisObjek = (file, nama, obj) => {
  writeFileSync(`${OUT}/${file}`, `// ${OUT}/${file}\nconst ${nama} = ${ser(obj)};\n\nexport default ${nama};\n`);
  console.log("ditulis:", `${OUT}/${file}`);
};

// ---------- PROGRAM (tab PROGRAM) ----------
const prog = (id) => j.program_detail.find((p) => p.id === id);

function perTahun(id) {
  const out = {};
  for (const e of prog(id).perhitungan_h_prime) {
    const t = tahun(e.tahun);
    out[t] ??= {};
    const hasil = hitungShannon(
      e.spesies.map((s) => ({ namaLokal: s.nama_lokal, namaIlmiah: ilmiah(s.nama_ilmiah), jumlah: s.jumlah }))
    );
    if (e.kelompok === "fauna") out[t].fauna = hasil;
    else Object.assign(out[t], hasil);
  }
  // tahun yang hanya punya fauna: flora ikut tahun sebelumnya (sesuai sheet Absolut)
  const urut = Object.keys(out).map(Number).sort((a, b) => a - b);
  for (const t of urut) {
    if (!out[t].species) {
      const sebelum = urut.filter((x) => x < t && out[x].species).pop();
      if (sebelum) {
        out[t] = { ...out[sebelum], fauna: out[t].fauna };
        console.log(`  program ${id}: flora ${t} disalin dari ${sebelum}`);
      }
    }
  }
  return out;
}

tulisObjek("penanamanData.js", "penanamanData", perTahun(1));
tulisObjek("mangroveData.js", "mangroveData", perTahun(2));
tulisObjek("pohonBiomassaData.js", "pohonBiomassaData", perTahun(3));
tulisObjek("mangroveKariangauData.js", "mangroveKariangauData", perTahun(5));

const hid = prog(4).tabel_absolut[0];
const hidData = {};
for (const [t, n] of Object.entries(hid.jumlah_individu_pohon)) {
  hidData[tahun(t)] = {
    species: [
      { no: 1, namaLokal: hid.nama_lokal, namaIlmiah: ilmiah(hid.nama_ilmiah), jumlahIndividuBerhasilDikonservasi: n },
    ],
    totalSpesies: 1,
    totalIndividu: n,
  };
}
tulisObjek("HidrotonAnggrekData.js", "HidrotonAnggrekData", hidData);

// ---------- ABSOLUT (tab ABSOLUT) ----------
const absolut = [...j.absolut.program]
  .sort((a, b) => a.no_di_tabel_absolut - b.no_di_tabel_absolut)
  .map((p) => {
    const species = p.flora.map((f) => {
      const data = {};
      for (const [t, v] of Object.entries(f.absolut)) if (v != null) data[tahun(t)] = v;
      return { nama: f.nama_lokal, latin: ilmiah(f.nama_latin), satuan: f.satuan, data };
    });
    const total = { flora: {}, indeks: {} };
    const semuaTahun = [...new Set(species.flatMap((s) => Object.keys(s.data)))].sort();
    for (const t of semuaTahun) {
      const n = species.map((s) => s.data[t] ?? 0).filter((v) => v > 0);
      const N = n.reduce((a, b) => a + b, 0);
      total.flora[t] = N;
      if (n.length > 1) total.indeks[t] = r3(-n.reduce((h, v) => h + (v / N) * Math.log(v / N), 0));
    }
    return { program: p.nama.replace(/\s+/g, " ").trim(), species, total };
  });
tulisObjek("kehatiData.js", "kehatiData", absolut);

// ---------- STATUS (tab STATUS) ----------
const KOREKSI = {
  "Ketapang Kencana": { 2025: 27 }, // sheet Penanaman dan Absolut = 27 (Status = 40 salah ketik)
  Gamal: { 2026: 111 }, // Status = 1225 (salin dari Lamtoro); sheet Absolut dan Biomassa = 111
  Kaliandra: { 2026: 168 }, // idem, 168
};
const floraSpecies = j.status.flora.map((f) => {
  const data = {};
  for (const [t, v] of Object.entries(f.jumlah)) data[tahun(t)] = v ?? 0;
  Object.assign(data, KOREKSI[f.nama]);
  return { nama: f.nama, data };
});

// Fauna: data lama dipakai kalau data baru 0; kalau beda dan bukan 0, pakai data baru
const FAUNA_LAMA = {
  "tupai indochina": { 2023: 5, 2024: 5, 2025: 5 },
  biawak: { 2023: 5, 2024: 5, 2025: 5 },
  "cucak kutilang": { 2023: 15, 2024: 15, 2025: 15 },
  "kadal mangrove": { 2025: 2 },
  "capung biru rawa": { 2025: 2 }, // di data lama bernama Brachydiplax Chalybea
};
const TAHUN = [2021, 2022, 2023, 2024, 2025, 2026];
const faunaSpecies = j.status.fauna.map((f) => {
  const nama = judul(f.nama);
  const lama = FAUNA_LAMA[nama.toLowerCase()] ?? {};
  const data = {};
  for (const t of TAHUN) {
    const baru = f.jumlah[t] ?? f.jumlah[`${t}*`] ?? 0;
    data[t] = baru !== 0 ? baru : lama[t] ?? 0;
  }
  return { nama, data };
});

const kawasan = Object.entries(j.status.kawasan_konservasi_ha).map(([t, luas]) => ({ tahun: tahun(t), luas }));

writeFileSync(
  `${OUT}/dataFaunaFlora.js`,
  `// ${OUT}/dataFaunaFlora.js
const TAHUN = ${JSON.stringify(TAHUN)};
const totalPerTahun = (species) =>
  TAHUN.map((tahun) => ({
    tahun,
    jumlah: species.reduce((s, sp) => s + (sp.data[tahun] || 0), 0),
  }));

const floraSpecies = ${ser(floraSpecies)};

const faunaSpecies = ${ser(faunaSpecies)};

const dataFaunaFlora = {
  kawasanKonservasi: ${ser(kawasan)},
  flora: { satuan: "Pohon", species: floraSpecies, total: totalPerTahun(floraSpecies) },
  fauna: { satuan: "Ekor", species: faunaSpecies, total: totalPerTahun(faunaSpecies) },
};

export default dataFaunaFlora;
`
);
console.log("ditulis:", `${OUT}/dataFaunaFlora.js`);

const tot = (sp, t) => sp.reduce((s, x) => s + (x.data[t] || 0), 0);
console.log("total flora:", TAHUN.map((t) => tot(floraSpecies, t)).join(", "));
console.log("total fauna:", TAHUN.map((t) => tot(faunaSpecies, t)).join(", "));
