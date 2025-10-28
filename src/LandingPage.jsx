import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaClock, FaShieldAlt, FaWhatsapp, FaMicrophone, FaCamera, FaFileInvoice, FaRobot, FaChartBar, FaStar, FaCheckCircle, FaBuilding, FaLock, FaMobileAlt, FaChartPie, FaUserShield, FaBolt } from 'react-icons/fa';
import './LandingPage.css';
import IconCard from './components/IconCard';
import PricingCard from './components/PricingCard';
import AnalyticsSection from './components/AnalyticsSection';

const LandingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const problems = [
    { text: "4 hours daily wasted on manual bookkeeping", icon: <FaClock /> },
    { text: "₹50,000 lost yearly to calculation errors", icon: <FaChartLine /> },
    { text: "GST penalties from missed deadlines", icon: <FaFileInvoice /> },
    { text: "Lakhs in forgotten credit", icon: <FaRobot /> }
  ];

  const features = [
    { title: "AI Invoice Scanner", desc: "Photo to inventory in 10 seconds", icon: <FaCamera /> },
    { title: "Voice Commands", desc: "Speak naturally in Hindi or English", icon: <FaMicrophone /> },
    { title: "WhatsApp Business", desc: "Send 100 invoices in one tap", icon: <FaWhatsapp /> },
    { title: "GST Autopilot", desc: "File returns in 5 minutes", icon: <FaFileInvoice /> },
    { title: "Smart Collections", desc: "AI predicts who'll pay when", icon: <FaRobot /> },
    { title: "Real-time Analytics", desc: "Know your profit instantly", icon: <FaChartBar /> }
  ];

  const benefits = [
    "Save Time: 3 hours daily back in your life",
    "Increase Revenue: Collect payments 40% faster",
    "Zero Errors: AI accuracy beats manual entry",
    "Stay Compliant: Never miss GST deadlines",
    "Scale Faster: Focus on growth, not paperwork"
  ];

  const testimonials = [
    { text: "Collected ₹4.5 lakhs of old payments in 2 months. Kitaab paid for itself 100 times over.", author: "Sharma Electronics, Indore" },
    { text: "GST filing went from 2 days to 20 minutes. I can't imagine running my business without Kitaab.", author: "Krishna Traders, Surat" },
    { text: "My customers pay faster because of automated WhatsApp reminders. Game changer!", author: "Raj Medical Store, Pune" }
  ];

  const iconCardData = [
    { icon: <FaBuilding />, title: "Corporate Security", badge: "HOT" },
    { icon: <FaLock />, title: "Bank-Grade Encryption" },
    { icon: <FaMobileAlt />, title: "Mobile First Design" },
    { icon: <FaChartPie />, title: "Real-time Analytics" },
    { icon: <FaUserShield />, title: "Privacy Protected" },
    { icon: <FaBolt />, title: "Lightning Fast" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo gradient-text">KITAAB</div>
            <div className="nav-links">
              <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
              <a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a>
              <a href="https://app.kitaab.live" className="btn btn-primary btn-sm">Login</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Visual Card Showcase */}
      <section className="new-hero-section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content-center">
            <h1 className="hero-title">Your business runs <span className="gradient-text">itself</span></h1>
            <p className="hero-description">AI-powered bookkeeping that saves 3 hours daily. From ₹1,499/month.</p>
          </motion.div>

          {/* Visual Card Showcase */}
          <div className="cards-showcase">
            <motion.div
              className="showcase-card card-primary"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(82, 183, 136, 0.4)' }}
            >
              {/* Card Chip */}
              <div className="card-chip" style={{
                width: '48px',
                height: '38px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
              }}></div>

              <div style={{ flex: 1 }}></div>

              {/* Card Number */}
              <div className="card-number" style={{
                fontSize: '18px',
                letterSpacing: '2px',
                fontFamily: 'monospace',
                marginBottom: '16px'
              }}>
                •••• •••• •••• 4829
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <div className="card-holder">
                  <div className="card-label">Card Holder</div>
                  <div className="card-value">Business Plus</div>
                </div>
                <div className="card-expiry">
                  <div className="card-label">Expires</div>
                  <div className="card-value">12/26</div>
                </div>
              </div>

              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
            </motion.div>

            <motion.div
              className="showcase-card card-secondary"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(116, 198, 157, 0.4)' }}
            >
              <div className="card-chip" style={{
                width: '48px',
                height: '38px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
              }}></div>

              <div style={{ flex: 1 }}></div>

              <div className="card-number" style={{
                fontSize: '18px',
                letterSpacing: '2px',
                fontFamily: 'monospace',
                marginBottom: '16px'
              }}>
                •••• •••• •••• 7341
              </div>

              <div className="card-footer">
                <div className="card-holder">
                  <div className="card-label">Card Holder</div>
                  <div className="card-value">Essential</div>
                </div>
                <div className="card-expiry">
                  <div className="card-label">Expires</div>
                  <div className="card-value">09/27</div>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
            </motion.div>

            <motion.div
              className="showcase-card card-tertiary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(168, 230, 207, 0.4)' }}
            >
              <div className="card-chip" style={{
                width: '48px',
                height: '38px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                borderRadius: '6px',
                boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
              }}></div>

              <div style={{ flex: 1 }}></div>

              <div className="card-number" style={{
                fontSize: '18px',
                letterSpacing: '2px',
                fontFamily: 'monospace',
                marginBottom: '16px'
              }}>
                •••• •••• •••• 9156
              </div>

              <div className="card-footer">
                <div className="card-holder">
                  <div className="card-label">Card Holder</div>
                  <div className="card-value">Starter</div>
                </div>
                <div className="card-expiry">
                  <div className="card-label">Expires</div>
                  <div className="card-value">03/28</div>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
            </motion.div>
          </div>

          {/* Hero CTA */}
          <div className="hero-cta-buttons">
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(82, 183, 136, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start 7-Day Free Trial
            </motion.button>
            <motion.button
              className="btn btn-outline btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Hero Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div><strong>2,847</strong> Active Businesses</div>
            <div><strong>₹14.7 Cr</strong> Collected</div>
            <div><strong>98%</strong> Satisfaction</div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="problem-section">
        <div className="container">
          <h2 className="text-center">Running a business shouldn't mean drowning in paperwork</h2>
          <div className="problems-grid">
            {problems.map((problem, i) => (
              <motion.div key={i} className="problem-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="problem-icon">{problem.icon}</div>
                <p>{problem.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="solution-text">
            <h3>Kitaab automates everything.</h3>
            <p>Photo becomes inventory. Voice becomes entry. One tap sends invoices.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="text-center">Everything you need to <span className="gradient-text">grow</span></h2>
          <div className="features-grid">
            {features.map((feature, i) => (
              <motion.div key={i} className="feature-card" whileHover={{ scale: 1.05 }} viewport={{ once: true }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center">Why 2,847 businesses choose Kitaab</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, i) => (
              <motion.div key={i} className="benefit-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <FaCheckCircle className="check-icon" />
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="text-center">Trusted by thousands</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} className="testimonial-card" whileHover={{ y: -10 }} viewport={{ once: true }}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="author">— {testimonial.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Pricing Section with Icon Cards */}
      <section id="pricing" className="new-pricing-section">
        <div className="container">
          <h2 className="section-title">Choose your <span className="gradient-text">growth path</span></h2>
          <p className="section-description">Trusted by thousands of businesses with enterprise-grade security and features</p>

          {/* Icon Cards Grid */}
          <div className="icon-cards-grid">
            {iconCardData.map((card, index) => (
              <IconCard key={index} icon={card.icon} title={card.title} badge={card.badge} />
            ))}
          </div>

          {/* Detailed Pricing Card */}
          <div className="detailed-pricing-wrapper">
            <PricingCard
              title="Business Plus"
              price={1499}
              icon={<FaBuilding />}
              features={[
                "Full web + mobile access",
                "Unlimited AI scans",
                "3 team members included",
                "All features included",
                "Priority support 24/7",
                "API access & integrations"
              ]}
            />
          </div>

          <motion.div
            className="pricing-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>7-day free trial • No credit card required • Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* Premium Dark CTA Section */}
      <section className="dark-cta-section">
        <div className="container">
          <motion.div
            className="dark-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="dark-cta-title">Join 2,847 growing businesses</h2>
            <p className="dark-cta-description">
              Start your 7-day free trial. No credit card required. Experience the future of bookkeeping.
            </p>
            <motion.button
              className="btn-cta-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 16px 40px rgba(82, 183, 136, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial Now
            </motion.button>
            <div className="trust-indicators" style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              marginTop: '2rem',
              flexWrap: 'wrap',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaShieldAlt /> Bank-grade security
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaCheckCircle /> Your data never shared
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaRocket /> Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="https://app.kitaab.live">Web App Login</a>
              <a href="#">Download App</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Security</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">WhatsApp</a>
              <a href="mailto:support@kitaab.live">support@kitaab.live</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Kitaab Technologies Private Limited. All rights reserved.</p>
            <p>Made in India with 💜</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/919999999999" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default LandingPage;
