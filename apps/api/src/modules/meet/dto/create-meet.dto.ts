import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMeetDto {
  @ApiProperty({ example: 'Réunion équipe tech' })
  @IsString()
  title!: string;

  @ApiProperty({ example: 'user_123' })
  @IsString()
  hostId!: string;

  @ApiProperty({ example: 50, required: false })
  @IsOptional()
  @IsNumber()
  @Min(2)
  @Max(500)
  maxParticipants?: number;
}
