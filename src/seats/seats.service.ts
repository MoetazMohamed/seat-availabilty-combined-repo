import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seat, SeatDocument, SeatType, Floor, SeatStatus } from './entities/seat.entity';
import { seatDto } from './dto/seat.dto';

@Injectable()
export class SeatsService {
  constructor(@InjectModel(Seat.name) private seatModel: Model<SeatDocument>) {}
  create(createSeatDto: CreateSeatDto) {
    return 'This action adds a new seat';
  }

  async getSeatsGroupedByFloorAndStatus(): Promise<seatDto[]> {
    // Retrieve all seats from the database
    const seats = await this.seatModel.find().exec();

    // Group seats by floor
    const groupedByFloor: Record<number, Seat[]> = seats.reduce((acc, seat) => {
      if (!acc[seat.floor]) {
        acc[seat.floor] = [];
      }
      acc[seat.floor].push(seat);
      return acc;
    }, {} as Record<number, Seat[]>);

    // Transform the grouped data into an array of seatDto objects
    const result: seatDto[] = Object.entries(groupedByFloor).map(([floor, seats]) => {
      const availableSeats = seats.filter((seat) => seat.status === 'available');
      const occupiedSeats = seats.filter((seat) => seat.status === 'occupied');

      return {
        floorNumber: Number(floor),
        availableSeats,
        occupiedSeats,
      };
    });

    return result;
  }


  findOne(id: number) {
    return `This action returns a #${id} seat`;
  }

  

  async updateSeatAvailibility(seatId: string, availability: boolean) {
    console.log(seatId, availability)
    var status = availability ? SeatStatus.AVAILABLE : SeatStatus.OCCUPIED; 
    var seat = await this.seatModel.findOneAndUpdate( { seatId },
      { status },
      { new: true });

      if (!seat) {
        throw new NotFoundException(`Seat with ID ${seatId} not found`);
      }
  
      return seat;
  }

  remove(id: number) {
    return `This action removes a #${id} seat`;
  }

  async seedSeats(){
    const seats = [
      { seatId: '1', type: SeatType.COUCH, floor: Floor.FIRST, status: SeatStatus.AVAILABLE },
      { seatId: '2', type: SeatType.TABLE, floor: Floor.FIRST, status: SeatStatus.OCCUPIED },
      { seatId: '3', type: SeatType.COUCH, floor: Floor.SECOND, status: SeatStatus.AVAILABLE },
      { seatId: '4', type: SeatType.TABLE, floor: Floor.SECOND, status: SeatStatus.OCCUPIED },
      { seatId: '5', type: SeatType.COUCH, floor: Floor.THIRD, status: SeatStatus.AVAILABLE },
      { seatId: '6', type: SeatType.TABLE, floor: Floor.THIRD, status: SeatStatus.OCCUPIED },
      { seatId: '7', type: SeatType.COUCH, floor: Floor.FOURTH, status: SeatStatus.AVAILABLE },
      { seatId: '8', type: SeatType.TABLE, floor: Floor.FOURTH, status: SeatStatus.OCCUPIED },
      { seatId: '9', type: SeatType.COUCH, floor: Floor.FIRST, status: SeatStatus.OCCUPIED },
      { seatId: '10', type: SeatType.TABLE, floor: Floor.SECOND, status: SeatStatus.AVAILABLE },
      { seatId: '11', type: SeatType.COUCH, floor: Floor.THIRD, status: SeatStatus.OCCUPIED },
      { seatId: '12', type: SeatType.TABLE, floor: Floor.FOURTH, status: SeatStatus.AVAILABLE },
      { seatId: '13', type: SeatType.COUCH, floor: Floor.FIRST, status: SeatStatus.AVAILABLE },
      { seatId: '14', type: SeatType.TABLE, floor: Floor.SECOND, status: SeatStatus.OCCUPIED },
      { seatId: '15', type: SeatType.COUCH, floor: Floor.THIRD, status: SeatStatus.AVAILABLE },
      { seatId: '16', type: SeatType.TABLE, floor: Floor.FOURTH, status: SeatStatus.OCCUPIED },
      { seatId: '17', type: SeatType.COUCH, floor: Floor.FIRST, status: SeatStatus.AVAILABLE },
      { seatId: '18', type: SeatType.TABLE, floor: Floor.SECOND, status: SeatStatus.AVAILABLE },
      { seatId: '19', type: SeatType.COUCH, floor: Floor.THIRD, status: SeatStatus.OCCUPIED },
      { seatId: '20', type: SeatType.TABLE, floor: Floor.FOURTH, status: SeatStatus.AVAILABLE },
    ];

    for (const seat of seats) {
      await this.seatModel.updateOne({ seatId: seat.seatId }, seat, { upsert: true });
    }
    console.log('Database seeded with expanded seat data');
  }


}

