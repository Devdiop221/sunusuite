import { Injectable } from '@nestjs/common';

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

@Injectable()
export class ChatService {
  private readonly messages: ChatMessage[] = [];

  saveMessage(data: { roomId: string; content: string; senderId: string }): ChatMessage {
    const message: ChatMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      ...data,
      timestamp: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  getMessagesForRoom(roomId: string): ChatMessage[] {
    return this.messages.filter((m) => m.roomId === roomId);
  }
}
