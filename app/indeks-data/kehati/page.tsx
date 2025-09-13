"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
} from "recharts"

const kehatiCategories = [
  { id: "status", name: "STATUS" },
  { id: "absolut", name: "ABSOLUT" },
  { id: "program", name: "PROGRAM" },
  { id: "sdgs", name: "SDGS" },
  { id: "rekap", name: "REKAP SDG" },
]

const statusData = [
  { kategori: "Flora", jumlahSpesies: 127, shannonIndex: 3.45, simpsonIndex: 0.9, status: "Baik" },
  { kategori: "Fauna", jumlahSpesies: 184, shannonIndex: 3.78, simpsonIndex: 0.92, status: "Sangat Baik" },
  { kategori: "Mikroorganisme", jumlahSpesies: 89, shannonIndex: 2.98, simpsonIndex: 0.82, status: "Baik" },
]

const absolutData = [
  { tahun: "2020", flora: 118, fauna: 166, mikroorganisme: 78, total: 362 },
  { tahun: "2021", flora: 122, fauna: 172, mikroorganisme: 82, total: 376 },
  { tahun: "2022", flora: 125, fauna: 178, mikroorganisme: 85, total: 388 },
  { tahun: "2023", flora: 127, fauna: 182, mikroorganisme: 87, total: 396 },
  { tahun: "2024", flora: 127, fauna: 184, mikroorganisme: 89, total: 400 },
]

const programData = [
  { program: "Monitoring Rutin", target: 100, realisasi: 95, efektivitas: 95 },
  { program: "Restorasi Habitat", target: 80, realisasi: 78, efektivitas: 97.5 },
  { program: "Konservasi Ex-situ", target: 60, realisasi: 52, efektivitas: 86.7 },
  { program: "Edukasi Masyarakat", target: 120, realisasi: 118, efektivitas: 98.3 },
  { program: "Penelitian Kolaboratif", target: 40, realisasi: 35, efektivitas: 87.5 },
]

const sdgsData = [
  { sdg: "SDG 6", nama: "Air Bersih", skor: 85, target: 90 },
  { sdg: "SDG 13", nama: "Aksi Iklim", skor: 78, target: 85 },
  { sdg: "SDG 14", nama: "Kehidupan Bawah Air", skor: 72, target: 80 },
  { sdg: "SDG 15", nama: "Kehidupan Darat", skor: 88, target: 90 },
]

const rekapSDG = [
  { indikator: "Keanekaragaman Spesies", A: 88, B: 85, fullMark: 100 },
  { indikator: "Kualitas Habitat", A: 82, B: 78, fullMark: 100 },
  { indikator: "Konservasi", A: 90, B: 85, fullMark: 100 },
  { indikator: "Restorasi", A: 75, B: 70, fullMark: 100 },
  { indikator: "Edukasi", A: 95, B: 90, fullMark: 100 },
  { indikator: "Penelitian", A: 80, B: 75, fullMark: 100 },
]

