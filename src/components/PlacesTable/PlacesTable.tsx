'use client';
import React from 'react';
import Table from '../Table';
import type { Place } from '@prisma/client';
import { deletePlaceById, editPlaceById } from './crudHelpers';
import { tableConfig } from '@/types/placesConfig';

interface PlacesTableProps {
  places: Place[];
}

export default function PlacesTable({ places }: PlacesTableProps) {
  function onDeleteHandler(rowId: number) {
    const isConfirmed = confirm(
      `You're about to delete this item! Do you want to proceed?`
    );

    isConfirmed && deletePlaceById(rowId);
  }
  function onEditHandler(rowId: number) {
    editPlaceById(rowId);
  }

  return (
    <Table
      items={places}
      tableConfig={tableConfig}
      onEdit={(rowId) => onEditHandler(rowId)}
      onDelete={(rowId) => onDeleteHandler(rowId)}
    />
  );
}
