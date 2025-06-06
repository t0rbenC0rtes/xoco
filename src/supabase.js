import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wfkvuzippzmipkmlmxdd.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indma3Z1emlwcHptaXBrbWxteGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxOTk1OTIsImV4cCI6MjA2NDc3NTU5Mn0.euoN5aiCbSlRrVa_wjJBFD_Gi35jRFgfQZRQPUKkg3Q"; // copy from Supabase > Project > API > anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
