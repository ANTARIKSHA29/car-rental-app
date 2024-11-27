import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image paths for the carousel
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  // Change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="App">
      {/* Carousel Section */}
      <div className="carousel">
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          className="carousel-image" // Apply the carousel image class for styling
        />
      </div>

      {/* Rental Page Section */}
      <div className="rental-page">
        <h2>Rental Process</h2>
        <p><strong>Step 1:</strong> Choose a car from the available list.</p>
        <p><strong>Step 2:</strong> Submit an online booking form with required details.</p>
        <p><strong>Step 3:</strong> Pay the rental amount on the day of delivery.</p>
        <p><strong>Step 4:</strong> Pick up your car at the specified location.</p>
        <h3>Rental Terms</h3>
        <p><strong>Rental Period:</strong> Minimum rental period of 10 days.</p>
        <p><strong>Deposit:</strong> ₹2,00,000 (Refundable upon return of the car in good condition).</p>
        <p><strong>Insurance:</strong> Customers must arrange their own insurance for the rental period.</p>
        <h3>Pricing Details</h3>
        <p>Tesla Model S: ₹8,000 per day</p>
        <p>Ford Mustang: ₹6,500 per day</p>
        <p>BMW X5: ₹7,000 per day</p>
        <p>Audi A6: ₹6,200 per day</p>
        <h3>Discounts</h3>
        <p>Festivals: Special discounts during festival periods (e.g., 10-15% off on all rentals during Diwali).</p>
      </div>

      {/* Contact Page Section */}
      <div className="contact-page">
        <h2>Contact Information</h2>
        <p><strong>Company Address:</strong> Indiranagar, Bangalore, Near KFC Metro Station</p>
        <p><strong>Phone Number:</strong> +91 9876543210</p>
        <p><strong>Email Address:</strong> contact@carrentals.com</p>
        <h3>Social Media Links:</h3>
        <p><strong>Instagram:</strong> @CarRentalsIndia</p>
        <p><strong>Facebook:</strong> CarRentalsIndia</p>
        <p><strong>Twitter:</strong> @CarRentalsIN</p>
        <h3>Business Hours:</h3>
        <p><strong>Monday to Saturday:</strong> 9:00 AM to 9:00 PM</p>
        <p><strong>Sunday:</strong> Closed</p>
        <p><strong>Festivals:</strong> Closed</p>
      </div>
    </div>
  );
}

export default App;
