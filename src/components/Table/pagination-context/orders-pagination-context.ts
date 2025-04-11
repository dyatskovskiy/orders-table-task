'use client';

import { createPaginationContext } from '@/components/Table/pagination-context/pagination-context';
import { IOrder } from '@/interfaces/order.interface';

export const {
  PaginationProvider: OrdersPaginationProvider,
  usePagination: useOrdersPagination,
} = createPaginationContext<IOrder>();
