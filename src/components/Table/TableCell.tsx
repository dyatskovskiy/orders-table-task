'use client';

import React, { FC } from 'react';
import classNames from 'classnames';
import { useSort } from '@/components/Table/sort-context';
import { Icon } from '@/components/Icon';

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
  columnKey?: string;
  isSortableColumn?: boolean;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  header = false,
  columnKey = '',
  isSortableColumn = false,
}) => {
  const { sortBy, order, setSort } = useSort();
  const isActiveColumn = sortBy == columnKey;

  if (header) {
    return (
      <th
        onClick={() => setSort(columnKey)}
        className={classNames(
          'text-left text-nowrap text-ellipsis overflow-hidden font-bold p-4 relative flex flex-row items-center ',
          className,
          `${isSortableColumn && 'cursor-pointer'}`,
        )}
      >
        {children}
        {isSortableColumn && (
          <span>
            <Icon
              name={'sort-asc'}
              className={classNames(
                'absolute top-[30%] right-[-5px] w-1 h-1 fill-light dark:fill-grey',
                `${isActiveColumn && order == 'asc' && 'fill-grey dark:fill-light'}`,
              )}
            />
            <Icon
              name={'sort-desc'}
              className={classNames(
                'absolute top-[30%] right-[-5px] w-1 h-1 fill-light dark:fill-grey',
                `${isActiveColumn && order == 'desc' && 'fill-grey dark:fill-light'}`,
              )}
            />
          </span>
        )}
      </th>
    );
  }

  return (
    <td
      className={classNames(
        'text-left text-nowrap text-ellipsis overflow-hidden p-4',
        className,
      )}
    >
      {children}
    </td>
  );
};
