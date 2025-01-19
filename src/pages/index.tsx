import React from "react";
import { Button, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("https://images.unsplash.com/photo-1601758176175-45914394491c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center/cover no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          padding: "0 1rem",
          maxWidth: 600,
        }}
      >
        <Title level={1} style={{ color: "#fff" }}>
          Welcome to the Dog's Home
        </Title>
        <Paragraph style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#fff" }}>
          Find your perfect furry companion. Log in now to view and favorite available dogs from various shelters.
        </Paragraph>
        <Link href="/signin">
          <Button type="primary" size="large">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
}
