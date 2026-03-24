import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMeetDto } from './dto/create-meet.dto';

export interface MeetRoom {
  id: string;
  title: string;
  hostId: string;
  joinUrl: string;
  createdAt: Date;
  maxParticipants: number;
  isActive: boolean;
}

@Injectable()
export class MeetService {
  private readonly rooms: Map<string, MeetRoom> = new Map();

  createRoom(dto: CreateMeetDto): MeetRoom {
    const id = `meet_${Math.random().toString(36).slice(2, 10)}`;
    const room: MeetRoom = {
      id,
      title: dto.title,
      hostId: dto.hostId,
      joinUrl: `https://meet.sunusuite.sn/${id}`,
      createdAt: new Date(),
      maxParticipants: dto.maxParticipants ?? 50,
      isActive: true,
    };
    this.rooms.set(id, room);
    return room;
  }

  getRoom(id: string): MeetRoom {
    const room = this.rooms.get(id);
    if (!room) throw new NotFoundException(`Salle ${id} introuvable`);
    return room;
  }
}
