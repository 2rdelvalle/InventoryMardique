import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      <header className="space-y-1 text-center">
        <h2 className="text-xl font-semibold text-slate-900">Inicia sesión</h2>
        <p className="text-sm text-slate-500">
          Autenticación gestionada por Supabase Auth + RLS
        </p>
      </header>
      <form className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            placeholder="tu@empresa.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand focus:outline-none"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white"
        >
          Continuar
        </button>
      </form>
      <footer className="text-center text-xs text-slate-500">
        ¿Necesitas una cuenta? <Link href="#">Contacta al administrador</Link>
      </footer>
    </section>
  );
}