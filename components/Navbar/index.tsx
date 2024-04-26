import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const links = [
    {
      id: 1,
      link: 'products',
    },
    {
      id: 2,
      link: 'movements',
    },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 px-4 nav bg-white">
      <div>
        <h1 className="text-4xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href={'/'}>
            STKManagement
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-red-600 duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
