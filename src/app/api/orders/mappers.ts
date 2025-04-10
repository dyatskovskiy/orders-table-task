import type { IOrder, OrderStatus } from '@/interfaces/order.interface';

export const mapRawOrdersToOrders = (
  ordersArray: Array<Record<string, unknown>>,
): Array<IOrder> => {
  return ordersArray.map((rawOrder) => {
    return {
      trackingId: rawOrder['Tracking ID'] as number,
      productImage: rawOrder['Product Image'] as string,
      productName: rawOrder['Product Name'] as string,
      customer: rawOrder['Customer'] as string,
      date: rawOrder['Date'] as string,
      amount: rawOrder['Amount'] as number,
      paymentMode: rawOrder['Payment Mode'] as string,
      status: rawOrder['Status'] as OrderStatus,
    };
  });
};
