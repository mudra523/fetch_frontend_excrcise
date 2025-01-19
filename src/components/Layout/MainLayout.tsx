import React, { PropsWithChildren } from "react";
import { Row, Col } from "antd";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps extends PropsWithChildren {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isLoggedIn,
  onLogout,
}) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HEADER */}
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />

      {/* MAIN CONTENT */}
      <Row justify="center" style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <Col xs={24} sm={24} md={22} lg={22}>
          <main style={{ padding: "16px 0" }}>{children}</main>
        </Col>
      </Row>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
