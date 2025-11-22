import { Wallet, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-20 pb-10 mt-auto relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <Wallet className="text-[--color-primary]" size={24} />
              <span>Partner<span className="text-[--color-primary]">X</span></span>
            </Link>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Empowering partners to manage their shared finances with transparency and ease.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <div className="flex flex-col gap-4">
                <Link to="/features" className="text-slate-400 hover:text-[--color-primary] transition-colors">Features</Link>
                <Link to="/pricing" className="text-slate-400 hover:text-[--color-primary] transition-colors">Pricing</Link>
                <a href="#" className="text-slate-400 hover:text-[--color-primary] transition-colors">Roadmap</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <div className="flex flex-col gap-4">
                <Link to="/about" className="text-slate-400 hover:text-[--color-primary] transition-colors">About</Link>
                <a href="#" className="text-slate-400 hover:text-[--color-primary] transition-colors">Blog</a>
                <a href="#" className="text-slate-400 hover:text-[--color-primary] transition-colors">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <div className="flex flex-col gap-4">
                <Link to="/legal" className="text-slate-400 hover:text-[--color-primary] transition-colors">Privacy</Link>
                <Link to="/legal" className="text-slate-400 hover:text-[--color-primary] transition-colors">Terms</Link>
                <Link to="/legal" className="text-slate-400 hover:text-[--color-primary] transition-colors">Security</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PartnerX Financial Management. Created by <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="text-[--color-primary] hover:text-emerald-300">Bukhtyar Haider</a>.</p>
          <div className="flex gap-6">
            <a href="#" aria-label="Github" className="hover:text-[--color-primary] transition-colors"><Github size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[--color-primary] transition-colors"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[--color-primary] transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
