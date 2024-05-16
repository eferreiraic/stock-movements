import { storeMovement } from '@/actions/storeMovementValidator';
import { getAllPlaces } from '@/api/places';
import { getAllProducts } from '@/api/products';
import MovementForm from '@/components/MovementForm';

export default async function CreateMovement() {
  const products = await getAllProducts();
  const places = await getAllPlaces();

  return (
    <MovementForm action={storeMovement} products={products} places={places} />
  );
}
