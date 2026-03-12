import { useState, useEffect } from 'react';
import { Home, Briefcase, Newspaper, BookOpen, Users, Mail, Bell, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-480 mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 flex items-center">
          <a href="#" className="flex items-center mr-10">
            <img src="/logo_bni.jpg" alt="BNI Logo" className="nav-logo w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="nav-link text-sm font-semibold tracking-wider flex items-center gap-2 active">
              <Home strokeWidth={1.5} className="w-4 h-4" /> Accueil
            </a>
            <a href="#" className="nav-link text-sm font-semibold tracking-wider flex items-center gap-2">
              <Briefcase strokeWidth={1.5} className="w-4 h-4" /> Groupe BNI
            </a>
            <a href="#" className="nav-link text-sm font-semibold tracking-wider flex items-center gap-2">
              <Newspaper strokeWidth={1.5} className="w-4 h-4" /> Actualités
            </a>
            <a href="#" className="nav-link text-sm font-semibold tracking-wider flex items-center gap-2">
              <BookOpen strokeWidth={1.5} className="w-4 h-4" /> Publications
            </a>
            <a href="#" className="nav-link text-sm font-semibold tracking-wider flex items-center gap-2">
              <Users strokeWidth={1.5} className="w-4 h-4" /> Annuaire
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="nav-link text-sm font-semibold tracking-wider flex items-center gap-2">
              <Mail strokeWidth={1.5} className="w-4 h-4" /> Mail
            </a>
          </div>

          <div className="flex-1"></div>

          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors" aria-label="Notifications">
              <Bell strokeWidth={1.5} className="w-5 h-5 nav-icon" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-brand rounded-full border-2 border-transparent notification-pulse"></span>
            </button>
            <div className="hidden md:flex items-center gap-2.5 cursor-pointer group">
              <img src="https://i.pravatar.cc/100?img=47" alt="Profil" className="w-9 h-9 rounded-full border-2 border-white/30 object-cover group-hover:border-brand/50 transition-colors" />
              <span className="logo-text text-xs font-medium hidden lg:block group-hover:text-brand transition-colors">Kouamé Marie</span>
            </div>
            <button onClick={() => setMobileOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
              <Menu strokeWidth={1.5} className="w-5 h-5 nav-icon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay fixed inset-0 bg-black/60 z-101 lg:hidden ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu-panel fixed top-0 right-0 w-80 max-w-full h-full bg-accent-dark z-102 lg:hidden overflow-y-auto ${mobileOpen ? 'active' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
            <img src="/logo_bni.jpg" alt="BNI" className="h-8 w-auto object-contain" />
            <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center text-white hover:text-brand transition-colors">
              <X strokeWidth={1.5} className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-0 mb-8">
            <a href="#" className="py-4 px-2 text-brand font-semibold uppercase tracking-wider text-sm border-b border-white/10 flex items-center justify-between">
              Accueil <ChevronRight strokeWidth={1.5} className="w-4 h-4" />
            </a>
            <a href="#" className="py-4 px-2 text-white font-semibold uppercase tracking-wider text-sm border-b border-white/10 hover:text-brand hover:pl-4 transition-all flex items-center justify-between">
              Groupe BNI
            </a>
            <a href="#" className="py-4 px-2 text-white font-semibold uppercase tracking-wider text-sm border-b border-white/10 hover:text-brand hover:pl-4 transition-all flex items-center justify-between">
              Actualités
            </a>
            <a href="#" className="py-4 px-2 text-white font-semibold uppercase tracking-wider text-sm border-b border-white/10 hover:text-brand hover:pl-4 transition-all flex items-center justify-between">
              Publications
            </a>
            <a href="#" className="py-4 px-2 text-white font-semibold uppercase tracking-wider text-sm border-b border-white/10 hover:text-brand hover:pl-4 transition-all flex items-center justify-between">
              Annuaire
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="py-4 px-2 text-white font-semibold uppercase tracking-wider text-sm border-b border-white/10 hover:text-brand hover:pl-4 transition-all flex items-center justify-between">
              Mail
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
