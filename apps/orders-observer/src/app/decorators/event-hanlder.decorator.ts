import { LogsOutput } from "web3";
import { Logger } from "@nestjs/common";
import { emitter } from "../providers/event-emitter";

export function eventHandler(topic: string) {
  return function (target: any, propertyKey: string) {
    emitter.on(topic, (params: LogsOutput) => {
      target[propertyKey](params);
    });
    Logger.log(`Initializing the order event handler "${topic}"`);
  };
}
