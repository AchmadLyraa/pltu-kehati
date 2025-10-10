"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AdvancedImageModal } from "@/components/advanced-image-modal";
import * as Tabs from "@radix-ui/react-tabs";

// ===== DATA GALERI - Biota air (Nekton) =====
const faunaBiotaAir = [
  {
    id: 1,
    title: "Aurigequula fasciata",
    src: "/Fauna/Biota air (Nekton) Optimized/Aurigequula fasciata.webp",
    alt: "Aurigequula fasciata",
    description: "",
  },
  {
    id: 2,
    title: "Chanos chanos",
    src: "/Fauna/Biota air (Nekton) Optimized/Chanos chanos.webp",
    alt: "Chanos chanos",
    description: "",
  },
  {
    id: 3,
    title: "Cloridopsis scorpio",
    src: "/Fauna/Biota air (Nekton) Optimized/Cloridopsis scorpio.webp",
    alt: "Cloridopsis scorpio",
    description: "",
  },
  {
    id: 4,
    title: "Nuchequula gerreoides",
    src: "/Fauna/Biota air (Nekton) Optimized/Nuchequula gerreoides.webp",
    alt: "Nuchequula gerreoides",
    description: "",
  },
  {
    id: 5,
    title: "Parambassis siamensis",
    src: "/Fauna/Biota air (Nekton) Optimized/Parambassis siamensis.webp",
    alt: "Parambassis siamensis",
    description: "",
  },
  {
    id: 6,
    title: "Penaeus monodon",
    src: "/Fauna/Biota air (Nekton) Optimized/Penaeus monodon.webp",
    alt: "Penaeus monodon",
    description: "",
  },
  {
    id: 7,
    title: "Planiliza subviridis",
    src: "/Fauna/Biota air (Nekton) Optimized/Planiliza subviridis.webp",
    alt: "Planiliza subviridis",
    description: "",
  },
  {
    id: 8,
    title: "Portunus pelagicus",
    src: "/Fauna/Biota air (Nekton) Optimized/Portunus pelagicus.webp",
    alt: "Portunus pelagicus",
    description: "",
  },
  {
    id: 9,
    title: "Sepiella inermis",
    src: "/Fauna/Biota air (Nekton) Optimized/Sepiella inermis.webp",
    alt: "Sepiella inermis",
    description: "",
  },
  {
    id: 10,
    title: "Siganus sp",
    src: "/Fauna/Biota air (Nekton) Optimized/Siganus sp.webp",
    alt: "Siganus sp",
    description: "",
  },
  {
    id: 11,
    title: "Terapon jarbua",
    src: "/Fauna/Biota air (Nekton) Optimized/Terapon jarbua.webp",
    alt: "Terapon jarbua",
    description: "",
  },
  {
    id: 12,
    title: "Triacanthus biaculeatus",
    src: "/Fauna/Biota air (Nekton) Optimized/Triacanthus biaculeatus.webp",
    alt: "Triacanthus biaculeatus",
    description: "",
  },
  {
    id: 13,
    title: "Upeneus vittatus",
    src: "/Fauna/Biota air (Nekton) Optimized/Upeneus vittatus.webp",
    alt: "Upeneus vittatus",
    description: "",
  },
  {
    id: 14,
    title: "scylla serrata",
    src: "/Fauna/Biota air (Nekton) Optimized/scylla serrata.webp",
    alt: "scylla serrata",
    description: "",
  },
];

