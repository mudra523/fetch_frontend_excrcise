import axiosClient from "./axiosClient";

export async function login(name: string, email: string) {
  const res = await axiosClient.post("/auth/login", { name, email });
  return res.data;
}

export async function logout() {
  try {
    await axiosClient.post("/auth/logout", {});
  } catch (error) {
    console.error("Logout error:", error);
  }
}
