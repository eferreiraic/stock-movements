'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import InputField from '../InputField';
import FormButtons from '../FormButtons';
import {
  MovementsAllowed,
  type Place,
  type Product,
  type Movement,
} from '@prisma/client';
import SelectField from '../SelectField';
import formatToSelectElem from '@/utils/formatToSelectElem';

interface MovementFormProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any;
  places: Place[];
  products: Product[];
  movement?: Movement;
}

const types = [
  { value: MovementsAllowed.STOCK, label: 'Stock' },
  { value: MovementsAllowed.OUT, label: 'Out' },
];

export default function MovementForm({
  action,
  movement,
  places,
  products,
}: MovementFormProps) {
  const [formState, formAction] = useFormState(action, { errors: [] });
  const placesParsed = formatToSelectElem(places);
  const productsParsed = formatToSelectElem(products);

  return (
    <div className="w-full flex flex-col relative ">
      <h2 className="text-2xl font-bold border-b-2 border-dotted border-gray-200 pb-4 mb-10">
        {!movement
          ? 'Create new movement'
          : `Edit Movement (id: ${movement.id})`}
      </h2>
      <form
        className="flex gap-3 flex-col w-full self-center mb-20"
        action={formAction}
      >
        <input name="id" defaultValue={movement?.id} className="hidden" />
        <SelectField
          required
          label="place"
          id="placeId"
          options={placesParsed}
          defaultValue={movement?.placeId}
        />
        <SelectField
          required
          label="product"
          id="productId"
          options={productsParsed}
          defaultValue={movement?.productId}
        />
        <InputField
          label="quantity"
          type="number"
          defaultValue={movement?.quantity ?? 0}
        />
        <SelectField
          required
          label="typeOfMovement"
          options={types}
          defaultValue={movement?.type}
        />
        <FormButtons
          loadingMessage={`${!movement ? 'Creating' : 'Updating'} movement...`}
          redirectTo="/movements"
          errors={formState.errors}
        />
      </form>
    </div>
  );
}
