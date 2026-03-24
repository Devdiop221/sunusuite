import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FolderKanban,
  Lock,
  PenSquare,
  Search,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { getLoginHref, getSignupHref } from '@/lib/auth';
import { SiteHeader } from '@/components/ui/SiteHeader';

const FEATURES = [
  {
    icon: PenSquare,
    title: 'Redaction collaborative en temps reel',
    description:
      'Concentrez-vous sur le contenu, collaborez a plusieurs et gardez une structure lisible.',
  },
  {
    icon: Sparkles,
    title: 'Aide a la synthese et a la reformulation',
    description:
      'Des fonctions d’assistance peuvent accelerer la production de comptes rendus et de notes.',
  },
  {
    icon: Search,
    title: 'Retrouvez vite les informations utiles',
    description:
      'Navigation, organisation et recherche pour ne pas perdre le fil dans les documents vivants.',
  },
  {
    icon: Lock,
    title: 'Partage plus maitrise',
    description:
      'Les droits d’acces et les espaces de travail sont penses pour des environnements professionnels.',
  },
];

const PRINCIPLES = [
  'Une interface sobre qui privilegie la lecture et la redaction',
  'Des documents pensés pour l’ecriture collective et la prise de decision',
  'Des briques ouvertes et interopérables pour éviter le verrouillage',
];

const FAQS = [
  {
    question: 'A quoi sert SunuDocs ?',
    answer:
      'SunuDocs est pense pour la redaction collaborative, les notes, les comptes rendus, les documents de travail et la capitalisation documentaire des equipes.',
  },
  {
    question: 'Peut-on travailler a plusieurs sur un meme document ?',
    answer:
      'Oui, la logique du produit est justement de permettre une edition partagee et un travail collectif plus fluide.',
  },
  {
    question: 'Pourquoi choisir un outil dedie plutot qu’un traitement de texte classique ?',
    answer:
      'Parce que SunuDocs privilegie le contenu, la collaboration, la structure et la circulation de l’information plutot que la mise en page lourde.',
  },
];

export default function SunuDocsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f3] text-slate-900">
      <SiteHeader
        currentApp="docs"
        currentLabel="SunuDocs"
        backTo="/"
        backLabel="Retour a SunuSuite"
        loginTarget="/docs"
        signupTarget="/docs"
      />

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0b6b3a]/20 bg-[#0b6b3a]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0b6b3a]">
              <FileText className="h-3.5 w-3.5" />
              SunuDocs
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] text-slate-950 md:text-6xl">
              L’editeur de texte collaboratif
              <span className="block text-[#0b6b3a]">pour vos equipes et vos institutions</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700">
              SunuDocs est un espace de redaction partagee qui privilegie le contenu sur la mise en
              forme. Il aide les equipes a preparer, relire, enrichir et transmettre leurs
              documents plus simplement.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link to={getLoginHref('/docs')}>
                <Button
                  size="lg"
                  className="border-[#0b6b3a] bg-[#0b6b3a] text-white hover:bg-[#09592f]"
                >
                  Se connecter a SunuDocs
                </Button>
              </Link>
              <Link to={getSignupHref('/docs')}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-black/10 bg-[#f7f8f3] text-slate-900 hover:bg-slate-50"
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
                  Guide de prise en main
                </Button>
              </Link>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              L’acces a SunuDocs est pense pour les equipes et organisations autorisees. La
              connexion se fait via votre espace professionnel ou le dispositif d’acces retenu par
              votre organisation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f8f8f4] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.6rem] border border-black/10 bg-white p-5">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Document en cours
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-950">
                    Compte rendu de coordination
                  </h2>
                </div>
                <span className="rounded-full bg-[#0b6b3a]/10 px-3 py-1 text-xs font-semibold text-[#0b6b3a]">
                  Partage maitrise
                </span>
              </div>

              <div className="space-y-4 pt-5">
                <div className="rounded-2xl bg-[#f7f8f3] p-4">
                  <p className="text-sm font-semibold text-slate-950">Ordre du jour</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Points d’avancement, arbitrages, suites a donner et calendrier de suivi.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 p-4">
                    <Users className="h-5 w-5 text-[#0b6b3a]" />
                    <p className="mt-3 text-sm font-semibold text-slate-950">Edition collective</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Commentaires, relectures et ajustements continus.</p>
                  </div>
                  <div className="rounded-2xl border border-black/10 p-4">
                    <FolderKanban className="h-5 w-5 text-[#b88700]" />
                    <p className="mt-3 text-sm font-semibold text-slate-950">Organisation durable</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Des contenus vivants mieux classes et plus faciles a transmettre.</p>
                  </div>
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
              Accedez a SunuDocs depuis votre cadre de travail habituel.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Le service est pense pour etre rejoint avec une identite professionnelle et un cadre
              d’acces defini par votre administration, institution ou organisation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">1. Acces</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Utilisez votre identite professionnelle</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                La connexion est faite pour s’appuyer sur un compte ou un acces professionnel connu de votre organisation.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">2. Cadre</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Rejoignez vos espaces autorises</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Vos documents, dossiers et espaces de travail suivent les regles de partage definies par votre equipe.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">3. Usage</p>
              <h3 className="mt-4 text-xl font-bold text-slate-950">Commencez a rediger sans friction</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                L’outil vous amene rapidement a l’ecriture, la relecture et la publication sans complexite inutile.
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
              Ecrire mieux, ensemble, dans un outil qui reste lisible.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
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

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Principes clefs
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Un outil editorial avant d’etre un outil de mise en page.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              SunuDocs s’inspire des outils de documentation collaborative: clarte, structure,
              redaction partagee et diffusion plus simple des informations importantes.
            </p>
          </div>

          <div className="space-y-4">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3 rounded-[1.5rem] border border-black/10 bg-[#f8f8f4] p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0b6b3a]" />
                <p className="text-sm leading-7 text-slate-700">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f7f8f3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Avantages
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Simple, ouvert et securise.
            </h2>
          </div>

          <div className="lg:col-span-2 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <PenSquare className="h-6 w-6 text-[#0b6b3a]" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">Focus contenu</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Une experience plus calme pour ecrire, relire et valider rapidement.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <Shield className="h-6 w-6 text-[#b88700]" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">Cadre de confiance</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Controle des acces, logique souveraine et briques ouvertes auditable.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-black/10 bg-white p-6">
              <Users className="h-6 w-6 text-[#0b6b3a]" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">Travail collectif</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Un meme document peut rester la reference commune d’une equipe complete.
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
            <h2 className="mt-4 text-4xl font-bold text-slate-950">Ce qu’il faut savoir sur SunuDocs.</h2>
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
            <h2 className="text-4xl font-bold">Rédigez, relisez et transmettez plus sereinement.</h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              SunuDocs s’integre dans une suite plus large avec SunuChat et SunuMeet pour relier
              discussions, reunions et documents sans changer constamment de cadre.
            </p>
            <div className="mt-10">
              <Link to={getLoginHref('/docs')}>
                <Button size="lg" className="border-white bg-white text-[#0b6b3a] hover:bg-white/90">
                  Ouvrir SunuDocs
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
