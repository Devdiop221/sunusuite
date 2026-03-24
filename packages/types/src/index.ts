// ── Types partagés SunuSuite ──────────────────────────────────────────────────

// Auth
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

// Security AI
export type ThreatLevel = 'safe' | 'suspicious' | 'dangerous';
export type DeepfakeConfidence = 'authentic' | 'suspect' | 'deepfake';

export interface PhishingAnalysisResult {
  input: string;
  threatLevel: ThreatLevel;
  confidenceScore: number;
  reasons: string[];
  recommendations: string[];
  analyzedAt: Date;
}

export interface DeepfakeAnalysisResult {
  verdict: DeepfakeConfidence;
  deepfakeScore: number;
  indicators: Array<{
    type: string;
    severity: 'low' | 'medium' | 'high';
    description: string;
  }>;
  explanation: string;
  analyzedAt: Date;
}

// Documents
export interface SunuDoc {
  id: string;
  title: string;
  content: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Chat
export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

// Meet
export interface MeetRoom {
  id: string;
  title: string;
  hostId: string;
  joinUrl: string;
  createdAt: Date;
  maxParticipants: number;
  isActive: boolean;
}
