import * as fs from 'fs';
import * as path from 'path';

import { NextResponse } from 'next/server';
import { IOrder } from '@/interfaces/order.interface';

const ordersFilePath = path.resolve('temp-data', 'orders.json');

export const GET = (): NextResponse => {
  const fileData = fs.readFileSync(ordersFilePath, 'utf-8');
  const orders: IOrder[] = JSON.parse(fileData);

  return NextResponse.json({ data: orders }, { status: 200 });
};
