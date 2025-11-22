import { Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <Wallet className="logo-icon" size={32} />
          <span className="logo-text">Partner<span className="text-primary">X</span></span>
        </Link>
        <div className="nav-links">
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>
  );
}
