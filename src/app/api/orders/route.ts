import * as orders from '@/temp-data/orders.json';

import { NextRequest, NextResponse } from 'next/server';
import { mapRawOrdersToOrders } from '@/app/api/orders/mappers';

export const GET = (req: NextRequest): NextResponse => {
  const mappedOrders = mapRawOrdersToOrders(Array.from(orders));

  return NextResponse.json({ data: mappedOrders }, { status: 200 });
};
