import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post(
      'https://frontend-take-home-service.fetch.com/auth/logout',
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Proxy logout error:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Proxy logout failed' });
  }
}
