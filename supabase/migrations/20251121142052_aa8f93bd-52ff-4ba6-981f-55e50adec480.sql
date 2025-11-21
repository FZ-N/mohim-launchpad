-- Create partnership applications table to store form submissions
CREATE TABLE IF NOT EXISTS public.partnership_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT,
  membership_type TEXT NOT NULL,
  areas_of_interest TEXT[] DEFAULT '{}',
  desired_services TEXT[] DEFAULT '{}',
  billing_address TEXT,
  billing_country TEXT,
  billing_city TEXT,
  data_privacy_consent BOOLEAN NOT NULL DEFAULT false,
  terms_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.partnership_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit partnership applications"
ON public.partnership_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated admins can view applications (for future admin panel)
CREATE POLICY "Only admins can view applications"
ON public.partnership_applications
FOR SELECT
TO authenticated
USING (false); -- Will be updated when admin roles are implemented

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_partnership_applications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_partnership_applications_timestamp
BEFORE UPDATE ON public.partnership_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_partnership_applications_updated_at();