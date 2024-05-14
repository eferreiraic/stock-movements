'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import InputField from '../InputField';
import FormButtons from '../FormButtons';

interface ProductFormProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any;
}

export default function ProductForm({ action }: ProductFormProps) {
  const [formState, formAction] = useFormState(action, { errors: [] });

  return (
    <div className="w-full flex flex-col relative ">
      <h2 className="text-2xl font-bold border-b-2 border-dotted border-gray-200 pb-4 mb-10">
        Create new product
      </h2>
      <form
        className="flex gap-3 flex-col w-full self-center mb-20"
        action={formAction}
      >
        <InputField label="name"  />
        <InputField label="description" />
        <InputField label="quantityPerPack" type="number" />
        <InputField label="quantityPack" type="number"  />

        <FormButtons
          loadingMessage="Creating a new product ..."
          redirectTo="/products"
          errors={formState.errors}
        />
      </form>
    </div>
  );
}
