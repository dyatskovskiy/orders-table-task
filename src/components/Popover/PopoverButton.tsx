import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { usePopoverContext } from '@/components/Popover/PopoverProvider';
import classNames from 'classnames';

interface PopoverButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
}

export const PopoverButton: FC<PopoverButtonProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  const props = usePopoverContext();

  return (
    <button
      {...rest}
      className={classNames('', className)}
      onClick={(e) => {
        onClick?.(e);
        props.onOpen();
        e.stopPropagation();
      }}
    >
      {children}
    </button>
  );
};
