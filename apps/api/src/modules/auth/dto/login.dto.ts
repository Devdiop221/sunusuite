import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'diallo@sunu.sn' })
  @IsEmail({}, { message: 'Veuillez fournir un e-mail valide' })
  email!: string;

  @ApiProperty({ example: 'motDePasseSecret123' })
  @IsString()
  @MinLength(8)
  password!: string;
}
