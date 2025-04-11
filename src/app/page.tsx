import { Container } from '@/components/Container';
import { OrdersTable } from '@/components/OrdersTable';
import { FilterProvider } from '@/components/Table/filter-context/filter-context';
import { SortProvider } from '@/components/Table/sort-context/sort-context';
import { OrdersPaginationProvider } from '@/components/Table/pagination-context/orders-pagination-context';

export default function OrdersPage() {
  return (
    <FilterProvider>
      <OrdersPaginationProvider>
        <SortProvider>
          <Container>
            <OrdersTable />
          </Container>
        </SortProvider>
      </OrdersPaginationProvider>
    </FilterProvider>
  );
}
