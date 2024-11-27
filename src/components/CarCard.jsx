import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap components for styling

const CarCard = ({ car }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={car.imageUrl} />
      <Card.Body>
        <Card.Title>{car.name}</Card.Title>
        <Card.Text>{car.description}</Card.Text>
        <Button variant="primary">Rent Now</Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
