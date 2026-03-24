import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MeetService } from './meet.service';
import { CreateMeetDto } from './dto/create-meet.dto';

@ApiTags('meet')
@Controller('meet')
export class MeetController {
  constructor(private readonly meetService: MeetService) {}

  @Post('rooms')
  @ApiOperation({ summary: 'Créer une salle de visioconférence SunuMeet' })
  create(@Body() dto: CreateMeetDto) {
    return this.meetService.createRoom(dto);
  }

  @Get('rooms/:id')
  @ApiOperation({ summary: 'Récupérer les infos d\'une salle' })
  findOne(@Param('id') id: string) {
    return this.meetService.getRoom(id);
  }
}
