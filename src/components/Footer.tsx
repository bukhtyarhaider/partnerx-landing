import { Wallet, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <Wallet className="logo-icon" size={24} />
              <span className="logo-text">Partner<span className="text-primary">X</span></span>
            </Link>
            <p>
              Empowering partners to manage their shared finances with transparency and ease.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <a href="#">Roadmap</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <Link to="/legal">Privacy</Link>
              <Link to="/legal">Terms</Link>
              <Link to="/legal">Security</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PartnerWise Financial Management. Created by <a href="https://github.com/bukhtyarhaider" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Bukhtyar Haider</a>.</p>
          <div className="social-links">
            <a href="#" aria-label="Github"><Github size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
