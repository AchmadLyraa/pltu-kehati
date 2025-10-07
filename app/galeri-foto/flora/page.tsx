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
    src: "/Flora/Jenis Pohon/Acacia auriculiformis.JPG",
    alt: "Acacia auriculiformis",
    description: "",
  },
  {
    id: 2,
    title: "Acacia mangium",
    src: "/Flora/Jenis Pohon/Acacia mangium.JPG",
    alt: "Acacia mangium",
    description: "",
  },
  {
    id: 3,
    title: "Aegiceras sp",
    src: "/Flora/Jenis Pohon/Aegiceras sp.JPG",
    alt: "Aegiceras sp",
    description: "",
  },
  {
    id: 4,
    title: "Alstonia scholaris",
    src: "/Flora/Jenis Pohon/Alstonia scholaris.jpg",
    alt: "Alstonia scholaris",
    description: "",
  },
  {
    id: 5,
    title: "Archidendron sp",
    src: "/Flora/Jenis Pohon/Archidendron sp.JPG",
    alt: "Archidendron sp",
    description: "",
  },
  {
    id: 6,
    title: "Avicinea marina",
    src: "/Flora/Jenis Pohon/Avicinea marina.JPG",
    alt: "Avicinea marina",
    description: "",
  },
  {
    id: 7,
    title: "Cratoxyllum arborescens",
    src: "/Flora/Jenis Pohon/Cratoxyllum arborescens.JPG",
    alt: "Cratoxyllum arborescens",
    description: "",
  },
  {
    id: 8,
    title: "Dillenia grandiflora",
    src: "/Flora/Jenis Pohon/Dillenia grandiflora.JPG",
    alt: "Dillenia grandiflora",
    description: "",
  },
  {
    id: 9,
    title: "Dysoxyllum sp",
    src: "/Flora/Jenis Pohon/Dysoxyllum sp.JPG",
    alt: "Dysoxyllum sp",
    description: "",
  },
  {
    id: 10,
    title: "Fordia splendidissima",
    src: "/Flora/Jenis Pohon/Fordia splendidissima.JPG",
    alt: "Fordia splendidissima",
    description: "",
  },
  {
    id: 11,
    title: "Garcinia dulcis",
    src: "/Flora/Jenis Pohon/Garcinia dulcis.JPG",
    alt: "Garcinia dulcis",
    description: "",
  },
  {
    id: 12,
    title: "Glochidion serriceum",
    src: "/Flora/Jenis Pohon/Glochidion serriceum.JPG",
    alt: "Glochidion serriceum",
    description: "",
  },
  {
    id: 13,
    title: "Helicia sp",
    src: "/Flora/Jenis Pohon/Helicia sp.JPG",
    alt: "Helicia sp",
    description: "",
  },
  {
    id: 14,
    title: "Hibiscus tiliaceus",
    src: "/Flora/Jenis Pohon/Hibiscus tiliaceus.JPG",
    alt: "Hibiscus tiliaceus",
    description: "",
  },
  {
    id: 15,
    title: "IMG_3792",
    src: "/Flora/Jenis Pohon/IMG_3792.JPG",
    alt: "IMG_3792",
    description: "",
  },
  {
    id: 16,
    title: "Litsea sp",
    src: "/Flora/Jenis Pohon/Litsea sp.JPG",
    alt: "Litsea sp",
    description: "",
  },
  {
    id: 17,
    title: "Macaranga hypoleuca",
    src: "/Flora/Jenis Pohon/Macaranga hypoleuca.JPG",
    alt: "Macaranga hypoleuca",
    description: "",
  },
  {
    id: 18,
    title: "Macaranga pearsonii",
    src: "/Flora/Jenis Pohon/Macaranga pearsonii.JPG",
    alt: "Macaranga pearsonii",
    description: "",
  },
  {
    id: 19,
    title: "Macaranga trichocarpa",
    src: "/Flora/Jenis Pohon/Macaranga trichocarpa.JPG",
    alt: "Macaranga trichocarpa",
    description: "",
  },
  {
    id: 20,
    title: "Palaquium sp",
    src: "/Flora/Jenis Pohon/Palaquium sp.JPG",
    alt: "Palaquium sp",
    description: "",
  },
  {
    id: 21,
    title: "Rhizophora apiculata",
    src: "/Flora/Jenis Pohon/Rhizophora apiculata.JPG",
    alt: "Rhizophora apiculata",
    description: "",
  },
  {
    id: 22,
    title: "Rhizophora mucronata",
    src: "/Flora/Jenis Pohon/Rhizophora mucronata.JPG",
    alt: "Rhizophora mucronata",
    description: "",
  },
  {
    id: 23,
    title: "Soneratia alba",
    src: "/Flora/Jenis Pohon/Soneratia alba.JPG",
    alt: "Soneratia alba",
    description: "",
  },
  {
    id: 24,
    title: "Syzygium pearsonii",
    src: "/Flora/Jenis Pohon/Syzygium pearsonii.JPG",
    alt: "Syzygium pearsonii",
    description: "",
  },
  {
    id: 25,
    title: "Syzygium salictoides",
    src: "/Flora/Jenis Pohon/Syzygium salictoides.JPG",
    alt: "Syzygium salictoides",
    description: "",
  },
  {
    id: 26,
    title: "Syzygium tawahense",
    src: "/Flora/Jenis Pohon/Syzygium tawahense.JPG",
    alt: "Syzygium tawahense",
    description: "",
  },
  {
    id: 27,
    title: "Vitex pinnata",
    src: "/Flora/Jenis Pohon/Vitex pinnata.JPG",
    alt: "Vitex pinnata",
    description: "",
  },
  {
    id: 28,
    title: "Xylocarpus granatum",
    src: "/Flora/Jenis Pohon/Xylocarpus granatum.JPG",
    alt: "Xylocarpus granatum",
    description: "",
  },
];

