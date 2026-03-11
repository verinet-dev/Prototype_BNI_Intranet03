export const slideData = [
  {
    image: 'https://www.bni.ci/images/unes/20260113_144322_d7a974af0215cc2ac2b4f1ddb.jpg',
    subtitle: 'Actualité',
    title: <>Partenariat stratégique avec le<br/><span className="text-brand">Ministère délégué</span></>,
    description: 'La BNI et le Ministère Délégué aux Ivoiriens de l\u2019Extérieur scellent un accord pour l\u2019investissement de la diaspora.',
  },
  {
    image: 'https://www.bni.ci/images/unes/20251021_132407_718a144d1a8fe3cd37b799b0c.jpg',
    subtitle: 'Événement',
    title: <>50ᵉ Assemblée Générale<br/><span className="text-brand">FANAF</span> à Abidjan</>,
    description: 'La BNI, aux côtés de ses filiales BNI Finances et BNI Gestion, réaffirme son engagement dans le secteur de l\u2019assurance.',
  },
  {
    image: 'https://www.bni.ci/images/unes/20250429_151938_8ed950fff6dd0387c9db95f9b.jpg',
    subtitle: 'Distinction',
    title: <>Accréditation par le<br/><span className="text-brand">Fonds Vert pour le Climat</span></>,
    description: 'La BNI obtient son accréditation officielle auprès du Fonds Vert pour le Climat (GCF), une avancée majeure.',
  },
];

