import { storePlace } from '@/actions/storePlaceValidator';
import PlaceForm from '@/components/PlaceForm';

export default function CreatePlace() {
  return <PlaceForm action={storePlace} />;
}
