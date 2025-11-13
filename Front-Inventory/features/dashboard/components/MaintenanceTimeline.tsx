const WORK_ORDERS = [
  {
    id: "WO-001",
    asset: "Compresor A",
    type: "Preventivo",
    scheduledAt: "2024-06-12",
    technician: "R. Sánchez"
  },
  {
    id: "WO-002",
    asset: "Bomba Centrífuga",
    type: "Correctivo",
    scheduledAt: "2024-06-14",
    technician: "M. Ortega"
  }
];

export function MaintenanceTimeline() {
  return (
    <ol className="space-y-4">
      {WORK_ORDERS.map((order) => (
        <li
          key={order.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                {order.type}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">{order.asset}</h3>
              <p className="text-sm text-slate-500">Asignado a {order.technician}</p>
            </div>
            <time className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {order.scheduledAt}
            </time>
          </div>
        </li>
      ))}
    </ol>
  );
}