'use server';

import { deletePlace, getPlace } from '@/api/places';
import { redirect } from 'next/navigation';

export async function deletePlaceById(id: number) {
  const placeExists = await getPlace(id);
  if (!placeExists) {
    throw new Error('Place not found in the system!');
  }

  return await deletePlace(id);
}

export async function editPlaceById(id: number) {
  return redirect(`/places/${id}/edit`);
}
