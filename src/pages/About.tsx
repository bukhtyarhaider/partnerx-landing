import { Users, Heart, Shield } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header animate-fade-in">
          <h1>Empowering Partnerships</h1>
          <p>We believe that managing shared finances should be transparent, fair, and stress-free.</p>
        </div>

        <div className="mission-section glass animate-fade-in delay-100">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              PartnerX was born from a simple need: a better way for partners to manage their shared life. 
              Whether it's splitting bills, saving for a goal, or managing charitable giving, we provide 
              the tools to make financial cooperation seamless.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Private & Local</span>
            </div>
            <div className="stat">
              <span className="stat-number">0%</span>
              <span className="stat-label">Hidden Fees</span>
            </div>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card glass animate-fade-in delay-200">
            <Users className="value-icon" size={32} />
            <h3>Built for Partners</h3>
            <p>Designed specifically for two people managing one financial life together.</p>
          </div>
          <div className="value-card glass animate-fade-in delay-200">
            <Shield className="value-icon" size={32} />
            <h3>Privacy First</h3>
            <p>Your data lives on your device. We don't sell your financial history.</p>
          </div>
          <div className="value-card glass animate-fade-in delay-200">
            <Heart className="value-icon" size={32} />
            <h3>Open Source</h3>
            <p>Created by Bukhtyar Haider as a free gift to the community.</p>
          </div>
        </div>

        <div className="creator-section animate-fade-in delay-300" style={{ marginTop: '6rem', textAlign: 'center' }}>
          <h2>Meet the Creator</h2>
          <p style={{ maxWidth: '600px', margin: '1.5rem auto', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Hi, I'm <strong>Bukhtyar Haider</strong>. I built PartnerX to solve my own need for a private, 
            shared financial dashboard. I believe software should be transparent and accessible to everyone.
          </p>
          <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Follow on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
