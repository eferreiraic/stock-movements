import { formatString } from '@/utils/formatString';
import React from 'react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'number';
  defaultValue?: string | number | readonly string[] | undefined;
  required?: boolean;
  disabled?: boolean;
}

export default function InputField({
  label,
  defaultValue,
  type = 'text',
  required = false,
  disabled,
}: InputFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={label} className="capitalize">
        {formatString(label)}:
      </label>
      <input
        id={label}
        name={label}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="border border-gray-300 rounded px-3 py-2 flex-1"
        min={type === 'number' ? 0 : undefined}
        disabled={disabled}
      />
    </div>
  );
}
