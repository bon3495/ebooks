import { PropsWithChildren } from 'react';

import { Table, TableCell, TableHead } from '@/components/ui/table';

const TableMdx = ({ children }: PropsWithChildren) => {
  return (
    <div className="my-8 border-y-2">
      <Table className="text-base lg:text-lg">{children}</Table>
    </div>
  );
};

const TableHeadMdx = ({ children }: PropsWithChildren) => {
  return <TableHead className="whitespace-nowrap">{children}</TableHead>;
};

const TableCellMdx = ({ children }: PropsWithChildren) => {
  return <TableCell className="whitespace-nowrap">{children}</TableCell>;
};

export { TableMdx, TableHeadMdx, TableCellMdx };
