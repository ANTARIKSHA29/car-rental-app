import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>

      <h3>Company Address</h3>
      <p>Indiranagar, Bangalore, Near KFC Metro Station</p>

      <h3>Contact Information</h3>
      <p><strong>Phone:</strong> +91 9876543210</p>
      <p><strong>Email:</strong> <a href="mailto:contact@carrentals.com">contact@carrentals.com</a></p>

      <h3>Follow Us on Social Media</h3>
      <ul>
        <li><a href="https://instagram.com/carrentalsindia">Instagram: @CarRentalsIndia</a></li>
        <li><a href="https://facebook.com/carrentalsindia">Facebook: CarRentalsIndia</a></li>
        <li><a href="https://twitter.com/carrentalsin">Twitter: @CarRentalsIN</a></li>
      </ul>

      <h3>Business Hours</h3>
      <p><strong>Monday to Saturday:</strong> 9:00 AM - 9:00 PM</p>
      <p><strong>Sunday:</strong> Closed</p>
      <p><strong>Festivals:</strong> Closed</p>
    </div>
  );
}

export default Contact;