const floraTumbuhanBawah = [
  {
    id: 29,
    title: "Asplenium nidus",
    src: "/Flora/Jenis Tumbuhan Bawah/Asplenium nidus.JPG",
    alt: "Asplenium nidus",
    description: "",
  },
  {
    id: 30,
    title: "Blechnum orientale",
    src: "/Flora/Jenis Tumbuhan Bawah/Blechnum orientale.JPG",
    alt: "Blechnum orientale",
    description: "",
  },
  {
    id: 31,
    title: "Calamus sp",
    src: "/Flora/Jenis Tumbuhan Bawah/Calamus sp.JPG",
    alt: "Calamus sp",
    description: "",
  },
  {
    id: 32,
    title: "Clidemia hirta",
    src: "/Flora/Jenis Tumbuhan Bawah/Clidemia hirta.JPG",
    alt: "Clidemia hirta",
    description: "",
  },
  {
    id: 33,
    title: "Daemonorops sp",
    src: "/Flora/Jenis Tumbuhan Bawah/Daemonorops sp.JPG",
    alt: "Daemonorops sp",
    description: "",
  },
  {
    id: 34,
    title: "Lycopodium cernuum",
    src: "/Flora/Jenis Tumbuhan Bawah/Lycopodium cernuum.JPG",
    alt: "Lycopodium cernuum",
    description: "",
  },
  {
    id: 35,
    title: "Melastoma malabathricum",
    src: "/Flora/Jenis Tumbuhan Bawah/Melastoma malabathricum.JPG",
    alt: "Melastoma malabathricum",
    description: "",
  },
  {
    id: 36,
    title: "Mimusa pudica",
    src: "/Flora/Jenis Tumbuhan Bawah/Mimusa pudica.JPG",
    alt: "Mimusa pudica",
    description: "",
  },
  {
    id: 37,
    title: "Nepenthes mirabilis",
    src: "/Flora/Jenis Tumbuhan Bawah/Nepenthes mirabilis.JPG",
    alt: "Nepenthes mirabilis",
    description: "",
  },
  {
    id: 38,
    title: "Stachytarpeta jamaicensis",
    src: "/Flora/Jenis Tumbuhan Bawah/Stachytarpeta jamaicensis.JPG",
    alt: "Stachytarpeta jamaicensis",
    description: "",
  },
  {
    id: 39,
    title: "Stenochlaena palutris",
    src: "/Flora/Jenis Tumbuhan Bawah/Stenochlaena palutris.jpg",
    alt: "Stenochlaena palutris",
    description: "",
  },
  {
    id: 40,
    title: "Tetracera scandens",
    src: "/Flora/Jenis Tumbuhan Bawah/Tetracera scandens.JPG",
    alt: "Tetracera scandens",
    description: "",
  },
];

// === KONFIGURASI TAB ===
const tabList = [
  { key: "jenispohon", label: "Jenis Pohon", data: floraPohon },
  {
    key: "tumbuhanbawah",
    label: "Jenis Tumbuhan Bawah",
    data: floraTumbuhanBawah,
  },
];

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
            <Tabs.List className="flex justify-center gap-4 border-b border-gray-300 mb-8">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tab.data.map((item, index) => (
                    <AdvancedImageModal
                      key={item.id}
                      images={tab.data}
                      initialIndex={index}
                      trigger={
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow">
                          <div className="relative overflow-hidden">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              width={400} // sesuaikan ukuran ideal
                              height={400}
                              loading="lazy"
                              className="rounded-lg w-full h-auto object-cover"
                              placeholder="blur"
                              blurDataURL="/placeholder.jpg" // opsional: bisa pakai 1x1 placeholder kecil
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
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </main>
      <Footer />
    </div>
  );
}
