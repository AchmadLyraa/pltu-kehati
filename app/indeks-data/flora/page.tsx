"use client";
import { useState } from "react";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Navbar } from "@/components/navbar";
import { floraData } from "@/data/flora.js";

export default function IndeksFloraPage() {
  const [activeTab, setActiveTab] = useState("faba-disposal");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              INDEKS KEANEKARAGAMAN FLORA KAWASAN
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              PT PLN NUSANTARA POWER UP KALTIM TELUK
            </h2>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 pb-24 sm:pb-16 md:pb-1">
              <TabsTrigger value="faba-disposal">FABA Disposal</TabsTrigger>
              <TabsTrigger value="eks-adhi">EKS Adhi Karya</TabsTrigger>
              <TabsTrigger value="helipad">Helipad</TabsTrigger>
              <TabsTrigger value="outfall">Outfall & Pembangkit</TabsTrigger>
              <TabsTrigger value="konservasi-pohon">
                Status Konservasi
              </TabsTrigger>
            </TabsList>

            {Object.entries(floraData).map(([key, area]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                <div className="space-y-6">
                  {key === "konservasi-pohon" ? (
                    <>
                      {/* Chart Section untuk konservasi-pohon */}
                      <div>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg font-bold text-center">
                              Indeks Jenis Pohon di Wilayah PT PLN Nusantara
                              Power
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ResponsiveContainer width="100%" height={400}>
                              <BarChart
                                data={area.chartData}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 60,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                  dataKey="name"
                                  fontSize={12}
                                  label={{
                                    value: "Lokasi Studi",
                                    position: "insideBottom",
                                    offset: -50,
                                  }}
                                />
                                {"vadas"}
                                <YAxis
                                  label={{
                                    value: "Nilai Indeks",
                                    angle: -90,
                                    position: "insideLeft",
                                  }}
                                  fontSize={10}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar
                                  dataKey="kekayaan"
                                  fill="#3b82f6"
                                  name="Kekayaan (R)"
                                  radius={[2, 2, 0, 0]}
                                />
                                <Bar
                                  dataKey="keanekaragaman"
                                  fill="#f97316"
                                  name="Keanekaragaman (H')"
                                  radius={[2, 2, 0, 0]}
                                />
                                <Bar
                                  dataKey="kemerataan"
                                  fill="#6b7280"
                                  name="Kemerataan (E)"
                                  radius={[2, 2, 0, 0]}
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Table Section untuk konservasi-pohon */}
                      <div>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg font-bold text-center">
                              {area.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="overflow-x-auto">
                              <table className="min-w-full bg-white border border-gray-300">
                                <thead className="bg-blue-50">
                                  <tr className="border-b-2 border-gray-300">
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      No
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      Nama Jenis
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      Famili
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      IUCN
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      CITES
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700">
                                      P.106
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white">
                                  {area.data.map((species, index) => (
                                    <tr
                                      key={index}
                                      className="border-b border-gray-200 hover:bg-gray-50"
                                    >
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.no}
                                      </td>
                                      <td className="px-3 py-2 text-xs italic border-r border-gray-200">
                                        {species.namaJenis}
                                      </td>
                                      <td className="px-3 py-2 text-xs border-r border-gray-200">
                                        {species.family}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.iucn}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.cites}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center">
                                        {species.p106}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Chart Section untuk tab lain */}
                      <div>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-sm font-bold text-center">
                              {area.title}
                            </CardTitle>
                            <div className="text-center">
                              <p className="text-xs text-gray-600 mb-2">
                                Nama Jenis
                              </p>
                              <p className="text-xs font-medium text-gray-800">
                                NPI (%)
                              </p>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <ResponsiveContainer width="100%" height={400}>
                              <BarChart
                                data={area.chartData}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 80,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                  dataKey="name"
                                  angle={-45}
                                  textAnchor="end"
                                  height={80}
                                  interval={0}
                                  fontSize={10}
                                />
                                <YAxis
                                  label={{
                                    value: "NPI (%)",
                                    angle: -90,
                                    position: "insideLeft",
                                  }}
                                  fontSize={10}
                                />
                                <Tooltip
                                  formatter={(value) => [`${value}%`, "NPI"]}
                                  labelFormatter={(label) =>
                                    `Spesies: ${label}`
                                  }
                                />
                                <Bar
                                  dataKey="npi"
                                  fill="#3b82f6"
                                  name="NPI (%)"
                                  radius={[2, 2, 0, 0]}
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Table Section untuk tab lain */}
                      <div>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg font-bold text-center">
                              {area.title}
                            </CardTitle>
                            <CardDescription className="text-center text-sm">
                              {area.subtitle}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="overflow-x-auto">
                              <table className="min-w-full bg-white border border-gray-300">
                                <thead className="bg-blue-50">
                                  <tr className="border-b-2 border-gray-300">
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      No
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      Nama Jenis
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      Family
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      Kerapatan (pohon/ha) (K)
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      Frekuensi (F)
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300">
                                      BA (m²/ha) (D)
                                    </th>
                                    <th className="px-3 py-2 text-xs font-medium text-gray-700">
                                      NPI (%)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white">
                                  {area.data.map((species, index) => (
                                    <tr
                                      key={index}
                                      className="border-b border-gray-200 hover:bg-gray-50"
                                    >
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.no}
                                      </td>
                                      <td className="px-3 py-2 text-xs italic border-r border-gray-200">
                                        {species.namaJenis}
                                      </td>
                                      <td className="px-3 py-2 text-xs border-r border-gray-200">
                                        {species.family}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.kerapatan}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.frekuensi}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                        {species.ba}
                                      </td>
                                      <td className="px-3 py-2 text-xs text-center font-medium text-blue-600">
                                        {species.npi}
                                      </td>
                                    </tr>
                                  ))}
                                  <tr className="border-t-2 border-gray-400 bg-blue-50 font-bold">
                                    <td
                                      className="px-3 py-2 text-xs text-center"
                                      colSpan={2}
                                    >
                                      Jumlah
                                    </td>
                                    <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                      {area.data.reduce(
                                        (sum, species) =>
                                          sum + species.kerapatan,
                                        0,
                                      )}
                                    </td>
                                    <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                      {area.data
                                        .reduce(
                                          (sum, species) =>
                                            sum + species.frekuensi,
                                          0,
                                        )
                                        .toFixed(1)}
                                    </td>
                                    <td className="px-3 py-2 text-xs text-center border-r border-gray-200">
                                      {area.data
                                        .reduce(
                                          (sum, species) => sum + species.ba,
                                          0,
                                        )
                                        .toFixed(2)}
                                    </td>
                                    <td className="px-3 py-2 text-xs text-center">
                                      300
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
