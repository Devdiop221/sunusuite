import { Injectable, Logger } from '@nestjs/common';

// ──────────────────────────────────────────────────────────────────────────────
// Types & Interfaces
// ──────────────────────────────────────────────────────────────────────────────

export type ThreatLevel = 'safe' | 'suspicious' | 'dangerous';

export interface PhishingAnalysisResult {
  /** Lien ou message analysé */
  input: string;
  /** Niveau de menace détecté */
  threatLevel: ThreatLevel;
  /** Score de confiance de 0 à 1 */
  confidenceScore: number;
  /** Raisons détectées (ex : domaine suspect, mots-clés d'hameçonnage...) */
  reasons: string[];
  /** Actions recommandées */
  recommendations: string[];
  /** Timestamp de l'analyse */
  analyzedAt: Date;
}

export interface LinkScanResult extends PhishingAnalysisResult {
  /** URL extraite */
  url: string;
  /** Domaine extrait */
  domain: string;
  /** Le lien est-il bloqué ? */
  isBlocked: boolean;
}

// ──────────────────────────────────────────────────────────────────────────────
// Service
// ──────────────────────────────────────────────────────────────────────────────

@Injectable()
export class PhishingDetectionService {
  private readonly logger = new Logger(PhishingDetectionService.name);

  /**
   * Liste de domaines connus comme malveillants (simulation).
   * En production : brancher sur une API de threat intelligence (MISP, VirusTotal).
   */
  private readonly MALICIOUS_DOMAINS = new Set([
    'phishing-sn.ml',
    'secure-login-orange.tk',
    'gov-senegal-update.gq',
    'fake-paytech.cf',
  ]);

  /** Mots-clés typiques de phishing */
  private readonly PHISHING_KEYWORDS = [
    'mot de passe expiré',
    'vérifiez votre compte',
    'cliquez immédiatement',
    'votre compte sera suspendu',
    'gagnez 500 000 fcfa',
    'urgent',
    'réinitialisation obligatoire',
  ];

  // ────────────────────────────────────────────────────────────────────────────
  // Public API
  // ────────────────────────────────────────────────────────────────────────────

  /**
   * Analyse un lien URL pour détecter une tentative de phishing.
   *
   * @param url - L'URL à analyser
   * @returns {LinkScanResult} Résultat détaillé de l'analyse
   *
   * @example
   * const result = await phishingService.analyzeLink('http://phishing-sn.ml/login');
   * // result.threatLevel === 'dangerous'
   */
  async analyzeLink(url: string): Promise<LinkScanResult> {
    this.logger.debug(`[PhishingDetection] Analyse du lien: ${url}`);

    // Simuler un délai réseau (futur appel API/modèle IA)
    await this.simulateAiLatency(150, 400);

    const domain = this.extractDomain(url);
    const reasons: string[] = [];
    let threatScore = 0;

    // ── Règle 1 : Domaine dans la liste noire ────────────────────────────────
    if (this.MALICIOUS_DOMAINS.has(domain)) {
      reasons.push(`Domaine "${domain}" répertorié dans la liste noire`);
      threatScore += 0.9;
    }

    // ── Règle 2 : TLD suspects (faux domaines gratuits) ──────────────────────
    const suspiciousTlds = ['.ml', '.tk', '.gq', '.cf', '.ga'];
    if (suspiciousTlds.some((tld) => domain.endsWith(tld))) {
      reasons.push(`TLD suspect détecté : "${domain.split('.').pop()}"`);
      threatScore += 0.4;
    }

    // ── Règle 3 : Imitation de domaines légitimes ────────────────────────────
    const legitimateBrands = ['orange', 'free', 'expresso', 'sonatel', 'gov', 'senegal'];
    if (legitimateBrands.some((brand) => domain.includes(brand) && !domain.endsWith('.sn'))) {
      reasons.push(`Possible usurpation d'identité : "${domain}" imite une marque légitime`);
      threatScore += 0.6;
    }

    // ── Règle 4 : URL trop longue ou encodée (obfuscation) ───────────────────
    if (url.length > 200 || url.includes('%') || url.split('/').length > 8) {
      reasons.push('URL anormalement longue ou encodée (tentative d\'obfuscation)');
      threatScore += 0.3;
    }

    const threatLevel = this.scoreToThreatLevel(Math.min(threatScore, 1));

    return {
      input: url,
      url,
      domain,
      threatLevel,
      confidenceScore: parseFloat(Math.min(threatScore, 1).toFixed(2)),
      reasons,
      isBlocked: threatLevel === 'dangerous',
      recommendations: this.buildRecommendations(threatLevel),
      analyzedAt: new Date(),
    };
  }

  /**
   * Analyse un message texte pour détecter du contenu de phishing/social engineering.
   *
   * @param message - Le texte du message à analyser
   * @returns {PhishingAnalysisResult} Résultat de l'analyse
   */
  async analyzeMessage(message: string): Promise<PhishingAnalysisResult> {
    this.logger.debug(`[PhishingDetection] Analyse du message (${message.length} chars)`);

    await this.simulateAiLatency(100, 300);

    const reasons: string[] = [];
    const lowerMsg = message.toLowerCase();
    let threatScore = 0;

    for (const keyword of this.PHISHING_KEYWORDS) {
      if (lowerMsg.includes(keyword)) {
        reasons.push(`Mot-clé d'hameçonnage détecté : "${keyword}"`);
        threatScore += 0.35;
      }
    }

    // Détecter les URLs dans le message
    const urlPattern = /https?:\/\/[^\s]+/g;
    const urls = message.match(urlPattern) ?? [];
    if (urls.length > 0) {
      reasons.push(`${urls.length} lien(s) détecté(s) dans le message`);
      threatScore += 0.2 * urls.length;
    }

    const threatLevel = this.scoreToThreatLevel(Math.min(threatScore, 1));

    return {
      input: message,
      threatLevel,
      confidenceScore: parseFloat(Math.min(threatScore, 1).toFixed(2)),
      reasons,
      recommendations: this.buildRecommendations(threatLevel),
      analyzedAt: new Date(),
    };
  }

  // ────────────────────────────────────────────────────────────────────────────
  // Helpers privés
  // ────────────────────────────────────────────────────────────────────────────

  private extractDomain(url: string): string {
    try {
      return new URL(url).hostname.toLowerCase();
    } catch {
      return url.toLowerCase();
    }
  }

  private scoreToThreatLevel(score: number): ThreatLevel {
    if (score >= 0.7) return 'dangerous';
    if (score >= 0.3) return 'suspicious';
    return 'safe';
  }

  private buildRecommendations(level: ThreatLevel): string[] {
    const map: Record<ThreatLevel, string[]> = {
      safe: ['Aucune action requise'],
      suspicious: [
        'Vérifiez l\'expéditeur avant de cliquer',
        'Contactez l\'organisme par un canal officiel',
      ],
      dangerous: [
        'NE CLIQUEZ PAS sur ce lien',
        'Signalez ce message à votre administrateur',
        'Changez votre mot de passe si vous avez déjà cliqué',
      ],
    };
    return map[level];
  }

  /**
   * Simule la latence d'un appel vers un modèle d'IA.
   * À remplacer par un vrai appel HTTP/gRPC vers le modèle.
   */
  private simulateAiLatency(minMs: number, maxMs: number): Promise<void> {
    const delay = minMs + Math.random() * (maxMs - minMs);
    return new Promise((resolve) => setTimeout(resolve, delay));
  }
}
