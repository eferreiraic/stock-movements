import type { Movement } from '@prisma/client';
import type { TableConfig } from './tableConfig';

export const tableConfig: TableConfig<Movement, keyof Movement>[] = [
  { column: 'name', columnHeader: 'name' },
  { column: 'description', columnHeader: 'description' },
];
