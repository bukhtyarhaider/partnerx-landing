import { ArrowRight, ShieldCheck, Zap, LayoutDashboard, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-[rgba(0,185,141,0.1)] border border-[rgba(0,185,141,0.2)] rounded-full text-[--color-primary] text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[--color-primary] rounded-full shadow-[0_0_12px_var(--color-primary)] animate-pulse"></span>
            Free & Open Source
          </div>
          <h1 className="text-5xl lg:text-7xl leading-[1.1] font-extrabold mb-6 tracking-tight text-white">
            Master Your <br />
            <span className="text-gradient">Partnership Finances</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
            The all-in-one solution for managing shared expenses, donations, and capital. 
            Secure, private, and free forever.
          </p>
          <div className="flex flex-wrap gap-6 mb-16">
            <button className="btn btn-primary flex items-center gap-2" onClick={() => window.location.href = 'https://partnerx.vercel.app/'}>
              Start Dashboard <ArrowRight size={20} />
            </button>
            <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
              <Github size={20} /> View on GitHub
            </a>
          </div>
          <div className="flex gap-12 border-t border-slate-800/60 pt-8">
            <div className="flex items-center gap-4 font-medium text-slate-400">
              <ShieldCheck className="text-[--color-primary]" />
              <span>Local-First Security</span>
            </div>
            <div className="flex items-center gap-4 font-medium text-slate-400">
              <Zap className="text-amber-400" />
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
        
        <div className="relative perspective-[1000px] group">
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 transform transition-transform duration-500 ease-out rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0">
            <div className="h-12 bg-black/30 flex items-center px-6 gap-3 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="flex h-[calc(100%-48px)]">
              <div className="w-20 border-r border-slate-800 bg-black/20"></div>
              <div className="flex-1 p-8 flex flex-col gap-6 bg-gradient-to-br from-white/5 to-transparent">
                <div className="h-36 p-8 flex flex-col justify-center gap-4 bg-white/5 rounded-2xl border border-white/10">
                  <LayoutDashboard size={32} className="text-[--color-primary]" />
                  <div className="h-2.5 bg-white/10 rounded-full w-4/5"></div>
                  <div className="h-2.5 bg-white/10 rounded-full w-2/5"></div>
                </div>
                <div className="grid grid-cols-3 gap-6 flex-1">
                  <div className="bg-white/5 rounded-2xl border border-white/10"></div>
                  <div className="bg-white/5 rounded-2xl border border-white/10"></div>
                  <div className="bg-white/5 rounded-2xl border border-white/10"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-[15%] -right-10 px-8 py-5 rounded-2xl flex flex-col gap-2 bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-2xl animate-[float_6s_ease-in-out_infinite] z-20 hidden lg:flex">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Total Capital</span>
              <strong className="text-2xl text-white font-bold">$124,500</strong>
            </div>
            <div className="absolute bottom-[15%] -left-10 px-8 py-5 rounded-2xl flex flex-col gap-2 bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-2xl animate-[float_6s_ease-in-out_infinite_3s] z-20 hidden lg:flex">
              <span className="text-sm text-slate-400 uppercase tracking-wider">Donations</span>
              <strong className="text-2xl text-white font-bold">$12,400</strong>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(0,185,141,0.08)_0%,rgba(56,189,248,0.03)_30%,transparent_70%)] z-0 pointer-events-none blur-[80px]"></div>
    </section>
  );
}
