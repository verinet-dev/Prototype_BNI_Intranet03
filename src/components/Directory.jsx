import { useState } from 'react';
import { Search, Mail, Phone, BookUser } from 'lucide-react';
import { employees } from '../data/data';

export default function Directory() {
  const [search, setSearch] = useState('');

  const filtered = employees.filter((e) =>
    `${e.name} ${e.role} ${e.ext}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar brand"></div><div className="card-header-icon brand"><BookUser strokeWidth={1.8} className="w-4 h-4 text-brand" /></div><h3 className="brand">Annuaire</h3></div>
        <span className="text-[11px] text-slate-400">18 employés</span>
      </div>
      <div className="px-4 pt-3 pb-2">
        <div className="relative">
          <Search strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un employé..."
            className="w-full border border-slate-200 rounded-md pl-9 pr-3 py-2 text-[12px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        </div>
      </div>
      <div className="max-h-70 overflow-y-auto custom-scroll">
        {filtered.map((emp, i) => (
          <div key={emp.ext} className={`flex items-center gap-3 px-5 py-2.5 ${i < filtered.length - 1 ? 'border-b border-slate-50' : ''} hover:bg-accent/5 transition-colors cursor-pointer`}>
            <img src={emp.avatar} alt="" className="w-9 h-9 rounded-full border-2 border-slate-100 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-slate-800">
                {emp.name} <span className="text-[10px] text-slate-400 font-normal">{emp.ext}</span>
              </div>
              <div className="text-[10px] text-accent font-medium">{emp.role}</div>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded bg-slate-100 hover:bg-accent/10 transition-colors">
                <Mail strokeWidth={1.5} className="w-3 h-3 text-slate-400" />
              </button>
              <button className="p-1 rounded bg-slate-100 hover:bg-accent/10 transition-colors">
                <Phone strokeWidth={1.5} className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-2 border-t border-slate-100 bg-slate-50/50 text-center">
        <a href="#" className="text-[11px] text-accent font-semibold hover:text-accent-dark">Voir l&apos;annuaire complet</a>
      </div>
    </div>
  );
}
