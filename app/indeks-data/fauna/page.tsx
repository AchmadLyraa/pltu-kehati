"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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

import {
  faunaCategories,
  mamaliaData,
  burungData,
  herpetofaunaData,
  insectaData,
  nektonData,
  mamaliaLocationData,
  burungLocationData,
  herpetofaunaLocationData,
  insectaLocationData,
  nektonLocationData,
} from "@/data/fauna";

export default function IndeksFaunaPage() {
  const [activeTab, setActiveTab] = useState("mamalia");

  const getStatusBadge = (status: string) => {
    const variants = {
      Stabil: "bg-green-100 text-green-800",
      "Perlu Perhatian": "bg-yellow-100 text-yellow-800",
      Terancam: "bg-red-100 text-red-800",
    };
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {status}
      </Badge>
    );
  };

  const getLocationData = (category: string) => {
    switch (category) {
      case "mamalia":
        return mamaliaLocationData;
      case "burung":
        return burungLocationData;
      case "herpetofauna":
        return herpetofaunaLocationData;
      case "insecta":
        return insectaLocationData;
      case "nekton":
        return nektonLocationData;
      default:
        return mamaliaLocationData;
    }
  };

  const getCategoryTitle = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      mamalia: "Kehadiran Mamalia di Wilayah PT PLN Nusantara Power",
      burung: "Kehadiran Avifauna di Wilayah PT PLN Nusantara Power",
      herpetofauna: "Kehadiran Herpetofaauna di Wilayah PT PLN Nusantara Power",
      insecta: "Indeks Jenis Serangga di Wilayah PT PLN Nusantara Power",
      nekton: "Indeks Jenis Nekton di Wilayah PT PLN Nusantara Power",
    };
    return (
      categoryMap[category] ||
      "Kehadiran Fauna di Wilayah PT PLN Nusantara Power"
    );
  };

  const getTableData = (category: string) => {
    switch (category) {
      case "mamalia":
        return mamaliaData;
      case "burung":
        return burungData;
      case "herpetofauna":
        return herpetofaunaData;
      case "insecta":
        return insectaData;
      case "nekton":
        return nektonData;
      default:
        return mamaliaData;
    }
  };

  const renderChart = (category: string) => {
    const data = getLocationData(category);

    if (category === "insecta" || category === "nekton") {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="location"
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis
              label={{
                value: "Nilai Indeks",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="kekayaanJenis" fill="#3b82f6" name="Kekayaan Jenis" />
            <Bar
              dataKey="keanekaragaman"
              fill="#f59e0b"
              name="Keanekaragaman"
            />
            <Bar dataKey="kemerataan" fill="#9ca3af" name="Kemerataan" />
          </BarChart>
        </ResponsiveContainer>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="location"
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis
              label={{ value: "Jumlah", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={
                category === "herpetofauna" ? "jumlahJenis" : "jumlahIndividu"
              }
              fill="#3b82f6"
              name={
                category === "herpetofauna" ? "Jumlah Jenis" : "Jumlah Individu"
              }
            />
            <Bar
              dataKey={
                category === "herpetofauna" ? "jumlahIndividu" : "jumlahJenis"
              }
              fill="#f59e0b"
              name={
                category === "herpetofauna" ? "Jumlah Individu" : "Jumlah Jenis"
              }
            />
          </BarChart>
        </ResponsiveContainer>
      );
    }
  };

  const renderTable = (category: string) => {
    const data = getTableData(category);

    // Check if data exists and has items
    if (!data || data.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Data untuk kategori {category} sedang dalam proses pengumpulan.
          </p>
        </div>
      );
    }

    // Get the first item to determine table structure
    const firstItem = data[0];
    const columns = Object.keys(firstItem);

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-50">
            <tr className="border-b-2 border-gray-300">
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-3 py-2 text-xs font-medium text-gray-700 border-r border-gray-300"
                >
                  {column === "scientificName"
                    ? "Nama Ilmiah"
                    : column === "localName"
                      ? "Nama Lokal"
                      : column === "order"
                        ? "Famili"
                        : column === "p106"
                          ? "P 106"
                          : column === "no"
                            ? "No"
                            : column === "iucn"
                              ? "IUCN"
                              : column === "cites"
                                ? "CITES"
                                : column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr
                key={item.id || index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td
                    key={column}
                    className={`px-3 py-2 text-xs border-r border-gray-200 ${
                      column === "no" ||
                      column === "p106" ||
                      column === "iucn" ||
                      column === "cites"
                        ? "text-center"
                        : ""
                    }`}
                  >
                    {column === "scientificName" ? (
                      <span className="italic">{item[column]}</span>
                    ) : column === "status" ? (
                      getStatusBadge(item[column])
                    ) : (
                      item[column]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              INDEKS KEANEKARAGAMAN FAUNA
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              KAWASAN PLN CIRATA
            </h2>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 pb-16 md:pb-1">
              {" "}
              <TabsTrigger value="mamalia">
                Mamalia (
                {faunaCategories.find((c) => c.id === "mamalia")?.count})
              </TabsTrigger>
              <TabsTrigger value="burung">
                Avifauna (
                {faunaCategories.find((c) => c.id === "burung")?.count})
              </TabsTrigger>
              <TabsTrigger value="herpetofauna">
                Herpetofauna (
                {faunaCategories.find((c) => c.id === "herpetofauna")?.count})
              </TabsTrigger>
              <TabsTrigger value="insecta">
                Insecta (
                {faunaCategories.find((c) => c.id === "insecta")?.count})
              </TabsTrigger>
              <TabsTrigger value="nekton">
                Nekton ({faunaCategories.find((c) => c.id === "nekton")?.count})
              </TabsTrigger>
            </TabsList>

            {faunaCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="space-y-6"
              >
                {/* Chart Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>{getCategoryTitle(category.id)}</CardTitle>
                    <CardDescription>
                      Distribusi kehadiran {category.name.toLowerCase()}{" "}
                      berdasarkan lokasi sampling
                    </CardDescription>
                  </CardHeader>
                  <CardContent>{renderChart(category.id)}</CardContent>
                </Card>

                {/* Table Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Data Spesies {category.name}</CardTitle>
                    <CardDescription>
                      Daftar spesies yang ditemukan di kawasan PLN Cirata
                    </CardDescription>
                  </CardHeader>
                  <CardContent>{renderTable(category.id)}</CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
