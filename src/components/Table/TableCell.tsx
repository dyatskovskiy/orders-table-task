import React, { FC } from 'react';
import classNames from 'classnames';

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  header = false,
}) => {
  if (header) {
    return (
      <th
        className={classNames(
          'text-left text-nowrap text-ellipsis overflow-hidden font-bold p-4',
          className,
        )}
      >
        {children}
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
