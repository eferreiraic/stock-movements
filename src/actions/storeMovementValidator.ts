'use server';

import { redirect } from 'next/navigation';
import { createMovement } from '../api/movements';
import { MovementsAllowed } from '@prisma/client';
import { getProduct, updateProduct } from '@/api/products';

export async function storeMovement(_: FormData, formData: FormData) {
  const rawFormData = {
    placeId: Number(formData.get('placeId')),
    productId: Number(formData.get('productId')),
    type: formData.get('typeOfMovement') as MovementsAllowed,
    quantity: Number(formData.get('quantity')) || 0,
  };

  const product = await getProduct(rawFormData.productId);

  const errors = [];
  if (!product) {
    errors.push('Product not found!');
  }

  if (product.quantityPacks < rawFormData.quantity) {
    errors.push('Not enough packs!');
  }

  if (!rawFormData.placeId) {
    errors.push('Place is required!');
  }

  if (!rawFormData.productId) {
    errors.push('Product is required!');
  }

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

  await createMovement(rawFormData);

  await updateProduct(rawFormData.productId, {
    quantityPacks: product.quantityPacks - rawFormData.quantity,
  });

  redirect('/movements');
}
