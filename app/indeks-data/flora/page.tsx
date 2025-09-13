"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

const floraData = [
  {
    id: 1,
    scientificName: "Ficus benjamina",
    commonName: "Beringin",
    family: "Moraceae",
    status: "Stabil",
    habitat: "Hutan Sekunder",
    abundance: 45,
  },
  {
    id: 2,
    scientificName: "Swietenia mahagoni",
    commonName: "Mahoni",
    family: "Meliaceae",
    status: "Stabil",
    habitat: "Area Terbuka",
    abundance: 32,
  },
  {
    id: 3,
    scientificName: "Tectona grandis",
    commonName: "Jati",
    family: "Lamiaceae",
    status: "Perlu Perhatian",
    habitat: "Hutan Sekunder",
    abundance: 28,
  },
  {
    id: 4,
    scientificName: "Albizia saman",
    commonName: "Trembesi",
    family: "Fabaceae",
    status: "Stabil",
    habitat: "Area Terbuka",
    abundance: 38,
  },
  {
    id: 5,
    scientificName: "Pterocarpus indicus",
    commonName: "Angsana",
    family: "Fabaceae",
    status: "Terancam",
    habitat: "Zona Riparian",
    abundance: 15,
  },
  {
    id: 6,
    scientificName: "Samanea saman",
    commonName: "Ki Hujan",
    family: "Fabaceae",
    status: "Stabil",
    habitat: "Area Terbuka",
    abundance: 42,
  },
  {
    id: 7,
    scientificName: "Cassia siamea",
    commonName: "Johar",
    family: "Fabaceae",
    status: "Stabil",
    habitat: "Hutan Sekunder",
    abundance: 35,
  },
  {
    id: 8,
    scientificName: "Leucaena leucocephala",
    commonName: "Petai Cina",
    family: "Fabaceae",
    status: "Stabil",
    habitat: "Area Terbuka",
    abundance: 55,
  },
]

const habitatDistribution = [
  { name: "Hutan Sekunder", value: 108, color: "#10b981" },
  { name: "Area Terbuka", value: 167, color: "#3b82f6" },
  { name: "Zona Riparian", value: 45, color: "#f59e0b" },
]

const conservationStatus = [
  { name: "Stabil", value: 85, color: "#10b981" },
  { name: "Perlu Perhatian", value: 12, color: "#f59e0b" },
  { name: "Terancam", value: 3, color: "#ef4444" },
]

const diversityTrend = [
  { year: "2020", shannon: 3.12, simpson: 0.85 },
  { year: "2021", shannon: 3.28, simpson: 0.87 },
  { year: "2022", shannon: 3.35, simpson: 0.88 },
  { year: "2023", shannon: 3.42, simpson: 0.89 },
  { year: "2024", shannon: 3.45, simpson: 0.9 },
]

export default function IndeksFloraPage() {
  const [activeTab, setActiveTab] = useState("data")

  const getStatusBadge = (status: string) => {
    const variants = {
      Stabil: "bg-green-100 text-green-800",
      "Perlu Perhatian": "bg-yellow-100 text-yellow-800",
      Terancam: "bg-red-100 text-red-800",
    }
    return <Badge className={variants[status as keyof typeof variants]}>{status}</Badge>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">INDEKS KEANEKARAGAMAN FLORA</h1>
            <h2 className="text-2xl font-semibold text-gray-700">KAWASAN PLN CIRATA</h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="data">Data Spesies</TabsTrigger>
              <TabsTrigger value="distribusi">Distribusi Habitat</TabsTrigger>
              <TabsTrigger value="konservasi">Status Konservasi</TabsTrigger>
              <TabsTrigger value="trend">Trend Keanekaragaman</TabsTrigger>
            </TabsList>

            <TabsContent value="data" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Spesies Flora</CardTitle>
                  <CardDescription>Daftar lengkap spesies flora yang ditemukan di kawasan PLN Cirata</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nama Ilmiah</TableHead>
                        <TableHead>Nama Umum</TableHead>
                        <TableHead>Famili</TableHead>
                        <TableHead>Habitat</TableHead>
                        <TableHead>Kelimpahan</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {floraData.map((species) => (
                        <TableRow key={species.id}>
                          <TableCell className="font-medium italic">{species.scientificName}</TableCell>
                          <TableCell>{species.commonName}</TableCell>
                          <TableCell>{species.family}</TableCell>
                          <TableCell>{species.habitat}</TableCell>
                          <TableCell>{species.abundance}</TableCell>
                          <TableCell>{getStatusBadge(species.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="distribusi" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribusi Berdasarkan Habitat</CardTitle>
                    <CardDescription>Jumlah spesies per tipe habitat</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={habitatDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {habitatDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Kelimpahan per Habitat</CardTitle>
                    <CardDescription>Grafik batang distribusi spesies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={habitatDistribution}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="konservasi" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Status Konservasi</CardTitle>
                    <CardDescription>Persentase spesies berdasarkan status konservasi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={conservationStatus}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {conservationStatus.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ringkasan Status</CardTitle>
                    <CardDescription>Detail status konservasi flora</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {conservationStatus.map((status) => (
                      <div key={status.name} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: status.color }}></div>
                          <span className="font-medium">{status.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{status.value}%</div>
                          <div className="text-sm text-gray-500">dari total spesies</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trend" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trend Indeks Keanekaragaman</CardTitle>
                  <CardDescription>Perkembangan indeks Shannon dan Simpson dari tahun 2020-2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={diversityTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="shannon" stroke="#3b82f6" name="Indeks Shannon" strokeWidth={2} />
                      <Line type="monotone" dataKey="simpson" stroke="#10b981" name="Indeks Simpson" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Spesies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">127</div>
                    <p className="text-sm text-gray-500">spesies tercatat</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Indeks Shannon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">3.45</div>
                    <p className="text-sm text-gray-500">nilai terkini 2024</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Indeks Simpson</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600">0.90</div>
                    <p className="text-sm text-gray-500">nilai terkini 2024</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
