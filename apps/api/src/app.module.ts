import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// ── Modules fonctionnels ───────────────────────────────────────────────────
import { AuthModule } from './modules/auth/auth.module';
import { DocsModule } from './modules/docs/docs.module';
import { ChatModule } from './modules/chat/chat.module';
import { MeetModule } from './modules/meet/meet.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [
    // ── Configuration globale ──────────────────────────────────────────────
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),

    // ── Modules métier ─────────────────────────────────────────────────────
    AuthModule,
    DocsModule,
    ChatModule,
    MeetModule,

    // ── Module de cybersécurité par IA ─────────────────────────────────────
    SecurityModule,
  ],
})
export class AppModule {}

