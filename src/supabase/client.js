// src/supabase/client.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kutemjrcgimvduaqihdy.supabase.co";
const supabaseAnonKey = "Senac@123";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
