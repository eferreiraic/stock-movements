'use client';
import React from 'react';

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button
      type="button"
      className="focus:outline-none flex capitalize text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
      onClick={() => alert(`Add ${label}`)}
    >
      {label}
    </button>
  );
}
