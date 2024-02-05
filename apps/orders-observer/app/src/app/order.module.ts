import { Module } from "@nestjs/common";
import { OrdersSubProvider } from "./providers/orders-sub.provider";
import { EventService } from "./event.service";
import { Web3ConnectProvider } from "./providers/web3-connect.provider";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { getMongoConfig } from "../config/mongo.config";
import path from "path";
import { OrderFeature } from "./schemas/order.schema";
import { OrdersController } from "./order.controller";
import { OrderRepository } from "./repository/order.repository";
import { RMQModule } from "nestjs-rmq";
import { getRmqConfig } from "@task-test/configs";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(
        path.resolve(),
        "apps",
        "orders-observer",
        "app",
        "src",
        ".env"
      ),
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(getMongoConfig()),
    MongooseModule.forFeature([OrderFeature]),
    RMQModule.forRootAsync(getRmqConfig()),
  ],
  controllers: [OrdersController],
  providers: [
    OrdersSubProvider,
    Web3ConnectProvider,
    EventService,
    OrderRepository,
  ],
})
export class OrderModule {}
