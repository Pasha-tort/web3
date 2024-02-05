import { Provider } from "@nestjs/common";
import { Web3 } from "web3";
import { WEB3_CONNECT_TOKEN_PROVIDER } from "../constants";
import { ConfigService } from "@nestjs/config";

export const Web3ConnectProvider: Provider = {
  provide: WEB3_CONNECT_TOKEN_PROVIDER,
  useFactory: (configService: ConfigService) => {
    return new Web3(
      `wss://goerli.infura.io/ws/v3/${configService.get("INFURA_API_KEY")}`
    );
  },
  inject: [ConfigService],
};
