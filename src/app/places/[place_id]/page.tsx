import { getProduct } from '@/api/products';
import LoadingPage from '@/app/loading';
import React, { Suspense } from 'react';

interface ProductDetailsProps {
  params: { product_id: number };
}
interface ProductProps {
  productId: number;
}

async function Product({ productId }: ProductProps) {
  const product = await getProduct(productId);
  return (
    <div className="flex flex-col w-full">
      <header className="">
        <p>{product?.name}</p>
      </header>
      <main>
        <p>This is a product</p>
      </main>
    </div>
  );
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Product productId={Number(params.product_id) ?? -1} />
    </Suspense>
  );
}
