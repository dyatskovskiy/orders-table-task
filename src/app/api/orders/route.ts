import * as fs from 'fs';
import * as path from 'path';

import { NextResponse } from 'next/server';
import { IOrder } from '@/interfaces/order.interface';
import { initializeOrdersFile } from '@/lib/initOrdersTempFile';

const ordersFilePath = path.resolve('tmp', 'orders.json');

export const GET = (): NextResponse => {
  // create new orders.json if not exists on server
  initializeOrdersFile();

  const fileData = fs.readFileSync(ordersFilePath, 'utf-8');
  const orders: IOrder[] = JSON.parse(fileData);

  return NextResponse.json({ data: orders }, { status: 200 });
};
