# SunuSuite 🇸🇳

> **Alternative souveraine à Google Workspace pour le Sénégal**
> Projet présenté au hackathon **iSAFE 2026**

---

## 🏗️ Architecture Monorepo

```
sunusuite/
├── apps/
│   ├── api/          # NestJS – Backend REST + WebSocket
│   └── web/          # React + Vite + TailwindCSS
└── packages/
    ├── types/        # Types TypeScript partagés
    └── ui/           # Composants UI réutilisables
```

## 🚀 Démarrage rapide

```bash
# Prérequis : Node 20+, PNPM 9+
npm install -g pnpm

# Installer les dépendances
pnpm install

# Démarrer en mode développement (tous les apps en parallèle)
pnpm dev

# OU démarrer individuellement
pnpm --filter @sunusuite/api dev      # API sur http://localhost:3001
pnpm --filter @sunusuite/web dev      # Web sur http://localhost:5173
```

## 🛡️ Modules

| Module          | Description                                          | Status |
|-----------------|------------------------------------------------------|--------|
| `AuthModule`    | JWT + Passport – Authentification sécurisée         | ✅     |
| `DocsModule`    | SunuDocs – Collaboration documentaire               | ✅     |
| `ChatModule`    | SunuChat – Messagerie WebSocket E2E                 | ✅     |
| `MeetModule`    | SunuMeet – Visioconférence souveraine               | ✅     |
| `SecurityAIModule` | IA anti-phishing + détection deepfake            | ✅     |

## 🤖 SecurityAI

- **PhishingDetectionService** – Analyse URLs et messages en temps réel
- **DeepfakeGuardService** – Détecte les médias falsifiés (images/vidéos)

## 📚 Documentation API

Swagger disponible sur : `http://localhost:3001/api/docs`

## 🔧 Stack Technique

- **Monorepo** : Turborepo + PNPM Workspaces
- **Backend** : NestJS 10 · TypeScript strict
- **Frontend** : React 18 · Vite · TailwindCSS
- **Auth** : JWT · Passport · bcrypt
- **Temps réel** : WebSocket (Socket.io via NestJS Gateway)
