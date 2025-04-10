import classNames from 'classnames';
import React, { FC } from 'react';

interface TableHeadProps {
  children: React.ReactNode;
  classname?: string;
}
export const TableHead: FC<TableHeadProps> = ({ children, classname }) => {
  return <thead className={classNames('w-full', classname)}>{children}</thead>;
};
