// src/RentalPage.js
import React from 'react';

const RentalPage = () => {
  return (
    <div className="rental-page">
      <h1>Rental Process</h1>
      <h3>Step 1: Choose a car from the available list.</h3>
      <h3>Step 2: Submit an online booking form with required details.</h3>
      <h3>Step 3: Pay the rental amount on the day of delivery.</h3>
      <h3>Step 4: Pick up your car at the specified location.</h3>

      <h2>Rental Terms</h2>
      <p>Rental Period: Minimum rental period of 10 days.</p>
      <p>Deposit: ₹2,00,000 (Refundable upon return of the car in good condition).</p>
      <p>Insurance: Customers must arrange their own insurance for the rental period.</p>

      <h2>Pricing Details</h2>
      <p>Tesla Model S: ₹8,000 per day</p>
      <p>Ford Mustang: ₹6,500 per day</p>
      <p>BMW X5: ₹7,000 per day</p>
      <p>Audi A6: ₹6,200 per day</p>

      <h2>Discounts</h2>
      <p>Festivals: Special discounts during festival periods (e.g., 10-15% off on all rentals during Diwali).</p>
    </div>
  );
};

export default RentalPage;
