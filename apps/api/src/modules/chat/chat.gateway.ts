import { Injectable } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: { origin: '*' }, namespace: 'chat' })
@Injectable()
export class ChatGateway {
  @WebSocketServer()
  server!: any; // Type Server from socket.io

  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('send_message')
  handleMessage(
    @MessageBody() data: { roomId: string; content: string; senderId: string },
    @ConnectedSocket() _client: any, // Type Socket from socket.io
  ) {
    const message = this.chatService.saveMessage(data);
    // Broadcast to all users in the room
    this.server.to(data.roomId).emit('receive_message', message);
    return message;
  }

  @SubscribeMessage('join_room')
  handleJoinRoom(
    @MessageBody() roomId: string,
    @ConnectedSocket() client: any, // Type Socket from socket.io
  ) {
    void client.join(roomId);
    return { event: 'joined', roomId };
  }
}
