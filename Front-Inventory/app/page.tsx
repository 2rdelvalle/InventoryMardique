import Link from "next/link";

export default function HomePage() {
  return (
    <section className="container-page">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">Bienvenido a Inventory Mardique</h2>
        <p className="text-slate-600">
          Esta es la base del frontend siguiendo principios de screaming architecture. Las
          rutas principales están organizadas por dominios de negocio para facilitar la
          evolución independiente de inventario, mantenimiento y operaciones.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link className="rounded-md bg-brand px-4 py-2 text-white" href="/dashboard">
            Ver Dashboard
          </Link>
          <Link className="rounded-md border border-brand px-4 py-2 text-brand" href="/inventory">
            Gestionar Inventario
          </Link>
          <Link className="rounded-md border border-slate-300 px-4 py-2 text-slate-700" href="/maintenance">
            Revisar Mantenimiento
          </Link>
        </div>
      </div>
    </section>
  );
}