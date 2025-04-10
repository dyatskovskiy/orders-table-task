import { FC } from 'react';
import classNames from 'classnames';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, className }) => {
  return (
    <svg className={classNames('h-6 w-6', className)}>
      <use href={`/images/icons.svg#${name}`} />
    </svg>
  );
};
