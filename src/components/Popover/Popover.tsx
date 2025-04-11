import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { PopoverContext } from '@/components/Popover/PopoverProvider';
import { PopoverButton } from '@/components/Popover/PopoverButton';
import { PopoverList } from '@/components/Popover/PopoverList';
import { PopoverListItem } from '@/components/Popover/PopoverListItem';

interface PopoverComponentProps {
  className?: string;
  children?: ReactNode;
}

const PopoverComponent: FC<PopoverComponentProps> = ({
  className,
  children,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <PopoverContext.Provider value={{ isOpen, onOpen, onClose }}>
      <div {...rest} className={classNames('', className)}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});
