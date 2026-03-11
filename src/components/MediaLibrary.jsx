import { useState } from 'react';
import { Play, Headphones, FileText, Images } from 'lucide-react';
import { mediaItems } from '../data/data';

const filters = [
  { key: 'all', label: 'Tout' },
  { key: 'photo', label: 'Photos' },
  { key: 'video', label: 'Vidéos' },
  { key: 'audio', label: 'Audio' },
  { key: 'document', label: 'Documents' },
];

export default function MediaLibrary() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? mediaItems : mediaItems.filter(item => item.type === activeFilter);

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-center"><div className="card-header-bar brand"></div><div className="card-header-icon brand"><Images strokeWidth={1.8} className="w-4 h-4 text-brand" /></div><h3 className="brand">Médiathèque</h3></div>
        <div className="flex gap-1 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`filter-btn text-[11px] font-medium px-3 py-1.5 border border-slate-200 rounded-full transition-colors ${activeFilter === f.key ? 'active' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filtered.map((item, i) => {
          if (item.type === 'photo') {
            return (
              <div key={i} className="media-card relative rounded-md overflow-hidden cursor-pointer group aspect-4/3">
                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                  <span className="text-[10px] text-white font-medium">{item.label}</span>
                  <span className="text-[9px] text-white/60">{item.sub}</span>
                </div>
              </div>
            );
          }
          if (item.type === 'video') {
            return (
              <div key={i} className="media-card relative rounded-md overflow-hidden cursor-pointer group aspect-4/3">
                <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 ${item.overlayClass} flex items-center justify-center`}>
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
                    <Play strokeWidth={1.5} className="w-4 h-4 text-brand ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-2 right-2 text-[9px] bg-black/70 text-white px-1.5 py-0.5 rounded">{item.duration}</span>
              </div>
            );
          }
          if (item.type === 'audio') {
            return (
              <div key={i} className="media-card relative rounded-md overflow-hidden cursor-pointer group aspect-4/3 bg-linear-to-br from-purple-50 to-indigo-50 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Headphones strokeWidth={1.5} className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-[10px] font-medium text-slate-600">{item.label}</span>
                <span className="text-[9px] text-slate-400">{item.sub}</span>
              </div>
            );
          }
          if (item.type === 'document') {
            return (
              <div key={i} className="media-card relative rounded-md overflow-hidden cursor-pointer group aspect-4/3 bg-linear-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <FileText strokeWidth={1.5} className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-[10px] font-medium text-slate-600">{item.label}</span>
                <span className="text-[9px] text-slate-400">{item.sub}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
