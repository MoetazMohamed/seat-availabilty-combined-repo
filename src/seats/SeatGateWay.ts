
import { OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',  // Allow your Angular frontend
    methods: ['GET', 'POST'],        // Allow necessary methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
    credentials: true                // Allow credentials if needed
  }
})
export class SeatGateway implements  OnGatewayInit{
  @WebSocketServer()
  server: Server;
  constructor() {
    console.log('WebSocket Gateway Initialized');
  }
  afterInit(server: any) {
    console.log("a7a")
  }

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }
  // Emit an updated seat list to clients
  emitAllSeatsUpdate(seats: any) {
    console.log(seats)
    this.server.emit('allSeatsUpdate', seats);
  }
}
