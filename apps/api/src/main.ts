/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// https://github.com/trpc/trpc/discussions/1504

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { TRPCService } from './app/trpc.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const trpcService = app.get(TRPCService)
  trpcService.applyMiddleware(app);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
