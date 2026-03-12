import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-accent-dark text-white">
      {/* Decorative wave separator */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden leading-0 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12.5">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="var(--color-accent-dark)" opacity=".25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="var(--color-accent-dark)" opacity=".5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="var(--color-accent-dark)"/>
        </svg>
      </div>
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-brand to-transparent rounded-full"></div>
      <div className="max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <a href="#" className="footer-link text-sm text-white/45">Accueil Intranet</a>
            <a href="#" className="footer-link text-sm text-white/45">Annuaire interne</a>
            <a href="#" className="footer-link text-sm text-white/45">Organigramme</a>
            <a href="#" className="footer-link text-sm text-white/45">BNI Online</a>
            <a href="https://www.bni.ci" target="_blank" rel="noopener noreferrer" className="footer-link text-sm text-white/45">www.bni.ci</a>
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
            <a href="#" className="footer-link text-sm text-white/45">Notes de service</a>
            <a href="#" className="footer-link text-sm text-white/45">BNI Magazine</a>
            <a href="#" className="footer-link text-sm text-white/45">FAQ</a>
            <a href="#" className="footer-link text-sm text-white/45">Support technique</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/30 flex items-center gap-2">
            <Sparkles strokeWidth={1.5} className="w-3 h-3 text-brand/50" />
            &copy; 2026 BNI — Banque Nationale d&apos;Investissement. Tous droits réservés.
          </p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="group w-10 h-10 flex items-center justify-center rounded-full bg-brand/20 border border-brand/30 text-brand hover:bg-brand hover:text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-brand/30">
            <ArrowUp strokeWidth={2} className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
