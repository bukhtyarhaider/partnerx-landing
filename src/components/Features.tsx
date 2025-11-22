import { 
  PieChart, 
  TrendingUp, 
  Heart, 
  Lock, 
  Smartphone, 
  Users 
} from 'lucide-react';
import { useRef, useState } from 'react';

const features = [
  {
    icon: <PieChart size={24} />,
    title: "Smart Dashboard",
    description: "Get a crystal-clear view of your partnership finances with real-time charts and summaries."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Expense Tracking",
    description: "Effortlessly categorize and track every expense. Know exactly where your money goes."
  },
  {
    icon: <Heart size={24} />,
    title: "Donation Management",
    description: "Manage your charitable contributions and track payouts with a dedicated fund system."
  },
  {
    icon: <Lock size={24} />,
    title: "Secure & Private",
    description: "Your data stays on your device. Enhanced with PIN protection for maximum privacy."
  },
  {
    icon: <Users size={24} />,
    title: "Partner Sync",
    description: "Designed for partners to stay on the same page. Transparent financial management."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Optimized",
    description: "Install as a PWA on your phone for quick access to your finances anywhere."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-white">Everything You Need</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Powerful features to streamline your financial partnership.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: any }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-10 rounded-3xl bg-slate-800/30 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/50 hover:border-[rgba(0,185,141,0.3)] hover:shadow-2xl group"
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`
        }}
      />
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgba(0,185,141,0.1)] to-[rgba(56,189,248,0.1)] border border-white/5 flex items-center justify-center text-[--color-primary] mb-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-[rgba(0,185,141,0.2)] group-hover:to-[rgba(56,189,248,0.2)]">
        {feature.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
    </div>
  );
}
