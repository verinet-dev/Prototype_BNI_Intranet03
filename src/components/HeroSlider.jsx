import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { slideData } from '../data/data';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slideData.length) % slideData.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-137.5 max-h-195 overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slideData.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <img src={slide.image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 hero-overlay-gradient z-10"></div>

      {/* Hero Content */}
      <div className="max-w-480 mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 h-full flex items-center relative z-20">
        <div key={current} className="max-w-2xl pt-20 lg:pt-16">
          <div className="hero-content-enter mb-5">
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-white/90">
              <span className="w-8 sm:w-12 h-0.75 bg-brand inline-block"></span>
              <span>{slideData[current].subtitle}</span>
            </span>
          </div>
          <h1 className="hero-content-enter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            {slideData[current].title}
          </h1>
          <p className="hero-content-enter-delay text-sm sm:text-base lg:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
            {slideData[current].description}
          </p>
          <div className="hero-content-enter-delay">
            <a href="#" className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-all shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5">
              En savoir plus
              <ArrowRight strokeWidth={2} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* DG Badge — Desktop */}
      <div className="dg-badge hidden lg:flex absolute right-[4%] bottom-[12%] z-20 w-115 bg-black/50 backdrop-blur-xl border border-white/25 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex">
          <div className="w-45 shrink-0 relative">
            <img src="/Image_DG.jpeg" alt="Directeur Général BNI" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/10"></div>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[2px] text-brand font-bold block mb-3">Mot du Directeur Général</span>
            <p className="text-white text-sm leading-relaxed italic mb-4" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>
              "La BNI se pose en leader du marché et affiche ses valeurs souveraines de qualité et de professionnalisme. Ensemble, choisissons notre BNI pour Découvrir, Challenger et Innover."
            </p>
            <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/20">
              <div className="w-8 h-px bg-brand"></div>
              <div>
                <div className="text-xs font-semibold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.4)'}}>Youssouf FADIGA</div>
                <div className="text-[11px] text-white/70 font-medium">Directeur Général de la BNI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DG Badge — Mobile */}
      <div className="lg:hidden absolute bottom-24 left-4 right-4 sm:left-6 sm:right-6 z-20">
        <div className="bg-black/50 backdrop-blur-xl border border-white/25 rounded-xl p-4 flex items-center gap-4">
          <img src="/Image_DG.jpeg" alt="DG BNI" className="w-14 h-14 rounded-full border-2 border-white/30 shrink-0 object-cover" />
          <div>
            <span className="text-[10px] uppercase tracking-[2px] text-brand font-bold">Mot du Directeur Général</span>
            <p className="text-white text-sm italic leading-relaxed mt-1" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>"Ensemble, choisissons notre BNI pour Découvrir, Challenger et Innover."</p>
            <div className="text-[11px] text-white/70 mt-1 font-medium">Youssouf FADIGA — Directeur Général de la BNI</div>
          </div>
        </div>
      </div>

      {/* Slider Nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
        <button onClick={prev} className="slider-nav-btn">
          <ChevronLeft strokeWidth={1.5} className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3">
          {slideData.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`hero-dot ${i === current ? 'active' : ''}`} />
          ))}
        </div>
        <button onClick={next} className="slider-nav-btn">
          <ChevronRight strokeWidth={1.5} className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
