import { Injectable } from "@nestjs/common";
import { LogsOutput } from "web3";
import { eventHandler } from "./decorators/event-hanlder.decorator";
import {
  KEY_ORDER_CANCEL,
  KEY_ORDER_CREATE,
  KEY_ORDER_MATCHES,
} from "./constants";
import { OrderRepository } from "./repository/order.repository";

@Injectable()
export class EventService {
  constructor(private readonly orderRepository: OrderRepository) {}
  @eventHandler(KEY_ORDER_CREATE)
  createOrder(params: LogsOutput) {
    console.log(params);
    //TODO вызываем метод this.orderRepository.createOrder() и передаем декодированные данные
  }

  @eventHandler(KEY_ORDER_MATCHES)
  matchesOrder(params: LogsOutput) {
    console.log(params);
    //TODO вызываем метод this.orderRepository.patchOrder() и передаем декодированные данные
  }

  @eventHandler(KEY_ORDER_CANCEL)
  cancelOrder(params: LogsOutput) {
    console.log(params);
    //TODO вызываем метод this.orderRepository.cancelOrder() и передаем декодированные данные
  }
}
