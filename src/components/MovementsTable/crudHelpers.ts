'use server';

import { deleteMovement, getMovement } from '@/api/movements';
import { redirect } from 'next/navigation';

export async function deleteMovementById(id: number) {
  const movementExists = await getMovement(id);
  if (!movementExists) {
    throw new Error('Movement not found in the system!');
  }

  return await deleteMovement(id);
}

export async function editMovementById(id: number) {
  return redirect(`/movements/${id}/edit`);
}
