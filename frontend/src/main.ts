<<<<<<< HEAD
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',  // Allow your Angular frontend
    methods: ['GET', 'POST'],        // Allow necessary methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(process.env.PORT ?? 3000)
}
bootstrap();
=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
>>>>>>> frontend/master
