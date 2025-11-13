import Link from "next/link";
import { SectionHeader } from "Front-Inventory/app/components/ui/SectionHeader";
import { MaintenanceTimeline } from "Front-Inventory/features/dashboard/components/MaintenanceTimeline";

export default function MaintenancePage() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Mantenimiento"
        description="Coordina tareas preventivas y correctivas, asignaciones de técnicos y seguimiento de órdenes."
        action={
          <Link
            href="#"
            className="rounded-md border border-brand px-3 py-2 text-sm font-semibold text-brand"
          >
            Programar tarea
          </Link>
        }
      />
      <MaintenanceTimeline />
    </section>
  );
}