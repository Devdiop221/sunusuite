# 🇸🇳 SunuSuite : La Suite Numérique Souveraine

> **Projet candidat au Hackathon iSAFE 2026 - Défi : "Protéger le citoyen à l'ère du Numérique"**

![Status](https://img.shields.io/badge/Status-Proof_of_Concept-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Tech](https://img.shields.io/badge/Stack-NestJS_React_AI-black)

## 🎯 Vision

**SunuSuite** est une plateforme de collaboration numérique souveraine conçue spécifiquement pour l'administration et les entreprises sénégalaises. Face aux menaces croissantes (phishing, fuite de données, espionnage), SunuSuite remplace les outils étrangers par une infrastructure locale, protégée par une **Intelligence Artificielle de Confiance**.

## 🛡️ Modules & Innovations

### 1. 📝 SunuDocs (Édition Sécurisée)
Alternative souveraine pour l'édition collaborative.
- **Innovation IA :** Détection proactive des données sensibles (PII) avant partage externe.
- **Souveraineté :** Hébergement des documents sur le sol sénégalais.

### 2. 💬 SunuChat (Messagerie Chiffrée)
Communication instantanée pour les équipes.
- **Innovation IA :** Agent anti-phishing intégré qui analyse les liens et pièces jointes en temps réel.
- **Éducation :** Feedback pédagogique en Wolof/Français lors de la détection de menaces.

### 3. 📹 SunuMeet (Visioconférence Certifiée)
Réunions vidéo sécurisées.
- **Innovation IA :** Certification biométrique des participants pour contrer les **Deepfakes**.

## 🏗️ Architecture Technique (PoC)

Le projet est structuré en Monorepo pour une scalabilité maximale :

- **Backend :** NestJS (API REST + WebSockets pour le temps réel).
- **Frontend :** React + TailwindCSS (Interface épurée et accessible).
- **AI Core :** Micro-service Python/NestJS intégrant des modèles de détection (LLM local).
- **Base de données :** PostgreSQL (Données chiffrées).

## 🚀 Installation (Développement)

```bash
# Cloner le projet
git clone https://github.com/votre-user/sunusuite.git

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
