import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Créer un nouveau compte SunuSuite' })
  @ApiResponse({ status: 201, description: 'Compte créé avec succès' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion à SunuSuite' })
  @ApiResponse({ status: 200, description: 'Connexion réussie, token renvoyé' })
  async login(@Body() dto: LoginDto): Promise<{ accessToken: string; user: Partial<import('./auth.service').UserRecord> }> {
    return this.authService.login(dto);
  }
}
