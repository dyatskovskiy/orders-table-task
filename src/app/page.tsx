import { Container } from '@/components/Container';
import { OrdersTable } from '@/components/OrdersTable';
import { fetchData } from '@/lib/fetchData';
import { IOrder } from '@/interfaces/order.interface';

export default async function Home() {
  const { data: orders } = await fetchData<IOrder[]>('/orders', {
    headers: { 'Content-Type': 'application/json' },
  });

  return (
    <Container>
      <OrdersTable orders={orders}></OrdersTable>
    </Container>
  );
}
