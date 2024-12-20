import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatsService.create(createSeatDto);
  }

  @Get()
  findAll() {
    return this.seatsService.getSeatsGroupedByFloorAndStatus();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatsService.findOne(+id);
  }

  @Put(':id/:availability')
  updateSeatAvailibility(@Param('id') id: string,@Param('availability') availibility : boolean) {
    return this.seatsService.updateSeatAvailibility(id,availibility);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatsService.remove(+id);
  }

  @Post('seed')
  public async seeddatabase(){
    console.log("database is being populated")
    return this.seatsService.seedSeats()
  }
}
