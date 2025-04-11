'use client';

import React, { ChangeEvent, useEffect, useMemo } from 'react';
import { Table } from './Table/Table';
import { IOrder } from '@/interfaces/order.interface';
import { StatusBadge } from '@/components/StatusBadge';
import { Icon } from '@/components/Icon';
import Image from 'next/image';
import { Popover } from '@/components/Popover/Popover';
import { Input } from '@/components/Input';
import { useSort } from '@/components/Table/sort-context/sort-context';
import { useFilter } from '@/components/Table/filter-context/filter-context';
import { useOrdersPagination } from '@/components/Table/pagination-context/orders-pagination-context';
import { paginateArray } from '@/lib/paginateArray';
import { OrdersPaginationControlPanel } from '@/components/OrdersPaginationControlPanel';

type SortKey = keyof IOrder;

interface OrdersTableProps {
  initialOrders: IOrder[];
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ initialOrders }) => {
  const { filter, setFilter } = useFilter();

  const { limit, setLimit, items, setItems, currentPage, setCurrentPage } =
    useOrdersPagination();

  const { sortBy, direction } = useSort();

  useEffect(() => {
    setItems(initialOrders);
  }, [initialOrders, setItems]);

  // FILTER
  const onFilterChange = (filter: string) => {
    setFilter(filter);
    setCurrentPage(1);
  };
  const filteredOrders = useMemo(() => {
    const searchString = filter.toLowerCase();

    return items.filter((order: IOrder) => {
      return (
        order.productName.toLowerCase().includes(searchString) ||
        order.customer.toLowerCase().includes(searchString) ||
        order.trackingId.toString().includes(searchString) ||
        order.date.toString().includes(searchString) ||
        order.status.toLowerCase().includes(searchString) ||
        order.paymentMode.toLowerCase().includes(searchString)
      );
    });
  }, [items, filter]);

  // SORT
  const sortedOrders: IOrder[] = [...filteredOrders].sort((a, b) => {
    const aValue = a[sortBy as SortKey];
    const bValue = b[sortBy as SortKey];

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;

    return 0;
  });

  // PAGINATION
  const totalPages = useMemo(() => {
    return Math.ceil(sortedOrders.length / limit);
  }, [filteredOrders, limit]);
  const paginatedOrders = paginateArray(sortedOrders, currentPage, limit);

  // DELETE
  const handleDelete = async (trackingId: number) => {
    try {
      const response = await fetch(`/api/orders/${trackingId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        setItems(items.filter((order) => order.trackingId !== trackingId));
      } else {
        alert(data.error || 'Something went wrong! Try again');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={'p-4 flex flex-row items-center'}>
        <span className={'text-xs'}>Show</span>
        <Popover className={'mx-3 relative'}>
          <Popover.Button
            className={
              'flex flex-row gap-1 items-center cursor-pointer rounded-lg bg-light-grey dark:bg-dark p-2'
            }
          >
            <span className={'text-xs'}>{limit}</span>
            <Icon
              name={'sort-desc'}
              className={'fill-grey dark:fill-white self-start'}
              style={{ width: '12px', height: '12px' }}
            />
          </Popover.Button>
          <Popover.List
            className={
              'flex flex-col gap-1 px-4 py-2 bg-light-grey dark:bg-dark top-[110%] rounded-lg'
            }
          >
            {limit != 10 && (
              <Popover.ListItem className={'cursor-pointer'}>
                <span
                  onClick={() => {
                    setLimit(10);
                    setCurrentPage(1);
                  }}
                >
                  10
                </span>
              </Popover.ListItem>
            )}
            {limit != 25 && (
              <Popover.ListItem className={'cursor-pointer'}>
                <span
                  onClick={() => {
                    setLimit(25);
                    setCurrentPage(1);
                  }}
                >
                  25
                </span>
              </Popover.ListItem>
            )}
            {limit != 50 && (
              <Popover.ListItem className={'cursor-pointer'}>
                <span
                  onClick={() => {
                    setLimit(50);
                    setCurrentPage(1);
                  }}
                >
                  50
                </span>
              </Popover.ListItem>
            )}
          </Popover.List>
        </Popover>

        <span className={'text-xs'}>entries</span>

        <label className={'relative max-w-64 ml-6'}>
          <Icon
            name={'search'}
            className={'fill-grey dark:fill-white absolute top-2 left-2'}
            style={{ width: '16px', height: '16px' }}
          />
          <Input
            name={'filter'}
            placeholder={'Search...'}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              onFilterChange(e.target.value)
            }
            className={
              'text-xs border border-grey dark:border-white text-grey dark:text-white rounded-lg pl-8 placeholder:text-grey dark:placeholder:text-white'
            }
          />
        </label>
      </div>
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
          {paginatedOrders.map((order) => {
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
                  <button
                    className={'w-6 h-6 cursor-pointer'}
                    onClick={() => handleDelete(trackingId)}
                  >
                    <Icon
                      name={'trash'}
                      className={'stroke-[#A30D11] fill-none'}
                    />
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <div className={'p-4'}>
        <OrdersPaginationControlPanel
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};
