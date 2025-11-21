// api/mohim-form.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body as any;

    const {
      fullName,
      jobTitle,
      organization,
      email,
      phone,
      city,
      country,
      sector,
      sectorOther,
      membershipType,
      interestFHIR,
      interestEMRAM,
      interestGovernance,
      interestCyber,
      interestProjectathons,
      interestTraining,
      interestInnovation,
      interestOther,
      serviceSandbox,
      serviceConformity,
      serviceCertification,
      serviceTraining,
      serviceAudit,
      serviceConsulting,
      companyName,
      address,
      taxId,
      paymentMethod,
      consentTerms,
      consentData,
      consentNewsletter,
      submittedAt,
    } = body;

    const lines = [
      `Nom complet: ${fullName}`,
      `Fonction: ${jobTitle}`,
      `Organisation: ${organization}`,
      `Email: ${email}`,
      `Téléphone: ${phone}`,
      `Ville: ${city}`,
      `Pays: ${country}`,
      `Secteur: ${sector} ${sector === 'other' && sectorOther ? `(${sectorOther})` : ''}`,
      '',
      `Type d'adhésion: ${membershipType}`,
      '',
      `Intérêts:`,
      `- FHIR/IHE: ${interestFHIR}`,
      `- EMRAM: ${interestEMRAM}`,
      `- Gouvernance data: ${interestGovernance}`,
      `- Cybersécurité: ${interestCyber}`,
      `- Projectathons: ${interestProjectathons}`,
      `- Formations & Certification: ${interestTraining}`,
      `- Innovation: ${interestInnovation}`,
      `- Autre: ${interestOther}`,
      '',
      `Services souhaités:`,
      `- Sandbox MOHIM: ${serviceSandbox}`,
      `- Tests de conformité API / interopérabilité: ${serviceConformity}`,
      `- Certification "MOHIM Ready": ${serviceCertification}`,
      `- Formations (FHIR, IHE, EMRAM, cybersécurité): ${serviceTraining}`,
      `- Audit EMRAM / accompagnement CHU: ${serviceAudit}`,
      `- AMOA / Conseil stratégique: ${serviceConsulting}`,
      '',
      `Facturation:`,
      `- Raison sociale: ${companyName}`,
      `- Adresse: ${address}`,
      `- ICE / Tax ID: ${taxId}`,
      `- Mode de paiement: ${paymentMethod}`,
      '',
      `Consentements:`,
      `- Conditions d'adhésion: ${consentTerms}`,
      `- Traitement des données (CNDP / GDPR): ${consentData}`,
      `- Newsletter MOHIM: ${consentNewsletter}`,
      '',
      `Soumis le: ${submittedAt}`,
    ];

    await resend.emails.send({
      from: 'MOHIM <noreply@mohim.org>', // doit être un sender autorisé dans ton compte Resend
      to: 'contact@mohim.org',
      subject: `Nouvelle demande d'adhésion MOHIM - ${fullName || 'Sans nom'}`,
      text: lines.join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error in /api/mohim-form:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}