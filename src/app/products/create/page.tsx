import { storeProduct } from '@/actions/storeProductValidator';
import ProductForm from '@/components/ProductForm';

export default function CreateProduct() {
  return <ProductForm action={storeProduct} />;
}
