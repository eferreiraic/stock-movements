import { getAllMovements } from '@/api/movements';
import Button from '@/components/Button';
import MovementsTable from '@/components/MovementsTable';
import React from 'react';

export default async function MovementsPage() {
  const movements = await getAllMovements();

  return (
    <main className="w-full flex flex-col gap-8">
      <header className="flex justify-between items-center border-b-2 border-dotted border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-500">Movements List</h1>
        <Button label="add movements" to="movements/create" />
      </header>
      <MovementsTable movements={movements} />
    </main>
  );
}
