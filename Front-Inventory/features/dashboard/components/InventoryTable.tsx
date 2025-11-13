const HEADERS = ["Activo", "Ubicación", "Stock", "Estado"] as const;
const PLACEHOLDER_ROWS = [
  { name: "Compresor A", location: "Planta Norte", stock: 4, status: "Operativo" },
  { name: "Bomba Centrífuga", location: "Planta Sur", stock: 1, status: "Mantenimiento" }
];

export function InventoryTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            {HEADERS.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left font-medium uppercase tracking-wide text-slate-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {PLACEHOLDER_ROWS.map((row) => (
            <tr key={row.name}>
              <td className="px-4 py-3 font-medium text-slate-800">{row.name}</td>
              <td className="px-4 py-3 text-slate-600">{row.location}</td>
              <td className="px-4 py-3 text-slate-600">{row.stock}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}