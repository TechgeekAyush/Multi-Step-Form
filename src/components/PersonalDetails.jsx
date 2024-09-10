// src/components/PersonalDetails.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required')
});

const PersonalDetails = ({ nextStep, handleFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    handleFormData('personal', data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700">First Name</label>
        <input {...register('firstName')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.firstName?.message}</p>
      </div>
      <div>
        <label className="block text-gray-700">Last Name</label>
        <input {...register('lastName')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.lastName?.message}</p>
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input {...register('email')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
    </form>
  );
};

export default PersonalDetails;
