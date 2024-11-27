import React from 'react';

function Rentals() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">How to Rent a Car</h2>
      <p>Follow these simple steps to rent a car from us:</p>
      <ol>
        <li>Choose a car from our available models.</li>
        <li>Fill out the online booking form with your details.</li>
        <li>Make the payment on the day of delivery.</li>
        <li>Pick up your car from the specified location.</li>
      </ol>

      <h3>Rental Terms</h3>
      <ul>
        <li><strong>Minimum Rental Period:</strong> 10 days</li>
        <li><strong>Deposit:</strong> ₹2,00,000 (Refundable)</li>
        <li><strong>Insurance:</strong> Please arrange your own insurance for the rental period.</li>
      </ul>

      <h3>Pricing</h3>
      <ul>
        <li><strong>Tesla Model S:</strong> ₹8,000 per day</li>
        <li><strong>Ford Mustang:</strong> ₹6,500 per day</li>
        <li><strong>BMW X5:</strong> ₹7,000 per day</li>
        <li><strong>Audi A6:</strong> ₹6,200 per day</li>
      </ul>

      <h3>Discounts</h3>
      <p>Special festival discounts are available, including up to 15% off on rentals during major holidays like Diwali.</p>
    </div>
  );
}

export default Rentals;
