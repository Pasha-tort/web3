import { Provider } from "@nestjs/common";
import { Web3 } from "web3";
import {
  WEB3_CONNECT_TOKEN_PROVIDER,
  ORDERS_SUB_TOKEN_PROVIDER,
} from "../constants";
import { type RegisteredSubscription } from "web3/lib/commonjs/eth.exports";
import { emitter } from "./event-emitter";

export const OrdersSubProvider: Provider = {
  provide: ORDERS_SUB_TOKEN_PROVIDER,
  useFactory: async (web3: Web3<RegisteredSubscription>) => {
    const sub = await web3.eth.subscribe("logs", {
      address: "0x352F8C1f8576183b6c783D3e589aBB69FfBeBc47",
    });
    sub.on("data", (params) => {
      params.topics.forEach((topic) => {
        emitter.emit(topic, params);
      });
    });
    return sub;
  },
  inject: [{ token: WEB3_CONNECT_TOKEN_PROVIDER, optional: false }],
};
