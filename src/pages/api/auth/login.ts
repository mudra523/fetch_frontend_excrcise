// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post(
      'https://frontend-take-home-service.fetch.com/auth/login',
      req.body,
      {
        withCredentials: true,
        headers: {
          'Content-Type': req.headers['content-type'] || 'application/json',
        },
      }
    );

    const cookies = response.headers['set-cookie'];
    if (cookies) {
      res.setHeader('Set-Cookie', cookies);
    }

    res.status(response.status).json(response.data);
  } catch (error: unknown) {
    let errorMessage = 'Proxy login failed';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('Proxy login error:', errorMessage);
    const status = (error && typeof error === 'object' && 'response' in error && (error as any).response?.status) || 500;
    res.status(status).json({ error: errorMessage });
  }
}
