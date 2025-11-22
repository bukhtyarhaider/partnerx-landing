import { 
  PieChart, 
  Heart, 
  Lock, 
  Smartphone, 
  Calendar,
  Download
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-white">Powerful Features</h1>
          <p className="text-xl text-slate-300">Everything you need to manage your partnership finances effectively.</p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Smart Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl shadow-xl items-center animate-fade-in delay-100">
            <div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <PieChart />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Smart Analytics</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Visualize your spending habits with intuitive charts and graphs. Understand where your money goes with detailed breakdowns by category, partner, and time period.
              </p>
              <ul className="space-y-3">
                {['Monthly spending trends', 'Category distribution', 'Partner contribution analysis'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 pl-6 relative before:content-['•'] before:text-emerald-400 before:absolute before:left-0 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[300px] bg-black/20 rounded-2xl flex items-center justify-center relative overflow-hidden border border-slate-700/30">
              <div className="w-[150px] h-[150px] rounded-full bg-[conic-gradient(var(--color-emerald-500)_0%_60%,var(--color-amber-400)_60%_85%,var(--color-sky-500)_85%_100%)] relative shadow-2xl" />
            </div>
          </div>

          {/* Donation Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl shadow-xl items-center animate-fade-in delay-200">
            <div className="lg:order-2">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <Heart />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Donation Management</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Make giving back a part of your financial plan. Track your charitable contributions and manage a dedicated donation fund together.
              </p>
              <ul className="space-y-3">
                {['Set donation goals', 'Track payout history', 'Manage available funds'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 pl-6 relative before:content-['•'] before:text-emerald-400 before:absolute before:left-0 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 h-[300px] bg-black/20 rounded-2xl flex items-end justify-center gap-4 pb-8 relative overflow-hidden border-slate-700/30">
              <div className="w-10 bg-emerald-500/50 rounded-t h-[60%]" />
              <div className="w-10 bg-emerald-500/80 rounded-t h-[80%]" />
              <div className="w-10 bg-emerald-500 rounded-t h-[40%]" />
            </div>
          </div>

          {/* More Features Grid */}
          <div className="mt-16">
            <h2 className="text-center text-3xl font-bold mb-12 text-white">More Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Lock className="text-emerald-400" size={32} />, title: 'Bank-Grade Security', desc: 'Your data is encrypted and stored locally on your device.' },
                { icon: <Calendar className="text-amber-400" size={32} />, title: 'Recurring Expenses', desc: 'Set up automated tracking for monthly bills and subscriptions.' },
                { icon: <Download className="text-emerald-400" size={32} />, title: 'Export Data', desc: 'Download your financial data as CSV for external analysis.' },
                { icon: <Smartphone className="text-amber-400" size={32} />, title: 'PWA Support', desc: 'Install on your phone and use it like a native app.' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 shadow-xl hover:bg-slate-800/50 transition-colors">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
