import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // ── Validation globale ────────────────────────────────────────────────────
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // ── CORS ──────────────────────────────────────────────────────────────────
  app.enableCors({
    origin: process.env['FRONTEND_URL'] ?? 'http://localhost:5173',
    credentials: true,
  });

  // ── Swagger / OpenAPI ─────────────────────────────────────────────────────
  const config = new DocumentBuilder()
    .setTitle('SunuSuite API')
    .setDescription(
      'API souveraine pour SunuSuite – alternative sénégalaise à Google Workspace',
    )
    .setVersion('0.1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentification & Sécurité')
    .addTag('docs', 'SunuDocs – Gestion de documents')
    .addTag('chat', 'SunuChat – Messagerie instantanée')
    .addTag('meet', 'SunuMeet – Visioconférence')
    .addTag('security-ai', 'IA de cybersécurité')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env['PORT'] ?? 3001;
  await app.listen(port);

  console.log(`\n🚀 SunuSuite API lancée sur : http://localhost:${port}`);
  console.log(`📚 Swagger disponible sur   : http://localhost:${port}/api/docs\n`);
}

void bootstrap();
