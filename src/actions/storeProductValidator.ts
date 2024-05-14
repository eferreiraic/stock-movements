'use server';

import { redirect } from 'next/navigation';
import { createProduct } from '../api/products';

export async function storeProduct(_: FormData, formData: FormData) {
  const rawFormData = {
    name: formData.get('name')?.toString() || '',
    description: formData.get('description')?.toString() || '',
    quantityPerPack: Number(formData.get('quantityPerPack')) || 1,
    quantityPack: Number(formData.get('quantityPack')) || 0,
  };

  const errors = [];

  if (!rawFormData.name || rawFormData.name.trim().length === 0) {
    errors.push('Name is required!');
  }

  if (!rawFormData.quantityPack || rawFormData.quantityPack <= 0) {
    errors.push('Quatity packs is required!');
  }

  if (errors.length > 0) {
    return { errors };
  }

  createProduct(rawFormData);
  redirect('/products');
}
