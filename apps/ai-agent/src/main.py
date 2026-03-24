from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from contextlib import asynccontextmanager
import logging

# ── App modules ───────────────────────────────────────────────────────────────
from phishing.router import router as phishing_router
from pii.router import router as pii_router

# ── Configuration du logger ───────────────────────────────────────────────────
logging.basicConfig(level=logging.INFO, format="%(asctime)s | %(name)s | %(message)s")
logger = logging.getLogger("sunusuite.ai")

# ── Startup / Shutdown ────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("🧠 SunuSuite AI Agent démarré – chargement des modèles...")
    # TODO: Charger les modèles IA ici (ex: transformers, onnxruntime)
    yield
    logger.info("🔒 SunuSuite AI Agent arrêté proprement.")


# ── Application ───────────────────────────────────────────────────────────────

app = FastAPI(
    title="SunuSuite AI Agent",
    description=(
        "Microservice d'intelligence artificielle pour la protection souveraine.\n\n"
        "**Modules disponibles :**\n"
        "- `/phishing` – Détection de liens et messages malveillants\n"
        "- `/pii` – Détection de données personnelles sensibles (NLP)\n"
    ),
    version="0.1.0",
    lifespan=lifespan,
)

# ── CORS ──────────────────────────────────────────────────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routes ────────────────────────────────────────────────────────────────────

app.include_router(phishing_router, prefix="/phishing", tags=["Phishing Detection"])
app.include_router(pii_router, prefix="/pii", tags=["PII Detection"])


@app.get("/health", tags=["Health"])
async def health_check():
    """Vérification de l'état du service IA."""
    return {
        "status": "healthy",
        "service": "SunuSuite AI Agent",
        "version": "0.1.0",
        "models": {
            "phishing": "mock_v1 (à remplacer par un vrai modèle)",
            "pii_ner": "mock_v1 (à remplacer par CamemBERT-NER)",
        },
    }
