import fs from 'fs';
import { mockOrdersData } from '@/constants/mock-orders';
import path from 'node:path';

const isProduction = process.env.NODE_ENV === 'production';

const ordersFilePath = isProduction
  ? '/tmp/orders.json'
  : path.join(process.cwd(), 'tmp', 'orders.json');

export const initializeOrdersFile = () => {
  // always write fresh file with mock-data
  if (fs.existsSync(ordersFilePath)) {
    fs.unlinkSync(ordersFilePath);
    console.log('Existing orders.json file deleted.');
  }

  fs.writeFileSync(ordersFilePath, JSON.stringify(mockOrdersData, null, 2));
  console.log('orders.json created successfully at:', ordersFilePath);
};
