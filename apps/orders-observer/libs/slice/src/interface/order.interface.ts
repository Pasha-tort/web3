export enum StatusOrderEnum {
  ACTIVE = "active",
  PARTIALLY = "partially",
  CLOSE = "close",
}
export interface IOrder {
  status: StatusOrderEnum;
  userId: string;
  tokenA: string;
  tokenB: string;
  amountA: string;
  amountB: string;
}
