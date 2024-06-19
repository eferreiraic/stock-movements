import { storePlace } from '@/actions/storePlaceValidator';
import { getPlace } from '@/api/places';
import LoadingPage from '@/app/loading';
import PlaceForm from '@/components/PlaceForm';
import React, { Suspense } from 'react';

interface PlaceDetailsProps {
  params: { place_id: number };
}
interface PlaceProps {
  placeId: number;
}

async function PlaceEditForm({ placeId }: PlaceProps) {
  const place = await getPlace(placeId);
  return <PlaceForm action={storePlace} place={place} />;
}

export default function PlaceEdit({ params }: PlaceDetailsProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <PlaceEditForm placeId={Number(params?.place_id) ?? -1} />
    </Suspense>
  );
}
