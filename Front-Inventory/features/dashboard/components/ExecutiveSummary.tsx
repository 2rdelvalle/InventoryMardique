export function ExecutiveSummary() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {["Inventario crítico", "Cumplimiento", "Costos"].map((title) => (
        <article
          key={title}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <header className="text-sm font-medium text-slate-500">{title}</header>
          <p className="mt-2 text-2xl font-semibold text-slate-900">--</p>
          <p className="text-xs text-slate-500">Placeholder para métrica clave</p>
        </article>
      ))}
    </section>
  );
}