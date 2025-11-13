import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export function getSupabaseBrowserClient() {
  return createPagesBrowserClient();
}