import type { Product } from '@prisma/client';
import type { TableConfig } from './tableConfig';

export const tableConfig: TableConfig<Product, keyof Product>[] = [
  { column: 'name', columnHeader: 'name' },
  { column: 'description', columnHeader: 'description' },
  { column: 'quantityPerPack', columnHeader: 'quantity per pack' },
  { column: 'quantityPacks', columnHeader: 'quantity packs' },
];
