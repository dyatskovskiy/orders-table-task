import classNames from 'classnames';
import React, { FC } from 'react';

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const TableBody: FC<TableBodyProps> = ({ children, className }) => {
  return <tbody className={classNames('w-full', className)}>{children}</tbody>;
};
