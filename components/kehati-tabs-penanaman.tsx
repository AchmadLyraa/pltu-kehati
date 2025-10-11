// app/(tabs)/penanaman/page.tsx
"use client";
import { useState } from "react";
import penanamanData from "@/data/penanamanData";
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
    src: "/program-tabs-penanaman-1.png",
    alt: "Dokumentasi kegiatan penanaman pohon",
    description: "Kegiatan penanaman pohon oleh tim",
  },
  {
    id: 2,
    title: "Pemeliharaan Tanaman",
    src: "/program-tabs-penanaman-2.png",
    alt: "Kegiatan pemeliharaan tanaman",
    description: "Aktivitas perawatan dan pemeliharaan pohon",
  },
  {
    id: 3,
    title: "Monitoring Pertumbuhan",
    src: "/program-tabs-penanaman-3.png",
    alt: "Monitoring pertumbuhan pohon",
    description: "Kegiatan monitoring perkembangan tanaman",
  },
];

export default function PenanamanPage() {
  const [selectedYear, setSelectedYear] = useState("2021");
  const years = Object.keys(penanamanData);

  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      {/* Deskripsi Program */}
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">
            Deskripsi Program
          </h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            Area konsesi PT PLN NP UP Kaltim Teluk Balikpapan dikelola dengan
            menyediakan ruang terbuka hijau yang cukup sebagai upaya
            pengembangan berkelanjutan sehingga diharapkan memberikan kontribusi
            ekosistem yang baik. Program penghijauan dan penanaman pohon di
            kawasan ini adalah bentuk komitmen perusahaan untuk menjaga
            kelestarian lingkungan. Sebagai upaya pelaksanaan perawatan,
            monitoring, dan upaya evaluasi dalam pengadaan dan penanaman flora
            serta area prioritas di lingkungan area perusahaan. Hal tersebut
            dilakukan agar dapat mencapai sasaran berupa peningkatan kualitas
            hayati dan ekosistem di area perusahaan.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">
            Perhitungan Absolut
          </h3>
          <div className="text-sm text-green-700 space-y-2">
            <p>
              Perhitungan indeks menggunakan akumulatif individu dari berbagai
              species yang ditanamkan sesuai program. Kemudian, dilakukan
              perhitungan{" "}
              <strong>indeks flora keanekaragaman jenis (H')</strong>. Indeks
              keragaman jenis dapat diketahui dengan menggunakan metode
              Shannon-Wiener (Odum, 1996) dengan rumus:
            </p>
            <div className="bg-white p-3 rounded border font-mono text-center">
              H' = -∑ Pi Ln (Pi), dimana Pi = (ni/N)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="font-medium">Keterangan:</p>
                <ul className="text-xs space-y-1 mt-1">
                  <li>H' = Indeks keanekaragaman Shannon-Wiener</li>
                  <li>Ni = Jumlah individu jenis ke-i</li>
                  <li>N = Jumlah individu seluruh jenis</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">
                  Kriteria nilai indeks keanekaragaman Shannon-Wiener (H'):
                </p>
                <ul className="text-xs space-y-1 mt-1">
                  <li>H' &lt; 1 = keanekaragaman rendah</li>
                  <li>1 &lt; H' &lt; 3 = keanekaragaman sedang</li>
                  <li>H' &gt; 3 = keanekaragaman tinggi</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
              <p className="font-medium text-yellow-800">
                Contoh perhitungan absolut pada tahun 2025 sebagai berikut:
              </p>
              <ul className="text-xs mt-1 space-y-1 text-yellow-700">
                <li>
                  1) Total individu pada tahun 2025 ={" "}
                  <strong>1217 pohon</strong>
                </li>
                <li>
                  2) Perhitungan{" "}
                  <strong>indeks flora keanekaragaman hayati (H')</strong> tahun
                  2025:
                </li>
                <li>
                  - Contoh species <em>Wodyetia bifurcata</em> (Palem Ekor
                  Tupai) di tahun 2025 = <strong>75 individu</strong>
                </li>
                <li>
                  - Total individu flora di tahun 2024 ={" "}
                  <strong>1217 individu</strong>
                </li>
              </ul>
              <div className="mt-2 font-mono text-center text-xs bg-white p-2 rounded">
                maka: pi = jumlah individu suatu species/jumlah total seluruh
                species
              </div>
              <div className="mt-2 text-xs text-yellow-700 space-y-1">
                <p>
                  - Kemudian dilakukan perhitungan h' <em>(Pi x ln pi)</em> pada
                  setiap species dan mengakumulasi nilai h'{" "}
                  <em>(Pi x ln pi)</em> dari masing-masing species
                </p>
                <p>
                  Sehingga <strong>indeks keanekaragaman hayati</strong> tahun
                  2024 berdasarkan <em>Shannon-Wiener</em> adalah:
                </p>
                <p>
                  → Indeks keanekaragaman hayati fauna tahun 2024 adalah{" "}
                  <strong>1,964</strong> dengan{" "}
                  <strong>keanekaragaman sedang</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs untuk Data */}
      <Tabs defaultValue="2021" onValueChange={setSelectedYear}>
        <TabsList className="grid grid-cols-5 gap-2 mb-4">
          {years.map((year) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {years.map((year) => {
          const { species, akumulasiSpesies, indeksH } = penanamanData[year];
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
        {/*<div>
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
            {skemaSebelumItems.map((item, index) => (
              <AdvancedImageModal
                key={item.id}
                images={skemaSebelumItems}
                initialIndex={index}
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
        </div>*/}

        {/* Section 2: Skema Sesudah Program */}
        {/*<div>
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
            {skemaSesudahItems.map((item, index) => (
              <AdvancedImageModal
                key={item.id}
                images={skemaSesudahItems}
                initialIndex={index}
                trigger={
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 italic mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>*/}

        {/* Section 3: Dokumentasi */}
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">Dokumentasi</h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              Dokumentasi kegiatan pelaksanaan program penanaman dan
              penghijauan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dokumentasiItems.map((item, index) => (
              <AdvancedImageModal
                key={item.id}
                images={dokumentasiItems}
                initialIndex={index}
                trigger={
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 italic mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
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
