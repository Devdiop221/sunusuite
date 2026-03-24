import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

// Simulated in-memory user store (replace with DB in production)
export interface UserRecord {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: Date;
}

@Injectable()
export class AuthService {
  private readonly users: Map<string, UserRecord> = new Map();

  constructor(private readonly jwtService: JwtService) {}

  async register(dto: RegisterDto): Promise<{ message: string; userId: string }> {
    if (this.users.has(dto.email)) {
      throw new ConflictException('Un compte avec cet e-mail existe déjà');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);
    const userId = `user_${Date.now()}`;

    this.users.set(dto.email, {
      id: userId,
      email: dto.email,
      name: dto.name,
      passwordHash,
      createdAt: new Date(),
    });

    return { message: 'Compte créé avec succès', userId };
  }

  async login(dto: LoginDto): Promise<{ accessToken: string; user: Partial<UserRecord> }> {
    const user = this.users.get(dto.email);
    if (!user) throw new UnauthorizedException('Identifiants invalides');

    const isValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isValid) throw new UnauthorizedException('Identifiants invalides');

    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt },
    };
  }

  async validateUser(userId: string): Promise<UserRecord | undefined> {
    for (const user of this.users.values()) {
      if (user.id === userId) return user;
    }
    return undefined;
  }
}
