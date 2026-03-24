from fastapi import APIRouter
from pydantic import BaseModel
import asyncio
import random
import re

router = APIRouter()

# ── Schemas ───────────────────────────────────────────────────────────────────

class PIIAnalysisRequest(BaseModel):
    text: str
    context: str = "document"  # "document" | "message" | "chat"

class PIIEntity(BaseModel):
    type: str          # "cni" | "phone" | "bank_account" | "email" | "address"
    label: str
    value: str         # Valeur masquée
    start: int
    end: int
    confidence: float

class PIIAnalysisResult(BaseModel):
    has_pii: bool
    entities: list[PIIEntity]
    risk_level: str    # "low" | "medium" | "high"
    message: str

# ── Patterns de détection (Regex – simulant un modèle NER) ────────────────────

PII_PATTERNS = {
    "cni": (
        r"\b\d{13}\b",  # Numéro CNI sénégalais (13 chiffres)
        "Numéro de carte nationale d'identité",
    ),
    "phone": (
        r"\b(?:\+221|00221)?[0-9]{9}\b",  # Téléphone sénégalais
        "Numéro de téléphone",
    ),
    "bank_account": (
        r"\bSN\d{2}[A-Z]{4}\d{19}\b",  # IBAN sénégalais
        "Compte bancaire (IBAN)",
    ),
    "email": (
        r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b",
        "Adresse e-mail",
    ),
}

# ── Routes ────────────────────────────────────────────────────────────────────

@router.post("/analyze", response_model=PIIAnalysisResult)
async def analyze_pii(payload: PIIAnalysisRequest):
    """
    Détecte les données personnelles sensibles (PII) dans un texte.

    En production : remplacé par un modèle NER fine-tuné sur données sénégalaises.
    Cible : CamemBERT-NER ou spaCy fr_core_news_lg avec entités personnalisées
    (CNI, IBAN local, numéros Orange Money, etc.)
    """
    await asyncio.sleep(random.uniform(0.05, 0.25))

    entities: list[PIIEntity] = []

    for pii_type, (pattern, label) in PII_PATTERNS.items():
        for match in re.finditer(pattern, payload.text, re.IGNORECASE):
            raw_value = match.group()
            # Masquer partiellement la valeur sensible
            masked = raw_value[:3] + "•" * (len(raw_value) - 6) + raw_value[-3:]
            entities.append(
                PIIEntity(
                    type=pii_type,
                    label=label,
                    value=masked,
                    start=match.start(),
                    end=match.end(),
                    confidence=round(random.uniform(0.85, 0.99), 2),
                )
            )

    has_pii = len(entities) > 0
    risk_level = "high" if len(entities) >= 3 else ("medium" if len(entities) >= 1 else "low")

    return PIIAnalysisResult(
        has_pii=has_pii,
        entities=entities,
        risk_level=risk_level,
        message=(
            f"{len(entities)} donnée(s) personnelle(s) détectée(s). Vérifiez avant de partager."
            if has_pii
            else "Aucune donnée personnelle sensible détectée."
        ),
    )
