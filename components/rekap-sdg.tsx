"use client";
import React from "react";
import rekap from "@/data/rekapSdgData";
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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Nilai = { target: string; capaian: string; persentase: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fmtValue = (tipe: string, v: any): string => {
  const n = Number(v);
  if (tipe === "persen5") return `${(n * 100).toFixed(5)}%`;
  if (tipe === "fixed2") return n.toFixed(2);
  return String(v);
};

export default function RekapSdg() {
  const tahun: string[] = rekap.tahun;
  const totalCols = 1 + tahun.length * 3;

  return (
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
                <TableHead rowSpan={2} className="border text-center align-middle">
                  Tujuan dan Indikator
                </TableHead>
                {tahun.map((t) => (
                  <TableHead key={t} colSpan={3} className="border text-center">
                    {t}
                  </TableHead>
                ))}
              </TableRow>
              <TableRow>
                {tahun.map((t) => (
                  <React.Fragment key={t}>
                    <TableHead className="border text-center">Target</TableHead>
                    <TableHead className="border text-center">Capaian</TableHead>
                    <TableHead className="border text-center">Persentase</TableHead>
                  </React.Fragment>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rekap.indikator.map((ind) => (
                <React.Fragment key={ind.indikator}>
                  <TableRow>
                    <TableCell
                      colSpan={totalCols}
                      className="border bg-blue-100 font-semibold text-xs md:text-sm"
                    >
                      {ind.targetSdg}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={totalCols}
                      className="border bg-gray-50 font-medium text-xs md:text-sm"
                    >
                      {ind.indikator}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border text-xs md:text-sm">{ind.satuan}</TableCell>
                    {tahun.map((t) => {
                      const v = (ind.nilai as Record<string, Nilai>)[t];
                      return (
                        <React.Fragment key={t}>
                          <TableCell className="border text-right text-xs md:text-sm">{v.target}</TableCell>
                          <TableCell className="border text-right text-xs md:text-sm">{v.capaian}</TableCell>
                          <TableCell className="border text-right text-xs md:text-sm">{v.persentase}</TableCell>
                        </React.Fragment>
                      );
                    })}
                  </TableRow>
                </React.Fragment>
              ))}
              <TableRow>
                <TableCell className="border text-xs md:text-sm">Jumlah Program</TableCell>
                {tahun.map((t) => (
                  <TableCell key={t} colSpan={3} className="border text-center text-xs md:text-sm">
                    {(rekap.jumlahProgram as Record<string, number>)[t]}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
          <p className="mt-2 text-xs text-gray-500">*Data periode Januari–Juni 2026</p>
        </CardContent>
      </Card>

      {/* Grafik Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {rekap.indikator.map((ind) => (
          <Card key={ind.indikator}>
            <CardHeader>
              <CardTitle className="text-sm md:text-base">
                Capaian Kontribusi Program Terhadap SDG's
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                Indikator {ind.indikator.replace(/^\d+\.\d+\.\d+\s+/, "")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={ind.grafik.data}
                  margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="tahun" style={{ fontSize: "12px" }} />
                  <YAxis
                    domain={ind.grafik.domain as [number, number]}
                    tickFormatter={
                      ind.grafik.tipe === "persen5"
                        ? (v: number) => fmtValue("persen5", v)
                        : undefined
                    }
                    style={{ fontSize: "10px" }}
                  />
                  <Tooltip
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    formatter={(v: any) => fmtValue(ind.grafik.tipe, v)}
                    contentStyle={{ fontSize: "12px" }}
                  />
                  <Bar
                    dataKey="capaian"
                    fill="#3b82f6"
                    label={{
                      position: "top",
                      fontSize: 10,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter: (v: any) => fmtValue(ind.grafik.tipe, v),
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
