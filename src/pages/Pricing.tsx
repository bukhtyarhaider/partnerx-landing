import { Check, Heart } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header animate-fade-in">
          <h1>Simple, Transparent Pricing</h1>
          <p>Start for free, upgrade for power features. No hidden fees.</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card glass featured animate-fade-in delay-100">
            <div className="popular-badge">Free Forever</div>
            <div className="card-header">
              <h3>Community Edition</h3>
              <div className="price">$0<span>/forever</span></div>
              <p>Full access to all features</p>
            </div>
            <ul className="features-list">
              <li><Check size={18} /> Unlimited Expense Tracking</li>
              <li><Check size={18} /> Advanced Analytics</li>
              <li><Check size={18} /> Local Data Storage</li>
              <li><Check size={18} /> Donation Management</li>
              <li><Check size={18} /> Multi-Partner Support</li>
            </ul>
            <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width">
              Get Started Now
            </a>
          </div>

          <div className="pricing-card glass animate-fade-in delay-200">
            <div className="card-header">
              <h3>Sponsor</h3>
              <div className="price"><Heart size={32} className="text-primary" /></div>
              <p>Support the creator</p>
            </div>
            <ul className="features-list">
              <li><Check size={18} /> Support Open Source Development</li>
              <li><Check size={18} /> Help keep the project alive</li>
              <li><Check size={18} /> Get a badge on your profile</li>
              <li><Check size={18} /> Direct access to Bukhtyar Haider</li>
            </ul>
            <a href="https://github.com/sponsors/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline full-width">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
