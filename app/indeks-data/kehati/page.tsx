"use client";

import { Suspense } from "react";
import { useQueryState } from "@/hooks/use-query-state";
import KehatiTableChart from "@/components/kehati/status-tab";
import KehatiTableChart2 from "@/components/kehati/absolut-tab";
import KehatiTableChart3 from "@/components/kehati/program/program-tabs";
import KehatiTableChart4 from "@/components/kehati/rekap-sdg-tab";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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

const CATEGORY_IDS = kehatiCategories.map((c) => c.id);

function IndeksKehatiContent() {
  const [activeCategory, setActiveCategory] = useQueryState(
    "tab",
    "status",
    CATEGORY_IDS,
    { resetOnChange: ["sub", "year"] }
  );

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
              <KehatiTableChart4 />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function IndeksKehatiPage() {
  return (
    <Suspense fallback={null}>
      <IndeksKehatiContent />
    </Suspense>
  );
}
