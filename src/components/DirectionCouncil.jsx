import { Users } from 'lucide-react';
import { directionMembers } from '../data/data';

export default function DirectionCouncil() {
  return (
    <div className="card card-accent">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-icon accent"><Users strokeWidth={1.8} className="w-4 h-4 text-accent" /></div><h3 className="accent">Conseil de direction</h3></div>
        <span className="text-[11px] text-slate-400">{directionMembers.length} membres</span>
      </div>
      <div className="max-h-[370px] overflow-y-auto custom-scroll">
        {directionMembers.map((member, i) => (
          <div key={member.name} className={`flex items-center gap-3 px-5 py-3 ${i < directionMembers.length - 1 ? 'border-b border-slate-50' : ''} hover:bg-accent/5 transition-colors cursor-pointer`}>
            <img src={member.avatar} alt="" className="w-10 h-10 rounded-full border-2 border-accent/20 shrink-0 object-cover" />
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold text-slate-800">
                {member.name}
                {i === 0 && <span className="ml-2 text-[9px] font-bold uppercase bg-brand/10 text-brand px-1.5 py-0.5 rounded">DG</span>}
              </div>
              <div className="text-[10px] text-accent font-medium">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
