// api/mohim-form.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string | undefined;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase config', { hasUrl: !!supabaseUrl, hasKey: !!supabaseKey });
    return res.status(500).json({
      error: 'Supabase configuration missing',
    });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const data = req.body; // this is your full form (formData + submittedAt)

    const { error } = await supabase
      .from('mohim_forms') // 👈 table we just created
      .insert({
        payload: data, // store everything as JSON
      });

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
