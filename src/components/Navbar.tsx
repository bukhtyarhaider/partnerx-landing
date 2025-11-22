import { Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800/60 shadow-lg' 
        : 'bg-transparent border-transparent py-2'
    }`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-2xl font-bold text-white transition-transform duration-200 hover:scale-105">
          <Wallet className="text-[--color-primary] drop-shadow-[0_0_8px_rgba(0,185,141,0.4)]" size={32} />
          <span className="tracking-tight">Partner<span className="text-[--color-primary]">X</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'About', 'Pricing'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`} 
              className="font-medium text-slate-400 transition-colors duration-200 hover:text-white relative group text-sm uppercase tracking-wider"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[--color-primary] transition-all duration-300 rounded-full group-hover:w-full"></span>
            </Link>
          ))}
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
