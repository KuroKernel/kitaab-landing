import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo gradient-text">KITAAB</Link>
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/security">Security</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://app.kitaab.live" className="btn btn-primary btn-sm">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
