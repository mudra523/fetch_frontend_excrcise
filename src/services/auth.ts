import axiosClient from "./axiosClient";

export async function login(name: string, email: string) {
  // POST /auth/login
  const res = await axiosClient.post("/auth/login", { name, email });
  // If successful, an HttpOnly cookie is set (fetch-access-token).
  // You don't get the token in JSON; it lives in the cookie.
  return res.data;
}

export async function logout() {
  // POST /auth/logout
  await axiosClient.post("/auth/logout", {});
}
