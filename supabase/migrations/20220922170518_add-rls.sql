ALTER TABLE IF EXISTS public.profiles
    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable users to create and modify their profile"
    ON public.profiles
    AS PERMISSIVE
    FOR ALL
    TO public
    USING ((auth.email() = (email)::text));
