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
    src: "/Fauna/Biota air (Nekton)/Aurigequula fasciata.JPG",
    alt: "Aurigequula fasciata",
    description: "",
  },
  {
    id: 2,
    title: "Chanos chanos",
    src: "/Fauna/Biota air (Nekton)/Chanos chanos.JPG",
    alt: "Chanos chanos",
    description: "",
  },
  {
    id: 3,
    title: "Cloridopsis scorpio",
    src: "/Fauna/Biota air (Nekton)/Cloridopsis scorpio.JPG",
    alt: "Cloridopsis scorpio",
    description: "",
  },
  {
    id: 4,
    title: "Nuchequula gerreoides",
    src: "/Fauna/Biota air (Nekton)/Nuchequula gerreoides.JPG",
    alt: "Nuchequula gerreoides",
    description: "",
  },
  {
    id: 5,
    title: "Parambassis siamensis",
    src: "/Fauna/Biota air (Nekton)/Parambassis siamensis.JPG",
    alt: "Parambassis siamensis",
    description: "",
  },
  {
    id: 6,
    title: "Penaeus monodon",
    src: "/Fauna/Biota air (Nekton)/Penaeus monodon.JPG",
    alt: "Penaeus monodon",
    description: "",
  },
  {
    id: 7,
    title: "Planiliza subviridis",
    src: "/Fauna/Biota air (Nekton)/Planiliza subviridis.JPG",
    alt: "Planiliza subviridis",
    description: "",
  },
  {
    id: 8,
    title: "Portunus pelagicus",
    src: "/Fauna/Biota air (Nekton)/Portunus pelagicus.JPG",
    alt: "Portunus pelagicus",
    description: "",
  },
  {
    id: 9,
    title: "Sepiella inermis",
    src: "/Fauna/Biota air (Nekton)/Sepiella inermis.JPG",
    alt: "Sepiella inermis",
    description: "",
  },
  {
    id: 10,
    title: "Siganus sp",
    src: "/Fauna/Biota air (Nekton)/Siganus sp.JPG",
    alt: "Siganus sp",
    description: "",
  },
  {
    id: 11,
    title: "Terapon jarbua",
    src: "/Fauna/Biota air (Nekton)/Terapon jarbua.JPG",
    alt: "Terapon jarbua",
    description: "",
  },
  {
    id: 12,
    title: "Triacanthus biaculeatus",
    src: "/Fauna/Biota air (Nekton)/Triacanthus biaculeatus.JPG",
    alt: "Triacanthus biaculeatus",
    description: "",
  },
  {
    id: 13,
    title: "Upeneus vittatus",
    src: "/Fauna/Biota air (Nekton)/Upeneus vittatus.JPG",
    alt: "Upeneus vittatus",
    description: "",
  },
  {
    id: 14,
    title: "scylla serrata",
    src: "/Fauna/Biota air (Nekton)/scylla serrata.JPG",
    alt: "scylla serrata",
    description: "",
  },
];

