import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { establishments } from '../data/data';

const typeFilters = [
  { key: 'all', label: 'Tout' },
  { key: 'agence', label: 'Agence' },
  { key: 'centre', label: 'Centre' },
  { key: 'gab', label: 'GAB' },
];

const communes = [
  { value: '', label: 'Toutes communes' },
  { value: 'plateau', label: 'Plateau' },
  { value: 'cocody', label: 'Cocody' },
  { value: 'marcory', label: 'Marcory' },
  { value: 'yopougon', label: 'Yopougon' },
  { value: 'abobo', label: 'Abobo' },
];

export default function HealthEstablishments() {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [commune, setCommune] = useState('');

  const filtered = establishments.filter((e) => {
    const matchText = !search || e.name.toLowerCase().includes(search.toLowerCase());
    const matchType = activeType === 'all' || e.type === activeType;
    const matchCommune = !commune || e.commune === commune;
    return matchText && matchType && matchCommune;
  });

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar accent"></div><div className="card-header-icon accent"><LucideIcons.Building2 strokeWidth={1.8} className="w-4 h-4 text-accent" /></div><h3 className="accent">Réseau BNI</h3></div>
      </div>
      <div className="px-4 pt-3 space-y-2">
        <div className="relative">
          <LucideIcons.Search strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher..."
            className="w-full border border-slate-200 rounded-md pl-9 pr-3 py-2 text-[12px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-1">
          <select
            value={commune}
            onChange={(e) => setCommune(e.target.value)}
            className="border border-slate-200 rounded-md px-2 py-1 text-[10px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            {communes.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
          <div className="flex gap-1">
            {typeFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveType(f.key)}
                className={`type-btn text-[10px] font-medium px-2.5 py-1 border border-slate-200 rounded-full transition-colors ${activeType === f.key ? 'active' : 'text-slate-500'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-h-75 overflow-y-auto custom-scroll mt-2">
        {filtered.map((est, i) => {
          const Icon = LucideIcons[est.icon];
          return (
            <div key={est.name} className={`flex items-start gap-3 px-5 py-3 ${i < filtered.length - 1 ? 'border-b border-slate-50' : ''} hover:bg-slate-50/50 cursor-pointer`}>
              <div className={`w-9 h-9 rounded-lg ${est.iconBg} flex items-center justify-center shrink-0`}>
                {Icon && <Icon strokeWidth={1.5} className={`w-4 h-4 ${est.iconColor}`} />}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold text-slate-800">{est.name}</span>
                  <span className={`text-[9px] uppercase ${est.typeColor} font-bold`}>{est.typeLabel}</span>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <LucideIcons.MapPin strokeWidth={1.5} className="w-3 h-3" /> {est.communeLabel}
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <LucideIcons.Phone strokeWidth={1.5} className="w-3 h-3" /> {est.phone}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
