import Link from "next/link";
import { SectionHeader } from "Front-Inventory/app/components/ui/SectionHeader";
import { InventoryTable } from "Front-Inventory/features/dashboard/components/InventoryTable";

export default function InventoryPage() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="Inventario"
        description="Administra ítems, movimientos de stock y documentación asociada con sincronización selectiva vía Supabase Realtime."
        action={
          <Link
            href="#"
            className="rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white"
          >
            Nuevo ítem
          </Link>
        }
      />
      <InventoryTable />
    </section>
  );
}