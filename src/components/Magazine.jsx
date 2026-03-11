import { Download, BookOpen } from 'lucide-react';

const magazines = [
  {
    id: 1,
    title: 'Finance Climatique & Résilience',
    description: 'Dossier spécial : Finance climatique & résilience, agir ensemble pour un impact réel.',
    issue: 'BNI Magazine N°24 — Mars 2026',
    badge: 'Nouveau',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    title: 'Transformation Digitale',
    description: 'Comment la BNI accélère sa mutation numérique au service de ses clients et collaborateurs.',
    issue: 'BNI Magazine N°23 — Décembre 2025',
    badge: null,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    title: 'Inclusion Financière',
    description: "La BNI au cœur de la stratégie nationale d'inclusion financière et de bancarisation.",
    issue: 'BNI Magazine N°22 — Septembre 2025',
    badge: null,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Magazine() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar brand"></div><div className="card-header-icon brand"><BookOpen strokeWidth={1.8} className="w-4 h-4 text-brand" /></div><h3 className="brand">Magazine</h3></div>
        <a href="#" className="text-[11px] text-accent font-semibold hover:text-accent-dark">Voir tout</a>
      </div>
      <div className="max-h-85 overflow-y-auto custom-scroll">
        <div className="p-4 space-y-4">
          {magazines.map((mag) => (
            <div key={mag.id} className="flex gap-4 group">
              <div className="w-20 h-28 rounded-md overflow-hidden shrink-0 bg-slate-200">
                <img src={mag.image} alt="Magazine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                {mag.badge && <span className="text-[9px] font-bold uppercase tracking-wider text-brand bg-brand/10 px-2 py-0.5 rounded self-start mb-1">{mag.badge}</span>}
                <h4 className="text-[13px] font-semibold text-slate-800 mb-0.5 truncate">{mag.title}</h4>
                <p className="text-[10px] text-slate-400 line-clamp-2 mb-1">{mag.description}</p>
                <span className="text-[10px] text-slate-400 mb-2">{mag.issue}</span>
                <div className="flex gap-2 mt-auto">
                  <button className="text-[10px] font-semibold bg-accent/10 text-accent hover:bg-accent hover:text-white px-2.5 py-1 rounded transition-colors">Lire</button>
                  <button className="text-[10px] font-semibold bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-2.5 py-1 rounded transition-colors flex items-center gap-1">
                    <Download strokeWidth={1.5} className="w-3 h-3" /> PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
