import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://imrofbiquqgqcegbgztq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltcm9mYmlxdXFncWNlZ2JnenRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNTE4MzEsImV4cCI6MTk5OTYyNzgzMX0.zjK_Mi25VNvI51eTPQJrQZlF5q5rdG_TO95S68atoUk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
