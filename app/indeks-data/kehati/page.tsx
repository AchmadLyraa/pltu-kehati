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
  { id: "sdgs", name: "SDGS" },
  { id: "rekap", name: "REKAP SDG" },
];

const programData = [
  { program: "Monitoring Rutin", target: 100, realisasi: 95, efektivitas: 95 },
  {
    program: "Restorasi Habitat",
    target: 80,
    realisasi: 78,
    efektivitas: 97.5,
  },
  {
    program: "Konservasi Ex-situ",
    target: 60,
    realisasi: 52,
    efektivitas: 86.7,
  },
  {
    program: "Edukasi Masyarakat",
    target: 120,
    realisasi: 118,
    efektivitas: 98.3,
  },
  {
    program: "Penelitian Kolaboratif",
    target: 40,
    realisasi: 35,
    efektivitas: 87.5,
  },
];

const sdgsData = [
  { sdg: "SDG 6", nama: "Air Bersih", skor: 85, target: 90 },
  { sdg: "SDG 13", nama: "Aksi Iklim", skor: 78, target: 85 },
  { sdg: "SDG 14", nama: "Kehidupan Bawah Air", skor: 72, target: 80 },
  { sdg: "SDG 15", nama: "Kehidupan Darat", skor: 88, target: 90 },
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

  const getStatusBadge = (status: string) => {
    const variants = {
      "Sangat Baik": "bg-green-100 text-green-800",
      Baik: "bg-blue-100 text-blue-800",
      Cukup: "bg-yellow-100 text-yellow-800",
      Kurang: "bg-red-100 text-red-800",
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {status}
      </Badge>
    );
  };

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

          {activeCategory === "sdgs" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Pencapaian SDGs Terkait Keanekaragaman Hayati
                  </CardTitle>
                  <CardDescription>
                    Skor pencapaian vs target SDGs
                  </CardDescription>
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
                              sdg.skor >= sdg.target
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {((sdg.skor / sdg.target) * 100).toFixed(1)}%
                          </Badge>
                        </div>
                        <Progress
                          value={(sdg.skor / sdg.target) * 100}
                          className="h-3"
                        />
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
                  <CardDescription>
                    Radar chart perbandingan pencapaian berbagai indikator
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={rekapSDG}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="indikator" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name="Pencapaian 2024"
                        dataKey="A"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.3}
                      />
                      <Radar
                        name="Target 2025"
                        dataKey="B"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                      />
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
                    <div className="text-2xl font-bold text-emerald-600">
                      88%
                    </div>
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
  );
}
