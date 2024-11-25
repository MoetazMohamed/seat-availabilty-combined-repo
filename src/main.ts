import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',  // Allow your Angular frontend
    methods: ['GET', 'POST'],        // Allow necessary methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(process.env.PORT ?? 3000)
}
bootstrap();
