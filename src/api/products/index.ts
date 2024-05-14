import type { Product } from '@prisma/client';
import db from '../db';
import { cache } from 'react';
import { unstable_cache as nextCache, revalidateTag } from 'next/cache';

export const getAllProducts = nextCache(
  cache(function getAllProducts() {
    return db.product.findMany({ orderBy: { createdAt: 'desc' } });
  }),
  ['products'],
  {
    tags: ['products'],
  }
);

export async function getProduct(id: number) {
  const product = await db.product.findUnique({ where: { id } });

  if (!product) {
    throw new Error('Product not found in the system!');
  }

  return product;
}

export async function createProduct({
  name,
  description,
  quantityPerPack,
  quantityPacks,
}: Partial<Product>) {
  const res = await db.product.create({
    data: {
      name: name ?? '',
      description,
      quantityPerPack,
      quantityPacks: quantityPacks ?? 1,
    },
  });
  revalidateTag('products');
  return res;
}

export async function updateProduct(id: number, data: Partial<Product>) {
  const res = await db.product.update({ where: { id }, data });
  revalidateTag('products');
  return res;
}

export async function deleteProduct(id: number) {
  const res = await db.product.delete({ where: { id } });
  revalidateTag('products');
  return res;
}
