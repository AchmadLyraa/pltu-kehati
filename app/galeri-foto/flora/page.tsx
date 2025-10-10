"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AdvancedImageModal } from "@/components/advanced-image-modal";
import * as Tabs from "@radix-ui/react-tabs";

// === DATA GALERI FLORA ===
const floraPohon = [
  {
    id: 1,
    title: "Acacia auriculiformis",
    src: "/Flora/Jenis Pohon Optimized/Acacia auriculiformis.webp",
    alt: "Acacia auriculiformis",
    description: "",
  },
  {
    id: 2,
    title: "Acacia mangium",
    src: "/Flora/Jenis Pohon Optimized/Acacia mangium.webp",
    alt: "Acacia mangium",
    description: "",
  },
  {
    id: 3,
    title: "Aegiceras sp",
    src: "/Flora/Jenis Pohon Optimized/Aegiceras sp.webp",
    alt: "Aegiceras sp",
    description: "",
  },
  {
    id: 4,
    title: "Alstonia scholaris",
    src: "/Flora/Jenis Pohon Optimized/Alstonia scholaris.webp",
    alt: "Alstonia scholaris",
    description: "",
  },
  {
    id: 5,
    title: "Archidendron sp",
    src: "/Flora/Jenis Pohon Optimized/Archidendron sp.webp",
    alt: "Archidendron sp",
    description: "",
  },
  {
    id: 6,
    title: "Avicinea marina",
    src: "/Flora/Jenis Pohon Optimized/Avicinea marina.webp",
    alt: "Avicinea marina",
    description: "",
  },
  {
    id: 7,
    title: "Cratoxyllum arborescens",
    src: "/Flora/Jenis Pohon Optimized/Cratoxyllum arborescens.webp",
    alt: "Cratoxyllum arborescens",
    description: "",
  },
  {
    id: 8,
    title: "Dillenia grandiflora",
    src: "/Flora/Jenis Pohon Optimized/Dillenia grandiflora.webp",
    alt: "Dillenia grandiflora",
    description: "",
  },
  {
    id: 9,
    title: "Dysoxyllum sp",
    src: "/Flora/Jenis Pohon Optimized/Dysoxyllum sp.webp",
    alt: "Dysoxyllum sp",
    description: "",
  },
  {
    id: 10,
    title: "Fordia splendidissima",
    src: "/Flora/Jenis Pohon Optimized/Fordia splendidissima.webp",
    alt: "Fordia splendidissima",
    description: "",
  },
  {
    id: 11,
    title: "Garcinia dulcis",
    src: "/Flora/Jenis Pohon Optimized/Garcinia dulcis.webp",
    alt: "Garcinia dulcis",
    description: "",
  },
  {
    id: 12,
    title: "Glochidion serriceum",
    src: "/Flora/Jenis Pohon Optimized/Glochidion serriceum.webp",
    alt: "Glochidion serriceum",
    description: "",
  },
  {
    id: 13,
    title: "Helicia sp",
    src: "/Flora/Jenis Pohon Optimized/Helicia sp.webp",
    alt: "Helicia sp",
    description: "",
  },
  {
    id: 14,
    title: "Hibiscus tiliaceus",
    src: "/Flora/Jenis Pohon Optimized/Hibiscus tiliaceus.webp",
    alt: "Hibiscus tiliaceus",
    description: "",
  },
  {
    id: 15,
    title: "IMG_3792",
    src: "/Flora/Jenis Pohon Optimized/IMG_3792.webp",
    alt: "IMG_3792",
    description: "",
  },
  {
    id: 16,
    title: "Litsea sp",
    src: "/Flora/Jenis Pohon Optimized/Litsea sp.webp",
    alt: "Litsea sp",
    description: "",
  },
  {
    id: 17,
    title: "Macaranga hypoleuca",
    src: "/Flora/Jenis Pohon Optimized/Macaranga hypoleuca.webp",
    alt: "Macaranga hypoleuca",
    description: "",
  },
  {
    id: 18,
    title: "Macaranga pearsonii",
    src: "/Flora/Jenis Pohon Optimized/Macaranga pearsonii.webp",
    alt: "Macaranga pearsonii",
    description: "",
  },
  {
    id: 19,
    title: "Macaranga trichocarpa",
    src: "/Flora/Jenis Pohon Optimized/Macaranga trichocarpa.webp",
    alt: "Macaranga trichocarpa",
    description: "",
  },
  {
    id: 20,
    title: "Palaquium sp",
    src: "/Flora/Jenis Pohon Optimized/Palaquium sp.webp",
    alt: "Palaquium sp",
    description: "",
  },
  {
    id: 21,
    title: "Rhizophora apiculata",
    src: "/Flora/Jenis Pohon Optimized/Rhizophora apiculata.webp",
    alt: "Rhizophora apiculata",
    description: "",
  },
  {
    id: 22,
    title: "Rhizophora mucronata",
    src: "/Flora/Jenis Pohon Optimized/Rhizophora mucronata.webp",
    alt: "Rhizophora mucronata",
    description: "",
  },
  {
    id: 23,
    title: "Soneratia alba",
    src: "/Flora/Jenis Pohon Optimized/Soneratia alba.webp",
    alt: "Soneratia alba",
    description: "",
  },
  {
    id: 24,
    title: "Syzygium pearsonii",
    src: "/Flora/Jenis Pohon Optimized/Syzygium pearsonii.webp",
    alt: "Syzygium pearsonii",
    description: "",
  },
  {
    id: 25,
    title: "Syzygium salictoides",
    src: "/Flora/Jenis Pohon Optimized/Syzygium salictoides.webp",
    alt: "Syzygium salictoides",
    description: "",
  },
  {
    id: 26,
    title: "Syzygium tawahense",
    src: "/Flora/Jenis Pohon Optimized/Syzygium tawahense.webp",
    alt: "Syzygium tawahense",
    description: "",
  },
  {
    id: 27,
    title: "Vitex pinnata",
    src: "/Flora/Jenis Pohon Optimized/Vitex pinnata.webp",
    alt: "Vitex pinnata",
    description: "",
  },
  {
    id: 28,
    title: "Xylocarpus granatum",
    src: "/Flora/Jenis Pohon Optimized/Xylocarpus granatum.webp",
    alt: "Xylocarpus granatum",
    description: "",
  },
];

