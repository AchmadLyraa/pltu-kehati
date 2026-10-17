type FaunaRow = {
  no: number;
  namaLokal: string;
  namaIlmiah: string | null;
  jumlah: number;
  pi: number | null;
  lnPi: number | null;
  piLnPi: number | null;
};
type FaunaBlock = { species: FaunaRow[]; akumulasiSpesies: number; indeksH: number };

export default function FaunaTable({ year, fauna }: { year: string; fauna: FaunaBlock }) {
  const th = "border border-gray-300 px-3 py-2 font-medium";
  const td = "border border-gray-300 px-3 py-2";
  return (
    <div className="mt-6">
      <h4 className="font-semibold text-gray-800 mb-2">Fauna ({year})</h4>
      <div className="rounded-md border overflow-auto max-h-[600px]">
        <table className="w-full border-collapse text-sm bg-white">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gray-100 text-left">
              <th className={th}>No</th>
              <th className={th}>Nama Lokal</th>
              <th className={th}>Nama Ilmiah</th>
              <th className={`${th} text-right`}>Jumlah</th>
              <th className={`${th} text-right`}>Pi</th>
              <th className={`${th} text-right`}>Ln Pi</th>
              <th className={`${th} text-right`}>Pi Ln Pi</th>
            </tr>
          </thead>
          <tbody>
            {fauna.species.map((row) => (
              <tr key={row.no} className="hover:bg-gray-50 transition-colors">
                <td className={`${td} text-center`}>{row.no}</td>
                <td className={td}>{row.namaLokal}</td>
                <td className={`${td} italic text-gray-700`}>{row.namaIlmiah}</td>
                <td className={`${td} text-right font-mono`}>{row.jumlah}</td>
                <td className={`${td} text-right font-mono`}>{(row.pi ?? 0).toFixed(3)}</td>
                <td className={`${td} text-right font-mono`}>{(row.lnPi ?? 0).toFixed(3)}</td>
                <td className={`${td} text-right font-mono`}>{(row.piLnPi ?? 0).toFixed(3)}</td>
              </tr>
            ))}
            <tr className="font-semibold bg-blue-50 border-t-2 border-blue-200">
              <td colSpan={3} className={`${td} text-blue-800`}>Akumulasi Spesies</td>
              <td className={`${td} text-right font-mono text-blue-800`}>{fauna.akumulasiSpesies}</td>
              <td colSpan={3} className={`${td} text-right font-mono text-blue-800`}>Indeks H′ = {fauna.indeksH}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {year.endsWith("*") && (
        <p className="mt-2 text-xs text-gray-500">*Data periode Januari–Juni 2026</p>
      )}
    </div>
  );
}
