"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AdvancedImageModal } from "@/components/advanced-image-modal"

const floraGallery = [
  {
    id: 1,
    title: "Ficus benjamina",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Ficus benjamina (Beringin)",
    description: "Pohon besar yang memberikan naungan dan habitat bagi berbagai fauna",
  },
  {
    id: 2,
    title: "Swietenia mahagoni",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Swietenia mahagoni (Mahoni)",
    description: "Pohon kayu keras yang bernilai ekonomi tinggi",
  },
  {
    id: 3,
    title: "Tectona grandis",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tectona grandis (Jati)",
    description: "Pohon jati yang terkenal dengan kualitas kayunya",
  },
  {
    id: 4,
    title: "Albizia saman",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Albizia saman (Trembesi)",
    description: "Pohon peneduh dengan kanopi yang lebar",
  },
  {
    id: 5,
    title: "Pterocarpus indicus",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pterocarpus indicus (Angsana)",
    description: "Pohon dengan bunga kuning yang indah",
  },
  {
    id: 6,
    title: "Cassia siamea",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cassia siamea (Johar)",
    description: "Pohon dengan bunga kuning cerah",
  },
  {
    id: 7,
    title: "Leucaena leucocephala",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Leucaena leucocephala (Petai Cina)",
    description: "Tanaman legum yang dapat memperbaiki kesuburan tanah",
  },
  {
    id: 8,
    title: "Acacia mangium",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Acacia mangium (Akasia)",
    description: "Pohon cepat tumbuh yang baik untuk rehabilitasi lahan",
  },
  {
    id: 9,
    title: "Bambusa vulgaris",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Bambusa vulgaris (Bambu Kuning)",
    description: "Bambu yang berguna untuk berbagai keperluan",
  },
]

export default function GaleriFloraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">GALERI FLORA</h1>
            <h2 className="text-2xl font-semibold text-gray-700">KAWASAN PLN CIRATA</h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floraGallery.map((item, index) => (
              <AdvancedImageModal
                key={item.id}
                images={floraGallery}
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
                      <h3 className="font-bold text-lg text-gray-900 italic mb-1">{item.title}</h3>
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
