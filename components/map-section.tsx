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
          Berdasarkan data pengataman menunjukan bahwa terdapat variasi nilai
          struktur dan komposisi vegetasi pada masing-masing lokasi monitoring.
          Dalam lokasi PR merupakan kawasan perkantoran yang keanekaragaman
          jenis pohonnya merupakan jenis vegetasi yang ditanam dan terdapat pula
          jenis vegetasi pohon yang tumbuh alami di kawasan perkantoran
          tersebut. Lokasi HPHS menunjukan nilai kerapatan tertinggi sebesar 167
          pohon/ha dan nilai basal area sebesar 8,68 m²/ha menandakan kondisi
          hutan yang padat dan produktif dibandingkan dengan lokasi monitoring
          vegetasi lainnya. Pada lokasi FB-HS juga menunjukan kondisi tegakan
          yang baik dengan jumlah kerapatan pohon sebesar 125 pohon/ha dan nilai
          basal area 8,16 m²/ha. Sebaliknya lokasi monitoring AKBLK dan OP-HS
          memiliki kerapatan dan basal area yang lebih rendah, masingmasing 63
          dan 88 pohon/ha yang menunjukan kondisi hutan yang sedang hingga
          rendah. Secara umum tegakan pohon yang tumbuh mendominasi di kawasan
          PLN NP yaitu jenis Acacia auriculiformis, Acacia mangium dan jenis
          Macaranga hypoleuca.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Jumlah jenis fauna yang dijumpai di area monitoring sebanyak 8 jenis
          Mamalia, 50 jenis Burung, 15 jenis Herpetofauna dan 13 jenis Insekta.
          Berdasarkan data hasil pengamatan fauna menunjukkan kehadiran mamalia,
          avifauna, herpetofauna, dan insekta beragam di masing-masing fokus
          lokasi bergitu juga dengan indeks keanekaragaman jenis yang diperoleh.
          Terkait pemantauan biota air di 4 lokasi jeety, yakni Jetty Temporary
          Utara (JTU), Selatan (JTS), Barat (JTB), dan Timur (JTT) ditemukan
          monitoring sebanyak 25 jenis nekton, dengan indeks keanekaragaman,
          kemerataan, dan kekayaan yang beragam di masing-masing lokasinya
        </p>
      </div>
    </section>
  );
}
