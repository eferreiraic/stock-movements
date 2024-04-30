'use client';
import React from 'react';
import Table from '../Table';
import { tableConfig } from '@/types/productsConfig';
import type { Product } from '@prisma/client';
import { deleteProductById } from './crudHelpers';

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  function onDeleteHandler(rowId: number) {
    const isConfirmed = confirm(
      `You're about to delete this item! Do you want to proceed?`
    );

    isConfirmed && deleteProductById(rowId);
  }
  function onEditHandler(rowId: number) {
    console.log('edit', rowId);
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
