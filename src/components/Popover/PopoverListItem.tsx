import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { usePopoverContext } from '@/components/Popover/PopoverProvider';

interface PopoverListItemProps {
  className?: string;
  children?: ReactNode;
}

export const PopoverListItem: FC<PopoverListItemProps> = ({
  className,
  children,
}) => {
  const props = usePopoverContext();

  return (
    <button
      onClick={() => {
        props.onClose();
      }}
      className={classNames('relative z-10', className)}
    >
      {children}
    </button>
  );
};
