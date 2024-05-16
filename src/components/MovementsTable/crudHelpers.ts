'use server';

import { deleteMovement, getMovement } from '@/api/movements';
import { getProduct, updateProduct } from '@/api/products';
import { MovementsAllowed } from '@prisma/client';

export async function deleteMovementById(id: number) {
  const movementExists = await getMovement(id);
  const product = await getProduct(id);
  if (!movementExists) {
    throw new Error('Movement not found in the system!');
  }

  if (!product) {
    throw new Error('Product not found in the system!');
  }

  const res = await deleteMovement(id);
  if (res) {
    if (movementExists.type === MovementsAllowed.OUT) {
      updateProduct(product.id, {
        quantityPacks: product.quantityPacks + movementExists.quantity,
      });
    } else if (movementExists.type === MovementsAllowed.STOCK) {
      updateProduct(product.id, {
        quantityPacks: product.quantityPacks - movementExists.quantity,
      });
    }
  }
}
