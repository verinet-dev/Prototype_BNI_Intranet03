import { Cake, Gift, PartyPopper } from 'lucide-react';
import { birthdayToday, birthdaysWeek } from '../data/data';

export default function Birthdays() {
  return (
    <div className="card card-accent">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-icon accent"><Cake strokeWidth={1.8} className="w-4 h-4 text-accent" /></div><h3 className="accent">Anniversaires</h3></div>
      </div>
      {/* Aujourd'hui */}
      <div className="bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 border-b border-orange-100 p-4">
        <span className="text-[10px] uppercase tracking-wider text-brand font-bold block mb-3">Aujourd'hui</span>
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-14 h-14 rounded-full p-0.5 bg-linear-to-br from-brand to-amber-400 shadow-md">
              <img src={birthdayToday.avatar} alt="" className="w-full h-full rounded-full object-cover border-2 border-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-brand rounded-full flex items-center justify-center">
              <Gift strokeWidth={2} className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-slate-800">{birthdayToday.name}</div>
            <div className="text-[10px] text-slate-400">{birthdayToday.department}</div>
          </div>
        </div>
        <button className="w-full bg-brand hover:bg-brand-dark text-white text-[11px] font-bold py-2.5 rounded-md transition-colors active:scale-[0.98]">
          <PartyPopper strokeWidth={1.5} className="w-3.5 h-3.5 inline mr-1" /> Souhaiter un joyeux anniversaire
        </button>
      </div>
      {/* Cette semaine */}
      <div className="p-4">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-3">Cette semaine</span>
        <div className="space-y-2.5">
          {birthdaysWeek.map((person) => (
            <div key={person.name} className="flex items-center gap-3">
              <img src={person.avatar} alt="" className="w-9 h-9 rounded-full border-2 border-slate-100 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-slate-800 truncate">{person.name}</div>
                <div className="text-[10px] text-slate-400">{person.department}</div>
              </div>
              <span className="text-[11px] font-semibold text-brand bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 shrink-0">{person.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
