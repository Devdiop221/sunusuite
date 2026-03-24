import { Module } from '@nestjs/common';
import { SecurityAIController } from './security.controller';
import { PhishingDetectionService } from './services/phishing-detection.service';
import { DeepfakeGuardService } from './services/deepfake-guard.service';

/**
 * SecurityModule – Cybersécurité par Intelligence Artificielle
 *
 * Ce module fournit deux couches de protection souveraine :
 * 1. PhishingDetectionService – Détecte les liens et messages malveillants
 * 2. DeepfakeGuardService    – Analyse les médias pour détecter les deepfakes
 *
 * En production, ces services appellent le microservice `apps/ai-agent`
 * (Python/FastAPI) via HTTP pour l'inférence réelle des modèles IA.
 */
@Module({
  controllers: [SecurityAIController],
  providers: [PhishingDetectionService, DeepfakeGuardService],
  exports: [PhishingDetectionService, DeepfakeGuardService],
})
export class SecurityModule {}
