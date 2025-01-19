import React from "react";
import { Button, Modal, Card, Row } from "antd";
import { Dog } from "@/utils/types";
import Image from "next/image";

interface MatchBoxProps {
  isModalOpen: boolean;
  matchedDog: Dog | null;
  onOk: () => void;
  onCancel: () => void;
}

const BoxMatch: React.FC<MatchBoxProps> = ({
  isModalOpen,
  matchedDog,
  onOk,
  onCancel,
}) => {
  return (
    <Modal
      title="Congratulations!"
      open={isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={onOk}
          style={{
            backgroundColor: "#21e6c1",
            borderColor: "#21e6c1",
            color: "#071e3d",
          }}
        >
          OK
        </Button>,
      ]}
      bodyStyle={{
        backgroundColor: "#071e3d",
        color: "#fff",
      }}
    >
      {matchedDog ? (
        <Card
          hoverable
          style={{
            width: 240,
            borderRadius: 8,
            overflow: "hidden",
            borderColor: "#278ea5",
            backgroundColor: "#071e3d",
            color: "#fff",
          }}
          cover={
            <Image
              alt={matchedDog.name}
              src={matchedDog.img}
              layout="fill"
              objectFit="cover"
            />
          }
        >
          <Row
            style={{ marginBottom: 8, color: "#21e6c1", fontWeight: "bold" }}
          >
            You are matched with {matchedDog.name}!
          </Row>
          <Row>Name: {matchedDog.name}</Row>
          <Row>Breed: {matchedDog.breed}</Row>
          <Row>Age: {matchedDog.age}</Row>
          <Row>Zip Code: {matchedDog.zip_code}</Row>
        </Card>
      ) : (
        <p>No matched dog data found.</p>
      )}
    </Modal>
  );
};

export default BoxMatch.tsx;
