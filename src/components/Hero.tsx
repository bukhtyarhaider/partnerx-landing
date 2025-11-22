import { ArrowRight, Github, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Source & Free Forever
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Financial Clarity for <br />
              <span className="text-gradient">Partners & Individuals</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Born from the frustration of managing shared expenses, PartnerX is the open-source solution I built to solve a real problem. 
              Whether you're managing business equity or a personal ledger, get detailed AI reporting and total control.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="https://partnerx.vercel.app/" className="btn btn-primary  w-full sm:w-auto group">
                Start for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full sm:w-auto group flex items-center justify-center">
                <Github className="mr-2 w-5 h-5" />
                View Source
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-500" />
                <span>Powered by AI Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-500" />
                <span>100% Open Source</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 glass rounded-2xl p-2 border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="./partnerx-mockup.png" 
                alt="Dashboard Preview" 
                className="rounded-xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-4 rounded-xl border border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Equity Split</p>
                    <p className="text-lg font-bold text-white">50% / 50%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 glass p-4 rounded-xl border border-white/10 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">AI Insight</p>
                    <p className="text-sm font-bold text-white">Spend Optimized</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative blobs behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-2xl opacity-30 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
