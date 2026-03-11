import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-accent-dark text-white">
      <div className="footer-top-shape"></div>
      <div className="max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-5">
            <img src="/logo_bni.jpg" alt="BNI Logo" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            Banque Nationale d&apos;Investissement de Côte d&apos;Ivoire. Financer pour Développer.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <a href="https://www.facebook.com/BNI.Cotedivoire/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-brand hover:border-brand hover:text-white transition-all hover:scale-110">
              <Facebook strokeWidth={1.5} className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/national-bank-of-investment-bni---c-te-d-ivoire-/about/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-brand hover:border-brand hover:text-white transition-all hover:scale-110">
              <Linkedin strokeWidth={1.5} className="w-4 h-4" />
            </a>
            <a href="mailto:info@bni.ci" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:bg-brand hover:border-brand hover:text-white transition-all hover:scale-110">
              <Mail strokeWidth={1.5} className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">Liens utiles</h4>
          <nav className="flex flex-col gap-2.5">
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">Accueil Intranet</a>
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">Annuaire interne</a>
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">Organigramme</a>
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">BNI Online</a>
            <a href="https://www.bni.ci" target="_blank" rel="noopener noreferrer" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">www.bni.ci</a>
          </nav>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">Contact</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 text-sm text-white/45">
              <div className="w-8 h-8 rounded-lg bg-brand/15 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin strokeWidth={1.5} className="w-4 h-4 text-brand" />
              </div>
              <span>Abidjan Plateau, Avenue Marchand<br />Immeuble SCIAM</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/45">
              <div className="w-8 h-8 rounded-lg bg-brand/15 flex items-center justify-center shrink-0">
                <Phone strokeWidth={1.5} className="w-4 h-4 text-brand" />
              </div>
              <span>(+225) 27 20 30 30 30</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/45">
              <div className="w-8 h-8 rounded-lg bg-brand/15 flex items-center justify-center shrink-0">
                <Mail strokeWidth={1.5} className="w-4 h-4 text-brand" />
              </div>
              <span>info@bni.ci</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">Ressources</h4>
          <nav className="flex flex-col gap-2.5">
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">Notes de service</a>
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">BNI Magazine</a>
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">FAQ</a>
            <a href="#" className="text-sm text-white/45 hover:text-brand hover:pl-1 transition-all">Support technique</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/30">&copy; 2026 BNI — Banque Nationale d&apos;Investissement. Tous droits réservés.</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand/20 border border-brand/30 text-brand hover:bg-brand hover:text-white transition-all hover:scale-110">
            <ArrowUp strokeWidth={2} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