// ===== DATA GALERI - Burung (Avifauna) Optimized =====
const faunaBurung = [
  {
    id: 15,
    title: "Blekok Sawah",
    src: "/Fauna/Burung (Avifauna) Optimized/Blekok Sawah.webp",
    alt: "Blekok Sawah",
    description: "",
  },
  {
    id: 16,
    title: "Bondol Kalimantan",
    src: "/Fauna/Burung (Avifauna) Optimized/Bondol Kalimantan.webp",
    alt: "Bondol Kalimantan",
    description: "",
  },
  {
    id: 17,
    title: "Burung Cabe Bunga Api",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Cabe Bunga Api.webp",
    alt: "Burung Cabe Bunga Api",
    description: "",
  },
  {
    id: 18,
    title: "Burung Caladi Tilik",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Caladi Tilik.webp",
    alt: "Burung Caladi Tilik",
    description: "",
  },
  {
    id: 19,
    title: "Burung Cekakak Sungai",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Cekakak Sungai.webp",
    alt: "Burung Cekakak Sungai",
    description: "",
  },
  {
    id: 20,
    title: "Burung Cinenen Kelabu",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Cinenen Kelabu.webp",
    alt: "Burung Cinenen Kelabu",
    description: "",
  },
  {
    id: 21,
    title: "Burung Ciung Air Kalimantan",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Ciung Air Kalimantan.webp",
    alt: "Burung Ciung Air Kalimantan",
    description: "",
  },
  {
    id: 22,
    title: "Burung Cucak Kutilang",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Cucak Kutilang.webp",
    alt: "Burung Cucak Kutilang",
    description: "",
  },
  {
    id: 23,
    title: "Burung Elang Bondol",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Elang Bondol.webp",
    alt: "Burung Elang Bondol",
    description: "",
  },
  {
    id: 24,
    title: "Burung Gereja Erasia",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Gereja Erasia.webp",
    alt: "Burung Gereja Erasia",
    description: "",
  },
  {
    id: 25,
    title: "Burung Kapasan Kemiri",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Kapasan Kemiri.webp",
    alt: "Burung Kapasan Kemiri",
    description: "",
  },
  {
    id: 26,
    title: "Burung Kekep Babi",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Kekep Babi.webp",
    alt: "Burung Kekep Babi",
    description: "",
  },
  {
    id: 27,
    title: "Burung Kerak Kerbau",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Kerak Kerbau.webp",
    alt: "Burung Kerak Kerbau",
    description: "",
  },
  {
    id: 28,
    title: "Burung Kipasan Belang",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Kipasan Belang.webp",
    alt: "Burung Kipasan Belang",
    description: "",
  },
  {
    id: 29,
    title: "Burung Kirik-Kirik Biru",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Kirik-Kirik Biru.webp",
    alt: "Burung Kirik-Kirik Biru",
    description: "",
  },
  {
    id: 30,
    title: "Burung Kokokan Laut",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Kokokan Laut.webp",
    alt: "Burung Kokokan Laut",
    description: "",
  },
  {
    id: 31,
    title: "Burung Madi Sepah Raja",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Madi Sepah Raja.webp",
    alt: "Burung Madi Sepah Raja",
    description: "",
  },
  {
    id: 32,
    title: "Burung Madu Kelapa",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Madu Kelapa.webp",
    alt: "Burung Madu Kelapa",
    description: "",
  },
  {
    id: 33,
    title: "Burung Merbah Belukar",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Merbah Belukar.webp",
    alt: "Burung Merbah Belukar",
    description: "",
  },
  {
    id: 34,
    title: "Burung Merbah Cerukcuk",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Merbah Cerukcuk.webp",
    alt: "Burung Merbah Cerukcuk",
    description: "",
  },
  {
    id: 35,
    title: "Burung Perling Kumbang",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Perling Kumbang.webp",
    alt: "Burung Perling Kumbang",
    description: "",
  },
  {
    id: 36,
    title: "Burung Rametuk Laut",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Rametuk Laut.webp",
    alt: "Burung Rametuk Laut",
    description: "",
  },
  {
    id: 37,
    title: "Burung Tekukur Biasa",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Tekukur Biasa.webp",
    alt: "Burung Tekukur Biasa",
    description: "",
  },
  {
    id: 38,
    title: "Burung Trinil Pantai",
    src: "/Fauna/Burung (Avifauna) Optimized/Burung Trinil Pantai.webp",
    alt: "Burung Trinil Pantai",
    description: "",
  },
];

// ===== DATA GALERI - Mamalia Optimized =====
const faunaMamalia = [
  {
    id: 39,
    title: "Bajing Kelapa (Callosciurus notatus)",
    src: "/Fauna/Mamalia Optimized/Bajing Kelapa (Callosciurus notatus).webp",
    alt: "Bajing Kelapa (Callosciurus notatus)",
    description: "",
  },
  {
    id: 40,
    title: "Monyet beruk (Macaca nemestrina)",
    src: "/Fauna/Mamalia Optimized/Monyet beruk (Macaca nemestrina).webp",
    alt: "Monyet beruk (Macaca nemestrina)",
    description: "",
  },
  {
    id: 41,
    title: "Monyet ekor panjang (Macaca fascicularis)",
    src: "/Fauna/Mamalia Optimized/Monyet ekor panjang (Macaca fascicularis).webp",
    alt: "Monyet ekor panjang (Macaca fascicularis)",
    description: "",
  },
  {
    id: 42,
    title: "TUPAI TERCAT 1",
    src: "/Fauna/Mamalia Optimized/TUPAI TERCAT 1.webp",
    alt: "TUPAI TERCAT 1",
    description: "",
  },
  {
    id: 43,
    title: "Tupai Indocina",
    src: "/Fauna/Mamalia Optimized/Tupai Indocina.webp",
    alt: "Tupai Indocina",
    description: "",
  },
];

