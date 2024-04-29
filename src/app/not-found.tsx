import React from 'react';

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-10 pt-28">
      <h1 className="text-5xl text-center text-red-800">Page not found!</h1>
      <p className="text-xl text-center">
        {`Sorry we could not find the page you're looking for...`}
      </p>
    </div>
  );
}
