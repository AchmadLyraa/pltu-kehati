"use client";

import { useState } from "react";
import KehatiTableChart from "@/components/kehati-table-status";
import KehatiTableChart2 from "@/components/kehati-table-absolut";
import KehatiTableChart3 from "@/components/program-kehati";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const kehatiCategories = [
  { id: "status", name: "STATUS" },
  { id: "absolut", name: "ABSOLUT" },
  { id: "program", name: "PROGRAM" },
  { id: "rekap", name: "REKAP SDG" },
];

const rekapSDG = [
  { indikator: "Keanekaragaman Spesies", A: 88, B: 85, fullMark: 100 },
  { indikator: "Kualitas Habitat", A: 82, B: 78, fullMark: 100 },
  { indikator: "Konservasi", A: 90, B: 85, fullMark: 100 },
  { indikator: "Restorasi", A: 75, B: 70, fullMark: 100 },
  { indikator: "Edukasi", A: 95, B: 90, fullMark: 100 },
  { indikator: "Penelitian", A: 80, B: 75, fullMark: 100 },
];

export default function IndeksKehatiPage() {
  const [activeCategory, setActiveCategory] = useState("status");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              INDEKS KEANEKARAGAMAN KEHATI
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              KAWASAN PLN NUSANTARA POWER UP KALTIM TELUK
            </h2>
          </div>

          {/* Category Selection */}
          <div className="flex flex-wrap gap-4 mb-8">
            {kehatiCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-cyan-500 text-white"
                    : "bg-white text-cyan-500 border border-cyan-500 hover:bg-cyan-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Content based on active category */}
          {activeCategory === "status" && (
            <div className="space-y-6">
              <KehatiTableChart />
            </div>
          )}

          {activeCategory === "absolut" && (
            <div className="space-y-6">
              <KehatiTableChart2 />
            </div>
          )}

          {activeCategory === "program" && (
            <div className="space-y-6">
              <KehatiTableChart3 />
            </div>
          )}

          {activeCategory === "rekap" && (
            <div className="space-y-6">
              {/* Tabel SDG 15 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">SDG</CardTitle>
                  <CardDescription>
                    Target dan Capaian Indikator Keanekaragaman Hayati
                  </CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead
                          rowSpan={2}
                          className="border text-center align-middle"
                        >
                          Tujuan dan Indikator
                        </TableHead>
                        <TableHead colSpan={3} className="border text-center">
                          2023
                        </TableHead>
                        <TableHead colSpan={3} className="border text-center">
                          2024
                        </TableHead>
                        <TableHead colSpan={3} className="border text-center">
                          2025
                        </TableHead>
                      </TableRow>
                      <TableRow>
                        <TableHead className="border text-center">
                          Target
                        </TableHead>
                        <TableHead className="border text-center">
                          Capaian
                        </TableHead>
                        <TableHead className="border text-center">
                          Persentase
                        </TableHead>
                        <TableHead className="border text-center">
                          Target
                        </TableHead>
                        <TableHead className="border text-center">
                          Capaian
                        </TableHead>
                        <TableHead className="border text-center">
                          Persentase
                        </TableHead>
                        <TableHead className="border text-center">
                          Target
                        </TableHead>
                        <TableHead className="border text-center">
                          Capaian
                        </TableHead>
                        <TableHead className="border text-center">
                          Persentase
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          className="border bg-blue-100 font-semibold text-xs md:text-sm"
                        >
                          15.3 Pada tahun 2030, menghentikan penggurunan,
                          memulihkan lahan dan tanah kritis, termasuk lahan yang
                          terkena penggurunan, kekeringan, banjir, dan berusaha
                          mencapai dunia yang bebas dari lahan terdegradasi
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          className="border bg-gray-50 font-medium text-xs md:text-sm"
                        >
                          15.3.1 Proporsi lahan yang terdegradasi terhadap luas
                          lahan keseluruhan
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border text-xs md:text-sm">
                          Ha
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          450,000
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          2.41
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.0005%
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          475,000
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          2.41
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.0005%
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          528,000
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          2.41
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.0005%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          className="border bg-blue-100 font-semibold text-xs md:text-sm"
                        >
                          15.5 Melakukan tindakan cepat dan signifikan untuk
                          mengurangi degradasi habitat alami, menghentikan
                          kehilangan keanekaragaman hayati, dan, pada tahun
                          2030, melindungi dan mencegah kepunahan spesies yang
                          terancam punah
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          className="border bg-gray-50 font-medium text-xs md:text-sm"
                        >
                          15.5.1 Indeks daftar merah (Red-list index)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border text-xs md:text-sm">
                          Jenis
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          25
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.00
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.00%
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          25
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.00%
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          25
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          1
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          4.00%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          className="border bg-blue-100 font-semibold text-xs md:text-sm"
                        >
                          15.9 Pada tahun 2030, mengintegrasikan nilai-nilai
                          ekosistem dan keanekaragaman hayati ke dalam
                          perencanaan pembangunan nasional dan lokal, proses
                          pengurangan kemiskinan, dan strategi pembangunan
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          colSpan={10}
                          className="border bg-gray-50 font-medium text-xs md:text-sm"
                        >
                          15.9.1 Jumlah negara yang menetapkan target yang jelas
                          tentang integrasi nilai keanekaragaman hayati ke dalam
                          kebijakan nasional dan perencanaan pembangunan
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border text-xs md:text-sm">
                          Indeks (H')
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.40
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          2.73
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          681.91%
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.42
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          2.92
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          694.47%
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          0.44
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          3.58
                        </TableCell>
                        <TableCell className="border text-right text-xs md:text-sm">
                          814.27%
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="border text-xs md:text-sm">
                          Jumlah Program
                        </TableCell>
                        <TableCell
                          colSpan={3}
                          className="border text-center text-xs md:text-sm"
                        >
                          3
                        </TableCell>
                        <TableCell
                          colSpan={3}
                          className="border text-center text-xs md:text-sm"
                        >
                          3
                        </TableCell>
                        <TableCell
                          colSpan={3}
                          className="border text-center text-xs md:text-sm"
                        >
                          5
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Grafik Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Grafik 1: Proporsi lahan terdegradasi */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm md:text-base">
                      Capaian Kontribusi Program Terhadap SDG's
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Indikator Proporsi lahan yang terdegradasi terhadap luas
                      lahan keseluruhan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { tahun: "2023", capaian: 0.0005 },
                          { tahun: "2024", capaian: 0.0005 },
                          { tahun: "2025", capaian: 0.0005 },
                        ]}
                        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tahun" style={{ fontSize: "12px" }} />
                        <YAxis
                          domain={[0, 0.001]}
                          tickFormatter={(value) =>
                            `${(value * 100).toFixed(5)}%`
                          }
                          style={{ fontSize: "10px" }}
                        />
                        <Tooltip
                          formatter={(value) => `${(value * 100).toFixed(5)}%`}
                          contentStyle={{ fontSize: "12px" }}
                        />
                        <Bar
                          dataKey="capaian"
                          fill="#3b82f6"
                          label={{ position: "top", fontSize: 10 }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Grafik 2: Indeks daftar merah */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm md:text-base">
                      Capaian Kontribusi Program Terhadap SDG's
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Indikator Indeks daftar merah (Red-list index)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { tahun: "2023", capaian: 0 },
                          { tahun: "2024", capaian: 0 },
                          { tahun: "2025", capaian: 0.04 },
                        ]}
                        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tahun" style={{ fontSize: "12px" }} />
                        <YAxis
                          domain={[0, 0.05]}
                          style={{ fontSize: "10px" }}
                        />
                        <Tooltip contentStyle={{ fontSize: "12px" }} />
                        <Bar
                          dataKey="capaian"
                          fill="#3b82f6"
                          label={{ position: "top", fontSize: 10 }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Grafik 3: Integrasi nilai keanekaragaman */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm md:text-base">
                      Capaian Kontribusi Program Terhadap SDG's
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm">
                      Indikator Jumlah negara yang menetapkan target yang jelas
                      tentang integrasi nilai keanekaragaman hayati ke dalam
                      kebijakan nasional dan perencanaan pembangunan
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { tahun: "2023", capaian: 6.819057527344497 },
                          { tahun: "2024", capaian: 6.944696150194496 },
                          { tahun: "2025", capaian: 8.142696819127726 },
                        ]}
                        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tahun" style={{ fontSize: "12px" }} />
                        <YAxis domain={[6, 9]} style={{ fontSize: "10px" }} />
                        <Tooltip
                          formatter={(value) => value.toFixed(2)}
                          contentStyle={{ fontSize: "12px" }}
                        />
                        <Bar
                          dataKey="capaian"
                          fill="#3b82f6"
                          label={{
                            position: "top",
                            fontSize: 10,
                            formatter: (value) => value.toFixed(2),
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
