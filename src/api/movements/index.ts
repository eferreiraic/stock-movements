// import type { Movement } from '@prisma/client';
import db from '../db';
import { cache } from 'react';
import { unstable_cache as nextCache, revalidateTag } from 'next/cache';
import { MovementsAllowed, type Movement } from '@prisma/client';

export const getAllMovements = nextCache(
  cache(function getAllMovements() {
    return db.movement.findMany({ orderBy: { createdAt: 'desc' } });
  }),
  ['movements'],
  {
    tags: ['movements'],
  }
);

export async function getMovement(id: number) {
  const movement = await db.movement.findUnique({ where: { id } });

  if (!movement) {
    throw new Error('Movement not found in the system!');
  }

  return movement;
}

export async function createMovement({
  placeId,
  productId,
  quantity,
}: Partial<Movement>) {
  const res = await db.movement.create({
    data: {
      placeId: placeId ?? 0,
      productId: productId ?? 0,
      quantity: quantity ?? 0,
      type: MovementsAllowed.STOCK,
    },
  });
  revalidateTag('movements');
  return res;
}

export async function updateMovement(id: number, data: Partial<Movement>) {
  const res = await db.movement.update({ where: { id }, data });
  revalidateTag('movements');
  return res;
}

export async function deleteMovement(id: number) {
  const res = await db.movement.delete({ where: { id } });
  revalidateTag('movements');
  return res;
}
