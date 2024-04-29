'use client';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  to: string;
}

export default function Button({ label, to }: ButtonProps) {
  return (
    <Link href={to}>
      <button
        type="button"
        className="focus:outline-none flex capitalize text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        {label}
      </button>
    </Link>
  );
}
