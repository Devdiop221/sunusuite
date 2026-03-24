import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe,
  Lock,
  MessageSquare,
  Network,
  Shield,
  Smartphone,
  Users,
  Video,
  Zap,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SiteHeader } from '@/components/ui/SiteHeader';
import { getLoginHref, getSignupHref } from '@/lib/auth';

const TOOLS = [
  {
    icon: MessageSquare,
    title: 'SunuChat',
    description:
      'Une messagerie sécurisée pour les échanges rapides entre agents, équipes et partenaires autorisés.',
    href: '/chat',
    accent: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Video,
    title: 'SunuMeet',
    description:
      'Des réunions en ligne fiables, hébergées localement, avec des garde-fous de sécurité intégrés.',
    href: '/meet',
    accent: 'bg-amber-100 text-amber-700',
  },
  {
    icon: FileText,
    title: 'SunuDocs',
    description:
      'Un espace de rédaction et de partage documentaire conçu pour travailler à plusieurs en toute clarté.',
    href: '/docs',
    accent: 'bg-lime-100 text-lime-700',
  },
];

const VALUES = [
  {
    icon: CheckCircle2,
    title: 'Simplicité',
    description: 'Des outils pensés pour être adoptés rapidement, même sans formation longue.',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Une architecture conçue pour protéger les échanges, les réunions et les documents sensibles.',
  },
  {
    icon: Globe,
    title: 'Souveraineté',
    description: 'Une plateforme pensée pour un hébergement et une gouvernance ancrés au Sénégal.',
  },
  {
    icon: Network,
    title: 'Interopérabilité',
    description: 'Des briques qui dialoguent entre elles et respectent les formats standards.',
  },
];

const PLATFORM_POINTS = [
  'Hébergement local et gouvernance plus lisible',
  'Coûts mieux maîtrisés grâce à des briques ouvertes',
  'Réversibilité facilitée via des formats standards',
  'Accessibilité et amélioration continue comme exigences de base',
];

const ECOSYSTEM_POINTS = [
  'Standards open source et architecture modulaire',
  'Partenaires techniques locaux et régionaux',
  'Feuille de route co-construite avec les organisations utilisatrices',
];

const FAQS = [
  {
    question: 'À qui s’adresse SunuSuite ?',
    answer:
      'SunuSuite est pensée pour les administrations, établissements publics, collectivités, universités et organisations qui veulent collaborer avec des outils plus souverains.',
  },
  {
    question: 'Peut-on l’utiliser avec des partenaires externes ?',
    answer:
      'Oui, le modèle cible prévoit des usages encadrés avec des partenaires invités, selon les règles d’accès décidées par chaque organisation.',
  },
  {
    question: 'Pourquoi une suite sénégalaise plutôt qu’un outil générique ?',
    answer:
      'Parce que les enjeux de souveraineté, d’hébergement, de conformité et d’accompagnement local méritent une réponse conçue pour les usages du terrain.',
  },
];

