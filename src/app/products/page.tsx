import { getAllProducts } from '@/api/products';
import Button from '@/components/Button';
import ProductsTable from '@/components/ProductsTable';
import React from 'react';

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="w-full flex flex-col gap-8">
      <header className="flex justify-between items-center border-b-2 border-dotted border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-500">Products List</h1>
        <Button label="add product" to="products/create" />
      </header>
      <ProductsTable products={products} />
    </main>
  );
}
