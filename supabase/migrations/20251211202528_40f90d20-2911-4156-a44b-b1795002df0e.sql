
-- Add missing columns to partnership_applications table
ALTER TABLE public.partnership_applications
ADD COLUMN IF NOT EXISTS job_title text,
ADD COLUMN IF NOT EXISTS city text,
ADD COLUMN IF NOT EXISTS country text,
ADD COLUMN IF NOT EXISTS sector text,
ADD COLUMN IF NOT EXISTS tax_id text,
ADD COLUMN IF NOT EXISTS payment_method text,
ADD COLUMN IF NOT EXISTS newsletter_consent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS company_name text;
