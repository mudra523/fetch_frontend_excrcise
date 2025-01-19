"use client"; // If we had Next13 app router, but in classic pages we don't need it
import React from "react";
import Link from "next/link";
import { Row, Col, Button } from "antd";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <Row justify="center" align="middle" style={{ padding: "16px 0" }}>
      <Col xs={24} sm={24} md={22} lg={22}>
        <Row justify="space-between" align="middle">
          <Col>
            <Link href="/">
              <h2 style={{ margin: 0 }}>{"Dog's Home"}</h2>
            </Link>
          </Col>
          <Col>
            {isLoggedIn ? (
              <Button onClick={onLogout}>Log Out</Button>
            ) : (
              <Link href="/signin">
                <Button>Log In</Button>
              </Link>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
