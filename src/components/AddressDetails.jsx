// src/components/AddressDetails.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zip: yup.string().required('ZIP Code is required')
});

const AddressDetails = ({ nextStep, prevStep, handleFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    handleFormData('address', data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700">Address</label>
        <input {...register('address')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.address?.message}</p>
      </div>
      <div>
        <label className="block text-gray-700">City</label>
        <input {...register('city')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.city?.message}</p>
      </div>
      <div>
        <label className="block text-gray-700">ZIP Code</label>
        <input {...register('zip')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.zip?.message}</p>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white rounded-md">Back</button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
      </div>
    </form>
  );
};

export default AddressDetails;
