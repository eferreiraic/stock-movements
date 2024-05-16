'use server';

import { redirect } from 'next/navigation';
import { createMovement, updateMovement } from '../api/movements';
import { MovementsAllowed } from '@prisma/client';

export async function storeMovement(_: FormData, formData: FormData) {
  const movementId = Number(formData.get('id'));
  const rawFormData = {
    placeId: Number(formData.get('placeId')),
    productId: Number(formData.get('productId')),
    type: formData.get('typeOfMovement') as MovementsAllowed,
    quantity: Number(formData.get('quantityPacks')) || 0,
  };

  const errors = [];

  if (!rawFormData.type) {
    errors.push(
      `Movement type is required! (${MovementsAllowed.STOCK.toString()}, ${MovementsAllowed.IN.toString()}, ${MovementsAllowed.OUT.toString()})`
    );
  }

  if (!rawFormData.quantity || rawFormData.quantity <= 0) {
    errors.push('Quantity packs is required!');
  }

  if (errors.length > 0) {
    return { errors };
  }

  if (movementId) {
    updateMovement(movementId, rawFormData);
  } else {
    createMovement(rawFormData);
  }

  redirect('/movements');
}
