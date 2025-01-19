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
  } catch (error: any) {
    console.error('Proxy login error:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Proxy login failed' });
  }
}