const PROOF_GROUPS = [
  'Administrations centrales',
  'Collectivités territoriales',
  'Universités et écoles',
  'Agences publiques',
  'Projets de coopération',
  'Opérateurs de service',
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f3] text-slate-900">
      <SiteHeader homeMode loginTarget="/docs" signupTarget="/docs" />

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0b6b3a]/20 bg-[#0b6b3a]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6b3a]">
              <Zap className="h-3.5 w-3.5" />
              Espace de travail ouvert et souverain
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-slate-950 md:text-7xl">
              L’espace de travail numerique souverain
              <span className="block text-[#0b6b3a]">des organisations senegalaises</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
              Une suite coherente d’outils de collaboration, de documentation et de communication,
              concue pour aider les equipes a creer, organiser, decider et cooperer en toute
              confiance, avec une ambition d’hebergement et de gouvernance plus locale.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link to="/docs">
                <Button
                  size="lg"
                  className="border-[#0b6b3a] bg-[#0b6b3a] text-white hover:bg-[#09592f]"
                >
                  Decouvrir les outils
                </Button>
              </Link>
              <Link to={getSignupHref('/docs')}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-black/10 bg-white text-slate-900 hover:bg-slate-50"
                >
                  S’inscrire
                </Button>
              </Link>
              <Link to={getLoginHref('/docs')}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-transparent text-slate-700 hover:bg-black/5 hover:text-slate-950"
                >
                  Demarrer avec SunuSuite
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.6rem] border border-black/10 bg-[#fbfcf8] p-6">
              <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Vue d’ensemble
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">Un seul espace, plusieurs usages</h2>
                </div>
                <span className="rounded-full bg-[#0b6b3a]/10 px-3 py-1 text-xs font-semibold text-[#0b6b3a]">
                  Senegal
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.4rem] bg-[#0b6b3a] p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                    Collaboration
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Documents, messagerie et reunions dans un ensemble plus lisible.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-black/10 bg-white p-4">
                    <Lock className="h-5 w-5 text-[#0b6b3a]" />
                    <p className="mt-3 font-semibold text-slate-950">Confiance par defaut</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Protection, controle des acces et signaux de securite plus visibles.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-black/10 bg-white p-4">
                    <Smartphone className="h-5 w-5 text-[#b88700]" />
                    <p className="mt-3 font-semibold text-slate-950">Accessible partout</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Web, mobile et postes de travail dans une experience unifiee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-sm text-slate-600">
            Pensee pour des usages publics, educatifs et institutionnels.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {PROOF_GROUPS.map((group) => (
              <div
                key={group}
                className="rounded-2xl border border-black/10 bg-[#f8f8f4] px-4 py-3 text-sm font-medium text-slate-700"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outils" className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Les outils de SunuSuite
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Un espace de travail avec des outils qui partagent la meme ambition.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Travailler mieux, ensemble, de maniere plus souveraine, plus simple et plus securisee.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TOOLS.map((tool) => (
              <div key={tool.title} className="rounded-[2rem] border border-black/10 bg-white p-6">
                <div className="rounded-[1.5rem] border border-black/10 bg-[#fbfcf8] p-6">
                  <div className={`inline-flex rounded-2xl p-3 ${tool.accent}`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">{tool.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-700">{tool.description}</p>
                  <Link
                    to={tool.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b6b3a]"
                  >
                    Decouvrir {tool.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Nouveaux usages
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une suite qui evolue avec les besoins du terrain.
            </h2>
          </div>
          <div className="space-y-5">
            <div className="rounded-[1.6rem] border border-black/10 bg-[#f8f8f4] p-6">
              <h3 className="text-xl font-bold text-slate-950">IA de confiance dans les usages quotidiens</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Resume d’echanges, aide a la reformulation, signaux anti-phishing et garde-fous
                contextuels pour faire gagner du temps sans brouiller la responsabilite humaine.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-black/10 bg-[#f8f8f4] p-6">
              <h3 className="text-xl font-bold text-slate-950">Des briques pensees pour cooperer</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Une reunion peut nourrir un compte rendu, un document peut prolonger une discussion,
                et chaque outil garde une place claire dans l’ensemble.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="valeurs" className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              SunuSuite, en un coup d’oeil
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une plateforme concue pour des usages reels, pas un assemblage opportuniste.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-[1.8rem] border border-black/10 bg-white p-6">
                <value.icon className="h-6 w-6 text-[#0b6b3a]" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plateforme" className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Une plateforme souveraine, securisee et durable
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Pensee pour les DSI, RSSI, directions metiers et equipes projet.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              L’objectif n’est pas seulement de fournir des outils, mais d’offrir un cadre plus
              coherent pour l’hebergement, la gouvernance, les integrations et l’accompagnement.
            </p>
          </div>

          <div className="space-y-4">
            {PLATFORM_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-[#f8f8f4] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0b6b3a]" />
                <p className="text-sm leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Plusieurs outils, un seul acces
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une identite unique pour acceder aux services de la suite.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              L’experience cible repose sur une authentification centralisee, une securite renforcee
              et une meilleure fluidite entre les produits.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <Users className="h-6 w-6 text-[#0b6b3a]" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">Identite unique</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une connexion plus simple pour eviter la fragmentation des acces.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <Shield className="h-6 w-6 text-[#b88700]" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">Securite renforcee</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Des regles communes de protection et de controle a l’echelle de la plateforme.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <Network className="h-6 w-6 text-[#0b6b3a]" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">Services partenaires</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une base plus claire pour integrer d’autres briques numeriques institutionnelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Un ecosysteme ouvert, souverain et collaboratif
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une logique de communs numeriques adaptee aux besoins du Senegal.
            </h2>
          </div>
          <div className="space-y-5">
            {ECOSYSTEM_POINTS.map((point) => (
              <div key={point} className="rounded-[1.6rem] border border-black/10 bg-[#f8f8f4] p-6">
                <h3 className="text-lg font-bold text-slate-950">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#0b6b3a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Proposez SunuSuite a vos equipes
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Evaluez la suite en toute confiance avec vos equipes techniques et metier.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Nous pouvons revoir ensemble l’architecture, la securite, les modes de deploiement
              et le cadre pilote le plus adapte a votre organisation.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="border-white bg-white text-[#0b6b3a] hover:bg-white/90"
              >
                Prendre rendez-vous
              </Button>
              <Link to="/docs">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  Ouvrir la plateforme
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Questions frequentes
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Les points qui reviennent le plus souvent.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/10 rounded-[2rem] border border-black/10 bg-[#fbfcf8]">
            {FAQS.map((faq) => (
              <div key={faq.question} className="px-6 py-6 md:px-8">
                <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0b6b3a] text-white">
                  <span className="font-bold">S</span>
                </div>
                <div>
                  <p className="font-bold text-slate-950">SunuSuite</p>
                  <p className="text-sm text-slate-600">
                    Simple. Open source. Pensee pour le service public de demain.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-950">Mentions legales</a>
              <a href="#" className="hover:text-slate-950">Donnees personnelles</a>
              <a href="#" className="hover:text-slate-950">Accessibilite</a>
              <a href="#" className="hover:text-slate-950">Code source</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
