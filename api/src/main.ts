/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // const globalPrefix = 'api';
  // app.setGlobalPrefix(globalPrefix);
  app.setGlobalPrefix('api');
  // const port = process.env.PORT || 3001;
  // await app.listen(port);
  await app.listen(3333);
  Logger.log(`🚀 Application is running on: http://localhost:3333/api`);
}

bootstrap();
