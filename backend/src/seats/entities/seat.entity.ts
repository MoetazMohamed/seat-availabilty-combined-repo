import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type SeatDocument = HydratedDocument<Seat>;

export enum SeatType {
  COUCH = 'couch',
  TABLE = 'table',
}

export enum Floor {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
}

export enum SeatStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
}

@Schema()
export class Seat {
  @Prop({ type: String, enum: SeatType, required: true })
  type: SeatType;

  @Prop({ type: Number, enum: Floor, required: true })
  floor: Floor;

  @Prop({ unique: true, required: true })
  seatId: string;

  @Prop({ type: String, enum: SeatStatus, default: SeatStatus.AVAILABLE })
  status: SeatStatus;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);