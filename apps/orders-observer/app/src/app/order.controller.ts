import { Controller } from "@nestjs/common";
import { RMQTransform, RMQValidate } from "nestjs-rmq";
import { OrdersObserverRmqService } from "@task-test/orders-observer-transport";
import { OrdersContracts } from "@task-test/orders-observer-slice";
import { OrderRepository } from "./repository/order.repository";

@Controller()
export class OrdersController {
  constructor(private readonly orderRepository: OrderRepository) {}

  @RMQValidate()
  @RMQTransform()
  @OrdersObserverRmqService.getOrdersRpc()
  async getOrders(data: OrdersContracts.getOrders.RequestDto) {
    return this.orderRepository.getOrders(data);
  }

  @RMQValidate()
  @RMQTransform()
  @OrdersObserverRmqService.getMatchingOrderRpc()
  async getMatchingOrder(data: OrdersContracts.getMatchingOrder.RequestDto) {
    return this.orderRepository.getMatchingOrders(data);
  }
}
