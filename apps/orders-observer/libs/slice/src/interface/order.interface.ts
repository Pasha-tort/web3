export enum StatusOrderEnum {
  active = "active",
  partially = "partially",
  close = "close",
}
export interface IOrder {
  status: StatusOrderEnum;
  userId: string;
  tokenA: string;
  tokenB: string;
  amountA: string;
  amountB: string;
}
