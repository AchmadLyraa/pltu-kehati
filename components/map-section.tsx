"use client";

import { useState } from "react";
import { AdvancedImageModal } from "@/components/advanced-image-modal";

export function MapSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mapImages = [
    {
      id: 1,
      src: "/detailed-topographic-map-of-cirata-area-with-river.jpg",
      alt: "Peta Kawasan PLN Cirata",
      title: "Peta Kawasan PLN Cirata",
      description: "Peta topografi detail kawasan PLN Cirata dengan sungai",
    },
    {
      id: 2,
      src: "/land-classification-map-with-legend-showing-differ.jpg",
      alt: "Peta Klasifikasi Tutupan Lahan",
      title: "Peta Klasifikasi Tutupan Lahan",
      description:
        "Peta klasifikasi dengan legenda menunjukkan berbagai jenis tutupan lahan",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {mapImages.map((image, index) => (
          <AdvancedImageModal
            key={image.id}
            images={[image]}
            initialIndex={0}
            showNavigation={false}
            showThumbnails={false}
            trigger={
              <div className="space-y-4">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                />
              </div>
            }
          />
        ))}
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          Tutupan lahan di areal hutan HTR dapat dideskripsikan sebagai berikut:
          (i) tutupan vegetasi yang terdiri dari hutan lahan kering sekunder,
          kebun campuran, perkebunan, lahan terbuka, pertanian lahan kering,
          pertanian lahan kering campur semak, belukar rawa, dan badan air; (ii)
          tutupan non-vegetasi yang terdiri dari pemukiman, jalan, dan bangunan
          lainnya. Hasil monitoring flora tahun 2024 ditemukan bahwa
          keanekaragaman di hutan HTR sebanyak 30 jenis Arthropoda. Berdasarkan
          dominansi jumlah jenis dari total populasi yang ditemukan tahun 2024,
          diperoleh hasil persentase jenis sebanyak 13 jenis Mamalia, 75 jenis
          Arthropoda, 31 jenis Herpetofauna dan 79 jenis Arthropoda. Berdasarkan
          hasil monitoring keanekaragaman jenis yang ditemukan pada tahun 2024
          terdapat beberapa jenis yang ditemukan pada tahun 2024 termasuk
          menurut Daftar tersebut jenis yang ditemukan, burung, herpetofauna dan
          mamalia sebanyak 198 jenis yang ditemukan dengan hasil sebagaimana
          tabel dibawah dengan hasil signifikan bila dibandingkan dengan hasil
          tahun lalu.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Berdasarkan hasil monitoring keanekaragaman hayati tahun 2024 di
          kawasan HTR Desa Cipeusing, ditemukan berbagai jenis flora dan fauna
          yang menunjukkan kekayaan biodiversitas kawasan tersebut. Monitoring
          ini penting untuk memantau kondisi ekosistem dan memastikan
          kelestarian keanekaragaman hayati di kawasan tersebut. Data yang
          diperoleh akan digunakan untuk penyusunan strategi konservasi yang
          tepat dan berkelanjutan.
        </p>
      </div>
    </section>
  );
}
