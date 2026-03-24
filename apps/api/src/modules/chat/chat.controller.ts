import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ChatService } from './chat.service';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('rooms/:roomId/messages')
  @ApiOperation({ summary: 'Récupérer les messages d\'une salle' })
  getMessages(@Param('roomId') roomId: string) {
    return this.chatService.getMessagesForRoom(roomId);
  }
}
