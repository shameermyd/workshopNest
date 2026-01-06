import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( //added for Enable Validation Globally
    new ValidationPipe({
      whitelist: true, //removes extra fields
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(`port 3000 running....`)
}
bootstrap();
