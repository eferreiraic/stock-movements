'use client';
import React from 'react';
import Table from '../Table';
import { tableConfig } from '@/types/productsConfig';
import type { Product } from '@prisma/client';
import { deleteProductById, editProductById } from './crudHelpers';

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({
  products,
}: Readonly<ProductsTableProps>) {
  function onDeleteHandler(rowId: number) {
    const isConfirmed = confirm(
      `You're about to delete this item! Do you want to proceed?`
    );

    isConfirmed && deleteProductById(rowId);
  }
  function onEditHandler(rowId: number) {
    editProductById(rowId);
  }

  return (
    <Table
      items={products}
      tableConfig={tableConfig}
      onEdit={(rowId) => onEditHandler(rowId)}
      onDelete={(rowId) => onDeleteHandler(rowId)}
    />
  );
}