// ===== DATA GALERI - Reptil dan Amfibi Optimized =====
const faunaReptilAmfibi = [
  {
    id: 44,
    title: "Dassia vittata",
    src: "/Fauna/Reptil dan Amfibi Optimized/Dassia vittata.webp",
    alt: "Dassia vittata",
    description: "",
  },
  {
    id: 45,
    title: "Duttaphrynus melanostictus",
    src: "/Fauna/Reptil dan Amfibi Optimized/Duttaphrynus melanostictus.webp",
    alt: "Duttaphrynus melanostictus",
    description: "",
  },
];

// ===== DATA GALERI - Serangga Optimized =====
const faunaSerangga = [
  {
    id: 46,
    title: "Acisoma Panorpoides",
    src: "/Fauna/Serangga Optimized/Acisoma Panorpoides.webp",
    alt: "Acisoma Panorpoides",
    description: "",
  },
  {
    id: 47,
    title: "Aetholix Flavibasalis",
    src: "/Fauna/Serangga Optimized/Aetholix Flavibasalis.webp",
    alt: "Aetholix Flavibasalis",
    description: "",
  },
  {
    id: 48,
    title: "Agriocnemis Femina",
    src: "/Fauna/Serangga Optimized/Agriocnemis Femina.webp",
    alt: "Agriocnemis Femina",
    description: "",
  },
  {
    id: 49,
    title: "Agrionoptera Insignis",
    src: "/Fauna/Serangga Optimized/Agrionoptera Insignis.webp",
    alt: "Agrionoptera Insignis",
    description: "",
  },
  {
    id: 50,
    title: "Asota Heliconia",
    src: "/Fauna/Serangga Optimized/Asota Heliconia.webp",
    alt: "Asota Heliconia",
    description: "",
  },
  {
    id: 51,
    title: "Bothrogonia Addita",
    src: "/Fauna/Serangga Optimized/Bothrogonia Addita.webp",
    alt: "Bothrogonia Addita",
    description: "",
  },
  {
    id: 52,
    title: "Brachydiplax Chalybea",
    src: "/Fauna/Serangga Optimized/Brachydiplax Chalybea.webp",
    alt: "Brachydiplax Chalybea",
    description: "",
  },
  {
    id: 53,
    title: "Ceriagrion Cerinorubellum",
    src: "/Fauna/Serangga Optimized/Ceriagrion Cerinorubellum.webp",
    alt: "Ceriagrion Cerinorubellum",
    description: "",
  },
  {
    id: 54,
    title: "Chalciope Mygdon",
    src: "/Fauna/Serangga Optimized/Chalciope Mygdon.webp",
    alt: "Chalciope Mygdon",
    description: "",
  },
  {
    id: 55,
    title: "Cnaphalocrocis Patnalis",
    src: "/Fauna/Serangga Optimized/Cnaphalocrocis Patnalis.webp",
    alt: "Cnaphalocrocis Patnalis",
    description: "",
  },
  {
    id: 56,
    title: "Comibaena Attenuata",
    src: "/Fauna/Serangga Optimized/Comibaena Attenuata.webp",
    alt: "Comibaena Attenuata",
    description: "",
  },
  {
    id: 57,
    title: "Cosmodela Aurulenta",
    src: "/Fauna/Serangga Optimized/Cosmodela Aurulenta.webp",
    alt: "Cosmodela Aurulenta",
    description: "",
  },
  {
    id: 58,
    title: "Diplacodes Trivialis",
    src: "/Fauna/Serangga Optimized/Diplacodes Trivialis.webp",
    alt: "Diplacodes Trivialis",
    description: "",
  },
  {
    id: 59,
    title: "Ercheia Cyllaria",
    src: "/Fauna/Serangga Optimized/Ercheia Cyllaria.webp",
    alt: "Ercheia Cyllaria",
    description: "",
  },
  {
    id: 60,
    title: "Euchrysops Cnejus",
    src: "/Fauna/Serangga Optimized/Euchrysops Cnejus.webp",
    alt: "Euchrysops Cnejus",
    description: "",
  },
  {
    id: 61,
    title: "Eurema Hecabe",
    src: "/Fauna/Serangga Optimized/Eurema Hecabe.webp",
    alt: "Eurema Hecabe",
    description: "",
  },
  {
    id: 62,
    title: "Flammona Quadrifasciata",
    src: "/Fauna/Serangga Optimized/Flammona Quadrifasciata.webp",
    alt: "Flammona Quadrifasciata",
    description: "",
  },
  {
    id: 63,
    title: "Hypolimnas Bolina",
    src: "/Fauna/Serangga Optimized/Hypolimnas Bolina.webp",
    alt: "Hypolimnas Bolina",
    description: "",
  },
  {
    id: 64,
    title: "Macrodiplax cora",
    src: "/Fauna/Serangga Optimized/Macrodiplax cora.webp",
    alt: "Macrodiplax cora",
    description: "",
  },
  {
    id: 65,
    title: "Mocis undata",
    src: "/Fauna/Serangga Optimized/Mocis undata.webp",
    alt: "Mocis undata",
    description: "",
  },
  {
    id: 66,
    title: "Nacaduba biocellata",
    src: "/Fauna/Serangga Optimized/Nacaduba biocellata.webp",
    alt: "Nacaduba biocellata",
    description: "",
  },
  {
    id: 67,
    title: "Neptis hylas",
    src: "/Fauna/Serangga Optimized/Neptis hylas.webp",
    alt: "Neptis hylas",
    description: "",
  },
  {
    id: 68,
    title: "Neurothemis fluctuans",
    src: "/Fauna/Serangga Optimized/Neurothemis fluctuans.webp",
    alt: "Neurothemis fluctuans",
    description: "",
  },
  {
    id: 69,
    title: "Neurothemis ramburii",
    src: "/Fauna/Serangga Optimized/Neurothemis ramburii.webp",
    alt: "Neurothemis ramburii",
    description: "",
  },
  {
    id: 70,
    title: "Neurothemis terminata",
    src: "/Fauna/Serangga Optimized/Neurothemis terminata.webp",
    alt: "Neurothemis terminata",
    description: "",
  },
  {
    id: 71,
    title: "Oechophylla smaragdina",
    src: "/Fauna/Serangga Optimized/Oechophylla smaragdina.webp",
    alt: "Oechophylla smaragdina",
    description: "",
  },
  {
    id: 72,
    title: "Orthetrum sabina",
    src: "/Fauna/Serangga Optimized/Orthetrum sabina.webp",
    alt: "Orthetrum sabina",
    description: "",
  },
  {
    id: 73,
    title: "Orthetrum testaceum",
    src: "/Fauna/Serangga Optimized/Orthetrum testaceum.webp",
    alt: "Orthetrum testaceum",
    description: "",
  },
  {
    id: 74,
    title: "Oxya japonica",
    src: "/Fauna/Serangga Optimized/Oxya japonica.webp",
    alt: "Oxya japonica",
    description: "",
  },
  {
    id: 75,
    title: "Pagyda poeasalis",
    src: "/Fauna/Serangga Optimized/Pagyda poeasalis.webp",
    alt: "Pagyda poeasalis",
    description: "",
  },
  {
    id: 76,
    title: "Phlaeoba infumata",
    src: "/Fauna/Serangga Optimized/Phlaeoba infumata.webp",
    alt: "Phlaeoba infumata",
    description: "",
  },
  {
    id: 77,
    title: "Polytremis lubricans",
    src: "/Fauna/Serangga Optimized/Polytremis lubricans.webp",
    alt: "Polytremis lubricans",
    description: "",
  },
  {
    id: 78,
    title: "Potanthus omaha",
    src: "/Fauna/Serangga Optimized/Potanthus omaha.webp",
    alt: "Potanthus omaha",
    description: "",
  },
  {
    id: 79,
    title: "Provespa anomala",
    src: "/Fauna/Serangga Optimized/Provespa anomala.webp",
    alt: "Provespa anomala",
    description: "",
  },
  {
    id: 80,
    title: "Tropidomantis tenera",
    src: "/Fauna/Serangga Optimized/Tropidomantis tenera.webp",
    alt: "Tropidomantis tenera",
    description: "",
  },
  {
    id: 81,
    title: "Zizina otis",
    src: "/Fauna/Serangga Optimized/Zizina otis.webp",
    alt: "Zizina otis",
    description: "",
  },
];

