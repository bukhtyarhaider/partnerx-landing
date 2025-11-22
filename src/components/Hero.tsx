import { ArrowRight, ShieldCheck, Zap, LayoutDashboard, Github } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="badge">
            <span className="badge-dot"></span>
            Free & Open Source
          </div>
          <h1>
            Master Your <br />
            <span className="text-gradient">Partnership Finances</span>
          </h1>
          <p className="hero-description">
            The all-in-one solution for managing shared expenses, donations, and capital. 
            Secure, private, and free forever.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Start Dashboard <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Github size={20} style={{ marginRight: '8px' }} /> View on GitHub
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <ShieldCheck className="text-primary" />
              <span>Local-First Security</span>
            </div>
            <div className="stat-item">
              <Zap className="text-accent" />
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in delay-200">
          <div className="dashboard-preview glass">
            <div className="preview-header">
              <div className="preview-dot red"></div>
              <div className="preview-dot yellow"></div>
              <div className="preview-dot green"></div>
            </div>
            <div className="preview-content">
              {/* Abstract representation of dashboard */}
              <div className="preview-sidebar"></div>
              <div className="preview-main">
                <div className="preview-card card-1">
                  <LayoutDashboard size={32} className="text-primary" />
                  <div className="preview-line"></div>
                  <div className="preview-line short"></div>
                </div>
                <div className="preview-grid">
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                  <div className="preview-card"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-card float-1">
              <span>Total Capital</span>
              <strong>$124,500</strong>
            </div>
            <div className="floating-card float-2">
              <span>Donations</span>
              <strong>$12,400</strong>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-bg-glow"></div>
    </section>
  );
}
