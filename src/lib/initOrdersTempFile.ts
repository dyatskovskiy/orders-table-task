import fs from 'fs';
import { mockOrdersData } from '@/constants/mock-orders';
const ordersFilePath = '/tmp/orders.json';

export const initializeOrdersFile = () => {
  if (!fs.existsSync(ordersFilePath)) {
    fs.writeFileSync(ordersFilePath, JSON.stringify(mockOrdersData));
    console.log('orders.json created successfully.');
  } else {
    console.log('orders.json is exists.');
  }
};
