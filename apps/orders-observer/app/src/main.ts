import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { OrderModule } from "./app/order.module";

const { PORT, HOST } = process.env;

async function bootstrap() {
  const port = PORT || 3002;
  const app = await NestFactory.createMicroservice(OrderModule, {
    transport: Transport.TCP,
    options: {
      host: HOST,
      port: port,
    },
  });
  await app.listen();
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