// ===== TAB LIST =====
const tabList = [
  { key: "biota-air", label: "Biota air (Nekton)", data: faunaBiotaAir },
  { key: "burung", label: "Burung (Avifauna)", data: faunaBurung },
  { key: "Mamalia", label: "Mamalia", data: faunaMamalia },
  { key: "reptil-amfibi", label: "Reptil dan Amfibi", data: faunaReptilAmfibi },
  { key: "Serangga", label: "Serangga", data: faunaSerangga },
];

const ITEMS_PER_PAGE = 12; // Tampilkan 12 gambar per load

function GalleryContent({ data }: { data: typeof faunaBiotaAir }) {
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

export default function GaleriFaunaPage() {
  const [activeTab, setActiveTab] = useState(tabList[0].key);

  // Sinkronisasi hash -> state
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && tabList.some((t) => t.key === hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Saat tab berubah -> update hash di URL
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.history.replaceState(null, "", `#${value}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* JUDUL */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GALERI FAUNA
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              KAWASAN PLN CIRATA
            </h2>
          </div>

          {/* === TAB BAR === */}
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
                  className={`px-6 py-2 text-sm font-medium rounded-t-md transition-colors duration-200
                    ${
                      activeTab === tab.key
                        ? "bg-white border border-b-0 border-gray-300 text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* === KONTEN PER TAB === */}
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
