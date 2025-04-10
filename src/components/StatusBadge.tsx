import React, { FC } from 'react';
import { OrderStatus } from '@/interfaces/order.interface';
import classNames from 'classnames';

interface StatusBadgeProps {
  children: React.ReactNode;
  status: OrderStatus;
  className?: string;
}

export const StatusBadge: FC<StatusBadgeProps> = ({
  children,
  status,
  className,
}) => {
  return (
    <div
      className={classNames(
        ' py-2 px-3 text-center rounded-[22px] min-w-min',
        className,
        `${status === OrderStatus.process && 'bg-[#FEF2E5] text-[#CD6200]'}`,
        `${status === OrderStatus.canceled && 'bg-[#FBE7E8] text-[#A30D11]'}`,
        `${status === OrderStatus.delivered && 'bg-[#EBF9F1] text-[#1F9254]'}`,
      )}
    >
      {children}
    </div>
  );
};
