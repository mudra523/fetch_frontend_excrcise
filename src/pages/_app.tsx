import React, { useState } from "react";
import { AppProps } from "next/app";
import MainLayout from "@/components/Layout/MainLayout";
import { logout } from "@/services/auth";
import { useRouter } from "next/router"; 
import "antd/dist/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoggedIn(false);
      router.push("/signin"); 
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
      <Component {...pageProps} onLoginSuccess={handleLoginSuccess} />
    </MainLayout>
  );
}

export default MyApp;
