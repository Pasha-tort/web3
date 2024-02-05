import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { EventsModule } from "./app/events.module";

async function bootstrap() {
  const app = await NestFactory.create(EventsModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port || 3000}`);
}

bootstrap();