export const applications = [
  { name: 'Messagerie', icon: 'Mail', bgClass: 'bg-blue-100', textClass: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600' },
  { name: 'GRH', icon: 'Users', bgClass: 'bg-accent/10', textClass: 'text-accent', hoverBg: 'group-hover:bg-accent' },
  { name: 'Comptabilité', icon: 'Calculator', bgClass: 'bg-purple-100', textClass: 'text-purple-600', hoverBg: 'group-hover:bg-purple-600' },
  { name: 'Paie', icon: 'Banknote', bgClass: 'bg-amber-100', textClass: 'text-amber-600', hoverBg: 'group-hover:bg-amber-600' },
  { name: 'Congés', icon: 'CalendarOff', bgClass: 'bg-rose-100', textClass: 'text-rose-600', hoverBg: 'group-hover:bg-rose-600' },
  { name: 'Missions', icon: 'Briefcase', bgClass: 'bg-cyan-100', textClass: 'text-cyan-600', hoverBg: 'group-hover:bg-cyan-600' },
  { name: 'BNI Online', icon: 'Globe', bgClass: 'bg-green-100', textClass: 'text-green-600', hoverBg: 'group-hover:bg-green-600' },
  { name: 'Support IT', icon: 'Headset', bgClass: 'bg-slate-100', textClass: 'text-slate-600', hoverBg: 'group-hover:bg-slate-600' },
];

export const birthdayToday = {
  name: 'Marie Kouamé',
  department: 'Directrice Adjointe RH',
  avatar: 'https://i.pravatar.cc/100?img=47',
};

export const birthdaysWeek = [
  { name: 'Sophie Touré', department: 'Juriste', avatar: 'https://i.pravatar.cc/100?img=51', date: '12 Mars' },
  { name: 'Jean-Marc N\'Guessan', department: 'Informaticien', avatar: 'https://i.pravatar.cc/100?img=15', date: '13 Mars' },
  { name: 'Aya Koné', department: 'Assistante de direction', avatar: 'https://i.pravatar.cc/100?img=23', date: '14 Mars' },
];

export const news = [
  {
    image: 'https://www.bni.ci/images/unes/20260113_144322_d7a974af0215cc2ac2b4f1ddb.jpg',
    tag: 'PARTENARIAT', tagClass: 'text-brand bg-brand/10',
    title: 'Investissement de la diaspora : partenariat stratégique',
    description: 'Le DG M. Youssouf FADIGA a signé une convention cadre avec le Ministère Délégué aux Ivoiriens de l\u2019Extérieur.',
    date: '06 Mars 2026',
  },
  {
    image: 'https://www.bni.ci/images/unes/20251021_132407_718a144d1a8fe3cd37b799b0c.jpg',
    tag: 'ÉVÉNEMENT', tagClass: 'text-accent bg-accent/10',
    title: '50ᵉ Assemblée Générale de la FANAF à Abidjan',
    description: 'La BNI, aux côtés de BNI Finances et BNI Gestion, réaffirme son engagement dans l\u2019assurance.',
    date: '24 Fév 2026',
  },
  {
    image: 'https://www.bni.ci/images/unes/20250429_151938_8ed950fff6dd0387c9db95f9b.jpg',
    tag: 'RENCONTRE', tagClass: 'text-purple-600 bg-purple-50',
    title: 'Rencontre du DG avec le Ministre de l\u2019Éducation',
    description: 'Le DG de la BNI a été reçu par le Ministre N\u2019Guessan KOFFI pour un partenariat dans l\u2019éducation.',
    date: '18 Fév 2026',
  },
];

export const serviceNotes = [
  {
    ref: 'NS-2026/015', priority: 'Urgent', priorityClass: 'bg-red-100 text-red-700',
    borderClass: 'border-l-red-500',
    title: 'Campagne de fiabilisation des données bancaires',
    direction: 'Direction Générale', date: '07 Mars 2026',
  },
  {
    ref: 'NS-2026/014', priority: 'Urgent', priorityClass: 'bg-red-100 text-red-700',
    borderClass: 'border-l-brand',
    title: 'Mise à jour plateforme BNI Online',
    direction: 'Direction SI', date: '05 Mars 2026',
  },
  {
    ref: 'NS-2026/013', priority: 'Normal', priorityClass: 'bg-slate-100 text-slate-500',
    borderClass: 'border-l-accent',
    title: 'Formation nouveaux produits bancaires',
    direction: 'Direction RH', date: '03 Mars 2026',
  },
  {
    ref: 'NS-2026/012', priority: 'Normal', priorityClass: 'bg-slate-100 text-slate-500',
    borderClass: 'border-l-blue-500',
    title: 'Procédure ouverture de comptes clients',
    direction: 'Direction des Opérations', date: '01 Mars 2026',
  },
];

export const mediaItems = [
  { type: 'photo', image: 'https://www.bni.ci/images/unes/20260113_144322_d7a974af0215cc2ac2b4f1ddb.jpg', label: 'Cérémonie de vœux BNI 2026', sub: '32 photos' },
  { type: 'video', image: 'https://www.bni.ci/images/unes/20251021_132407_718a144d1a8fe3cd37b799b0c.jpg', duration: '12:34', overlayClass: 'bg-blue-900/60' },
  { type: 'photo', image: 'https://www.bni.ci/images/unes/20250429_151938_8ed950fff6dd0387c9db95f9b.jpg', label: 'Networking Café Cacao', sub: '24 photos' },
  { type: 'video', image: 'https://www.bni.ci/images/unes/20260113_144322_d7a974af0215cc2ac2b4f1ddb.jpg', duration: '08:15', overlayClass: 'bg-purple-900/60' },
  { type: 'audio', label: 'Podcast Finance Climatique', sub: '25:00' },
  { type: 'document', label: 'Rapport Annuel BNI 2025', sub: 'PDF — 84 pages' },
];

export const events = [
  {
    month: 'Mars', day: '10',
    gradientClass: 'from-accent to-accent-dark', headerBg: 'bg-accent-dark',
    tag: 'RÉUNION', tagClass: 'text-accent bg-accent/10',
    title: 'Comité de direction trimestriel',
    time: '10:00', location: 'Salle du Conseil', locationIcon: 'MapPin',
  },
  {
    month: 'Mars', day: '12',
    gradientClass: 'from-blue-500 to-blue-700', headerBg: 'bg-blue-800',
    tag: 'FORMATION', tagClass: 'text-blue-600 bg-blue-50',
    title: 'Formation sécurité bancaire',
    time: '14:00', location: 'Centre Intégré', locationIcon: 'MapPin',
  },
  {
    month: 'Mars', day: '15',
    gradientClass: 'from-amber-500 to-amber-700', headerBg: 'bg-amber-800',
    tag: 'SÉMINAIRE', tagClass: 'text-amber-600 bg-amber-50',
    title: 'Académie des Talents — Séminaire',
    time: '09:30', location: 'Auditorium', locationIcon: 'MapPin',
  },
];

export const employees = [
  { name: 'Kouamé Akissi Marie', ext: '7100', role: 'Directrice RH', avatar: 'https://i.pravatar.cc/100?img=47' },
  { name: 'Traoré Moussa', ext: '7101', role: 'Chef Service Comptabilité', avatar: 'https://i.pravatar.cc/100?img=60' },
  { name: 'Bamba Sékou', ext: '7102', role: 'Responsable IT', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Koné Aya', ext: '7103', role: 'Assistante de direction', avatar: 'https://i.pravatar.cc/100?img=23' },
  { name: 'Diallo Ibrahim', ext: '7104', role: 'Juriste Senior', avatar: 'https://i.pravatar.cc/100?img=33' },
  { name: 'Ouattara Fatou', ext: '7105', role: 'Chargée de communication', avatar: 'https://i.pravatar.cc/100?img=26' },
  { name: 'Yao Kouadio', ext: '7106', role: 'Agent administratif', avatar: 'https://i.pravatar.cc/100?img=15' },
];

export const directionMembers = [
  { name: 'Y. FADIGA', role: 'Directeur Général', avatar: 'https://i.pravatar.cc/100?img=60' },
  { name: 'C. BLÉOU', role: 'DGA', avatar: 'https://i.pravatar.cc/100?img=44' },
  { name: 'B. TAPÉ', role: 'Dir. Gestion Risques', avatar: 'https://i.pravatar.cc/100?img=68' },
  { name: 'Y. ABBA', role: 'Dir. Stratégie', avatar: 'https://i.pravatar.cc/100?img=59' },
  { name: 'N. ASSI', role: 'Dir. Opérations', avatar: 'https://i.pravatar.cc/100?img=52' },
];

export const establishments = [
  { name: 'Agence Principale Plateau', type: 'agence', typeLabel: 'Agence', commune: 'plateau', communeLabel: 'Plateau', phone: '27 20 30 30 30', iconBg: 'bg-accent/10', iconColor: 'text-accent', typeColor: 'text-accent', icon: 'Building2' },
  { name: 'Agence Cocody', type: 'agence', typeLabel: 'Agence', commune: 'cocody', communeLabel: 'Cocody', phone: '27 22 44 55 66', iconBg: 'bg-accent/10', iconColor: 'text-accent', typeColor: 'text-accent', icon: 'Building2' },
  { name: 'Agence Yopougon', type: 'agence', typeLabel: 'Agence', commune: 'yopougon', communeLabel: 'Yopougon', phone: '27 23 45 67 89', iconBg: 'bg-accent/10', iconColor: 'text-accent', typeColor: 'text-accent', icon: 'Building2' },
  { name: 'Centre Intégré BNI', type: 'centre', typeLabel: 'Centre', commune: 'cocody', communeLabel: 'Cocody', phone: '27 22 48 00 00', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', typeColor: 'text-blue-500', icon: 'Landmark' },
  { name: 'Agence Marcory', type: 'agence', typeLabel: 'Agence', commune: 'marcory', communeLabel: 'Marcory', phone: '27 21 26 00 00', iconBg: 'bg-accent/10', iconColor: 'text-accent', typeColor: 'text-accent', icon: 'Building2' },
  { name: 'GAB Plateau Centre', type: 'gab', typeLabel: 'GAB', commune: 'plateau', communeLabel: 'Plateau', phone: '27 20 30 30 30', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', typeColor: 'text-amber-500', icon: 'CreditCard' },
];
