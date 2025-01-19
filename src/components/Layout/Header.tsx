import React from "react";
import Link from "next/link";
import { Row, Col, Button } from "antd";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ padding: "16px 0", backgroundColor: "#071e3d", color: "#fff" }}
    >
      <Col xs={24} sm={24} md={22} lg={22}>
        <Row justify="space-between" align="middle">
          <Col>
            <Link href="/">
              <h2 style={{ margin: 0, color: "#21e6c1" }}>{"Dog's Home"}</h2>
            </Link>
          </Col>
          <Col>
            {isLoggedIn && (
              <Button
                type="primary"
                onClick={onLogout}
                style={{
                  backgroundColor: "#21e6c1", 
                  borderColor: "#21e6c1",
                  color: "#071e3d",
                  fontWeight: "bold",
                }}
              >
                Log Out
              </Button>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
