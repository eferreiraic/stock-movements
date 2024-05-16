'use server';

import { deleteMovement, getMovement } from '@/api/movements';

export async function deleteMovementById(id: number) {
  const movementExists = await getMovement(id);
  if (!movementExists) {
    throw new Error('Movement not found in the system!');
  }

  return await deleteMovement(id);
}
