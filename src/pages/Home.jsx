import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import CarCard from '../components/CarCard'; // Importing CarCard component

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/data/cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Car+Rental+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Car Rentals</h3>
            <p>Rent a car for your next adventure!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Car+Rental+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Luxury Cars</h3>
            <p>Drive in style and comfort.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Car+Rental+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Affordable Rentals</h3>
            <p>Great deals on your rental needs!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cars Listing */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Cars</h2>
        <Row>
          {cars.map((car) => (
            <Col sm={12} md={6} lg={4} key={car.id}>
              <CarCard car={car} /> {/* Rendering CarCard for each car */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
