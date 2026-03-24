import { IsString, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocDto {
  @ApiProperty({ example: 'Rapport Q1 2026' })
  @IsString()
  @MinLength(1)
  title!: string;

  @ApiProperty({ example: 'Contenu du document...', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ example: 'user_123' })
  @IsString()
  ownerId!: string;
}
