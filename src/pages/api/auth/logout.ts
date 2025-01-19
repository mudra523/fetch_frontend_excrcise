// pages/api/auth/logout.ts
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
  } catch (error: unknown) {
    let errorMessage = 'Proxy logout failed';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('Proxy logout error:', errorMessage);
    const status = (error && typeof error === 'object' && 'response' in error && (error as any).response?.status) || 500;
    res.status(status).json({ error: errorMessage });
  }
}
