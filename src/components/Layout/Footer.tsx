import React from "react";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <div className="bg-black text-white" style={{ marginTop: 24 }}>
      <Row justify="center">
        <Col xs={20} sm={20} md={22} lg={22} style={{ textAlign: "center" }}>
          <div style={{ padding: "16px 0" }}>
            PRIVACY | TERMS
            <br />
            Copyright © 2025
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
