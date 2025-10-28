import { motion } from 'framer-motion';
import { FaDownload, FaUserPlus, FaCamera, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HowItWorks = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const steps = [
    {
      number: "01",
      icon: <FaDownload />,
      title: "Download & Sign Up",
      desc: "Get the app from Play Store, App Store, or use our web app. Sign up in 30 seconds with just your phone number.",
      details: ["No credit card required", "7-day free trial", "Instant activation"]
    },
    {
      number: "02",
      icon: <FaUserPlus />,
      title: "Set Up Your Business",
      desc: "Tell us about your business. Our AI automatically configures the perfect setup for your industry.",
      details: ["Auto-detect business type", "Import existing data", "Customize categories"]
    },
    {
      number: "03",
      icon: <FaCamera />,
      title: "Start Recording Transactions",
      desc: "Snap photos of invoices, speak your entries, or type them manually. Kitaab handles the rest.",
      details: ["AI extracts data", "Auto-categorization", "GST calculations"]
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Watch Your Business Grow",
      desc: "Get insights, send invoices via WhatsApp, track collections, and file GST - all on autopilot.",
      details: ["Real-time reports", "Smart reminders", "Predictive analytics"]
    }
  ];

  const workflows = [
    {
      title: "Daily Bookkeeping Flow",
      steps: [
        "Morning: Check overnight payments and outstanding invoices",
        "Throughout day: Snap photos of bills/invoices as they come in",
        "Evening: Review AI-categorized transactions, make any adjustments",
        "Done: All entries recorded, books updated in real-time"
      ]
    },
    {
      title: "Monthly GST Filing Flow",
      steps: [
        "Day 1: Kitaab auto-generates GSTR-1 from your invoices",
        "Day 2-3: Review categorized expenses for GSTR-3B",
        "Day 4: One-click file returns directly from the app",
        "Done: GST filed, compliance maintained, zero stress"
      ]
    },
    {
      title: "Collections Management Flow",
      steps: [
        "AI identifies overdue payments and predicts defaults",
        "Automated WhatsApp reminders sent to customers",
        "Track payment promises and follow-ups",
        "Collect 40% faster with predictive intelligence"
      ]
    }
  ];

  return (
    <div className="landing-page">
      <Navigation />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>Getting started is <span className="gradient-text">simple</span></h1>
            <p className="hero-subtitle">From sign-up to automated bookkeeping in minutes, not months.</p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">Four Simple Steps</h2>
          <div className="features-grid">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  {step.number}
                </div>
                <div className="feature-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p style={{ marginBottom: '1rem' }}>{step.desc}</p>
                <ul style={{ textAlign: 'left', fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
                  {step.details.map((detail, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <FaCheckCircle style={{ color: '#10b981', flexShrink: 0 }} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center">Real-World Workflows</h2>
          <div className="features-grid" style={{ maxWidth: '1000px', margin: '3rem auto 0' }}>
            {workflows.map((workflow, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{workflow.title}</h3>
                <ol style={{ textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--gray-700)', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                  {workflow.steps.map((step, j) => (
                    <li key={j} style={{ marginBottom: '0.5rem' }}>{step}</li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">See Kitaab in Action</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '800px',
              margin: '3rem auto',
              background: 'var(--gray-100)',
              borderRadius: '1.5rem',
              padding: '3rem',
              textAlign: 'center'
            }}
          >
            <div style={{
              background: 'var(--gradient-primary)',
              borderRadius: '1rem',
              padding: '4rem 2rem',
              color: 'white'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>📹 Watch 2-Minute Demo</h3>
              <p style={{ color: 'white', opacity: 0.95, marginBottom: '1.5rem' }}>
                See how Kitaab transforms bookkeeping from hours to minutes
              </p>
              <button className="btn btn-secondary btn-lg">Play Video</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2>Ready to transform your business?</h2>
            <p>Join 2,847 businesses already saving 3 hours daily</p>
            <button className="btn btn-primary btn-lg">Start Free Trial</button>
            <div className="trust-indicators" style={{ marginTop: '2rem' }}>
              <span><FaCheckCircle /> No credit card required</span>
              <span><FaCheckCircle /> 7-day free trial</span>
              <span><FaCheckCircle /> Cancel anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
