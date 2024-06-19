import { getMovement } from '@/api/movements';
import LoadingPage from '@/app/loading';
import React, { Suspense } from 'react';

interface MovementDetailsProps {
  params: { movement_id: number };
}
interface MovementProps {
  movementId: number;
}

async function Movement({ movementId }: Readonly<MovementProps>) {
  const movement = await getMovement(movementId);

  return (
    <div className="flex flex-col w-full">
      <header className="">
        <p>{movement?.productId}</p>
      </header>
      <main>
        <p>This is a movement</p>
      </main>
    </div>
  );
}

export default function MovementDetails({
  params,
}: Readonly<MovementDetailsProps>) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Movement movementId={Number(params?.movement_id ?? -1)} />
    </Suspense>
  );
}
