"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import dataFaunaFlora from "@/data/dataFaunaFlora";

export default function KehatiTableChart() {
  return (
    <div className="flex flex-col gap-8">
      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flora */}
        <Card>
          <CardHeader>
            <CardTitle>Status Flora</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataFaunaFlora.flora.total}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tahun" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="jumlah"
                  name="Jumlah Pohon"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fauna */}
        <Card>
          <CardHeader>
            <CardTitle>Status Fauna</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataFaunaFlora.fauna.total}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tahun" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="jumlah"
                  name="Jumlah Ekor"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Luas Kawasan */}
        <Card>
          <CardHeader>
            <CardTitle>Luas Area Konservasi</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataFaunaFlora.kawasanKonservasi || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tahun" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="luas"
                  name="Luas (Ha)"
                  stroke="#f59e0b"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* TABLE */}
      <Card>
        <CardHeader>
          <CardTitle>Data Flora</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Species</TableHead>
                <TableHead>2021</TableHead>
                <TableHead>2022</TableHead>
                <TableHead>2023</TableHead>
                <TableHead>2024</TableHead>
                <TableHead>2025</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataFaunaFlora.flora.species.map((sp) => (
                <TableRow key={sp.nama}>
                  <TableCell className="font-medium">{sp.nama}</TableCell>
                  <TableCell>{sp.data[2021] || 0}</TableCell>
                  <TableCell>{sp.data[2022] || 0}</TableCell>
                  <TableCell>{sp.data[2023] || 0}</TableCell>
                  <TableCell>{sp.data[2024] || 0}</TableCell>
                  <TableCell>{sp.data[2025] || 0}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Fauna</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Species</TableHead>
                <TableHead>2021</TableHead>
                <TableHead>2022</TableHead>
                <TableHead>2023</TableHead>
                <TableHead>2024</TableHead>
                <TableHead>2025</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataFaunaFlora.fauna.species.map((sp) => (
                <TableRow key={sp.nama}>
                  <TableCell className="font-medium">{sp.nama}</TableCell>
                  <TableCell>{sp.data[2021] || 0}</TableCell>
                  <TableCell>{sp.data[2022] || 0}</TableCell>
                  <TableCell>{sp.data[2023] || 0}</TableCell>
                  <TableCell>{sp.data[2024] || 0}</TableCell>
                  <TableCell>{sp.data[2025] || 0}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data Kawasan Konservasi</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tahun</TableHead>
                <TableHead>Luas (Ha)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataFaunaFlora.kawasanKonservasi.map((row) => (
                <TableRow key={row.tahun}>
                  <TableCell className="font-medium">{row.tahun}</TableCell>
                  <TableCell>{row.luas}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
