'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import InputField from '../InputField';
import FormButtons from '../FormButtons';
import type { Product } from '@prisma/client';

interface ProductFormProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: any;
  product?: Product;
}

export default function ProductForm({ action, product }: ProductFormProps) {
  const [formState, formAction] = useFormState(action, { errors: [] });

  return (
    <div className="w-full flex flex-col relative ">
      <h2 className="text-2xl font-bold border-b-2 border-dotted border-gray-200 pb-4 mb-10">
        {!product
          ? 'Create new product'
          : `${product.name} (id: ${product.id})`}
      </h2>
      <form
        className="flex gap-3 flex-col w-full self-center mb-20"
        action={formAction}
      >
        <input name="id" defaultValue={product?.id} className="hidden" />
        <InputField label="name" defaultValue={product?.name} />
        <InputField
          label="description"
          defaultValue={product?.description ?? ''}
        />
        <InputField
          label="quantityPerPack"
          type="number"
          defaultValue={product?.quantityPerPack ?? 1}
        />
        <InputField
          label="quantityPacks"
          type="number"
          defaultValue={product?.quantityPacks}
          disabled={!!product}
        />

        <FormButtons
          loadingMessage={`${!product ? 'Creating' : 'Updating'} product...`}
          redirectTo="/products"
          errors={formState.errors}
        />
      </form>
    </div>
  );
}
