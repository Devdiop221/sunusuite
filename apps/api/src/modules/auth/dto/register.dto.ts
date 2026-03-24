import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Fatou Diallo' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name!: string;

  @ApiProperty({ example: 'fatou@sunu.sn' })
  @IsEmail({}, { message: 'Veuillez fournir un e-mail valide' })
  email!: string;

  @ApiProperty({ example: 'motDePasseSecret123' })
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  password!: string;
}
