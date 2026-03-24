import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Lock,
  MessageSquare,
  Search,
  Smartphone,
  Users,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { getLoginHref, getSignupHref } from '@/lib/auth';
import { SiteHeader } from '@/components/ui/SiteHeader';

const SECTIONS = [
  {
    icon: Smartphone,
    title: 'Utilisez SunuChat sur tous vos appareils',
    description:
      'Mobile, tablette et web dans une experience continue pour suivre les conversations ou que vous soyez.',
  },
  {
    icon: MessageSquare,
    title: 'Centralisez vos echanges',
    description:
      'Un seul canal d’echange pour les equipes, avec possibilite d’ouvrir certains espaces a des partenaires externes.',
  },
  {
    icon: Search,
    title: 'Retrouvez facilement vos collaborateurs',
    description:
      'Un annuaire integre aide a identifier et joindre plus rapidement les bonnes personnes.',
  },
  {
    icon: Users,
    title: 'Partagez vos centres d’interet',
    description:
      'Forums, salons et espaces de travail pour faire circuler les informations et les bonnes pratiques.',
  },
  {
    icon: Building2,
    title: 'Beneficiez d’une application souveraine',
    description:
      'Une messagerie concue pour des usages institutionnels avec une ambition d’hebergement et de gouvernance locale.',
  },
  {
    icon: Lock,
    title: 'Echangez en toute securite',
    description:
      'Les echanges prives peuvent etre proteges par chiffrement de bout en bout selon les politiques retenues.',
  },
];

const FAQS = [
  {
    question: 'Qui peut rejoindre SunuChat ?',
    answer:
      'Le positionnement vise les equipes publiques, institutions, etablissements et organisations qui ont besoin d’une messagerie de confiance pour leurs échanges professionnels.',
  },
  {
    question: 'Peut-on inviter des partenaires externes ?',
    answer:
      'Oui, certains espaces peuvent etre ouverts de maniere encadree a des partenaires, prestataires ou collaborateurs externes.',
  },
  {
    question: 'Pourquoi une messagerie dediee ?',
    answer:
      'Parce qu’une messagerie institutionnelle doit concilier simplicite, securite, gouvernance et maitrise technique sur la duree.',
  },
];

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f3] text-slate-900">
      <SiteHeader
        currentApp="chat"
        currentLabel="SunuChat"
        backTo="/"
        backLabel="Retour a SunuSuite"
        loginTarget="/chat"
        signupTarget="/chat"
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0b6b3a]/20 bg-[#0b6b3a]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6b3a]">
              <MessageSquare className="h-3.5 w-3.5" />
              SunuChat
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-slate-950 md:text-6xl">
              La messagerie instantanee
              <span className="block text-[#0b6b3a]">du secteur public et des organisations</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
              Concue pour communiquer facilement en toute securite, SunuChat aide les equipes a
              centraliser leurs echanges dans un cadre plus souverain, plus lisible et plus durable.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link to={getLoginHref('/chat')}>
                <Button
                  size="lg"
                  className="border-[#0b6b3a] bg-[#0b6b3a] text-white hover:bg-[#09592f]"
                >
                  Se connecter a SunuChat
                </Button>
              </Link>
              <Link to={getSignupHref('/chat')}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-black/10 bg-[#f7f8f3] text-slate-900 hover:bg-slate-50"
                >
                  S’inscrire
                </Button>
              </Link>
              <Link to={getLoginHref('/chat')}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-transparent text-slate-700 hover:bg-black/5 hover:text-slate-950"
                >
                  Prise en main
                </Button>
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              SunuChat est pense pour une connexion avec identite professionnelle, dans un cadre
              maitrise par votre organisation et ouvert de facon encadree aux partenaires.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f8f8f4] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.6rem] border border-black/10 bg-white p-5">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Conversation equipe
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-950">Coordination projet</h2>
                </div>
                <span className="rounded-full bg-[#0b6b3a]/10 px-3 py-1 text-xs font-semibold text-[#0b6b3a]">
                  Chiffrement E2E
                </span>
              </div>

              <div className="space-y-3 pt-5">
                <div className="max-w-[85%] rounded-2xl bg-[#0b6b3a] px-4 py-3 text-sm text-white">
                  Le compte rendu est pret. On valide ici avant diffusion ?
                </div>
                <div className="ml-auto max-w-[70%] rounded-2xl bg-[#f7f8f3] px-4 py-3 text-sm text-slate-700">
                  Oui, et on ouvre aussi un salon avec les partenaires externes.
                </div>
                <div className="max-w-[78%] rounded-2xl bg-[#f7f8f3] px-4 py-3 text-sm text-slate-700">
                  Parfait. Les echanges sensibles restent dans l’espace interne.
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
              Comment rejoindre SunuChat ?
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une messagerie pensee pour les usages professionnels et institutionnels.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              SunuChat vise les equipes qui ont besoin d’un cadre d’echange de confiance, avec
              identite professionnelle, administration plus claire et ouverture encadree aux tiers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">1. Acces</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Connectez-vous avec votre compte professionnel</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                L’entree est pensee pour des membres identifies dans un cadre institutionnel ou organisationnel.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">2. Echanges</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Retrouvez vos salons et vos equipes</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Vos espaces de discussion, groupes et forums sont organises pour refleter vos usages reels.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">3. Ouverture</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Invitez les bons partenaires</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Certains echanges peuvent etre ouverts de maniere controlee a des collaborateurs externes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SECTIONS.map((section) => (
              <div key={section.title} className="rounded-[1.8rem] border border-black/10 bg-[#fbfcf8] p-6">
                <section.icon className="h-6 w-6 text-[#0b6b3a]" />
                <h3 className="mt-5 text-xl font-bold text-slate-950">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Souverainete et securite
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Une application de communication concue pour inspirer confiance.
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-950">Infrastructure et developpements mieux maitrises</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Le positionnement de SunuChat met l’accent sur une maitrise plus locale de
                l’infrastructure et des evolutions produit.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-950">Protocoles ouverts</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                L’architecture cible privilegie des briques ouvertes pour beneficier des avancees de la communaute.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-950">Protection des echanges prives</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Les salons internes et messages sensibles peuvent s’appuyer sur des mecanismes de chiffrement adaptes.
              </p>
            </div>
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
              Les points essentiels sur SunuChat.
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
            <h2 className="text-4xl font-bold">Echangez facilement avec vos collaborateurs, ou que vous soyez.</h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              SunuChat s’integre a SunuSuite pour articuler conversations, documents et reunions
              dans un meme cadre plus souverain et plus simple a gouverner.
            </p>
            <div className="mt-10">
              <Link to={getLoginHref('/chat')}>
                <Button size="lg" className="border-white bg-white text-[#0b6b3a] hover:bg-white/90">
                  Se connecter
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
