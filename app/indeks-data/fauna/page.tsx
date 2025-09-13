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
  LineChart,
  Line,
} from "recharts"

const faunaCategories = [
  { id: "arthropoda", name: "Arthropoda", count: 89 },
  { id: "burung", name: "Burung", count: 45 },
  { id: "herpetofauna", name: "Herpetofauna", count: 32 },
  { id: "mamalia", name: "Mamalia", count: 18 },
]

const arthropodaData = [
  {
    id: 1,
    scientificName: "Tachygraphus sommaderi",
    order: "Araneae",
    family: "Lycosidae",
    status: "Stabil",
    abundance: 25,
  },
  { id: 2, scientificName: "Caryanda spuria", order: "Araneae", family: "Salticidae", status: "Stabil", abundance: 18 },
  {
    id: 3,
    scientificName: "Gyphinopsis brevilobatus",
    order: "Araneae",
    family: "Thomisidae",
    status: "Perlu Perhatian",
    abundance: 12,
  },
  {
    id: 4,
    scientificName: "Thelyphonus asperatus",
    order: "Uropygi",
    family: "Thelyphonidae",
    status: "Stabil",
    abundance: 8,
  },
  {
    id: 5,
    scientificName: "Lychas mucronatus",
    order: "Scorpiones",
    family: "Buthidae",
    status: "Terancam",
    abundance: 5,
  },
  {
    id: 6,
    scientificName: "Tegenaria domestica",
    order: "Araneae",
    family: "Agelenidae",
    status: "Stabil",
    abundance: 21,
  },
]

const populationTrend = [
  { year: "2020", arthropoda: 82, burung: 41, herpetofauna: 28, mamalia: 15 },
  { year: "2021", arthropoda: 85, burung: 43, herpetofauna: 30, mamalia: 16 },
  { year: "2022", arthropoda: 87, burung: 44, herpetofauna: 31, mamalia: 17 },
  { year: "2023", arthropoda: 88, burung: 45, herpetofauna: 32, mamalia: 18 },
  { year: "2024", arthropoda: 89, burung: 45, herpetofauna: 32, mamalia: 18 },
]

const habitatPreference = [
  { habitat: "Hutan Sekunder", arthropoda: 35, burung: 28, herpetofauna: 20, mamalia: 12 },
  { habitat: "Area Terbuka", arthropoda: 25, burung: 12, herpetofauna: 8, mamalia: 4 },
  { habitat: "Zona Riparian", arthropoda: 29, burung: 5, herpetofauna: 4, mamalia: 2 },
]

export default function IndeksFaunaPage() {
  const [activeCategory, setActiveCategory] = useState("arthropoda")
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">INDEKS KEANEKARAGAMAN FAUNA</h1>
            <h2 className="text-2xl font-semibold text-gray-700">KAWASAN PLN CIRATA</h2>
          </div>

          {/* Category Selection */}
          <div className="flex flex-wrap gap-4 mb-8">
            {faunaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-cyan-500 text-white"
                    : "bg-white text-cyan-500 border border-cyan-500 hover:bg-cyan-50"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="data">Data Spesies</TabsTrigger>
              <TabsTrigger value="populasi">Trend Populasi</TabsTrigger>
              <TabsTrigger value="habitat">Preferensi Habitat</TabsTrigger>
              <TabsTrigger value="ringkasan">Ringkasan</TabsTrigger>
            </TabsList>

            <TabsContent value="data" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Spesies {faunaCategories.find((c) => c.id === activeCategory)?.name}</CardTitle>
                  <CardDescription>Daftar spesies yang ditemukan di kawasan PLN Cirata</CardDescription>
                </CardHeader>
                <CardContent>
                  {activeCategory === "arthropoda" && (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nama Ilmiah</TableHead>
                          <TableHead>Ordo</TableHead>
                          <TableHead>Famili</TableHead>
                          <TableHead>Kelimpahan</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {arthropodaData.map((species) => (
                          <TableRow key={species.id}>
                            <TableCell className="font-medium italic">{species.scientificName}</TableCell>
                            <TableCell>{species.order}</TableCell>
                            <TableCell>{species.family}</TableCell>
                            <TableCell>{species.abundance}</TableCell>
                            <TableCell>{getStatusBadge(species.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                  {activeCategory !== "arthropoda" && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">
                        Data untuk kategori {faunaCategories.find((c) => c.id === activeCategory)?.name} sedang dalam
                        proses pengumpulan.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="populasi" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trend Populasi Fauna (2020-2024)</CardTitle>
                  <CardDescription>Perkembangan jumlah spesies per kategori</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={populationTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="arthropoda" stroke="#3b82f6" name="Arthropoda" strokeWidth={2} />
                      <Line type="monotone" dataKey="burung" stroke="#10b981" name="Burung" strokeWidth={2} />
                      <Line
                        type="monotone"
                        dataKey="herpetofauna"
                        stroke="#f59e0b"
                        name="Herpetofauna"
                        strokeWidth={2}
                      />
                      <Line type="monotone" dataKey="mamalia" stroke="#ef4444" name="Mamalia" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="habitat" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Habitat Fauna</CardTitle>
                  <CardDescription>Jumlah spesies per tipe habitat berdasarkan kategori</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={habitatPreference}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="habitat" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="arthropoda" fill="#3b82f6" name="Arthropoda" />
                      <Bar dataKey="burung" fill="#10b981" name="Burung" />
                      <Bar dataKey="herpetofauna" fill="#f59e0b" name="Herpetofauna" />
                      <Bar dataKey="mamalia" fill="#ef4444" name="Mamalia" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ringkasan" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {faunaCategories.map((category) => (
                  <Card key={category.id}>
                    <CardHeader>
                      <CardTitle>{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">{category.count}</div>
                      <p className="text-sm text-gray-500">spesies tercatat</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Total Keanekaragaman Fauna</CardTitle>
                  <CardDescription>Ringkasan indeks keanekaragaman</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">184</div>
                      <div className="text-sm text-gray-600">Total Spesies</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">3.78</div>
                      <div className="text-sm text-gray-600">Indeks Shannon</div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">0.92</div>
                      <div className="text-sm text-gray-600">Indeks Simpson</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
