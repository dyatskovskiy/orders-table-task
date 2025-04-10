import classNames from 'classnames';
import React, { FC } from 'react';

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <tr
      {...rest}
      className={classNames(
        'w-full odd:bg-light dark:odd:bg-violet',
        className,
      )}
    >
      {children}
    </tr>
  );
};