// ===== DATA GALERI - Burung (Avifauna) =====
const faunaBurung = [
  {
    id: 15,
    title: "Blekok Sawah",
    src: "/Fauna/Burung (Avifauna)/Blekok Sawah.JPG",
    alt: "Blekok Sawah",
    description: "",
  },
  {
    id: 16,
    title: "Bondol Kalimantan",
    src: "/Fauna/Burung (Avifauna)/Bondol Kalimantan.JPG",
    alt: "Bondol Kalimantan",
    description: "",
  },
  {
    id: 17,
    title: "Burung Cabe Bunga Api",
    src: "/Fauna/Burung (Avifauna)/Burung Cabe Bunga Api.JPG",
    alt: "Burung Cabe Bunga Api",
    description: "",
  },
  {
    id: 18,
    title: "Burung Caladi Tilik",
    src: "/Fauna/Burung (Avifauna)/Burung Caladi Tilik.JPG",
    alt: "Burung Caladi Tilik",
    description: "",
  },
  {
    id: 19,
    title: "Burung Cekakak Sungai",
    src: "/Fauna/Burung (Avifauna)/Burung Cekakak Sungai.JPG",
    alt: "Burung Cekakak Sungai",
    description: "",
  },
  {
    id: 20,
    title: "Burung Cinenen Kelabu",
    src: "/Fauna/Burung (Avifauna)/Burung Cinenen Kelabu.JPG",
    alt: "Burung Cinenen Kelabu",
    description: "",
  },
  {
    id: 21,
    title: "Burung Ciung Air Kalimantan",
    src: "/Fauna/Burung (Avifauna)/Burung Ciung Air Kalimantan.JPG",
    alt: "Burung Ciung Air Kalimantan",
    description: "",
  },
  {
    id: 22,
    title: "Burung Cucak Kutilang",
    src: "/Fauna/Burung (Avifauna)/Burung Cucak Kutilang.JPG",
    alt: "Burung Cucak Kutilang",
    description: "",
  },
  {
    id: 23,
    title: "Burung Elang Bondol",
    src: "/Fauna/Burung (Avifauna)/Burung Elang Bondol.JPG",
    alt: "Burung Elang Bondol",
    description: "",
  },
  {
    id: 24,
    title: "Burung Gereja Erasia",
    src: "/Fauna/Burung (Avifauna)/Burung Gereja Erasia.JPG",
    alt: "Burung Gereja Erasia",
    description: "",
  },
  {
    id: 25,
    title: "Burung Kapasan Kemiri",
    src: "/Fauna/Burung (Avifauna)/Burung Kapasan Kemiri.JPG",
    alt: "Burung Kapasan Kemiri",
    description: "",
  },
  {
    id: 26,
    title: "Burung Kekep Babi",
    src: "/Fauna/Burung (Avifauna)/Burung Kekep Babi.JPG",
    alt: "Burung Kekep Babi",
    description: "",
  },
  {
    id: 27,
    title: "Burung Kerak Kerbau",
    src: "/Fauna/Burung (Avifauna)/Burung Kerak Kerbau.JPG",
    alt: "Burung Kerak Kerbau",
    description: "",
  },
  {
    id: 28,
    title: "Burung Kipasan Belang",
    src: "/Fauna/Burung (Avifauna)/Burung Kipasan Belang.JPG",
    alt: "Burung Kipasan Belang",
    description: "",
  },
  {
    id: 29,
    title: "Burung Kirik-Kirik Biru",
    src: "/Fauna/Burung (Avifauna)/Burung Kirik-Kirik Biru.JPG",
    alt: "Burung Kirik-Kirik Biru",
    description: "",
  },
  {
    id: 30,
    title: "Burung Kokokan Laut",
    src: "/Fauna/Burung (Avifauna)/Burung Kokokan Laut.JPG",
    alt: "Burung Kokokan Laut",
    description: "",
  },
  {
    id: 31,
    title: "Burung Madi Sepah Raja",
    src: "/Fauna/Burung (Avifauna)/Burung Madi Sepah Raja.JPG",
    alt: "Burung Madi Sepah Raja",
    description: "",
  },
  {
    id: 32,
    title: "Burung Madu Kelapa",
    src: "/Fauna/Burung (Avifauna)/Burung Madu Kelapa.JPG",
    alt: "Burung Madu Kelapa",
    description: "",
  },
  {
    id: 33,
    title: "Burung Merbah Belukar",
    src: "/Fauna/Burung (Avifauna)/Burung Merbah Belukar.JPG",
    alt: "Burung Merbah Belukar",
    description: "",
  },
  {
    id: 34,
    title: "Burung Merbah Cerukcuk",
    src: "/Fauna/Burung (Avifauna)/Burung Merbah Cerukcuk.JPG",
    alt: "Burung Merbah Cerukcuk",
    description: "",
  },
  {
    id: 35,
    title: "Burung Perling Kumbang",
    src: "/Fauna/Burung (Avifauna)/Burung Perling Kumbang.JPG",
    alt: "Burung Perling Kumbang",
    description: "",
  },
  {
    id: 36,
    title: "Burung Rametuk Laut",
    src: "/Fauna/Burung (Avifauna)/Burung Rametuk Laut.JPG",
    alt: "Burung Rametuk Laut",
    description: "",
  },
  {
    id: 37,
    title: "Burung Tekukur Biasa",
    src: "/Fauna/Burung (Avifauna)/Burung Tekukur Biasa.JPG",
    alt: "Burung Tekukur Biasa",
    description: "",
  },
  {
    id: 38,
    title: "Burung Trinil Pantai",
    src: "/Fauna/Burung (Avifauna)/Burung Trinil Pantai.JPG",
    alt: "Burung Trinil Pantai",
    description: "",
  },
];

// ===== DATA GALERI - Mamalia =====
const faunaMamalia = [
  {
    id: 39,
    title: "Bajing Kelapa (Callosciurus notatus)",
    src: "/Fauna/Mamalia/Bajing Kelapa (Callosciurus notatus).JPG",
    alt: "Bajing Kelapa (Callosciurus notatus)",
    description: "",
  },
  {
    id: 40,
    title: "Monyet beruk (Macaca nemestrina)",
    src: "/Fauna/Mamalia/Monyet beruk (Macaca nemestrina).JPG",
    alt: "Monyet beruk (Macaca nemestrina)",
    description: "",
  },
  {
    id: 41,
    title: "Monyet ekor panjang (Macaca fascicularis)",
    src: "/Fauna/Mamalia/Monyet ekor panjang (Macaca fascicularis).JPG",
    alt: "Monyet ekor panjang (Macaca fascicularis)",
    description: "",
  },
  {
    id: 42,
    title: "TUPAI TERCAT 1",
    src: "/Fauna/Mamalia/TUPAI TERCAT 1.jpg",
    alt: "TUPAI TERCAT 1",
    description: "",
  },
  {
    id: 43,
    title: "Tupai Indocina",
    src: "/Fauna/Mamalia/Tupai Indocina.JPG",
    alt: "Tupai Indocina",
    description: "",
  },
];

