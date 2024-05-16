'use server';

import { redirect } from 'next/navigation';
import { createProduct, updateProduct } from '../api/products';
import { createMovement } from '@/api/movements';
import { MovementsAllowed } from '@prisma/client';

export async function storeProduct(_: FormData, formData: FormData) {
  const productId = Number(formData.get('id'));
  const rawFormData = {
    name: formData.get('name')?.toString(),
    description: formData.get('description')?.toString(),
    quantityPerPack: Number(formData.get('quantityPerPack')) || 1,
    quantityPacks: Number(formData.get('quantityPacks')) || 0,
  };

  const errors = [];

  if (!rawFormData.name || rawFormData.name.trim().length === 0) {
    errors.push('Name is required!');
  }

  if (!rawFormData.quantityPacks || rawFormData.quantityPacks <= 0) {
    errors.push('Quantity packs is required!');
  }

  if (errors.length > 0) {
    return { errors };
  }

  if (productId) {
    await updateProduct(productId, rawFormData);
  } else {
    const res = await createProduct(rawFormData);

    await createMovement({
      placeId: 4,
      productId: res.id,
      quantity: rawFormData.quantityPacks,
      type: MovementsAllowed.STOCK,
    });
  }

  redirect('/products');
}
