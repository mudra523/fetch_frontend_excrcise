import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = req.url?.split('?')[1] || '';
    const response = await axios.get(
      `https://frontend-take-home-service.fetch.com/dogs/search?${query}`, 
      {
        withCredentials: true,
        headers: {
          'Content-Type': req.headers['content-type'] || 'application/json',
        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error: unknown) {
    let errorMessage = 'Proxy searchDogs failed';
    let status = 500;

    if (axios.isAxiosError(error)) {
      status = error.response?.status || 500;
      errorMessage = error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Proxy searchDogs error:', errorMessage);
    res.status(status).json({ error: errorMessage });
  }
}
