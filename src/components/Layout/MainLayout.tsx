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
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />

      <Row 
        justify="center" 
        style={{ 
          flex: 1, 
          backgroundColor: "#1f4287", 
        }}
      >
        <Col xs={24}>
          <main style={{ 
            padding: "16px", 
            borderRadius: 8 
          }}>
            {children}
          </main>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default MainLayout;
