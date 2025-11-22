import { Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-white">Empowering Partnerships</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">We believe that managing shared finances should be transparent, fair, and stress-free.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 p-12 rounded-3xl mb-16 items-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 shadow-xl animate-fade-in delay-100">
          <div className="mission-content">
            <h2 className="text-3xl font-bold mb-6 text-[--color-primary]">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-400">
              PartnerX was born from a simple need: a better way for partners to manage their shared life. 
              Whether it's splitting bills, saving for a goal, or managing charitable giving, we provide 
              the tools to make financial cooperation seamless.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="stat">
              <span className="block text-4xl font-extrabold text-white mb-2">100%</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest">Private & Local</span>
            </div>
            <div className="stat">
              <span className="block text-4xl font-extrabold text-white mb-2">0%</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest">Hidden Fees</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 shadow-xl animate-fade-in delay-200 hover:-translate-y-1 transition-transform duration-300">
            <Users className="text-[--color-primary] mx-auto mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-white">Built for Partners</h3>
            <p className="text-slate-400">Designed specifically for two people managing one financial life together.</p>
          </div>
          <div className="p-8 rounded-2xl text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 shadow-xl animate-fade-in delay-200 hover:-translate-y-1 transition-transform duration-300">
            <Shield className="text-[--color-primary] mx-auto mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-white">Privacy First</h3>
            <p className="text-slate-400">Your data lives on your device. We don't sell your financial history.</p>
          </div>
          <div className="p-8 rounded-2xl text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 shadow-xl animate-fade-in delay-200 hover:-translate-y-1 transition-transform duration-300">
            <Heart className="text-[--color-primary] mx-auto mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4 text-white">Open Source</h3>
            <p className="text-slate-400">Created by Bukhtyar Haider as a free gift to the community.</p>
          </div>
        </div>

        <div className="mt-24 text-center animate-fade-in delay-300">
          <h2 className="text-3xl font-bold mb-6 text-white">Meet the Creator</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-slate-400">
            Hi, I'm <strong className="text-white">Bukhtyar Haider</strong>. I built PartnerX to solve my own need for a private, 
            shared financial dashboard. I believe software should be transparent and accessible to everyone.
          </p>
          <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline inline-flex">
            Follow on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
