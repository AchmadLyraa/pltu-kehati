// app/(tabs)/penanaman/page.tsx
"use client";
import { useState } from "react";
import mangroveKariangauData from "@/data/mangroveKariangauData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { AdvancedImageModal } from "@/components/advanced-image-modal";

const skemaSebelumItems = [
  {
    id: 1,
    title: "Area Kosong Sebelum Penanaman",
    src: "/placeholder.jpg",
    alt: "Kondisi area kosong sebelum program",
    description: "Kondisi lahan sebelum dilakukan program penanaman",
  },
  {
    id: 2,
    title: "Layout Rencana Penanaman",
    src: "/placeholder.jpg",
    alt: "Rencana tata letak penanaman",
    description: "Skema perencanaan lokasi penanaman pohon",
  },
];

const skemaSesudahItems = [
  {
    id: 1,
    title: "Area Hijau Setelah Penanaman",
    src: "/placeholder.jpg",
    alt: "Kondisi area setelah program penanaman",
    description: "Kondisi area yang sudah menghijau setelah program",
  },
  {
    id: 2,
    title: "Pemetaan Area Hasil Penanaman",
    src: "/placeholder.jpg",
    alt: "Peta sebaran pohon hasil penanaman",
    description: "Pemetaan lokasi dan jenis pohon yang telah ditanam",
  },
];

const dokumentasiItems = [
  {
    id: 1,
    title: "Kegiatan Penanaman",
    src: "/placeholder.jpg",
    alt: "Dokumentasi kegiatan penanaman pohon",
    description: "Kegiatan penanaman pohon oleh tim",
  },
  {
    id: 2,
    title: "Pemeliharaan Tanaman",
    src: "/placeholder.jpg",
    alt: "Kegiatan pemeliharaan tanaman",
    description: "Aktivitas perawatan dan pemeliharaan pohon",
  },
  {
    id: 3,
    title: "Monitoring Pertumbuhan",
    src: "/placeholder.jpg",
    alt: "Monitoring pertumbuhan pohon",
    description: "Kegiatan monitoring perkembangan tanaman",
  },
];

