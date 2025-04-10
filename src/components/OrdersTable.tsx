'use client';

import React, { FC } from 'react';
import { Table } from './Table/Table';
import { IOrder } from '@/interfaces/order.interface';
import { StatusBadge } from '@/components/StatusBadge';
import { Icon } from '@/components/Icon';
import Image from 'next/image';
import { useSort } from '@/components/Table/sort-context';

type SortKey = keyof IOrder;

interface OrdersTableProps {
  orders: IOrder[];
}

export const OrdersTable: FC<OrdersTableProps> = ({ orders }) => {
  const { sortBy, order } = useSort();

  const sortedOrders: IOrder[] = [...orders].sort((a, b) => {
    const aValue = a[sortBy as SortKey];
    const bValue = b[sortBy as SortKey];

    if (aValue < bValue) return order === 'asc' ? -1 : 1;
    if (aValue > bValue) return order === 'asc' ? 1 : -1;

    return 0;
  });

  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row className='odd:bg-white dark:odd:bg-violet-dark grid orders-table-columns items-center'>
            <Table.Cell header={true}>Tracking ID</Table.Cell>
            <Table.Cell
              columnKey={'productName'}
              isSortableColumn={true}
              header={true}
            >
              Product
            </Table.Cell>
            <Table.Cell
              columnKey={'customer'}
              isSortableColumn={true}
              header={true}
            >
              Customer
            </Table.Cell>
            <Table.Cell
              columnKey={'date'}
              isSortableColumn={true}
              header={true}
            >
              Date
            </Table.Cell>
            <Table.Cell header={true}>Amount</Table.Cell>
            <Table.Cell header={true}>Payment Mode</Table.Cell>
            <Table.Cell
              columnKey={'status'}
              isSortableColumn={true}
              header={true}
            >
              Status
            </Table.Cell>
            <Table.Cell header={true}>Action</Table.Cell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {sortedOrders.map((order) => {
            const {
              trackingId,
              productName,
              customer,
              productImage,
              date,
              amount,
              paymentMode,
              status,
            } = order;

            return (
              <Table.Row
                key={trackingId}
                className={'grid orders-table-columns items-center'}
              >
                <Table.Cell>
                  <p className={'text-center'}>#{trackingId}</p>
                </Table.Cell>
                <Table.Cell className={'flex row gap-2 items-center'}>
                  <Image
                    src={productImage}
                    alt='Product photo'
                    width={32}
                    height={32}
                    style={{ aspectRatio: '1 / 1', borderRadius: '8px' }}
                  />

                  <p
                    className={
                      'max-w-64 overflow-hidden text-nowrap text-ellipsis'
                    }
                  >
                    {productName}
                  </p>
                </Table.Cell>
                <Table.Cell>{customer}</Table.Cell>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{amount}</Table.Cell>
                <Table.Cell>{paymentMode}</Table.Cell>
                <Table.Cell>
                  <StatusBadge status={status}>{status}</StatusBadge>
                </Table.Cell>
                <Table.Cell>
                  <button>
                    <Icon
                      name={'bin'}
                      className={'stroke-[#A30D11] fill-none'}
                    />
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
