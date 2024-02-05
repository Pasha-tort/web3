import { Module } from "@nestjs/common";
import { OrdersSubProvider } from "./providers/orders-sub.provider";
import { EventService } from "./event.service";
import { Web3ConnectProvider } from "./providers/web3-connect.provider";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { getMongoConfig } from "./config/mongo.config";
import path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(
        path.resolve(),
        "apps",
        "orders-observer",
        "src",
        ".env"
      ),
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(getMongoConfig()),
  ],
  providers: [OrdersSubProvider, Web3ConnectProvider, EventService],
})
export class EventsModule {}
