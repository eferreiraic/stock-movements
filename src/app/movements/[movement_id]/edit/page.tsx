import { storeMovement } from '@/actions/storeMovementValidator';
import { getMovement } from '@/api/movements';
import { getAllPlaces } from '@/api/places';
import { getAllProducts } from '@/api/products';
import LoadingPage from '@/app/loading';
import MovementForm from '@/components/MovementForm';
import React, { Suspense } from 'react';

interface MovementDetailsProps {
  params: { movement_id: number };
}
interface MovementProps {
  movementId: number;
}

async function MovementEditForm({ movementId }: MovementProps) {
  const movement = await getMovement(movementId);
  const products = await getAllProducts();
  const places = await getAllPlaces();

  return (
    <MovementForm
      action={storeMovement}
      movement={movement}
      places={places}
      products={products}
    />
  );
}

export default function MovementEdit({ params }: MovementDetailsProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <MovementEditForm movementId={Number(params?.movement_id) ?? -1} />
    </Suspense>
  );
}
