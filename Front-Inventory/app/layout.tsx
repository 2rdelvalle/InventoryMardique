import type { Metadata } from "next";
import "@/lib/styles/globals.css";
import { ReactNode } from "react";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: "Inventory Mardique",
  description: "Inventory and maintenance management platform"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <AppProviders>
          <div className="min-h-screen bg-slate-50">
            <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
              <nav className="container-page flex-row items-center justify-between md:flex">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest text-slate-500">
                    Inventory Mardique
                  </span>
                  <h1 className="text-xl font-semibold text-slate-900">
                    Plataforma de Inventario y Mantenimiento
                  </h1>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-slate-600 md:mt-0">
                  <a href="/dashboard">Dashboard</a>
                  <a href="/inventory">Inventario</a>
                  <a href="/maintenance">Mantenimiento</a>
                  <a href="/login">Acceso</a>
                </div>
              </nav>
            </header>
            <main className="container-page">{children}</main>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}