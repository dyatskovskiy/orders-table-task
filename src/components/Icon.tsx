import React, { FC } from 'react';
import classNames from 'classnames';

interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: FC<IconProps> = ({ name, className, style }) => {
  return (
    <svg className={classNames('h-6 w-6', className)} style={style}>
      <use href={`/images/icons.svg#${name}`} />
    </svg>
  );
};
