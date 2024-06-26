import type { Movement } from '@prisma/client';
import type { TableConfig } from './tableConfig';
import { capitalizeFirstLetter } from '@/utils/formatString';

type MovementColumns = Movement & {
  placeName: string;
  productName: string;
};

export const tableConfig: TableConfig<
  MovementColumns,
  keyof MovementColumns
>[] = [
  { column: 'placeName', columnHeader: 'place' },
  { column: 'productName', columnHeader: 'product' },
  { column: 'quantity', columnHeader: 'quantity' },
  {
    column: 'type',
    columnHeader: 'Type of Movement',
    compute: (data: MovementColumns) => {
      return capitalizeFirstLetter(data.type);
    },
  },
];
