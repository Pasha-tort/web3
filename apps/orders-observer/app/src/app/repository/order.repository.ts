import { Injectable } from "@nestjs/common";
import { Order, OrderModel } from "../schemas/order.schema";
import { InjectModel } from "@nestjs/mongoose";
import {
  IOrder,
  OrdersContracts,
  StatusOrderEnum,
} from "@task-test/orders-observer-slice";

@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: OrderModel
  ) {}

  getOrders({
    active,
    user,
    tokenA,
    tokenB,
  }: OrdersContracts.getOrders.RequestDto) {
    return this.orderModel.find({
      status: active || StatusOrderEnum.CLOSE,
      userId: user,
      tokenA,
      tokenB,
    });
  }

  getMatchingOrders({
    tokenA,
    tokenB,
    amountA,
    amountB,
  }: OrdersContracts.getMatchingOrder.RequestDto) {
    //TODO не до конца понял что именно должен сделать этот метод
    //TODO насколько я понимаю логику, то здесь я должен был на основе данных в запросе найти противположные orders'ы,
    //TODO которые бы позволили выполнить ордер(данные которого мы используем в запросе) полностью или частично
    return this.orderModel.find({});
  }

  createOrder(order: IOrder) {
    return this.orderModel.create(order);
  }

  patchOrder({
    orderId,
    ...partialOrder
  }: Partial<IOrder> & { orderId: string }) {
    return this.orderModel.findByIdAndUpdate(
      orderId,
      { $set: partialOrder },
      { new: true }
    );
  }

  canceledOrder(orderId: string) {
    return this.orderModel.findByIdAndUpdate(orderId, {
      $set: { status: StatusOrderEnum.CLOSE },
    });
  }
}
