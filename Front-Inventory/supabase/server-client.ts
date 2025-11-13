import { cookies } from "next/headers";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export function getSupabaseServerClient() {
  const cookieStore = cookies();

  return (createPagesServerClient as any)({ cookies: cookieStore });
}