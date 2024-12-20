import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeatsModule } from './seats/seats.module';
import { SeatGateway } from './seats/SeatGateWay';

@Module({
  imports: [ MongooseModule.forRoot(
    'mongodb+srv://moetazmohamed20:wC70awFZcG1CRkRh@cluster0.x3vbth3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  ), SeatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
