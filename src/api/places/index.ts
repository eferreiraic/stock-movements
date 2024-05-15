import type { Place } from '@prisma/client';
import db from '../db';
import { cache } from 'react';
import { unstable_cache as nextCache, revalidateTag } from 'next/cache';

export const getAllPlaces = nextCache(
  cache(function getAllPlaces() {
    return db.place.findMany({ orderBy: { createdAt: 'desc' } });
  }),
  ['places'],
  {
    tags: ['places'],
  }
);

export async function getPlace(id: number) {
  const place = await db.place.findUnique({ where: { id } });

  if (!place) {
    throw new Error('Place not found in the system!');
  }

  return place;
}

export async function createPlace({ name, description }: Partial<Place>) {
  const res = await db.place.create({
    data: {
      name: name ?? '',
      description,
    },
  });
  revalidateTag('places');
  return res;
}

export async function updatePlace(id: number, data: Partial<Place>) {
  const res = await db.place.update({ where: { id }, data });
  revalidateTag('places');
  return res;
}

export async function deletePlace(id: number) {
  const res = await db.place.delete({ where: { id } });
  revalidateTag('places');
  return res;
}
