"use client";
import bentengMangroveData, {
  deskripsiProgram,
  metodePerhitungan,
} from "@/data/bentengMangroveData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { AdvancedImageModal } from "@/components/advanced-image-modal";

type Row = {
  no: number;
  namaLokal: string;
  namaIlmiah: string | null;
  jumlah: number;
  pi: number | null;
  lnPi: number | null;
  piLnPi: number | null;
};
type Block = { species: Row[]; akumulasiSpesies: number; indeksH: number };
type YearBlock = Block & { fauna?: Block };

const dokumentasiItems = [
  {
    id: 1,
    title: "Material FABA",
    src: "/program-kehati/benteng-mangrove-1.jpeg",
    alt: "Tumpukan material FABA",
    description: "Material FABA (Fly Ash and Bottom Ash) untuk bahan penahan ombak",
  },
  {
    id: 2,
    title: "Pengolahan FABA",
    src: "/program-kehati/benteng-mangrove-2.jpeg",
    alt: "Petugas mengolah material FABA",
    description: "Petugas mengolah material FABA di area pengecoran",
  },
  {
    id: 3,
    title: "Penahan Ombak FABA",
    src: "/program-kehati/benteng-mangrove-3.jpeg",
    alt: "Cetakan penahan ombak silinder dari FABA",
    description: "Penahan ombak berbentuk silinder berongga hasil cetakan FABA",
  },
  {
    id: 4,
    title: "Penanaman Mangrove",
    src: "/program-kehati/benteng-mangrove-4.jpeg",
    alt: "Penanaman mangrove di area pesisir",
    description: "Kegiatan penanaman mangrove di area pesisir",
  },
];

function BlockTable({ title, block }: { title: string; block: Block }) {
  return (
    <div className="mt-6 first:mt-0">
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="rounded-md border overflow-auto max-h-[600px]">
        <table className="w-full border-collapse text-sm bg-white">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-3 py-2 font-medium">No</th>
              <th className="border border-gray-300 px-3 py-2 font-medium">Nama Lokal</th>
              <th className="border border-gray-300 px-3 py-2 font-medium">Nama Ilmiah</th>
              <th className="border border-gray-300 px-3 py-2 text-right font-medium">Jumlah</th>
              <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pi</th>
              <th className="border border-gray-300 px-3 py-2 text-right font-medium">Ln Pi</th>
              <th className="border border-gray-300 px-3 py-2 text-right font-medium">Pi Ln Pi</th>
            </tr>
          </thead>
          <tbody>
            {block.species.map((row) => (
              <tr key={row.no} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-3 py-2 text-center">{row.no}</td>
                <td className="border border-gray-300 px-3 py-2">{row.namaLokal}</td>
                <td className="border border-gray-300 px-3 py-2 italic text-gray-700">{row.namaIlmiah}</td>
                <td className="border border-gray-300 px-3 py-2 text-right font-mono">{row.jumlah}</td>
                <td className="border border-gray-300 px-3 py-2 text-right font-mono">{(row.pi ?? 0).toFixed(3)}</td>
                <td className="border border-gray-300 px-3 py-2 text-right font-mono">{(row.lnPi ?? 0).toFixed(3)}</td>
                <td className="border border-gray-300 px-3 py-2 text-right font-mono">{(row.piLnPi ?? 0).toFixed(3)}</td>
              </tr>
            ))}
            <tr className="font-semibold bg-blue-50 border-t-2 border-blue-200">
              <td colSpan={3} className="border border-gray-300 px-3 py-2 text-blue-800">
                Akumulasi Spesies
              </td>
              <td className="border border-gray-300 px-3 py-2 text-right font-mono text-blue-800">
                {block.akumulasiSpesies}
              </td>
              <td colSpan={3} className="border border-gray-300 px-3 py-2 text-right font-mono text-blue-800">
                Indeks H′ = {block.indeksH}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BentengMangrovePage() {
  const data = bentengMangroveData as Record<string, YearBlock>;
  const years = Object.keys(data);

  return (
    <Card className="p-4 shadow-lg rounded-2xl">
      {/* Deskripsi Program */}
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Deskripsi Program</h3>
          <div className="space-y-3 text-sm text-blue-700 leading-relaxed">
            {deskripsiProgram.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-800 mb-2">Metode Perhitungan Absolut</h3>
          <div className="space-y-2 text-sm text-green-700">
            {metodePerhitungan.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs untuk Data */}
      <Tabs defaultValue={years[years.length - 1]}>
        <TabsList className="grid h-auto grid-cols-3 gap-2 mb-4 sm:grid-cols-6">
          {years.map((year) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {years.map((year) => {
          const { species, akumulasiSpesies, indeksH, fauna } = data[year];
          return (
            <TabsContent key={year} value={year}>
              <BlockTable title={`Flora (${year})`} block={{ species, akumulasiSpesies, indeksH }} />
              {fauna && <BlockTable title={`Fauna (${year})`} block={fauna} />}
              {year.endsWith("*") && (
                <p className="mt-2 text-xs text-gray-500">*Data periode Januari–Juni 2026</p>
              )}
            </TabsContent>
          );
        })}
      </Tabs>

      {/* Dokumentasi */}
      <div className="mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">Dokumentasi</h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            Dokumentasi kegiatan pelaksanaan program penahan ombak berbahan FABA dan penanaman mangrove.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dokumentasiItems.map((item, index) => (
            <AdvancedImageModal
              key={item.id}
              images={dokumentasiItems}
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
    </Card>
  );
}
