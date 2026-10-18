type Row = {
  no: number;
  namaLokal: string;
  namaIlmiah: string;
  jumlah: number;
  pi: number;
  lnPi: number;
  piLnPi: number;
};

type Props = {
  data: { species: Row[]; akumulasiSpesies: number; indeksH: number };
};

export function FaunaTable({ data }: Props) {
  const th = "border border-gray-300 px-3 py-2 font-medium";
  const td = "border border-gray-300 px-3 py-2";
  const num = `${td} text-right font-mono`;

  return (
    <div className="mt-6">
      <h4 className="mb-2 font-semibold text-gray-800">Fauna</h4>
      <div className="overflow-auto rounded-md border">
        <table className="w-full border-collapse bg-white text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
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
            {data.species.map((row) => (
              <tr key={row.no} className="transition-colors hover:bg-gray-50">
                <td className={`${td} text-center`}>{row.no}</td>
                <td className={td}>{row.namaLokal}</td>
                <td className={`${td} italic text-gray-700`}>{row.namaIlmiah}</td>
                <td className={num}>{row.jumlah}</td>
                <td className={num}>{row.pi.toFixed(3)}</td>
                <td className={num}>{row.lnPi.toFixed(3)}</td>
                <td className={num}>{row.piLnPi.toFixed(3)}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-blue-200 bg-blue-50 font-semibold">
              <td colSpan={3} className={`${td} text-blue-800`}>
                Akumulasi Spesies
              </td>
              <td className={`${num} text-blue-800`}>{data.akumulasiSpesies}</td>
              <td colSpan={3} className={`${num} text-blue-800`}>
                Indeks H′ = {data.indeksH}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
