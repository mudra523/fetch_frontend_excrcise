import React from "react";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <div 
      style={{ 
        backgroundColor: "#071e3d", 
        color: "#fff", 
        padding: "16px 0"
      }}
    >
      <Row justify="center">
        <Col xs={20} sm={20} md={22} lg={22} style={{ textAlign: "center" }}>
          <div>
            <span style={{ color: "#21e6c1", fontWeight: "bold" }}>
            Copyright © 2025
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
