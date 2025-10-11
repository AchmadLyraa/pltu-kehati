// app/(tabs)/penanaman/page.tsx
"use client";
import { useState } from "react";
import HidrotonAnggrekData from "@/data/HidrotonAnggrekData";
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
    src: "/program-kehati/hidroton-anggrek-1.png",
    alt: "Dokumentasi kegiatan penanaman pohon",
    description: "Kegiatan penanaman pohon oleh tim",
  },
  {
    id: 2,
    title: "Pemeliharaan Tanaman",
    src: "/program-kehati/hidroton-anggrek-2.png",
    alt: "Kegiatan pemeliharaan tanaman",
    description: "Aktivitas perawatan dan pemeliharaan pohon",
  },
  {
    id: 3,
    title: "Monitoring Pertumbuhan",
    src: "/program-kehati/hidroton-anggrek-3.png",
    alt: "Monitoring pertumbuhan pohon",
    description: "Kegiatan monitoring perkembangan tanaman",
  },
  {
    id: 4,
    title: "Monitoring Pertumbuhan",
    src: "/program-kehati/hidroton-anggrek-4.png",
    alt: "Monitoring pertumbuhan pohon",
    description: "Kegiatan monitoring perkembangan tanaman",
  },
  {
    id: 5,
    title: "Monitoring Pertumbuhan",
    src: "/program-kehati/hidroton-anggrek-5.png",
    alt: "Monitoring pertumbuhan pohon",
    description: "Kegiatan monitoring perkembangan tanaman",
  },
];

export default function PenanamanPage() {
  const [selectedYear, setSelectedYear] = useState("2021");
  const years = Object.keys(HidrotonAnggrekData);

  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      {/* Deskripsi Program */}
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">
            Deskripsi Program
          </h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            PT PLN Nusantara Power UP Kaltim Teluk mengembangkan sebuah inovasi
            pelestarian keanekaragaman hayati (KEHATI) melalui budidaya anggrek
            hitam (Coelogyne pandurata) dengan media tanam bi-hidroton berbasis
            limbah ramah lingkungan. Media tanam Bio-hidroton ini adalah
            campuran dibentuk dalam bulatan dengan campuran komponen, yakni
            kompos limbah FABA (Fly Ash Bottom Ash), penambahan vitamin anggrek,
            dan perekat. Bio-hidroton memiliki keunggulan dalam menjaga
            kelembapan dan meningkatkan aerasi udara dengan sifatnya yang
            memiliki banyak pori, komponen kompos FABA di dalamnya memberikan
            tambahan unsur hara yang mendukung pertumbuhan tanaman secara
            optimal, vitamin yang ditambahkan di dalam berfungsi untuk
            merangsang penyerapan nutrisi oleh akar dan membantu
            pembelahan/pertumbuhan sel. Inovasi ini tidak hanya berkontribusi
            terhadap pelestarian flora endemik Kalimantan yang terancam punah,
            tetapi juga menjadi wujud nyata penerapan prinsip ekonomi sirkular
            di lingkungan kerja melalui pemanfaatan limbah industri menjadi
            produk bermanfaat. Langkah ini mencerminkan komitmen PLN dalam
            menjaga lingkungan sekaligus memperkuat peran perusahaan dalam
            konservasi keanekaragaman hayati lokal.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">
            Metode Perhitungan Absolut
          </h3>
          <div className="text-sm text-green-700 space-y-2">
            <p>
              Perhitungan absolut merupakan ak-umulatif jumlah tanaman Anggrek
              Hitam yang berhasil dikonservasi. Dalam program ini tidak dihitung
              Indeks Keanekaragaman Hayati (H', dikarenakan hanya satu spesies
              (Anggrek Hitam) yang dikonservasi.
            </p>
            <div className="bg-white p-3 rounded border font-mono text-center">
              <strong>
                Pehitungan absolut tahun ke N = jumlah Anggrek Hitam yang
                berhasil dikonservasi
              </strong>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
              <p className="font-medium text-yellow-800">
                Absolut tahun 2025 = 20 pohon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs untuk Data */}
      <Tabs defaultValue="2025" onValueChange={setSelectedYear}>
        <TabsList className="grid grid-cols-1 gap-2 mb-4">
          {years.map((year) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {years.map((year) => {
          const { species, totalSpesies, totalIndividu } =
            HidrotonAnggrekData[year];
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
                        Jumlah Individu yang berhasil dikonservasi pada 2025*
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
                          {row.jumlahIndividuBerhasilDikonservasi}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-semibold bg-blue-50 border-t-2 border-blue-200">
                      <td
                        colSpan={3}
                        className="border border-gray-300 px-3 py-2 text-blue-800"
                      >
                        Total
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-right font-mono text-blue-800">
                        {totalIndividu}
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
