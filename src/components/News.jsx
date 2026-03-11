import { Calendar, Newspaper } from 'lucide-react';
import { news } from '../data/data';

export default function News() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar brand"></div><div className="card-header-icon brand"><Newspaper strokeWidth={1.8} className="w-4 h-4 text-brand" /></div><h3 className="brand">Actualités</h3></div>
        <a href="#" className="text-[11px] text-accent font-semibold hover:text-accent-dark">Voir tout</a>
      </div>
      <div className="card-body space-y-4">
        {news.map((item) => (
          <a key={item.title} href="#" className="flex gap-4 group border border-slate-100 rounded-md overflow-hidden hover:border-accent/30 hover:shadow-sm transition-all">
            <div className="w-28 h-24 bg-slate-200 shrink-0 overflow-hidden">
              <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 py-2 pr-3">
              <span className={`text-[9px] font-bold ${item.tagClass} px-1.5 py-0.5 rounded`}>{item.tag}</span>
              <h4 className="text-[13px] font-semibold text-slate-800 group-hover:text-accent transition-colors mt-1 line-clamp-1">{item.title}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.description}</p>
              <div className="flex items-center gap-3 mt-1.5 text-[10px] text-slate-400">
                <span className="flex items-center gap-1"><Calendar strokeWidth={1.5} className="w-3 h-3" /> {item.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
