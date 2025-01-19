import React from "react";
import { Card, Button } from "antd";
import { Dog } from "@/utils/types";

interface DogCardProps {
  dog: Dog;
  onFavorite?: (id: string) => void; // if you want to handle "favorite"
}

const DogCard: React.FC<DogCardProps> = ({ dog, onFavorite }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, marginBottom: 16 }}
      cover={
        <img
          alt={dog.name}
          src={dog.img || "https://via.placeholder.com/240?text=No+Image"}
        />
      }
    >
      <h3>{dog.name}</h3>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Zip Code: {dog.zip_code}</p>
      {onFavorite && (
        <Button type="primary" onClick={() => onFavorite(dog.id)}>
          Favorite
        </Button>
      )}
    </Card>
  );
};

export default DogCard;
