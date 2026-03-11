import * as LucideIcons from 'lucide-react';
import { applications } from '../data/data';

export default function Applications() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar brand"></div><div className="card-header-icon brand"><LucideIcons.LayoutGrid strokeWidth={1.8} className="w-4 h-4 text-brand" /></div><h3 className="brand">Applications</h3></div>
        <span className="text-[11px] text-slate-400">8 services</span>
      </div>
      <div className="p-3 grid grid-cols-4 gap-2">
        {applications.map((app) => {
          const Icon = LucideIcons[app.icon];
          return (
            <a key={app.name} href="#" className="flex flex-col items-center text-center p-3 border border-slate-100 rounded-xl hover:border-brand/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-11 h-11 rounded-xl ${app.bgClass} flex items-center justify-center ${app.textClass} ${app.hoverBg} group-hover:text-white transition-all duration-300 mb-2 shadow-sm group-hover:shadow-md group-hover:scale-110`}>
                {Icon && <Icon strokeWidth={1.5} className="w-5 h-5" />}
              </div>
              <span className="text-[11px] font-semibold text-slate-600 group-hover:text-slate-800 transition-colors">{app.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
