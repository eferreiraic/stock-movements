import React from 'react';

interface TableProps<T> {
  items: T[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  tableConfig: any;
}

export default function Table<T>({ items, tableConfig }: TableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
          {tableConfig.map(({ columnHeader, hidden }: any) => (
            <th
              key={columnHeader}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {columnHeader}
            </th>
          ))}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items.map((row, index) => {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={row.id ?? index}>
              {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
              {tableConfig.map(({ column }: any) => {
                return (
                  <td key={column} className="px-6 py-4 whitespace-nowrap">
                    {row[column] ?? '-'}
                  </td>
                );
              })}

              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  type="button"
                  className="px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
