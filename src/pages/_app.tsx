import React, { useState } from "react";
import { AppProps } from "next/app";
import MainLayout from "@/components/Layout/MainLayout";
import { logout } from "@/services/auth";
import "antd/dist/reset.css";
// or "antd/dist/antd.css", depending on your setup

function MyApp({ Component, pageProps }: AppProps) {
  // Track if user is logged in.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // When user logs in successfully (see signin page), we set this to true
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      await logout(); // call /auth/logout
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggedIn(false);
    }
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
      <Component {...pageProps} onLoginSuccess={handleLoginSuccess} />
    </MainLayout>
  );
}

export default MyApp;
