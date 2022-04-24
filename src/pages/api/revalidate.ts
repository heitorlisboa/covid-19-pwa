import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { country } = req.query;

  try {
    await res.unstable_revalidate(`/${country}`);
    return res.status(200).json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({ revalidated: false });
  }
}

export default handler;
