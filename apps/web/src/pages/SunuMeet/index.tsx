import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Captions,
  CheckCircle2,
  Lock,
  Mic,
  Shield,
  Users,
  Video,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { getLoginHref, getSignupHref } from '@/lib/auth';
import { SiteHeader } from '@/components/ui/SiteHeader';

const FEATURES = [
  {
    icon: Captions,
    title: 'Laissez SunuMeet transcrire vos echanges',
    description:
      'Si vous le souhaitez, la reunion peut produire une transcription exploitable pour retrouver les points importants.',
  },
  {
    icon: Video,
    title: 'Enregistrez les reunions importantes',
    description:
      'Les echanges peuvent etre conserves pour archivage, partage interne ou preparation d’un compte rendu.',
  },
  {
    icon: Users,
    title: 'Reunissez des equipes etendues',
    description:
      'Comites, reunions interservices ou presentiel hybride dans une interface unique et lisible.',
  },
  {
    icon: Shield,
    title: 'Securisez les echanges',
    description:
      'La promesse du produit repose sur une infrastructure locale, des controles d’acces et une gouvernance plus claire.',
  },
  {
    icon: Mic,
    title: 'Rendez les reunions plus accessibles',
    description:
      'Sous-titres, transcription et clarte de l’interface peuvent aider un plus grand nombre de participants.',
  },
];

const ADVANTAGES = [
  {
    title: 'Fonctions essentielles',
    description: 'Partage d’ecran, chat, reactions et modes de reunion adaptes aux usages professionnels.',
  },
  {
    title: 'Commun numerique',
    description: 'Code ouvert, architecture auditable et logique de co-construction plutot que solution fermee.',
  },
  {
    title: 'Heberge localement',
    description: 'Residence des donnees, lisibilite juridique et capacite de gouvernance mieux maitrisees.',
  },
  {
    title: 'Securise',
    description: 'Chiffrement en transit, controles d’acces et fonctions d’IA parametrables selon les politiques internes.',
  },
  {
    title: 'Accessible',
    description: 'Une interface pensée pour rester claire, avec progression continue sur l’accessibilite.',
  },
];

const FAQS = [
  {
    question: 'Qui peut utiliser SunuMeet ?',
    answer:
      'Le produit cible vise les organisations, administrations, etablissements et equipes qui ont besoin d’une visioconference plus souveraine.',
  },
  {
    question: 'Peut-on creer des liens permanents ?',
    answer:
      'Oui, la logique fonctionnelle peut inclure des salles recurrentes ou des liens reutilisables pour les equipes.',
  },
  {
    question: 'Quel niveau de securite peut-on attendre ?',
    answer:
      'SunuMeet est positionne comme une solution de confiance: hebergement local, gouvernance plus lisible, architecture ouverte et exigences de securite fortes.',
  },
];

const ROADMAP = [
  'Creer des salles recurrentes',
  'Moderation avancee des reunions',
  'Planification depuis les outils de calendrier',
  'Connexion a des salles physiques et equipements hybrides',
];

