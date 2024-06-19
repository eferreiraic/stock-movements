'use client';
import React from 'react';
import Table from '../Table';
import { tableConfig } from '@/types/movementsConfig';
import { deleteMovementById } from './crudHelpers';
import type { Movement } from '@prisma/client';

interface MovementsTableProps {
  movements: Movement[];
}

export default function MovementsTable({
  movements,
}: Readonly<MovementsTableProps>) {
  function onDeleteHandler(rowId: number) {
    const isConfirmed = confirm(
      `You're about to delete this movement! Do you want to proceed?`
    );

    isConfirmed && deleteMovementById(rowId);
  }

  return (
    <Table
      items={movements}
      tableConfig={tableConfig}
      onDelete={(rowId) => onDeleteHandler(rowId)}
    />
  );
}