export default function IndeksKehatiPage() {
  const [activeCategory, setActiveCategory] = useState("status")

  const getStatusBadge = (status: string) => {
    const variants = {
      "Sangat Baik": "bg-green-100 text-green-800",
      Baik: "bg-blue-100 text-blue-800",
      Cukup: "bg-yellow-100 text-yellow-800",
      Kurang: "bg-red-100 text-red-800",
    }
    return <Badge className={variants[status as keyof typeof variants]}>{status}</Badge>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">INDEKS KEANEKARAGAMAN KEHATI</h1>
            <h2 className="text-2xl font-semibold text-gray-700">KAWASAN PLN CIRATA</h2>
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
              <Card>
                <CardHeader>
                  <CardTitle>Status Keanekaragaman Hayati</CardTitle>
                  <CardDescription>Indeks keanekaragaman berdasarkan kategori organisme</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Jumlah Spesies</TableHead>
                        <TableHead>Indeks Shannon</TableHead>
                        <TableHead>Indeks Simpson</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {statusData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.kategori}</TableCell>
                          <TableCell>{item.jumlahSpesies}</TableCell>
                          <TableCell>{item.shannonIndex}</TableCell>
                          <TableCell>{item.simpsonIndex}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Spesies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">400</div>
                    <p className="text-sm text-gray-500">spesies tercatat</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Rata-rata Shannon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">3.40</div>
                    <p className="text-sm text-gray-500">indeks keanekaragaman</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Rata-rata Simpson</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600">0.88</div>
                    <p className="text-sm text-gray-500">indeks dominansi</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeCategory === "absolut" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Absolut Keanekaragaman (2020-2024)</CardTitle>
                  <CardDescription>Jumlah spesies yang tercatat per tahun</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={absolutData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tahun" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="flora" stroke="#10b981" name="Flora" strokeWidth={2} />
                      <Line type="monotone" dataKey="fauna" stroke="#3b82f6" name="Fauna" strokeWidth={2} />
                      <Line
                        type="monotone"
                        dataKey="mikroorganisme"
                        stroke="#f59e0b"
                        name="Mikroorganisme"
                        strokeWidth={2}
                      />
                      <Line type="monotone" dataKey="total" stroke="#ef4444" name="Total" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tabel Data Absolut</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tahun</TableHead>
                        <TableHead>Flora</TableHead>
                        <TableHead>Fauna</TableHead>
                        <TableHead>Mikroorganisme</TableHead>
                        <TableHead>Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {absolutData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.tahun}</TableCell>
                          <TableCell>{item.flora}</TableCell>
                          <TableCell>{item.fauna}</TableCell>
                          <TableCell>{item.mikroorganisme}</TableCell>
                          <TableCell className="font-bold">{item.total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeCategory === "program" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Efektivitas Program Konservasi</CardTitle>
                  <CardDescription>Perbandingan target dan realisasi program</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={programData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="program" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="target" fill="#94a3b8" name="Target" />
                      <Bar dataKey="realisasi" fill="#3b82f6" name="Realisasi" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detail Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {programData.map((program, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{program.program}</h4>
                          <Badge className="bg-blue-100 text-blue-800">{program.efektivitas}%</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Target: {program.target}</span>
                            <span>Realisasi: {program.realisasi}</span>
                          </div>
                          <Progress value={program.efektivitas} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeCategory === "sdgs" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pencapaian SDGs Terkait Keanekaragaman Hayati</CardTitle>
                  <CardDescription>Skor pencapaian vs target SDGs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {sdgsData.map((sdg, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h4 className="font-medium">
                              {sdg.sdg}: {sdg.nama}
                            </h4>
                            <p className="text-sm text-gray-500">
                              Skor: {sdg.skor} / Target: {sdg.target}
                            </p>
                          </div>
                          <Badge
                            className={
                              sdg.skor >= sdg.target ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {((sdg.skor / sdg.target) * 100).toFixed(1)}%
                          </Badge>
                        </div>
                        <Progress value={(sdg.skor / sdg.target) * 100} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grafik Pencapaian SDGs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sdgsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sdg" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="skor" fill="#3b82f6" name="Skor Saat Ini" />
                      <Bar dataKey="target" fill="#94a3b8" name="Target" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}

          {activeCategory === "rekap" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rekap Pencapaian SDGs</CardTitle>
                  <CardDescription>Radar chart perbandingan pencapaian berbagai indikator</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={rekapSDG}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="indikator" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Pencapaian 2024" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                      <Radar name="Target 2025" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>SDG 6</CardTitle>
                    <CardDescription>Air Bersih</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <Progress value={85} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>SDG 13</CardTitle>
                    <CardDescription>Aksi Iklim</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">78%</div>
                    <Progress value={78} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>SDG 14</CardTitle>
                    <CardDescription>Kehidupan Bawah Air</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-cyan-600">72%</div>
                    <Progress value={72} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>SDG 15</CardTitle>
                    <CardDescription>Kehidupan Darat</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-emerald-600">88%</div>
                    <Progress value={88} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
