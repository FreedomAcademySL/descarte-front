'use client';
import DataTable, { TableProps } from 'react-data-table-component';

import { useColorTheme } from '@/context';
import { customStyles } from '@/components';

export function DTable<T>({
  subHeader,
  columns,
  data,
}: TableProps<T>): JSX.Element {
  const { themeMode } = useColorTheme();

  return (
    <DataTable<T>
      highlightOnHover
      responsive
      pagination
      subHeader
      subHeaderComponent={subHeader}
      title=''
      theme={themeMode === 'light' ? 'default' : 'dark'}
      columns={columns}
      data={data}
      customStyles={customStyles}
    />
  );
}
