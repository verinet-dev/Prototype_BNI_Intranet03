import { Building2, ClipboardList } from 'lucide-react';
import { serviceNotes } from '../data/data';

export default function ServiceNotes() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar accent"></div><div className="card-header-icon accent"><ClipboardList strokeWidth={1.8} className="w-4 h-4 text-accent" /></div><h3 className="accent">Notes de service</h3></div>
        <a href="#" className="text-[11px] text-accent font-semibold hover:text-accent-dark">Voir tout</a>
      </div>
      <div className="card-body space-y-3">
        {serviceNotes.map((note) => (
          <div key={note.ref} className={`border border-slate-100 border-l-4 ${note.borderClass} p-3 rounded-r-md hover:shadow-sm hover:border-slate-200 transition-all cursor-pointer`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-slate-400">{note.ref}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${note.priorityClass}`}>{note.priority}</span>
            </div>
            <h4 className="text-[13px] font-semibold text-slate-800 line-clamp-1">{note.title}</h4>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <Building2 strokeWidth={1.5} className="w-3 h-3" /> {note.direction}
              </span>
              <span className="text-[10px] text-slate-400">{note.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
