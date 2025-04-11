import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import { IOrder } from '@/interfaces/order.interface';
import path from 'path';

const ordersFilePath = path.resolve('temp-data', 'orders.json');

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ trackingId: string }> },
): Promise<NextResponse> => {
  const trackingIdString = (await params).trackingId;
  const trackingId = parseInt(trackingIdString, 10);

  if (!trackingId) {
    return NextResponse.json(
      { error: 'Tracking ID is required' },
      { status: 400 },
    );
  }

  const fileData = fs.readFileSync(ordersFilePath, 'utf-8');
  const orders = JSON.parse(fileData);

  const updatedOrders: IOrder[] = orders.filter(
    (order: IOrder) => order.trackingId !== trackingId,
  );

  if (updatedOrders.length === orders.length) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  fs.writeFileSync(
    ordersFilePath,
    JSON.stringify(updatedOrders, null, 2),
    'utf-8',
  );

  return NextResponse.json(
    { message: 'Order deleted successfully', data: updatedOrders },
    { status: 200 },
  );
};
