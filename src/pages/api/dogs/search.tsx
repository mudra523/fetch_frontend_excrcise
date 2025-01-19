import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Extract query string from the request URL (if any)
    const query = req.url?.split("?")[1] || "";

    // Build the target URL for the external service
    // If there's a query, append it with a leading '?'
    const targetUrl = `https://frontend-take-home-service.fetch.com/dogs/search${
      query ? `?${query}` : ""
    }`;

    // Make the request to the external service
    const response = await axios.get(targetUrl, {
      withCredentials: true,
      headers: {
        // Forward content-type
        "Content-Type": req.headers["content-type"] || "application/json",
        // Forward cookies from the client request
        Cookie: req.headers.cookie || "",
      },
    });

    // Respond to the client with the external service's response
    res.status(response.status).json(response.data);
  } catch (error) {
    let errorMessage = "Proxy searchDogs failed";
    let status = 500;

    if (axios.isAxiosError(error)) {
      status = error.response?.status || 500;
      errorMessage = error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Proxy searchDogs error:", errorMessage);
    res.status(status).json({ error: errorMessage });
  }
}
