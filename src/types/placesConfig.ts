import type { Place } from '@prisma/client';
import type { TableConfig } from './tableConfig';

export const tableConfig: TableConfig<Place, keyof Place>[] = [
  { column: 'name', columnHeader: 'name' },
  { column: 'description', columnHeader: 'description' },
];
