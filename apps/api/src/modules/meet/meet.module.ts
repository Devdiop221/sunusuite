import { Module } from '@nestjs/common';
import { MeetController } from './meet.controller';
import { MeetService } from './meet.service';

@Module({
  controllers: [MeetController],
  providers: [MeetService],
  exports: [MeetService],
})
export class MeetModule {}
