import React, { useState } from "react";
import { Button, Modal, Card, Row } from "antd";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Congratulations!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Row>You are matched with Name.</Row>
          <Row>Name: Luna</Row>
          <Row>Breed:</Row>
          <Row>Age:</Row>
          <Row>ZipCode:</Row>
        </Card>
      </Modal>
    </>
  );
};

export default App;
