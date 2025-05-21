import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // Cors for client url
  app.enableCors({
    origin: ['http://localhost:5173'], // Vite's default frontend port
    credentials: true,
  });

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Pino-logger
  app.useLogger(app.get(Logger));

  // Config
  const config = app.get(ConfigService);

  await app.listen(config.getOrThrow('PORT'));
}

bootstrap().catch((err) => {
  console.error(err);
});
