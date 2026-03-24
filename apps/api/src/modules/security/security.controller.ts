import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PhishingDetectionService } from './services/phishing-detection.service';
import { DeepfakeGuardService } from './services/deepfake-guard.service';

// ── DTOs inline ───────────────────────────────────────────────────────────────

class AnalyzeLinkDto {
  @ApiProperty({ example: 'https://phishing-sn.ml/login?ref=orange' })
  @IsUrl()
  url!: string;
}

class AnalyzeMessageDto {
  @ApiProperty({ example: 'Votre compte sera suspendu. Cliquez immédiatement ici.' })
  @IsString()
  message!: string;
}

// ── Contrôleur ────────────────────────────────────────────────────────────────

@ApiTags('security-ai')
@ApiBearerAuth()
@Controller('security-ai')
export class SecurityAIController {
  constructor(
    private readonly phishingDetection: PhishingDetectionService,
    private readonly deepfakeGuard: DeepfakeGuardService,
  ) {}

  @Post('phishing/analyze-link')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Analyser une URL pour détecter du phishing' })
  @ApiResponse({ status: 200, description: 'Résultat de l\'analyse de lien' })
  analyzeLink(@Body() dto: AnalyzeLinkDto) {
    return this.phishingDetection.analyzeLink(dto.url);
  }

  @Post('phishing/analyze-message')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Analyser un message texte pour détecter du phishing/social engineering' })
  @ApiResponse({ status: 200, description: 'Résultat de l\'analyse du message' })
  analyzeMessage(@Body() dto: AnalyzeMessageDto) {
    return this.phishingDetection.analyzeMessage(dto.message);
  }

  @Post('deepfake/analyze-image')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Analyser une image pour détecter un deepfake (simulation)',
    description: 'En production, ce endpoint acceptera un multipart/form-data avec le fichier image.',
  })
  async analyzeImageMock() {
    // Simulation avec un buffer vide – à remplacer par un upload multer
    const mockBuffer = Buffer.from([Math.floor(Math.random() * 255), 42, 88]);
    return this.deepfakeGuard.analyzeImage(mockBuffer, {
      fileName: 'test-image.jpg',
      mimeType: 'image/jpeg',
      sizeBytes: mockBuffer.length,
    });
  }

  @Post('deepfake/analyze-video')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Analyser une vidéo pour détecter un deepfake (simulation)',
  })
  async analyzeVideoMock() {
    const mockBuffer = Buffer.from([Math.floor(Math.random() * 255), 17, 255, 0]);
    return this.deepfakeGuard.analyzeVideo(mockBuffer, {
      fileName: 'test-video.mp4',
      mimeType: 'video/mp4',
      sizeBytes: mockBuffer.length,
    });
  }
}
