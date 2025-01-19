import React from "react";
import { Card } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Dog } from "@/utils/types";

const { Meta } = Card;

interface DogCardProps {
  dog: Dog;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, isFavorite, onToggleFavorite }) => {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        marginBottom: 16,
        borderRadius: 8,
        overflow: "hidden",
        borderColor: "#278ea5",    
        backgroundColor: "#f0fcff" 
      }}
      cover={
        <img
          alt={dog.name}
          src={dog.img}
          style={{ height: 200, objectFit: "cover" }}
        />
      }
      actions={[
        isFavorite ? (
          <HeartFilled
            style={{ color: "#21e6c1", fontSize: 22 }}
            onClick={() => onToggleFavorite(dog.id)}
          />
        ) : (
          <HeartOutlined
            style={{ color: "#21e6c1", fontSize: 22 }}
            onClick={() => onToggleFavorite(dog.id)}
          />
        ),
      ]}
    >
      <Meta
        title={
          <span style={{ color: "#1f4287", fontWeight: "bold" }}>
            {dog.name}
          </span>
        }
        description={
          <div style={{ color: "#278ea5" }}>
            <p style={{ margin: 0 }}>Breed: {dog.breed}</p>
            <p style={{ margin: 0 }}>Age: {dog.age}</p>
            <p style={{ margin: 0 }}>Zip Code: {dog.zip_code}</p>
          </div>
        }
      />
    </Card>
  );
};

export default DogCard;
