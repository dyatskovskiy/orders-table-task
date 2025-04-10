import { Container } from '@/components/Container';
import { OrdersTable } from '@/components/OrdersTable';
import { fetchData } from '@/lib/fetchData';
import { IOrder } from '@/interfaces/order.interface';
import { SortProvider } from '@/components/Table/sort-context';

export default async function Home() {
  const { data: orders } = await fetchData<IOrder[]>('/orders', {
    headers: { 'Content-Type': 'application/json' },
  });

  return (
    <SortProvider>
      <Container>
        <OrdersTable orders={orders} />
      </Container>
    </SortProvider>
  );
}
