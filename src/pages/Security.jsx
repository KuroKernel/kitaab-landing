import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaServer, FaUserShield, FaCheckCircle, FaKey, FaCloud, FaFingerprint } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Security = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "256-Bit Encryption",
      desc: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption. Same level as banks use."
    },
    {
      icon: <FaShieldAlt />,
      title: "SOC 2 Compliant",
      desc: "We undergo regular third-party security audits and maintain SOC 2 Type II certification for data protection."
    },
    {
      icon: <FaServer />,
      title: "Secure Cloud Infrastructure",
      desc: "Hosted on AWS with multi-region redundancy, automated backups, and 99.99% uptime SLA."
    },
    {
      icon: <FaUserShield />,
      title: "Role-Based Access",
      desc: "Granular permission controls. Only authorized users can access specific data based on their role."
    },
    {
      icon: <FaKey />,
      title: "Two-Factor Authentication",
      desc: "Optional 2FA for an extra layer of security. SMS, email, or authenticator app support."
    },
    {
      icon: <FaFingerprint />,
      title: "Biometric Login",
      desc: "Fingerprint and face recognition on mobile devices for quick yet secure access."
    }
  ];

  const compliance = [
    { title: "GDPR Compliant", desc: "Full compliance with European data protection regulations" },
    { title: "ISO 27001", desc: "Information security management certification" },
    { title: "GST Compliant", desc: "Fully aligned with Indian tax regulations and e-invoice standards" },
    { title: "RBI Guidelines", desc: "Adheres to Reserve Bank of India data localization requirements" }
  ];

  const dataProtection = [
    "Your data is stored in India to comply with data localization laws",
    "Automated daily backups with 30-day retention",
    "Point-in-time recovery for data restoration",
    "We NEVER sell or share your data with third parties",
    "You can export all your data anytime",
    "Account deletion removes all your data permanently"
  ];

  return (
    <div className="landing-page">
      <Navigation />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>Your data is <span className="gradient-text">sacred</span></h1>
            <p className="hero-subtitle">Bank-grade security. Zero-knowledge architecture. Your business data stays yours.</p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">Enterprise-Grade Security</h2>
          <div className="features-grid">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center">Compliance & Certifications</h2>
          <div className="features-grid" style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
            {compliance.map((item, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '1rem' }} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">Your Data, Your Control</h2>
          <div className="benefits-grid" style={{ marginTop: '3rem' }}>
            {dataProtection.map((point, i) => (
              <motion.div
                key={i}
                className="benefit-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <FaCheckCircle className="check-icon" />
                <p>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="benefits-section">
        <div className="container">
          <div className="solution-text">
            <h3>Built on Bulletproof Infrastructure</h3>
            <p style={{ marginBottom: '2rem' }}>
              Kitaab runs on Amazon Web Services (AWS), the same infrastructure trusted by major banks and Fortune 500 companies.
              Our architecture includes automated threat detection, DDoS protection, and real-time monitoring 24/7.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
              <div>
                <FaCloud style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white' }}>99.99%</h4>
                <p style={{ color: 'white', opacity: 0.9, fontSize: '0.875rem' }}>Uptime SLA</p>
              </div>
              <div>
                <FaServer style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white' }}>Multi-Region</h4>
                <p style={{ color: 'white', opacity: 0.9, fontSize: '0.875rem' }}>Data Redundancy</p>
              </div>
              <div>
                <FaShieldAlt style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'white' }}>24/7</h4>
                <p style={{ color: 'white', opacity: 0.9, fontSize: '0.875rem' }}>Security Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="features-section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Dedicated Security Team</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-700)', marginTop: '1.5rem' }}>
              Our security engineers continuously monitor threats, perform penetration testing, and implement the latest
              security best practices. We also run a responsible disclosure program for security researchers.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="mailto:security@kitaab.live" className="btn btn-secondary btn-lg">
                Report Security Issue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2>Security you can trust</h2>
            <p>Start using Kitaab with confidence. Your business data is in safe hands.</p>
            <button className="btn btn-primary btn-lg">Start Free Trial</button>
            <div className="trust-indicators" style={{ marginTop: '2rem' }}>
              <span><FaShieldAlt /> Bank-grade encryption</span>
              <span><FaCheckCircle /> SOC 2 certified</span>
              <span><FaLock /> Your data never shared</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