// ===== DATA GALERI - Reptil dan Amfibi =====
const faunaReptilAmfibi = [
  {
    id: 44,
    title: "Dassia vittata",
    src: "/Fauna/Reptil dan Amfibi/Dassia vittata.JPG",
    alt: "Dassia vittata",
    description: "",
  },
  {
    id: 45,
    title: "Duttaphrynus melanostictus",
    src: "/Fauna/Reptil dan Amfibi/Duttaphrynus melanostictus.JPG",
    alt: "Duttaphrynus melanostictus",
    description: "",
  },
];

// ===== DATA GALERI - Serangga =====
const faunaSerangga = [
  {
    id: 46,
    title: "Acisoma Panorpoides",
    src: "/Fauna/Serangga/Acisoma Panorpoides.JPG",
    alt: "Acisoma Panorpoides",
    description: "",
  },
  {
    id: 47,
    title: "Aetholix Flavibasalis",
    src: "/Fauna/Serangga/Aetholix Flavibasalis.JPG",
    alt: "Aetholix Flavibasalis",
    description: "",
  },
  {
    id: 48,
    title: "Agriocnemis Femina",
    src: "/Fauna/Serangga/Agriocnemis Femina.JPG",
    alt: "Agriocnemis Femina",
    description: "",
  },
  {
    id: 49,
    title: "Agrionoptera Insignis",
    src: "/Fauna/Serangga/Agrionoptera Insignis.JPG",
    alt: "Agrionoptera Insignis",
    description: "",
  },
  {
    id: 50,
    title: "Asota Heliconia",
    src: "/Fauna/Serangga/Asota Heliconia.JPG",
    alt: "Asota Heliconia",
    description: "",
  },
  {
    id: 51,
    title: "Bothrogonia Addita",
    src: "/Fauna/Serangga/Bothrogonia Addita.JPG",
    alt: "Bothrogonia Addita",
    description: "",
  },
  {
    id: 52,
    title: "Brachydiplax Chalybea",
    src: "/Fauna/Serangga/Brachydiplax Chalybea.JPG",
    alt: "Brachydiplax Chalybea",
    description: "",
  },
  {
    id: 53,
    title: "Ceriagrion Cerinorubellum",
    src: "/Fauna/Serangga/Ceriagrion Cerinorubellum.JPG",
    alt: "Ceriagrion Cerinorubellum",
    description: "",
  },
  {
    id: 54,
    title: "Chalciope Mygdon",
    src: "/Fauna/Serangga/Chalciope Mygdon.JPG",
    alt: "Chalciope Mygdon",
    description: "",
  },
  {
    id: 55,
    title: "Cnaphalocrocis Patnalis",
    src: "/Fauna/Serangga/Cnaphalocrocis Patnalis.JPG",
    alt: "Cnaphalocrocis Patnalis",
    description: "",
  },
  {
    id: 56,
    title: "Comibaena Attenuata",
    src: "/Fauna/Serangga/Comibaena Attenuata.JPG",
    alt: "Comibaena Attenuata",
    description: "",
  },
  {
    id: 57,
    title: "Cosmodela Aurulenta",
    src: "/Fauna/Serangga/Cosmodela Aurulenta.JPG",
    alt: "Cosmodela Aurulenta",
    description: "",
  },
  {
    id: 58,
    title: "Diplacodes Trivialis",
    src: "/Fauna/Serangga/Diplacodes Trivialis.JPG",
    alt: "Diplacodes Trivialis",
    description: "",
  },
  {
    id: 59,
    title: "Ercheia Cyllaria",
    src: "/Fauna/Serangga/Ercheia Cyllaria.JPG",
    alt: "Ercheia Cyllaria",
    description: "",
  },
  {
    id: 60,
    title: "Euchrysops Cnejus",
    src: "/Fauna/Serangga/Euchrysops Cnejus.JPG",
    alt: "Euchrysops Cnejus",
    description: "",
  },
  {
    id: 61,
    title: "Eurema Hecabe",
    src: "/Fauna/Serangga/Eurema Hecabe.JPG",
    alt: "Eurema Hecabe",
    description: "",
  },
  {
    id: 62,
    title: "Flammona Quadrifasciata",
    src: "/Fauna/Serangga/Flammona Quadrifasciata.JPG",
    alt: "Flammona Quadrifasciata",
    description: "",
  },
  {
    id: 63,
    title: "Hypolimnas Bolina",
    src: "/Fauna/Serangga/Hypolimnas Bolina.JPG",
    alt: "Hypolimnas Bolina",
    description: "",
  },
  {
    id: 64,
    title: "Macrodiplax cora",
    src: "/Fauna/Serangga/Macrodiplax cora.JPG",
    alt: "Macrodiplax cora",
    description: "",
  },
  {
    id: 65,
    title: "Mocis undata",
    src: "/Fauna/Serangga/Mocis undata.JPG",
    alt: "Mocis undata",
    description: "",
  },
  {
    id: 66,
    title: "Nacaduba biocellata",
    src: "/Fauna/Serangga/Nacaduba biocellata.JPG",
    alt: "Nacaduba biocellata",
    description: "",
  },
  {
    id: 67,
    title: "Neptis hylas",
    src: "/Fauna/Serangga/Neptis hylas.JPG",
    alt: "Neptis hylas",
    description: "",
  },
  {
    id: 68,
    title: "Neurothemis fluctuans",
    src: "/Fauna/Serangga/Neurothemis fluctuans.JPG",
    alt: "Neurothemis fluctuans",
    description: "",
  },
  {
    id: 69,
    title: "Neurothemis ramburii",
    src: "/Fauna/Serangga/Neurothemis ramburii.JPG",
    alt: "Neurothemis ramburii",
    description: "",
  },
  {
    id: 70,
    title: "Neurothemis terminata",
    src: "/Fauna/Serangga/Neurothemis terminata.JPG",
    alt: "Neurothemis terminata",
    description: "",
  },
  {
    id: 71,
    title: "Oechophylla smaragdina",
    src: "/Fauna/Serangga/Oechophylla smaragdina.JPG",
    alt: "Oechophylla smaragdina",
    description: "",
  },
  {
    id: 72,
    title: "Orthetrum sabina",
    src: "/Fauna/Serangga/Orthetrum sabina.JPG",
    alt: "Orthetrum sabina",
    description: "",
  },
  {
    id: 73,
    title: "Orthetrum testaceum",
    src: "/Fauna/Serangga/Orthetrum testaceum.JPG",
    alt: "Orthetrum testaceum",
    description: "",
  },
  {
    id: 74,
    title: "Oxya japonica",
    src: "/Fauna/Serangga/Oxya japonica.JPG",
    alt: "Oxya japonica",
    description: "",
  },
  {
    id: 75,
    title: "Pagyda poeasalis",
    src: "/Fauna/Serangga/Pagyda poeasalis.JPG",
    alt: "Pagyda poeasalis",
    description: "",
  },
  {
    id: 76,
    title: "Phlaeoba infumata",
    src: "/Fauna/Serangga/Phlaeoba infumata.JPG",
    alt: "Phlaeoba infumata",
    description: "",
  },
  {
    id: 77,
    title: "Polytremis lubricans",
    src: "/Fauna/Serangga/Polytremis lubricans.JPG",
    alt: "Polytremis lubricans",
    description: "",
  },
  {
    id: 78,
    title: "Potanthus omaha",
    src: "/Fauna/Serangga/Potanthus omaha.JPG",
    alt: "Potanthus omaha",
    description: "",
  },
  {
    id: 79,
    title: "Provespa anomala",
    src: "/Fauna/Serangga/Provespa anomala.JPG",
    alt: "Provespa anomala",
    description: "",
  },
  {
    id: 80,
    title: "Tropidomantis tenera",
    src: "/Fauna/Serangga/Tropidomantis tenera.JPG",
    alt: "Tropidomantis tenera",
    description: "",
  },
  {
    id: 81,
    title: "Zizina otis",
    src: "/Fauna/Serangga/Zizina otis.JPG",
    alt: "Zizina otis",
    description: "",
  },
];

// ===== TAB LIST =====
const tabList = [
  { key: "biota-air", label: "Biota air (Nekton)", data: faunaBiotaAir },
  { key: "burung", label: "Burung (Avifauna)", data: faunaBurung },
  { key: "mamalia", label: "Mamalia", data: faunaMamalia },
  { key: "reptil-amfibi", label: "Reptil dan Amfibi", data: faunaReptilAmfibi },
  { key: "serangga", label: "Serangga", data: faunaSerangga },
];

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
            <Tabs.List className="flex justify-center gap-4 border-b border-gray-300 mb-8">
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
