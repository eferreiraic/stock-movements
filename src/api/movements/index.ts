import db from '../db';
import { cache } from 'react';
import { unstable_cache as nextCache, revalidateTag } from 'next/cache';
import type { Movement } from '@prisma/client';

export const getAllMovements = nextCache(
  cache(function getAllMovements() {
    return db.$queryRaw`SELECT movements.*, (products.name) as "productName", (places.name) as "placeName" from movements
    LEFT JOIN places ON movements."placeId" = places.id
    LEFT JOIN products ON movements."productId" = products.id
    ORDER BY "createdAt" DESC`;
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
  type,
}: Partial<Movement>) {
  const res = db.$queryRaw`INSERT INTO movements ("placeId", "productId", quantity, type)
  VALUES (${placeId}, ${productId}, ${quantity}, ${type})`;

  revalidateTag('movements');
  return res;
}

export async function deleteMovement(id: number) {
  const res = await db.movement.delete({ where: { id } });
  revalidateTag('movements');
  return res;
}
