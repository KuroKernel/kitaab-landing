import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.06)',
      zIndex: 1000,
      padding: '1rem 0',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            letterSpacing: '0.5px'
          }}>
            KITAAB
          </Link>

          {/* Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <Link to="/about" style={{
              color: '#536471',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2D6247'}
            onMouseLeave={(e) => e.target.style.color = '#536471'}
            >
              About
            </Link>
            <Link to="/features" style={{
              color: '#536471',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2D6247'}
            onMouseLeave={(e) => e.target.style.color = '#536471'}
            >
              Features
            </Link>
            <Link to="/how-it-works" style={{
              color: '#536471',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2D6247'}
            onMouseLeave={(e) => e.target.style.color = '#536471'}
            >
              How It Works
            </Link>
            <Link to="/why-kitaab" style={{
              color: '#536471',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2D6247'}
            onMouseLeave={(e) => e.target.style.color = '#536471'}
            >
              Why Kitaab
            </Link>
            <Link to="/contact" style={{
              color: '#536471',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2D6247'}
            onMouseLeave={(e) => e.target.style.color = '#536471'}
            >
              Contact
            </Link>
            <a href="https://app.kitaab.live" style={{
              padding: '0.625rem 1.5rem',
              background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(82, 183, 136, 0.25)',
              transition: 'all 0.3s',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(82, 183, 136, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(82, 183, 136, 0.25)';
            }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
