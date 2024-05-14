'use server';

import { deleteProduct, getProduct } from '@/api/products';

export async function deleteProductById(id: number) {
  const productExists = await getProduct(id);
  if (!productExists) {
    throw new Error('Product not found in the system!');
  }

  return await deleteProduct(id);
}
