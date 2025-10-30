import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer style={{
        background: '#0f1419',
        color: 'white',
        padding: '4rem 0 2rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          {/* Main Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            {/* Company Info & Newsletter */}
            <div style={{ gridColumn: 'span 2' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #52B788 0%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem'
              }}>
                KITAAB
              </h3>
              <p style={{
                color: '#8b98a5',
                fontSize: '15px',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Modern financial management for growing businesses
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  Subscribe to People First Dispatch
                </h4>
                <p style={{
                  color: '#8b98a5',
                  fontSize: '14px',
                  marginBottom: '1rem'
                }}>
                  Get the latest insights on finance and business growth
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  maxWidth: '400px'
                }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #2D6247',
                      background: '#1a1a1a',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <button style={{
                    padding: '0.75rem 1rem',
                    background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <a href="#facebook" style={{
                  color: '#8b98a5',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >
                  <FaFacebook />
                </a>
                <a href="#twitter" style={{
                  color: '#8b98a5',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >
                  <FaTwitter />
                </a>
                <a href="#linkedin" style={{
                  color: '#8b98a5',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >
                  <FaLinkedin />
                </a>
                <a href="#instagram" style={{
                  color: '#8b98a5',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>Company</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Home</Link>
                <Link to="/features" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Features</Link>
                <Link to="/about" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Services</Link>
                <Link to="/contact" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Contact</Link>
                <a href="https://app.kitaab.live" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Login</a>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>About</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/about" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >About Kitaab</Link>
                <a href="#team" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Team Work</a>
                <a href="#promo" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Discount Promo</a>
                <a href="#terms" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Terms and Condition</a>
                <Link to="/why-kitaab" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Why Kitaab</Link>
              </div>
            </div>

            {/* Service Links */}
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>Service</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#transfer" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Transfer</a>
                <a href="#debit" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Debit</a>
                <a href="#training" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Financial Training</a>
                <a href="#giveaway" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >Giveaway</a>
                <Link to="/how-it-works" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >How It Works</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="mailto:hello@kitaab.live" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >hello@kitaab.live</a>
                <a href="tel:+918982870739" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >+91 89828 70739</a>
                <a href="https://wa.me/918982870739" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#52B788'}
                  onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
                >WhatsApp Support</a>
                <p style={{
                  color: '#8b98a5',
                  fontSize: '14px',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Bangalore, Karnataka<br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid #2D6247',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{
              color: '#8b98a5',
              fontSize: '14px',
              margin: 0
            }}>
              © 2024 Kitaab Technologies Private Limited. All rights reserved.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <a href="#privacy" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
              >Privacy Policy</a>
              <span style={{ color: '#536471' }}>•</span>
              <a href="#terms" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
              >Terms of Service</a>
              <span style={{ color: '#536471' }}>•</span>
              <a href="#cookies" style={{ color: '#8b98a5', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#52B788'}
                onMouseLeave={(e) => e.target.style.color = '#8b98a5'}
              >Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/918982870739" target="_blank" rel="noopener noreferrer" style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '56px',
        height: '56px',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '28px',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        transition: 'all 0.3s',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
      }}
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
