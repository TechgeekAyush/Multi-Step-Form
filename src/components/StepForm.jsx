// src/components/StepForm.js
import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AddressDetails from './AddressDetails';
import PaymentDetails from './PaymentDetails';
import Summary from './Summary';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    address: {},
    payment: {}
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleFormData = (step, data) => setFormData({ ...formData, [step]: data });

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails nextStep={nextStep} handleFormData={handleFormData} />;
      case 2:
        return <AddressDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
      case 3:
        return <PaymentDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
      case 4:
        return <Summary formData={formData} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Multi-Step Form</h1>
      {renderStep()}
    </div>
  );
};

export default StepForm;
