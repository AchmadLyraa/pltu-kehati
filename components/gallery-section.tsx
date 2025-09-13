"use client";
import { AdvancedImageModal } from "@/components/advanced-image-modal";

const galleryItems = [
  {
    id: 1,
    title: "Tachygraphus sommaderi",
    src: "/lambor.jpg",
    alt: "Tachygraphus sommaderi",
    description: "Spesies kepiting yang ditemukan di area riparian waduk",
  },
  {
    id: 2,
    title: "Caryanda spuria",
    src: "/caryanda-spuria-spider-species.jpg",
    alt: "Caryanda spuria",
    description: "Laba-laba yang berperan sebagai predator alami",
  },
  {
    id: 3,
    title: "Gyphinopsis brevilobatus",
    src: "/gyphinopsis-brevilobatus-insect-species.jpg",
    alt: "Gyphinopsis brevilobatus",
    description: "Serangga yang berperan dalam proses dekomposisi",
  },
  {
    id: 4,
    title: "Thelyphonus asperatus",
    src: "/thelyphonus-asperatus-whip-scorpion.jpg",
    alt: "Thelyphonus asperatus",
    description: "Kalajengking cambuk yang hidup di area lembab",
  },
  {
    id: 5,
    title: "Lychas mucronatus",
    src: "/lychas-mucronatus-scorpion-species.jpg",
    alt: "Lychas mucronatus",
    description: "Kalajengking kecil yang aktif pada malam hari",
  },
  {
    id: 6,
    title: "Tegenaria domestica",
    src: "/tegenaria-domestica-house-spider.jpg",
    alt: "Tegenaria domestica",
    description: "Laba-laba rumah yang umum ditemukan",
  },
];

export function GallerySection() {
  return (
    <section className="py-16 bg-slate-700">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Galeri Kecil
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <AdvancedImageModal
              key={item.id}
              images={galleryItems}
              initialIndex={index}
              trigger={
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg text-white drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
