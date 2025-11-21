// api/mohim-form.ts

export default async function handler(req: any, res: any) {
  if (req.method && req.method !== 'POST') {
    if (res.setHeader) {
      res.setHeader('Allow', 'POST');
    }
    return res
      .status?.(405)
      .json?.({ error: 'Method not allowed' });
  }

  try {
    console.log('Received form submission:', req.body);

    // For now, do nothing else. Just confirm it's OK.
    if (res.status && res.json) {
      return res.status(200).json({ ok: true });
    } else {
      // Fallback in case types are weird
      // @ts-ignore
      return res(200).json({ ok: true });
    }
  } catch (error) {
    console.error('Error in /api/mohim-form:', error);
    return res.status?.(500).json?.({ error: 'Failed to handle form' });
  }
}
