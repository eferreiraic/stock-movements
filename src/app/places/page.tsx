import { getAllPlaces } from '@/api/places';
import Button from '@/components/Button';
import PlacesTable from '@/components/PlacesTable';
import React from 'react';

export default async function PlacesPage() {
  const places = await getAllPlaces();

  return (
    <main className="w-full flex flex-col gap-8">
      <header className="flex justify-between items-center border-b-2 border-dotted border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-500">Places List</h1>
        <Button label="add places" to="places/create" />
      </header>
      <PlacesTable places={places} />
    </main>
  );
}
