import { Injectable } from "@nestjs/common";
import { LogsOutput } from "web3";
import { eventHandler } from "./decorators/event-hanlder.decorator";
import {
  KEY_ORDER_CANCEL,
  KEY_ORDER_CREATE,
  KEY_ORDER_MATCHES,
} from "./constants";

@Injectable()
export class EventService {
  @eventHandler(KEY_ORDER_CREATE)
  createOrder(params: LogsOutput) {
    console.log(params);
  }

  @eventHandler(KEY_ORDER_MATCHES)
  matchesOrder(params: LogsOutput) {
    console.log(params);
  }

  @eventHandler(KEY_ORDER_CANCEL)
  cancelOrder(params: LogsOutput) {
    console.log(params);
  }
}