export default function SunuMeetPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f3] text-slate-900">
      <SiteHeader
        currentApp="meet"
        currentLabel="SunuMeet"
        backTo="/"
        backLabel="Retour a SunuSuite"
        loginTarget="/meet"
        signupTarget="/meet"
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0b6b3a]/20 bg-[#0b6b3a]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6b3a]">
              <Video className="h-3.5 w-3.5" />
              SunuMeet
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-slate-950 md:text-6xl">
              L’outil de visioconference
              <span className="block text-[#0b6b3a]">des equipes et institutions senegalaises</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
              SunuMeet est une solution de visioconference souveraine pour echanger en toute
              confiance: fiable, securisee, ouverte et pensee pour des usages institutionnels.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link to={getLoginHref('/meet')}>
                <Button
                  size="lg"
                  className="border-[#0b6b3a] bg-[#0b6b3a] text-white hover:bg-[#09592f]"
                >
                  Se connecter a SunuMeet
                </Button>
              </Link>
              <Link to={getSignupHref('/meet')}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-black/10 bg-[#f7f8f3] text-slate-900 hover:bg-slate-50"
                >
                  S’inscrire
                </Button>
              </Link>
              <Link to={getLoginHref('/meet')}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-transparent text-slate-700 hover:bg-black/5 hover:text-slate-950"
                >
                  Assister a une demo
                </Button>
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              SunuMeet est pense pour les equipes autorisees. L’acces se fait depuis votre
              environnement professionnel, avec des salles et droits adaptes a votre organisation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f8f8f4] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.6rem] border border-black/10 bg-white p-5">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Reunion en cours
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-950">Comite de pilotage numerique</h2>
                </div>
                <span className="rounded-full bg-[#0b6b3a]/10 px-3 py-1 text-xs font-semibold text-[#0b6b3a]">
                  24 participants
                </span>
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-[#0f172a] p-5 text-white">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold">Partage d’ecran</p>
                    <p className="mt-2 text-sm text-white/75">Presentation, suivi et coordination en direct.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm font-semibold">Sous-titres</p>
                    <p className="mt-2 text-sm text-white/75">Aide au suivi des echanges et a la relecture.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 p-4">
                  <Lock className="h-5 w-5 text-[#0b6b3a]" />
                  <p className="mt-3 text-sm font-semibold text-slate-950">Acces maitrises</p>
                </div>
                <div className="rounded-2xl border border-black/10 p-4">
                  <Captions className="h-5 w-5 text-[#b88700]" />
                  <p className="mt-3 text-sm font-semibold text-slate-950">Trace exploitable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Comment se connecter ?
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Rejoignez vos reunions depuis un acces professionnel de confiance.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Le service est prevu pour etre active dans un cadre de travail defini, avec
              authentification, gouvernance des salles et regles de participation plus claires.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">1. Connexion</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Identifiez-vous avec votre acces professionnel</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                L’entree dans le service se fait dans le cadre d’une organisation ou d’une equipe reconnue.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">2. Reunion</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Accedez a vos salles ou creez la votre</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Vos reunions peuvent etre ponctuelles, recurrentes ou liees a un collectif de travail.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">3. Coordination</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Partagez, transcrivez et suivez les suites</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                La reunion devient une brique de travail utile, pas seulement un appel video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Fonctionnalites principales
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une visioconference pensée pour les besoins du service et de la coordination.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-[1.8rem] border border-black/10 bg-white p-6">
                <feature.icon className="h-6 w-6 text-[#0b6b3a]" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Principaux avantages
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Concu pour etre simple, performant et souverain.
            </h2>
          </div>

          <div className="space-y-4">
            {ADVANTAGES.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-[1.5rem] border border-black/10 bg-[#f8f8f4] p-5"
              >
                <h3 className="text-lg font-bold text-slate-950">{advantage.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Feuille de route
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Evolutions previsionnelles guidees par les retours.
            </h2>
          </div>

          <div className="space-y-4">
            {ROADMAP.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0b6b3a]" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Questions frequentes
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Les reponses aux questions les plus courantes.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-black/10 rounded-[2rem] border border-black/10 bg-[#fbfcf8]">
            {FAQS.map((faq) => (
              <div key={faq.question} className="px-6 py-6 md:px-8">
                <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b6b3a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold">Discutez, presentez et avancez ensemble avec SunuMeet.</h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Pour les DSI, RSSI et directions metier, SunuMeet s’integre dans SunuSuite comme une
              brique de collaboration simple, securisee et interoperable avec les autres outils.
            </p>
            <div className="mt-10">
              <Link to={getLoginHref('/meet')}>
                <Button size="lg" className="border-white bg-white text-[#0b6b3a] hover:bg-white/90">
                  Creer une reunion maintenant
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
