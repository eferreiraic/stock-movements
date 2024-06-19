import { storeProduct } from '@/actions/storeProductValidator';
import { getProduct } from '@/api/products';
import LoadingPage from '@/app/loading';
import ProductForm from '@/components/ProductForm';
import React, { Suspense } from 'react';

interface ProductDetailsProps {
  params: { product_id: number };
}
interface ProductProps {
  productId: number;
}

async function ProductEditForm({ productId }: Readonly<ProductProps>) {
  const product = await getProduct(productId);
  return <ProductForm action={storeProduct} product={product} />;
}

export default function ProductEdit({ params }: Readonly<ProductDetailsProps>) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ProductEditForm productId={Number(params?.product_id) ?? -1} />
    </Suspense>
  );
}
