'use client';
import React from 'react';
import Table from '../Table';
import { tableConfig } from '@/types/movementsConfig';
import { deleteMovementById, editMovementById } from './crudHelpers';
import type { Movement } from '@prisma/client';

interface MovementsTableProps {
  movements: Movement[];
}

export default function MovementsTable({ movements }: MovementsTableProps) {
  function onDeleteHandler(rowId: number) {
    const isConfirmed = confirm(
      `You're about to delete this movement! Do you want to proceed?`
    );

    isConfirmed && deleteMovementById(rowId);
  }
  function onEditHandler(rowId: number) {
    editMovementById(rowId);
  }

  console.log('movements', movements);

  return (
    <Table
      items={movements}
      tableConfig={tableConfig}
      onEdit={(rowId) => onEditHandler(rowId)}
      onDelete={(rowId) => onDeleteHandler(rowId)}
    />
  );
}
