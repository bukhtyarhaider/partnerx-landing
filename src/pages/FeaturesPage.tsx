import { 
  PieChart, 
  Heart, 
  Lock, 
  Smartphone, 
  Calendar,
  Download
} from 'lucide-react';
import './FeaturesPage.css';

export default function FeaturesPage() {
  return (
    <div className="features-page">
      <div className="container">
        <div className="features-header animate-fade-in">
          <h1>Powerful Features</h1>
          <p>Everything you need to manage your partnership finances effectively.</p>
        </div>

        <div className="feature-rows">
          <div className="feature-row glass animate-fade-in delay-100">
            <div className="feature-text">
              <div className="icon-box"><PieChart /></div>
              <h2>Smart Analytics</h2>
              <p>
                Visualize your spending habits with intuitive charts and graphs. 
                Understand where your money goes with detailed breakdowns by category, partner, and time period.
              </p>
              <ul className="feature-list">
                <li>Monthly spending trends</li>
                <li>Category distribution</li>
                <li>Partner contribution analysis</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-chart pie"></div>
            </div>
          </div>

          <div className="feature-row glass reverse animate-fade-in delay-200">
            <div className="feature-text">
              <div className="icon-box"><Heart /></div>
              <h2>Donation Management</h2>
              <p>
                Make giving back a part of your financial plan. Track your charitable contributions 
                and manage a dedicated donation fund together.
              </p>
              <ul className="feature-list">
                <li>Set donation goals</li>
                <li>Track payout history</li>
                <li>Manage available funds</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="mock-chart bar"></div>
            </div>
          </div>

          <div className="feature-grid-section">
            <h2>More Features</h2>
            <div className="grid-items">
              <div className="grid-item glass">
                <Lock className="text-primary" size={32} />
                <h3>Bank-Grade Security</h3>
                <p>Your data is encrypted and stored locally on your device.</p>
              </div>
              <div className="grid-item glass">
                <Calendar className="text-accent" size={32} />
                <h3>Recurring Expenses</h3>
                <p>Set up automated tracking for monthly bills and subscriptions.</p>
              </div>
              <div className="grid-item glass">
                <Download className="text-primary" size={32} />
                <h3>Export Data</h3>
                <p>Download your financial data as CSV for external analysis.</p>
              </div>
              <div className="grid-item glass">
                <Smartphone className="text-accent" size={32} />
                <h3>PWA Support</h3>
                <p>Install on your phone and use it like a native app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
