import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { RMQModule } from "nestjs-rmq";
import { getRmqConfig } from "@task-test/configs";
import { ConfigModule } from "@nestjs/config";
import path from "path";
import { OrdersObserverRmqService } from "@task-test/orders-observer-transport";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(
        path.resolve(),
        "apps",
        "api",
        "app",
        "src",
        ".env"
      ),
      isGlobal: true,
    }),
    RMQModule.forRootAsync(getRmqConfig()),
  ],
  controllers: [AppController],
  providers: [OrdersObserverRmqService],
})
export class AppModule {}
