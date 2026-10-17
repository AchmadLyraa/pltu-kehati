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
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import dataFaunaFlora from "@/data/dataFaunaFlora";

const COLORS = { flora: "#0891b2", fauna: "#059669", luas: "#d97706" };

const nf = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 });
const fmt = (v: number) => nf.format(v);
const yearLabel = (v: string | number) => String(v);

type Point = { tahun: string | number; [key: string]: number | string };
type SpeciesRow = {
  nama: string;
  latin?: string;
  data: Record<string, number>;
};

const flora = dataFaunaFlora.flora.total as unknown as Point[];
const fauna = dataFaunaFlora.fauna.total as unknown as Point[];
const luas = (dataFaunaFlora.kawasanKonservasi || []) as unknown as Point[];

// Daftar tahun diambil dari data, jadi tidak perlu diedit tiap tahun
const YEARS = ["2021", "2022", "2023", "2024", "2025"];

const AXIS_TICK = { fontSize: 12, fill: "#6b7280" };
const CHART_MARGIN = { top: 8, right: 16, left: 0, bottom: 0 };

const xAxisProps = {
  dataKey: "tahun",
  interval: 0 as const,
  tickFormatter: yearLabel,
  tick: AXIS_TICK,
  tickLine: false,
  axisLine: { stroke: "#e5e7eb" },
};

const yAxisProps = {
  tick: AXIS_TICK,
  tickLine: false,
  axisLine: false,
  width: 48,
  tickFormatter: fmt,
  domain: [0, "auto"] as [number, "auto"],
};

const tooltipStyle = {
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  boxShadow: "0 4px 12px rgba(0,0,0,.08)",
  fontSize: 12,
};

function StatCard({
  title,
  unit,
  data,
  dataKey,
  children,
}: {
  title: string;
  unit: string;
  data: Point[];
  dataKey: string;
  children: React.ReactNode;
}) {
  const last = data[data.length - 1];
  const prev = data[data.length - 2];
  const value = Number(last?.[dataKey] ?? 0);
  const prevValue = Number(prev?.[dataKey] ?? 0);
  const diff = value - prevValue;
  const pct = prevValue > 0 ? (diff / prevValue) * 100 : null;
  const tone =
    diff > 0 ? "text-emerald-600" : diff < 0 ? "text-red-600" : "text-gray-500";

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-0">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-bold tabular-nums text-gray-900">
            {fmt(value)}
          </span>
          <span className="text-sm text-gray-500">{unit}</span>
        </div>
        {prev && (
          <p className={`text-xs font-medium ${tone}`}>
            {diff > 0 ? "+" : ""}
            {fmt(diff)} {unit}
            {pct !== null && ` (${diff > 0 ? "+" : ""}${fmt(pct)}%)`}
            <span className="font-normal text-gray-500">
              {" "}
              vs {yearLabel(prev.tahun)}
            </span>
          </p>
        )}
      </CardHeader>
      <CardContent className="h-52 pt-4">{children}</CardContent>
    </Card>
  );
}

function SpeciesTable({ title, rows }: { title: string; rows: SpeciesRow[] }) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Species</TableHead>
              {YEARS.map((y) => (
                <TableHead key={y} className="text-right">
                  {yearLabel(y)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((sp) => (
              <TableRow key={sp.nama}>
                <TableCell>
                  <div className="font-medium">{sp.nama}</div>
                  {sp.latin && (
                    <div className="text-xs italic text-gray-500">
                      {sp.latin}
                    </div>
                  )}
                </TableCell>
                {YEARS.map((y) => {
                  const v = sp.data[y] || 0;
                  return (
                    <TableCell
                      key={y}
                      className={`text-right tabular-nums ${
                        v === 0 ? "text-gray-300" : ""
                      }`}
                    >
                      {v === 0 ? "–" : fmt(v)}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default function KehatiTableChart() {
  return (
    <div className="flex flex-col gap-8">
      {/* CHARTS */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Flora */}
        <StatCard title="Status Flora" unit="pohon" data={flora} dataKey="jumlah">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={flora} margin={CHART_MARGIN}>
              <defs>
                <linearGradient id="gFlora" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.flora} stopOpacity={0.25} />
                  <stop offset="100%" stopColor={COLORS.flora} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#eef0f3" />
              <XAxis {...xAxisProps} />
              <YAxis {...yAxisProps} allowDecimals={false} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelFormatter={yearLabel}
                formatter={(v) => [fmt(Number(v)), "Jumlah Pohon"]}
              />
              <Area
                type="linear"
                dataKey="jumlah"
                stroke={COLORS.flora}
                strokeWidth={2.5}
                fill="url(#gFlora)"
                dot={{ r: 3, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </StatCard>

        {/* Fauna */}
        <StatCard title="Status Fauna" unit="ekor" data={fauna} dataKey="jumlah">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fauna} margin={CHART_MARGIN}>
              <CartesianGrid vertical={false} stroke="#eef0f3" />
              <XAxis {...xAxisProps} />
              <YAxis {...yAxisProps} allowDecimals={false} />
              <Tooltip
                cursor={{ fill: "#f3f4f6" }}
                contentStyle={tooltipStyle}
                labelFormatter={yearLabel}
                formatter={(v) => [fmt(Number(v)), "Jumlah Ekor"]}
              />
              <Bar
                dataKey="jumlah"
                fill={COLORS.fauna}
                radius={[4, 4, 0, 0]}
                maxBarSize={36}
              />
            </BarChart>
          </ResponsiveContainer>
        </StatCard>

        {/* Luas Kawasan */}
        <StatCard title="Luas Area Konservasi" unit="Ha" data={luas} dataKey="luas">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={luas} margin={CHART_MARGIN}>
              <defs>
                <linearGradient id="gLuas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.luas} stopOpacity={0.25} />
                  <stop offset="100%" stopColor={COLORS.luas} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#eef0f3" />
              <XAxis {...xAxisProps} />
              <YAxis {...yAxisProps} allowDecimals />
              <Tooltip
                contentStyle={tooltipStyle}
                labelFormatter={yearLabel}
                formatter={(v) => [`${fmt(Number(v))} Ha`, "Luas"]}
              />
              <Area
                type="stepAfter"
                dataKey="luas"
                stroke={COLORS.luas}
                strokeWidth={2.5}
                fill="url(#gLuas)"
                dot={{ r: 3, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </StatCard>
      </div>

      {/* TABLES */}
      <SpeciesTable
        title="Data Flora"
        rows={dataFaunaFlora.flora.species as unknown as SpeciesRow[]}
      />
      <SpeciesTable
        title="Data Fauna"
        rows={dataFaunaFlora.fauna.species as unknown as SpeciesRow[]}
      />

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Data Kawasan Konservasi</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tahun</TableHead>
                <TableHead className="text-right">Luas (Ha)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataFaunaFlora.kawasanKonservasi.map((row) => (
                <TableRow key={row.tahun}>
                  <TableCell className="font-medium">
                    {yearLabel(row.tahun)}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {fmt(row.luas)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
