// api/mohim-form.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string | undefined;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

// This handler runs on Vercel as a Node function
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1) Check env vars
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase env vars', { supabaseUrl: !!supabaseUrl, supabaseKey: !!supabaseKey });
    return res.status(500).json({
      error: 'Supabase configuration missing',
      details: {
        hasSupabaseUrl: !!supabaseUrl,
        hasSupabaseKey: !!supabaseKey,
      },
    });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const data = req.body as any;

    const { error } = await supabase
      .from('mohim_memberships') // 👈 make sure this table name is EXACT
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
      return res.status(500).json({
        error: 'Failed to save to database',
        details: {
          message: error.message,
          hint: error.hint,
          code: error.code,
        },
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Error in mohim-form route:', err);
    return res.status(500).json({
      error: 'Unexpected server error',
      details: err?.message || String(err),
    });
  }
}
