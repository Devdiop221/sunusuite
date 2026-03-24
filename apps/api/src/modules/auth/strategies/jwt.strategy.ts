import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

interface JwtPayload {
  sub: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env['JWT_SECRET'] ?? 'sunu-secret-change-in-production',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validate(payload: JwtPayload): Promise<import('../auth.service').UserRecord | null> {
    const user = await this.authService.validateUser(payload.sub);
    return user ?? null;
  }
}
