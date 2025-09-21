"use client";
import React, { useState } from "react";
import kehatiData from "@/data/kehatiData";

export default function KehatiTable() {
  const [tahun, setTahun] = useState(2025);

  const tahunList = [2021, 2022, 2023, 2024, 2025];

  return (
    <div className="w-full">
      {/* Filter Tahun */}
      <div className="flex items-center gap-2 mb-4">
        <label className="font-semibold">Pilih Tahun:</label>
        <select
          value={tahun}
          onChange={(e) => setTahun(Number(e.target.value))}
          className="border rounded p-2"
        >
          {tahunList.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Tabel */}
      <table className="w-full border border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">No</th>
            <th className="border p-2">Program</th>
            <th className="border p-2">Jenis Spesies</th>
            <th className="border p-2">Nama Latin</th>
            <th className="border p-2">Absolut</th>
            <th className="border p-2">Satuan</th>
          </tr>
        </thead>
        <tbody>
          {kehatiData.map((program, idx) => (
            <React.Fragment key={idx}>
              {program.species.map((sp, i) => (
                <tr key={i}>
                  {i === 0 && (
                    <>
                      <td
                        rowSpan={program.species.length + 2}
                        className="border p-2 align-top text-center"
                      >
                        {idx + 1}
                      </td>
                      <td
                        rowSpan={program.species.length + 2}
                        className="border p-2 align-top"
                      >
                        {program.program}
                      </td>
                    </>
                  )}
                  <td className="border p-2">{sp.nama}</td>
                  <td className="border p-2 italic">{sp.latin}</td>
                  <td className="border p-2 text-center">{sp.data[tahun]}</td>
                  <td className="border p-2 text-center">{sp.satuan}</td>
                </tr>
              ))}

              {/* Total Flora */}
              <tr className="bg-gray-100 font-semibold">
                <td colSpan={2} className="border p-2 text-right">
                  Total Flora
                </td>
                <td className="border p-2 text-center">
                  {program.total.flora[tahun]}
                </td>
                <td className="border p-2 text-center">Pohon</td>
              </tr>

              {/* Indeks */}
              <tr className="bg-gray-100 font-semibold">
                <td colSpan={2} className="border p-2 text-right">
                  Indeks KH (H’)
                </td>
                <td className="border p-2 text-center">
                  {program.total.indeks[tahun]}
                </td>
                <td className="border p-2 text-center">H’</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
