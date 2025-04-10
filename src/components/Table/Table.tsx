import classNames from 'classnames';
import React, { FC } from 'react';
import { TableHead } from '@/components/Table/TableHead';
import { TableBody } from '@/components/Table/TableBody';
import { TableRow } from '@/components/Table/TableRow';
import { TableCell } from '@/components/Table/TableCell';

interface TableComponentProps {
  children: React.ReactNode;
  classname?: string;
}

export const TableComponent: FC<TableComponentProps> = ({
  children,
  classname,
}) => {
  return <table className={classNames('w-full', classname)}>{children}</table>;
};

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
});
