import { Container } from '@/components/Container';
import { OrdersTable } from '@/components/OrdersTable';

import { SortProvider } from '@/components/Table/sort-context';

export default async function Home() {
  return (
    <SortProvider>
      <Container>
        <OrdersTable />
      </Container>
    </SortProvider>
  );
}
