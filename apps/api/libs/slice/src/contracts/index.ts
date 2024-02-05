import { OrdersContracts } from "@task-test/orders-observer-slice";
import { Exclude } from "class-transformer";

export namespace OrdersObserverApi {
  export namespace getOrders {
    export const path = "getOrders";
    @Exclude()
    export class RequestDto extends OrdersContracts.getOrders.RequestDto {}
    export class ResponseDto extends OrdersContracts.getOrders.ResponseDto {}
  }

  export namespace getMatchingOrder {
    export const path = "getMatchingOrders";
    @Exclude()
    export class RequestDto extends OrdersContracts.getMatchingOrder
      .RequestDto {}
    export class ResponseDto extends OrdersContracts.getMatchingOrder
      .ResponseDto {}
  }
}
