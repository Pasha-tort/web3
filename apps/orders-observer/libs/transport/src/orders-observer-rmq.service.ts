import { Injectable } from "@nestjs/common";
import { RMQRoute, RMQService } from "nestjs-rmq";
import { OrdersContracts } from "@task-test/orders-observer-slice";

@Injectable()
export class OrdersObserverRmqService {
  constructor(private readonly rmqService: RMQService) {}

  async getOrders(payload: OrdersContracts.getOrders.RequestDto) {
    return this.rmqService.send<
      OrdersContracts.getOrders.RequestDto,
      OrdersContracts.getOrders.ResponseDto
    >(OrdersContracts.getOrders.topic, payload);
  }
  static getOrdersRpc = () => RMQRoute(OrdersContracts.getOrders.topic);

  async getMatchingOrder(payload: OrdersContracts.getMatchingOrder.RequestDto) {
    return this.rmqService.send<
      OrdersContracts.getMatchingOrder.RequestDto,
      OrdersContracts.getMatchingOrder.ResponseDto
    >(OrdersContracts.getMatchingOrder.topic, payload);
  }
  static getMatchingOrderRpc = () =>
    RMQRoute(OrdersContracts.getMatchingOrder.topic);
}
