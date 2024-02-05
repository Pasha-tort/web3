import { Controller, Get, Query } from "@nestjs/common";
import { OrdersObserverRmqService } from "@task-test/orders-observer-transport";
import { OrdersObserverApi } from "@task-test/api-slice";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("orders")
@Controller()
export class AppController {
  constructor(
    private readonly ordersObserverRmqService: OrdersObserverRmqService
  ) {}

  @Get(OrdersObserverApi.getOrders.path)
  getOrders(
    @Query()
    query: OrdersObserverApi.getOrders.RequestDto
  ): Promise<OrdersObserverApi.getOrders.ResponseDto> {
    return this.ordersObserverRmqService.getOrders(query);
  }

  @Get(OrdersObserverApi.getMatchingOrder.path)
  getMatchingOrder(
    @Query()
    query: OrdersObserverApi.getMatchingOrder.RequestDto
  ) {
    return this.ordersObserverRmqService.getMatchingOrder(query);
  }
}
