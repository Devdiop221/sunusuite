from fastapi import APIRouter
from pydantic import BaseModel, HttpUrl
import re
import asyncio
import random

router = APIRouter()

# ── Schemas ───────────────────────────────────────────────────────────────────

class LinkAnalysisRequest(BaseModel):
    url: str

class MessageAnalysisRequest(BaseModel):
    message: str

class PhishingResult(BaseModel):
    input: str
    threat_level: str  # "safe" | "suspicious" | "dangerous"
    confidence_score: float
    reasons: list[str]
    recommendations: list[str]

# ── Données de mock ───────────────────────────────────────────────────────────

MALICIOUS_DOMAINS = {
    "phishing-sn.ml", "secure-login-orange.tk",
    "gov-senegal-update.gq", "fake-paytech.cf",
}

PHISHING_KEYWORDS = [
    "mot de passe expiré", "vérifiez votre compte",
    "cliquez immédiatement", "votre compte sera suspendu",
    "gagnez 500 000 fcfa", "urgent", "réinitialisation obligatoire",
]

SUSPICIOUS_TLDS = {".ml", ".tk", ".gq", ".cf", ".ga"}

# ── Routes ────────────────────────────────────────────────────────────────────

@router.post("/analyze-link", response_model=PhishingResult)
async def analyze_link(payload: LinkAnalysisRequest):
    """
    Analyse une URL pour détecter du phishing.

    En production : appelé par le NestJS SecurityModule via HTTP.
    Le modèle réel sera un classifieur entraîné sur des datasets de phishing
    (ex: PhishTank, OpenPhish) avec des features d'URL extraites.
    """
    # Simuler la latence d'inférence du modèle
    await asyncio.sleep(random.uniform(0.05, 0.2))

    url = payload.url
    reasons: list[str] = []
    score = 0.0

    try:
        from urllib.parse import urlparse
        parsed = urlparse(url)
        domain = parsed.hostname or url
    except Exception:
        domain = url

    if domain in MALICIOUS_DOMAINS:
        reasons.append(f'Domaine "{domain}" dans la liste noire')
        score += 0.9

    if any(domain.endswith(tld) for tld in SUSPICIOUS_TLDS):
        reasons.append(f"TLD suspect : {domain.split('.')[-1]}")
        score += 0.4

    legitimate_brands = ["orange", "free", "expresso", "sonatel", "gov", "senegal"]
    if any(b in domain for b in legitimate_brands) and not domain.endswith(".sn"):
        reasons.append(f'Usurpation potentielle de marque dans "{domain}"')
        score += 0.6

    score = min(score, 1.0)
    threat_level = "dangerous" if score >= 0.7 else ("suspicious" if score >= 0.3 else "safe")

    recommendations = {
        "safe": ["Aucune action requise"],
        "suspicious": ["Vérifiez l'expéditeur", "Contactez l'organisme par un canal officiel"],
        "dangerous": ["NE CLIQUEZ PAS", "Signalez à votre administrateur"],
    }[threat_level]

    return PhishingResult(
        input=url,
        threat_level=threat_level,
        confidence_score=round(score, 2),
        reasons=reasons,
        recommendations=recommendations,
    )


@router.post("/analyze-message", response_model=PhishingResult)
async def analyze_message(payload: MessageAnalysisRequest):
    """
    Analyse un texte pour détecter du social engineering / phishing.
    Modèle cible : fine-tuned camemBERT ou XLM-RoBERTa sur corpus sénégalais.
    """
    await asyncio.sleep(random.uniform(0.03, 0.15))

    msg = payload.message.lower()
    reasons: list[str] = []
    score = 0.0

    for kw in PHISHING_KEYWORDS:
        if kw in msg:
            reasons.append(f'Mot-clé d\'hameçonnage : "{kw}"')
            score += 0.35

    urls = re.findall(r"https?://\S+", payload.message)
    if urls:
        reasons.append(f"{len(urls)} lien(s) détecté(s) dans le message")
        score += 0.2 * len(urls)

    score = min(score, 1.0)
    threat_level = "dangerous" if score >= 0.7 else ("suspicious" if score >= 0.3 else "safe")

    return PhishingResult(
        input=payload.message,
        threat_level=threat_level,
        confidence_score=round(score, 2),
        reasons=reasons,
        recommendations=["Ne répondez pas", "Signalez le message"] if threat_level != "safe" else ["Aucune action requise"],
    )
