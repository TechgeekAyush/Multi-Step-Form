// src/components/PaymentDetails.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  cardNumber: yup.string().required('Card Number is required'),
  cvv: yup.string().required('CVV is required')
});

const PaymentDetails = ({ nextStep, prevStep, handleFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    handleFormData('payment', data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700">Card Number</label>
        <input {...register('cardNumber')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.cardNumber?.message}</p>
      </div>
      <div>
        <label className="block text-gray-700">CVV</label>
        <input {...register('cvv')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.cvv?.message}</p>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
      </div>
    </form>
  );
};

export default PaymentDetails;