const floraTumbuhanBawah = [
  {
    id: 29,
    title: "Asplenium nidus",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Asplenium nidus.webp",
    alt: "Asplenium nidus",
    description: "",
  },
  {
    id: 30,
    title: "Blechnum orientale",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Blechnum orientale.webp",
    alt: "Blechnum orientale",
    description: "",
  },
  {
    id: 31,
    title: "Calamus sp",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Calamus sp.webp",
    alt: "Calamus sp",
    description: "",
  },
  {
    id: 32,
    title: "Clidemia hirta",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Clidemia hirta.webp",
    alt: "Clidemia hirta",
    description: "",
  },
  {
    id: 33,
    title: "Daemonorops sp",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Daemonorops sp.webp",
    alt: "Daemonorops sp",
    description: "",
  },
  {
    id: 34,
    title: "Lycopodium cernuum",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Lycopodium cernuum.webp",
    alt: "Lycopodium cernuum",
    description: "",
  },
  {
    id: 35,
    title: "Melastoma malabathricum",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Melastoma malabathricum.webp",
    alt: "Melastoma malabathricum",
    description: "",
  },
  {
    id: 36,
    title: "Mimusa pudica",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Mimusa pudica.webp",
    alt: "Mimusa pudica",
    description: "",
  },
  {
    id: 37,
    title: "Nepenthes mirabilis",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Nepenthes mirabilis.webp",
    alt: "Nepenthes mirabilis",
    description: "",
  },
  {
    id: 38,
    title: "Stachytarpeta jamaicensis",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Stachytarpeta jamaicensis.webp",
    alt: "Stachytarpeta jamaicensis",
    description: "",
  },
  {
    id: 39,
    title: "Stenochlaena palutris",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Stenochlaena palutris.webp",
    alt: "Stenochlaena palutris",
    description: "",
  },
  {
    id: 40,
    title: "Tetracera scandens",
    src: "/Flora/Jenis Tumbuhan Bawah Optimized/Tetracera scandens.webp",
    alt: "Tetracera scandens",
    description: "",
  },
];

// === KONFIGURASI TAB ===
const tabList = [
  { key: "jenispohon", label: "Jenis Pohon Optimized", data: floraPohon },
  {
    key: "tumbuhanbawah",
    label: "Jenis Tumbuhan Bawah Optimized",
    data: floraTumbuhanBawah,
  },
];

const ITEMS_PER_PAGE = 12; // Tampilkan 12 gambar per load

function GalleryContent({ data }: { data: typeof floraPohon }) {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const displayedItems = data.slice(0, displayCount);
  const hasMore = displayCount < data.length;

  const loadMore = () => {
    setIsLoading(true);
    // Simulasi loading untuk UX yang lebih baik
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, data.length));
      setIsLoading(false);
    }, 300);
  };

  // Reset count saat data berubah
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, index) => (
          <AdvancedImageModal
            key={item.id}
            images={data}
            initialIndex={index}
            trigger={
              <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={400}
                    loading="lazy"
                    unoptimized
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 italic mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            }
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex flex-col items-center mt-12 gap-3">
          <p className="text-gray-600 text-sm">
            Menampilkan {displayCount} dari {data.length} gambar
          </p>
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Memuat...
              </span>
            ) : (
              `Muat Lebih Banyak (${data.length - displayCount} tersisa)`
            )}
          </button>
        </div>
      )}

      {/* Show all loaded message */}
      {!hasMore && data.length > ITEMS_PER_PAGE && (
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm font-medium">
            ✓ Semua gambar telah ditampilkan ({data.length} gambar)
          </p>
        </div>
      )}
    </>
  );
}

export default function GaleriFloraPage() {
  const [activeTab, setActiveTab] = useState(tabList[0].key);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabList.some((t) => t.key === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, "", `#${value}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GALERI FLORA
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              KAWASAN PLN CIRATA
            </h2>
          </div>

          <Tabs.Root
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <Tabs.List className="flex justify-center gap-4 border-b border-gray-300 mb-8 flex-wrap">
              {tabList.map((tab) => (
                <Tabs.Trigger
                  key={tab.key}
                  value={tab.key}
                  className={`px-6 py-2 text-sm font-medium rounded-t-md transition-colors duration-200 ${
                    activeTab === tab.key
                      ? "bg-white border border-b-0 border-gray-300 text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabList.map((tab) => (
              <Tabs.Content
                key={tab.key}
                value={tab.key}
                className="animate-fadeIn"
              >
                <GalleryContent data={tab.data} />
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </main>
      <Footer />
    </div>
  );
}
