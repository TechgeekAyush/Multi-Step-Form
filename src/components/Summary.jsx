// src/components/Summary.js
import React from 'react';

const Summary = ({ formData, prevStep }) => {
  const { personal, address, payment } = formData;

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center mb-4">Summary</h2>
      <div>
        <h3 className="font-semibold">Personal Details</h3>
        <p>First Name: {personal.firstName}</p>
        <p>Last Name: {personal.lastName}</p>
        <p>Email: {personal.email}</p>
      </div>
      <div>
        <h3 className="font-semibold">Address Details</h3>
        <p>Address: {address.address}</p>
        <p>City: {address.city}</p>
        <p>ZIP Code: {address.zip}</p>
      </div>
      <div>
        <h3 className="font-semibold">Payment Details</h3>
        <p>Card Number: {payment.cardNumber}</p>
        <p>Expiry Date: {payment.expiryDate}</p>
        <p>CVV: {payment.cvv}</p>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
        <button type="button" onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default Summary;
