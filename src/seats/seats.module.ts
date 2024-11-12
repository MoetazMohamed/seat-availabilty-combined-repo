import { Module } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { SeatsController } from './seats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seat, SeatSchema } from './entities/seat.entity';
@Module({
  controllers: [SeatsController],
  providers: [SeatsService],
  imports: [MongooseModule.forFeature([{ name: Seat.name, schema: SeatSchema }]),]
})
export class SeatsModule {}
