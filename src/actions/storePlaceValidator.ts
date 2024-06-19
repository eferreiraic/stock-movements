'use server';

import { createPlace, updatePlace } from '@/api/places';
import { redirect } from 'next/navigation';

export async function storePlace(_: FormData, formData: FormData) {
  const placeId = Number(formData.get('id'));
  const rawFormData = {
    name: formData.get('name')?.toString(),
    description: formData.get('description')?.toString() ?? null,
  };

  const errors = [];

  if (!rawFormData.name || rawFormData.name.trim().length === 0) {
    errors.push('Name is required!');
  }

  if (errors.length > 0) {
    return { errors };
  }

  if (placeId) {
    updatePlace(placeId, rawFormData);
  } else {
    createPlace(rawFormData);
  }

  redirect('/places');
}
