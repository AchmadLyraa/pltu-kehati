"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TabPenanaman from "@/components/kehati-tabs-penanaman";
import TabMangrovePLTU from "@/components/kehati-tabs-mangrove-pltu";
import TabMangroveKariangau from "@/components/kehati-tabs-mangrove-kariangau";
import TabPohonBiomassa from "@/components/kehati-tabs-pohon-biomassa";
import TabHidrotenAnggrek from "@/components/kehati-tabs-hidroton-anggrek";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useQueryState } from "@/hooks/use-query-state";

const SUB_IDS = [
  "penanaman",
  "mangrove-pltu",
  "pohon-biomassa",
  "hidroten-anggrek",
  "mangrove-kariangau",
];

export default function ProgramKehati() {
  const [sub, setSub] = useQueryState("sub", "penanaman", SUB_IDS, {
    resetOnChange: ["year"],
  });

  return (
    <div className="w-full">
      {/* GANTI defaultValue dengan value + onValueChange */}
      <Tabs value={sub} onValueChange={setSub} className="w-full">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="penanaman">Penanaman</TabsTrigger>
          <TabsTrigger value="mangrove-pltu">Mangrove PLTU</TabsTrigger>
          <TabsTrigger value="pohon-biomassa">Pohon Biomassa</TabsTrigger>
          <TabsTrigger value="hidroten-anggrek">Hidroten Anggrek</TabsTrigger>
          <TabsTrigger value="mangrove-kariangau">
            Mangrove Kariangau
          </TabsTrigger>
        </TabsList>

        <TabsContent value="penanaman">
          <TabPenanaman />
        </TabsContent>

        <TabsContent value="mangrove-pltu">
          <TabMangrovePLTU />
        </TabsContent>

        <TabsContent value="pohon-biomassa">
          <TabPohonBiomassa />
        </TabsContent>
        <TabsContent value="hidroten-anggrek">
          <TabHidrotenAnggrek />
        </TabsContent>
        <TabsContent value="mangrove-kariangau">
          <TabMangroveKariangau />
        </TabsContent>
      </Tabs>
    </div>
  );
}
