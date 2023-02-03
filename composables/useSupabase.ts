import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
  const config = useRuntimeConfig();

  const supabaseKey = `${config.apiSecret}`;

  const supabase = createClient(config.public.apiBase, supabaseKey);

  return { supabase };
};

export default useSupabase;
