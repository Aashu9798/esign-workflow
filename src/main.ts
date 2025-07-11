import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS if needed
  app.enableCors();
  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
