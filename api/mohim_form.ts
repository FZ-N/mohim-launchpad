// api/mohim-form.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string | undefined;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

if (!supabaseUrl) {
  console.warn('SUPABASE_URL is not set');
}
if (!supabaseKey) {
  console.warn('SUPABASE_SERVICE_ROLE_KEY is not set');
}

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!supabase) {
    return res.status(500).json({
      error: 'Supabase is not configured correctly on the server',
    });
  }

  try {
    const data = req.body; // this is the JSON sent from your form

    const { error } = await supabase
      .from('mohim_submissions') // 👈 table created in step 1
      .insert({ data });

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({
        error: 'Failed to save to database',
        details: error.message,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Error in /api/mohim-form:', err);
    return res.status(500).json({
      error: 'Unexpected server error',
      details: err?.message || String(err),
    });
  }
}
