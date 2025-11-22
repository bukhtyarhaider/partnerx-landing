import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                <Zap className="w-8 h-8 text-emerald-400 relative z-10" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Partner<span className="text-emerald-400">X</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              The ultimate toolkit for modern startups. Build, launch, and scale your dream project today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" className="text-slate-400 hover:text-emerald-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/legal" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="text-slate-400 hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} PartnerX. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <span className="text-red-500">❤</span> by Bukhtyar Haider
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
