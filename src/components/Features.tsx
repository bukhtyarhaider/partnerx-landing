import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Briefcase, User, Brain } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
    title: "Business Account",
    description: "Add partners, define equity splits, and manage shared capital with complete transparency."
  },
  {
    icon: <User className="w-6 h-6 text-emerald-400" />,
    title: "Personal Ledger",
    description: "Keep track of your personal finances, expenses, and savings in a secure, private ledger."
  },
  {
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
    title: "AI Reporting",
    description: "Get detailed, AI-driven insights into your spending habits and financial health."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Bank-Grade Security",
    description: "Your data is encrypted and protected. We prioritize your privacy above all else."
  },
  {
    icon: <Globe className="w-6 h-6 text-emerald-400" />,
    title: "Open Source",
    description: "Built by the community, for the community. Transparent code you can trust."
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: "Real-time Sync",
    description: "Changes update instantly across all devices, keeping everyone on the same page."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Two Modes, <br />
            <span className="text-gradient">Infinite Possibilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Whether you're running a startup with partners or managing your own wallet, 
            PartnerX adapts to your needs with powerful AI insights.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="glass p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
