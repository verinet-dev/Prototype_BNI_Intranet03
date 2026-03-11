import * as LucideIcons from 'lucide-react';
import { events } from '../data/data';

export default function Events() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar accent"></div><div className="card-header-icon accent"><LucideIcons.CalendarDays strokeWidth={1.8} className="w-4 h-4 text-accent" /></div><h3 className="accent">Événements à venir</h3></div>
        <a href="#" className="text-[11px] text-accent font-semibold hover:text-accent-dark">Voir tout</a>
      </div>
      <div className="card-body space-y-3">
        {events.map((event) => {
          const LocationIcon = LucideIcons[event.locationIcon];
          return (
            <div key={event.title} className="flex gap-3 border border-slate-100 rounded-md p-3 hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer">
              <div className={`w-13 h-15 bg-linear-to-b ${event.gradientClass} rounded-md flex flex-col items-center justify-center shrink-0 text-white overflow-hidden`}>
                <span className={`text-[8px] font-bold uppercase ${event.headerBg} w-full text-center py-0.5`}>{event.month}</span>
                <span className="text-lg font-bold leading-none mt-1">{event.day}</span>
              </div>
              <div className="min-w-0">
                <span className={`text-[9px] font-bold ${event.tagClass} px-1.5 py-0.5 rounded`}>{event.tag}</span>
                <h4 className="text-[12px] font-semibold text-slate-800 truncate mt-0.5">{event.title}</h4>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400">
                  <span className="flex items-center gap-0.5">
                    <LucideIcons.Clock strokeWidth={1.5} className="w-3 h-3" /> {event.time}
                  </span>
                  <span className="flex items-center gap-0.5">
                    {LocationIcon && <LocationIcon strokeWidth={1.5} className="w-3 h-3" />} {event.location}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
