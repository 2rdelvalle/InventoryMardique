import { SectionHeader } from "Front-Inventory/app/components/ui/SectionHeader";
import { ExecutiveSummary } from "Front-Inventory/features/dashboard/components/ExecutiveSummary";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Dashboard Ejecutivo"
        description="Visualiza KPIs clave con datos agregados obtenidos mediante Server Components y caché inteligente con React Query."
      />
      <ExecutiveSummary />
    </section>
  );
}