export default function PenanamanPage() {
  const [selectedYear, setSelectedYear] = useState("2021");
  const years = Object.keys(mangroveKariangauData);

  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      {/* Deskripsi Program */}
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">
            Deskripsi Program
          </h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            Program Penanaman dan Pelestarian Mangrove Kariangau merupakan upaya
            PT PLN NP UP Kaltim Teluk Balikpapan dalam meningkatkan kondisi
            keanekaragaman hayati di area Kariangau bersama stakeholder,
            sekaligus menjadikan edukasi keanekaragaman hayati kepada
            masyarakat. Pada program ini, tentunya perusahaan melakukan
            konservasi dengan penanaman bibit mangrove, perawatan, dan
            monitoring kondisi mangrove. Dalam jangka panjang mangrove di area
            masyarakat Kariangau dapat dikembangkan menjadi area wisata, seperti
            aktivitas dan pengalaman susur sungai, serta berdampak pada
            perhatian dan tidak melupakan tujuan awal, yakni kepedulian,
            perhatian, dan kontribusi nyata kepada masyarakat dalam perlindungan
            keanekaragaman hayati.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">
            Metode Perhitungan Absolut
          </h3>
          <div className="text-sm text-green-700 space-y-2">
            <p>
              Perhitungan absolut merupakan <strong>akumulatif individu</strong>{" "}
              dari berbagai spesies yang dilaksanakan sesuai program. Kemudian,
              dilakukan peritungan{" "}
              <strong>indeks flora keanekaragaman jenis (H')</strong>. Indeks
              keragaman jenis dapat diketahui menggunakan metode Shannon-Wienner
              (Odum, 1996) dengan rumus:
            </p>
            <div className="bg-white p-3 rounded border font-mono text-center">
              H' = -∑ Pi Ln (Pi), dimana Pi = (ni/N)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="font-medium">Keterangan:</p>
                <ul className="text-xs space-y-1 mt-1">
                  <li>H' = Indeks keanekaragaman Shannon-Wienner</li>
                  <li>ni = Jumlah individu jenis ke-i</li>
                  <li>N = Jumlah individu seluruh jenis</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">
                  Kriteria nilai indeks keanekaragaman Shannon-Wiener (H'):
                </p>
                <ul className="text-xs space-y-1 mt-1">
                  <li>H' ≤ 1 = keanekaragaman rendah</li>
                  <li>1 &lt; H' &lt; 3 = keanekaragaman sedang</li>
                  <li>H' ≥ 3 = keanekaragaman tinggi</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
              <p className="font-medium text-yellow-800">
                Contoh perhitungan absolut pada tahun 2025 sebagai berikut:
              </p>
              <ul className="text-xs mt-1 space-y-1 text-yellow-700">
                <li>
                  1) Total individu pada tahun 2025 →{" "}
                  <strong>8000 pohon</strong>
                </li>
                <li>
                  2) Perhitungan{" "}
                  <strong>indeks flora keanekaragaman hayati (H')</strong> tahun
                  2025:
                </li>
                <li>
                  - Contoh spesies <em>Rhizspora sp</em> (Bakau) di tahun 2025 →{" "}
                  <strong>5000 Individu</strong>
                </li>
                <li>
                  - Total individu flora di tahun 2024 →{" "}
                  <strong>8000 Individu</strong>
                </li>
              </ul>
              <div className="mt-2 font-mono text-center text-xs bg-white p-2 rounded">
                maka :
              </div>
              <div className="mt-2 font-mono text-center text-xs bg-white p-2 rounded">
                <em>pi</em> = jumlah individu suatu spesies/jumlah total seluruh
                spesies
              </div>
              <div className="mt-2 text-xs text-yellow-700 space-y-1">
                <p>
                  - Kemudian dilakukan perhitungan <em>h' (Pi x ln pi)</em> pada
                  setiap spesies dan mengakumulasi nilai{" "}
                  <em>h' (Pi x ln pi)</em> dari masing-masing spesies
                </p>
                <p>
                  Sehingga <strong>indeks keanekaragaman hayati</strong> tahun
                  2024 berdasarkan <em>Shannon-Wiener</em> adalah:
                </p>
                <p>
                  <strong>→</strong> indeks keanekaragaman hayati fauna tahun
                  2024 adalah <strong>0,622</strong> dengan{" "}
                  <strong>keanekaragaman rendah</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs untuk Data */}
      <Tabs defaultValue="2025" onValueChange={setSelectedYear}>
        <TabsList className="grid grid-cols-5 gap-2 mb-4">
          {years.map((year) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {years.map((year) => {
          const { species, akumulasiSpesies, indeksH } =
            mangroveKariangauData[year];
          return (
            <TabsContent key={year} value={year}>
              <div className="rounded-md border overflow-auto max-h-[600px]">
                <table className="w-full border-collapse text-sm bg-white">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-gray-100 text-left">
                      <th className="border border-gray-300 px-3 py-2 font-medium">
                        No
                      </th>
                      <th className="border border-gray-300 px-3 py-2 font-medium">
                        Nama Lokal
                      </th>
                      <th className="border border-gray-300 px-3 py-2 font-medium">
                        Nama Ilmiah
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">
                        Jumlah
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">
                        Pi
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">
                        Ln Pi
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-right font-medium">
                        Pi Ln Pi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {species.map((row) => (
                      <tr
                        key={row.no}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="border border-gray-300 px-3 py-2 text-center">
                          {row.no}
                        </td>
                        <td className="border border-gray-300 px-3 py-2">
                          {row.namaLokal}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 italic text-gray-700">
                          {row.namaIlmiah}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-right font-mono">
                          {row.jumlah}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-right font-mono">
                          {row.pi.toFixed(3)}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-right font-mono">
                          {row.lnPi.toFixed(3)}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-right font-mono">
                          {row.piLnPi.toFixed(3)}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-semibold bg-blue-50 border-t-2 border-blue-200">
                      <td
                        colSpan={3}
                        className="border border-gray-300 px-3 py-2 text-blue-800"
                      >
                        Akumulasi Spesies
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right font-mono text-blue-800">
                        {akumulasiSpesies}
                      </td>
                      <td
                        colSpan={3}
                        className="border border-gray-300 px-3 py-2 text-right font-mono text-blue-800"
                      >
                        Indeks H′ = {indeksH}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
      {/* Gallery Sections */}
      <div className="mt-8 space-y-8">
        {/* Section 1: Skema Sebelum Program */}
        <div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-red-800 mb-2">
              1. Skema Sebelum Program
            </h3>
            <p className="text-sm text-red-700 leading-relaxed">
              Kondisi area konsesi sebelum dilakukan program penanaman dan
              penghijauan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skemaSebelumItems.map((item) => (
              <AdvancedImageModal
                key={item.id}
                images={skemaSebelumItems}
                trigger={
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <div className="mt-2">
                      <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Section 2: Skema Sesudah Program */}
        <div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-green-800 mb-2">
              2. Skema Sesudah Program
            </h3>
            <p className="text-sm text-green-700 leading-relaxed">
              Kondisi area konsesi setelah dilakukan program penanaman dan
              penghijauan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skemaSesudahItems.map((item) => (
              <AdvancedImageModal
                key={item.id}
                images={skemaSesudahItems}
                trigger={
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <div className="mt-2">
                      <h4 className="font-medium text-sm text-gray-900 group-hover:text-green-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>

        {/* Section 3: Dokumentasi */}
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">3. Dokumentasi</h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              Dokumentasi kegiatan pelaksanaan program penanaman dan
              penghijauan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dokumentasiItems.map((item) => (
              <AdvancedImageModal
                key={item.id}
                images={dokumentasiItems}
                trigger={
                  <div className="cursor-pointer group">
                    <div className="relative overflow-hidden rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <div className="mt-2">
                      <h4 className="font-medium text-sm text-gray-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
