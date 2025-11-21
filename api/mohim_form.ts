// api/mohim-form.ts
import { createClient } from '@supabase/supabase-js';

// Load environment variables from Vercel
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

// Create Supabase client using service_role key (backend only)
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Insert into Supabase
    const { error } = await supabase
      .from('mohim_memberships')
      .insert({
        full_name: data.fullName,
        job_title: data.jobTitle,
        organization: data.organization,
        email: data.email,
        phone: data.phone,
        city: data.city,
        country: data.country,
        sector: data.sector,
        sector_other: data.sectorOther,

        membership_type: data.membershipType,

        interest_fhir: data.interestFHIR,
        interest_emram: data.interestEMRAM,
        interest_governance: data.interestGovernance,
        interest_cyber: data.interestCyber,
        interest_projectathons: data.interestProjectathons,
        interest_training: data.interestTraining,
        interest_innovation: data.interestInnovation,
        interest_other: data.interestOther,

        service_sandbox: data.serviceSandbox,
        service_conformity: data.serviceConformity,
        service_certification: data.serviceCertification,
        service_training: data.serviceTraining,
        service_audit: data.serviceAudit,
        service_consulting: data.serviceConsulting,

        company_name: data.companyName,
        address: data.address,
        tax_id: data.taxId,
        payment_method: data.paymentMethod,

        consent_terms: data.consentTerms,
        consent_data: data.consentData,
        consent_newsletter: data.consentNewsletter,

        submitted_at: data.submittedAt,
      });

    if (error) {
      console.error('Supabase Insert Error:', error);
      return res.status(500).json({ error: 'Failed to save to database' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error in mohim-form route:', err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
