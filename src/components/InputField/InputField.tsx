import { formatString } from '@/utils/formatString';
import React from 'react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'number';
}

export default function InputField({ label, type = 'text' }: InputFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={label} className="capitalize">
        {formatString(label)}:
      </label>
      <input
        name={label}
        type={type}
        className="border border-gray-300 rounded px-3 py-2 flex-1"
        min={type === 'number' ? 0 : undefined}
      />
    </div>
  );
}
