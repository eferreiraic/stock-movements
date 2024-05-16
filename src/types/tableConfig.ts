export type TableConfig<T, K extends keyof T> = {
  column: K;
  columnHeader: string;
  compute?: (row: T) => void;
};
