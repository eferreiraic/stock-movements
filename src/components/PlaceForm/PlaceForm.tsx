'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import InputField from '../InputField';
import FormButtons from '../FormButtons';
import type { Place } from '@prisma/client';

interface PlaceFormProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any;
  place?: Place;
}

export default function PlaceForm({ action, place }: PlaceFormProps) {
  const [formState, formAction] = useFormState(action, { errors: [] });

  return (
    <div className="w-full flex flex-col relative ">
      <h2 className="text-2xl font-bold border-b-2 border-dotted border-gray-200 pb-4 mb-10">
        {!place ? 'Create new place' : `${place.name} (id: ${place.id})`}
      </h2>
      <form
        className="flex gap-3 flex-col w-full self-center mb-20"
        action={formAction}
      >
        <input name="id" defaultValue={place?.id} className="hidden" />
        <InputField label="name" defaultValue={place?.name} />
        <InputField
          label="description"
          defaultValue={place?.description ?? ''}
        />
        <FormButtons
          loadingMessage={`${!place ? 'Creating' : 'Updating'} place...`}
          redirectTo="/places"
          errors={formState.errors}
        />
      </form>
    </div>
  );
}
