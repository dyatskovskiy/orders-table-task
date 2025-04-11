import { Container } from '@/components/Container';
import { OrdersTable } from '@/components/OrdersTable';
import { FilterProvider } from '@/components/Table/filter-context/filter-context';
import { SortProvider } from '@/components/Table/sort-context/sort-context';
import { OrdersPaginationProvider } from '@/components/Table/pagination-context/orders-pagination-context';
import { fetchData } from '@/lib/fetchData';
import { IOrder } from '@/interfaces/order.interface';

export default async function OrdersPage() {
  const { data: orders } = await fetchData<IOrder[]>('/api/orders', {
    headers: { 'Content-Type': 'application/json' },
  });

  return (
    <FilterProvider>
      <OrdersPaginationProvider>
        <SortProvider>
          <Container>
            <OrdersTable initialOrders={orders} />
          </Container>
        </SortProvider>
      </OrdersPaginationProvider>
    </FilterProvider>
  );
}
