import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaClock, FaShieldAlt, FaWhatsapp, FaMicrophone, FaCamera, FaFileInvoice, FaRobot, FaChartBar, FaStar, FaCheckCircle } from 'react-icons/fa';
import './LandingPage.css';

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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>Your business runs <span className="gradient-text">itself</span></h1>
            <p className="hero-subtitle">AI-powered bookkeeping that saves 3 hours daily. From ₹1,499/month.</p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg">Start 7-Day Free Trial</button>
              <button className="btn btn-secondary btn-lg">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div><strong>2,847</strong> Active Businesses</div>
              <div><strong>₹14.7 Cr</strong> Collected</div>
              <div><strong>98%</strong> Satisfaction</div>
            </div>
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

      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="text-center">Choose your <span className="gradient-text">growth path</span></h2>
          <div className="pricing-grid">
            <motion.div className="pricing-card popular" whileHover={{ scale: 1.05 }}>
              <div className="popular-badge">Most Popular</div>
              <h3>Business</h3>
              <div className="price">₹1,499<span>/month</span></div>
              <ul className="features-list">
                <li><FaCheckCircle /> Full web + mobile access</li>
                <li><FaCheckCircle /> Unlimited AI scans</li>
                <li><FaCheckCircle /> 3 team members</li>
                <li><FaCheckCircle /> All features included</li>
                <li><FaCheckCircle /> Priority support</li>
                <li><FaCheckCircle /> API access</li>
              </ul>
              <button className="btn btn-primary btn-full">Start Free Trial</button>
            </motion.div>
            <motion.div className="pricing-card" whileHover={{ scale: 1.05 }}>
              <h3>Essential</h3>
              <div className="price">₹2,499<span>/month</span></div>
              <div className="subtitle">Performance Edition</div>
              <ul className="features-list">
                <li><FaCheckCircle /> Everything in Business +</li>
                <li><FaCheckCircle /> Real-time analytics (1-sec)</li>
                <li><FaCheckCircle /> Predictive AI insights</li>
                <li><FaCheckCircle /> Advanced fraud detection</li>
                <li><FaCheckCircle /> Dedicated account manager</li>
                <li><FaCheckCircle /> Custom integrations</li>
              </ul>
              <button className="btn btn-secondary btn-full">Start Free Trial</button>
            </motion.div>
          </div>
          <div className="pricing-note">
            <p>✓ 7-day free trial &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2>Join 2,847 growing businesses</h2>
            <p>Start your 7-day free trial. No credit card required.</p>
            <button className="btn btn-primary btn-lg">Start Free Trial</button>
            <div className="trust-indicators">
              <span><FaShieldAlt /> Bank-grade security</span>
              <span><FaCheckCircle /> Your data never shared</span>
              <span><FaRocket /> Cancel anytime</span>
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
