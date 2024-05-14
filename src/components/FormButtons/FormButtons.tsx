'use client';
import Link from 'next/link';
import React from 'react';
import { useFormStatus } from 'react-dom';

interface FormButtonsProps {
  loadingMessage: string;
  redirectTo: string;
  errors: string[];
}

export default function FormButtons({
  loadingMessage,
  redirectTo,
  errors,
}: FormButtonsProps) {
  const status = useFormStatus();

  return (
    <div className="flex justify-between items-center">
      {errors.length > 0 ? (
        <p className="text-red-500">{errors[0]}</p>
      ) : (
        <div />
      )}
      {status.pending ? (
        <p>{loadingMessage}</p>
      ) : (
        <div className="flex gap-4 mt-12">
          <Link href={redirectTo}>
            <button
              type="submit"
              className="px-4 py-2 font-medium text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-blue active:bg-red-600 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
