import { Seat } from "../entities/seat.entity";

export  class seatDto {
    public floorNumber : number;
    public availableSeats : Seat[];
    public occupiedSeats : Seat[];
}
