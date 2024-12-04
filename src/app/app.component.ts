import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

export interface Seat {
  _id: string;
  seatId: string;
  __v: number;
  floor: number;
  status: 'available' | 'occupied';
  type: 'table' | 'couch';
}

export interface Floor {
  floorNumber: number;
  availableSeats: Seat[];
  occupiedSeats: Seat[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private httpClient = inject(HttpClient)
  totalSeats = 0;
  availableSeatsCount = 0;
  public seating: Floor[] = [];
  constructor(private socket: Socket) {}

  public ngOnInit(): void {
    this.fetchSeats()
    this.getMessage()
  }

  
  private fetchSeats(): void {
    this.httpClient.get<Floor[]>('https://seatavailabilityserver-production.up.railway.app/seats').subscribe(
      (data) => {
        this.seating = data;
        console.log(data)
        this.calculateSeatCounts();
      },
      (error) => console.error('Failed to fetch initial seating data', error)
    );
  }
  getMessage() {
    return this.socket.fromEvent('allSeatsUpdate').subscribe(data => {this.seating = data as Floor[]

      console.log(data)
    })
  } 

  private calculateSeatCounts(): void {
    this.totalSeats = this.seating.reduce(
      (sum, floor) => sum + floor.availableSeats.length + floor.occupiedSeats.length,
      0
    );
    this.availableSeatsCount = this.seating.reduce(
      (sum, floor) => sum + floor.availableSeats.length,
      0
    );
  }
}
