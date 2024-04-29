import Link from 'next/link';
import React from 'react';

export default function CreateProduct() {
  return (
    <div className="w-full flex flex-col relative ">
      <h2 className="text-2xl font-bold border-b-2 border-dotted border-gray-200 pb-4 mb-10">
        Create new product
      </h2>
      <form className="flex gap-3 flex-col w-full self-center mb-20">
        <InputField label="name" />
        <InputField label="description" />
        <InputField label="quantityPerPack" type="number" />
        <InputField label="quantityPack" type="number" />

        <div className="absolute right-0 bottom-0 flex gap-4">
          <Link href="/products">
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
      </form>
    </div>
  );
}

const InputField = ({
  label,
  type = 'text',
}: {
  label: string;
  type?: 'text' | 'number';
}) => (
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

function formatString(entryStr: string) {
  return entryStr
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str: string) => str.toUpperCase());
}
