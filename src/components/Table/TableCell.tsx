'use client';

import React, { FC } from 'react';
import classNames from 'classnames';
import { useSort } from '@/components/Table/sort-context/sort-context';
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
  columnKey,
  isSortableColumn = false,
}) => {
  const { sortBy, direction, setSort } = useSort();

  if (header) {
    const isActiveColumn = sortBy === columnKey;

    return (
      <th
        onClick={() => {
          if (!columnKey) return;
          setSort(columnKey);
        }}
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
              style={{
                width: '16px',
                height: '16px',
              }}
              className={classNames(
                'absolute top-[35%] right-1 fill-light-grey dark:fill-grey',
                `${isActiveColumn && direction == 'asc' && 'fill-grey dark:fill-light'}`,
              )}
            />
            <Icon
              name={'sort-desc'}
              style={{ width: '16px', height: '16px' }}
              className={classNames(
                'absolute top-[40%] right-1 fill-light-grey dark:fill-grey',
                `${isActiveColumn && direction == 'desc' && 'fill-grey dark:fill-light'}`,
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
