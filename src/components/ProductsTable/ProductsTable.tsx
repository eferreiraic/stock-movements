'use client';
import React from 'react';
import Table from '../Table';
import { tableConfig } from '@/types/productsConfig';
import type { Product } from '@prisma/client';

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
  function onDeleteHandler(rowId: number) {
    console.log('delete', rowId);
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
