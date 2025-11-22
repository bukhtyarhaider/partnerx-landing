import { Check, Heart } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="pt-32 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-white">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-400">Start for free, upgrade for power features. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[rgba(0,185,141,0.05)] to-slate-900/60 border border-[rgba(0,185,141,0.3)] backdrop-blur-sm shadow-[0_0_40px_rgba(0,185,141,0.1)] hover:shadow-[0_0_60px_rgba(0,185,141,0.2)] hover:border-[rgba(0,185,141,0.5)] transition-all duration-300 hover:-translate-y-2 animate-fade-in delay-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[--color-primary] to-sky-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_4px_20px_rgba(0,185,141,0.4)] tracking-wide">Free Forever</div>
            <div className="text-center mb-10 pb-10 border-b border-slate-700/50">
              <h3 className="text-3xl font-bold mb-4 text-white">Community Edition</h3>
              <div className="text-6xl font-extrabold text-white flex items-baseline justify-center gap-1 tracking-tight">$0<span className="text-lg text-slate-400 font-medium">/forever</span></div>
              <p className="text-slate-400 mt-3 text-lg">Full access to all features</p>
            </div>
            <ul className="space-y-5 mb-12">
              {['Unlimited Expense Tracking', 'Advanced Analytics', 'Local Data Storage', 'Donation Management', 'Multi-Partner Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 text-lg">
                  <Check size={20} className="text-[--color-primary] shrink-0 drop-shadow-[0_0_8px_rgba(0,185,141,0.3)]" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
              Get Started Now
            </a>
          </div>

          <div className="p-12 rounded-3xl glass transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in delay-200">
            <div className="text-center mb-10 pb-10 border-b border-slate-700/50">
              <h3 className="text-3xl font-bold mb-4 text-white">Sponsor</h3>
              <div className="text-6xl font-extrabold text-white flex items-center justify-center h-[60px]"><Heart size={48} className="text-[--color-primary]" /></div>
              <p className="text-slate-400 mt-3 text-lg">Support the creator</p>
            </div>
            <ul className="space-y-5 mb-12">
              {['Support Open Source Development', 'Help keep the project alive', 'Get a badge on your profile', 'Direct access to Bukhtyar Haider'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 text-lg">
                  <Check size={20} className="text-[--color-primary] shrink-0 drop-shadow-[0_0_8px_rgba(0,185,141,0.3)]" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://github.com/sponsors/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full block text-center">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
