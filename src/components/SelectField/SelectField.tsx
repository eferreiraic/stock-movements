import { formatString } from '@/utils/formatString';
import React from 'react';

interface SelectFieldProps {
  label: string;
  required?: boolean;
  defaultValue?: string | number | undefined;
  options: { value: string | number; label: string }[];
}

export default function SelectField({
  label,
  required = false,
  defaultValue,
  options,
}: SelectFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={label} className="capitalize">
        {formatString(label)}:
      </label>

      <select
        id="countries"
        required={required}
        className="border border-gray-300 rounded px-3 py-2 flex-1"
        defaultValue={defaultValue}
      >
        <option>Select an option ...</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
