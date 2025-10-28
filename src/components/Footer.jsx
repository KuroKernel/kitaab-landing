import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Product</h4>
              <Link to="/features">Features</Link>
              <Link to="/#pricing">Pricing</Link>
              <a href="https://app.kitaab.live">Web App Login</a>
              <a href="#download">Download App</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <a href="#careers">Careers</a>
              <a href="#press">Press</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
              <a href="#cookies">Cookie Policy</a>
              <Link to="/security">Security</Link>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#help">Help Center</a>
              <Link to="/contact">Contact Us</Link>
              <a href="https://wa.me/919999999999">WhatsApp</a>
              <a href="mailto:support@kitaab.live">support@kitaab.live</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Kitaab Technologies Private Limited. All rights reserved.</p>
            <p>Made in India with 💚</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/919999999999" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
