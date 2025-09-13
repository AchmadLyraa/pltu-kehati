"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AdvancedImageModal } from "@/components/advanced-image-modal"

const faunaCategories = [
  { name: "Arthropoda", active: true },
  { name: "Burung", active: false },
  { name: "Herpetofauna", active: false },
  { name: "Mamalia", active: false },
]

const faunaGallery = [
  {
    id: 1,
    title: "Tachygraphus sommaderi",
    src: "/tachygraphus-sommaderi-crab-species-detailed.jpg",
    alt: "Tachygraphus sommaderi",
    category: "Arthropoda",
    description: "Spesies kepiting yang ditemukan di area riparian waduk",
  },
  {
    id: 2,
    title: "Caryanda spuria",
    src: "/caryanda-spuria-spider-species-detailed.jpg",
    alt: "Caryanda spuria",
    category: "Arthropoda",
    description: "Laba-laba yang berperan sebagai predator alami",
  },
  {
    id: 3,
    title: "Gyphinopsis brevilobatus",
    src: "/gyphinopsis-brevilobatus-insect-species-detailed.jpg",
    alt: "Gyphinopsis brevilobatus",
    category: "Arthropoda",
    description: "Serangga yang berperan dalam proses dekomposisi",
  },
  {
    id: 4,
    title: "Thelyphonus asperatus",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Thelyphonus asperatus",
    category: "Arthropoda",
    description: "Kalajengking cambuk yang hidup di area lembab",
  },
  {
    id: 5,
    title: "Lychas mucronatus",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Lychas mucronatus",
    category: "Arthropoda",
    description: "Kalajengking kecil yang aktif pada malam hari",
  },
  {
    id: 6,
    title: "Tegenaria domestica",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tegenaria domestica",
    category: "Arthropoda",
    description: "Laba-laba rumah yang umum ditemukan",
  },
  {
    id: 7,
    title: "Macaca fascicularis",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Macaca fascicularis",
    category: "Mamalia",
    description: "Monyet ekor panjang yang hidup berkelompok",
  },
  {
    id: 8,
    title: "Paradoxurus hermaphroditus",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Paradoxurus hermaphroditus",
    category: "Mamalia",
    description: "Musang pandan yang aktif pada malam hari",
  },
]

export default function GaleriFaunaPage() {
  const [activeCategory, setActiveCategory] = useState("Arthropoda")

  const filteredGallery = faunaGallery.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">GALERI FAUNA</h1>
            <h2 className="text-2xl font-semibold text-gray-700">KAWASAN PLN CIRATA</h2>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {faunaCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.name
                    ? "bg-cyan-500 text-white"
                    : "bg-white text-cyan-500 border border-cyan-500 hover:bg-cyan-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <AdvancedImageModal
                key={item.id}
                images={filteredGallery}
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
                      <h3 className="font-bold text-lg text-gray-900 italic mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
