import { 
  PieChart, 
  TrendingUp, 
  Heart, 
  Lock, 
  Smartphone, 
  Users 
} from 'lucide-react';
import './Features.css';

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
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Everything You Need</h2>
          <p>Powerful features to streamline your financial partnership.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
