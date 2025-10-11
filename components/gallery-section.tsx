"use client";
import { AdvancedImageModal } from "@/components/advanced-image-modal";

const galleryItems = [
  {
    id: 1,
    title: "Monyet beruk (Macaca nemestrina)",
    src: "/Fauna/Mamalia Optimized/Monyet beruk (Macaca nemestrina).webp",
    alt: "Monyet beruk (Macaca nemestrina)",
    description: "",
  },
  {
    id: 2,
    title: "Duttaphrynus melanostictus",
    src: "/Fauna/Reptil dan Amfibi Optimized/Duttaphrynus melanostictus.webp",
    alt: "Duttaphrynus melanostictus",
    description: "",
  },
  {
    id: 3,
    title: "Burung Ciung Air Kalimantan",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Ciung Air Kalimantan.webp",
    alt: "Burung Ciung Air Kalimantan",
    description: "",
  },
  {
    id: 4,
    title: "Melastoma malabathricum",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Melastoma malabathricum.webp",
    alt: "Melastoma malabathricum",
    description: "",
  },
  {
    id: 5,
    title: "Lycopodium cernuum",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Lycopodium cernuum.webp",
    alt: "Lycopodium cernuum",
    description: "",
  },
  {
    id: 6,
    title: "Tetracera scandens",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Tetracera scandens.webp",
    alt: "Tetracera scandens",
    description: "",
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
