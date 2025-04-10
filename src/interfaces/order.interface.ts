export enum OrderStatus {
  process = 'Process',
  delivered = 'Delivered',
  canceled = 'Cancelled',
}

export interface IOrder {
  trackingId: number;
  productImage: string;
  productName: string;
  customer: string;
  date: string;
  amount: number;
  paymentMode: string;
  status: OrderStatus;
}
