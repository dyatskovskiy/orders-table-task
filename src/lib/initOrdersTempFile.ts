import fs from 'fs';
import { mockOrdersData } from '@/constants/mock-orders';
import path from 'node:path';

const isProduction = process.env.NODE_ENV === 'production';

const ordersFilePath = isProduction
  ? '/tmp/orders.json'
  : path.join(process.cwd(), 'tmp', 'orders.json');

export const initializeOrdersFile = () => {
  if (!fs.existsSync(ordersFilePath)) {
    fs.writeFileSync(ordersFilePath, JSON.stringify(mockOrdersData));
    console.log('orders.json created successfully.');
  } else {
    console.log('orders.json is exists.');
  }
};
