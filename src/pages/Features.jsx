import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCamera, FaMicrophone, FaWhatsapp, FaFileInvoice, FaRobot, FaChartBar, FaMobile, FaCloud, FaLock, FaBolt, FaUsers, FaChartLine } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Features = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const coreFeatures = [
    {
      icon: <FaCamera />,
      title: "AI Invoice Scanner",
      desc: "Simply snap a photo of any invoice or bill. Our AI instantly extracts all data - vendor name, items, amounts, GST - and adds it to your books. Accuracy rate: 99.7%.",
      demo: "Photo → Inventory in 10 seconds"
    },
    {
      icon: <FaMicrophone />,
      title: "Voice Commands",
      desc: "Record entries while driving, at the shop, or anywhere. Speak naturally in Hindi or English. 'Received 50,000 from Sharma ji' - done.",
      demo: "Hands-free bookkeeping"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Business Integration",
      desc: "Send invoices, payment reminders, and receipts directly via WhatsApp. Bulk send 100 invoices with one tap. Track delivery and read receipts.",
      demo: "100 invoices in 1 tap"
    },
    {
      icon: <FaFileInvoice />,
      title: "GST Autopilot",
      desc: "Auto-categorize expenses, calculate GST, and generate returns. File GSTR-1, GSTR-3B in minutes. Never miss a deadline with smart reminders.",
      demo: "Filing in 5 minutes"
    },
    {
      icon: <FaRobot />,
      title: "Smart Collections AI",
      desc: "Predictive intelligence tells you who's likely to pay on time, who needs a reminder, and who might default. Optimize your cash flow automatically.",
      demo: "Predict payments"
    },
    {
      icon: <FaChartBar />,
      title: "Real-time Analytics",
      desc: "Know your profit, cash position, and outstanding payments instantly. Beautiful dashboards that update in real-time as transactions happen.",
      demo: "Live business pulse"
    }
  ];

  const advancedFeatures = [
    { icon: <FaMobile />, title: "Mobile + Web", desc: "Full-featured apps on iOS, Android, and web. Your data syncs instantly across all devices." },
    { icon: <FaCloud />, title: "Offline Mode", desc: "Work without internet. All entries sync automatically when you're back online." },
    { icon: <FaLock />, title: "Bank-Grade Security", desc: "256-bit encryption, SOC 2 compliance, and regular security audits. Your data is safer than in a bank." },
    { icon: <FaBolt />, title: "Lightning Fast", desc: "Optimized for speed. Every action feels instant, even with years of transaction history." },
    { icon: <FaUsers />, title: "Multi-User Access", desc: "Add team members with role-based permissions. Accountant, staff, or read-only access." },
    { icon: <FaChartLine />, title: "Predictive Insights", desc: "AI forecasts cash flow, identifies spending patterns, and alerts you to anomalies." }
  ];

  return (
    <div className="landing-page">
      <Navigation />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>Features that <span className="gradient-text">work for you</span></h1>
            <p className="hero-subtitle">Powerful AI-driven tools designed for Indian businesses. No learning curve, just results.</p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">Core Features</h2>
          <div className="features-grid">
            {coreFeatures.map((feature, i) => (
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
                <div style={{ marginTop: '1rem', color: 'var(--primary-teal)', fontWeight: 600, fontSize: '0.875rem' }}>
                  ✓ {feature.demo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center">Advanced Capabilities</h2>
          <div className="features-grid">
            {advancedFeatures.map((feature, i) => (
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

      {/* Use Cases */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">Built for Every Business</h2>
          <div className="features-grid" style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
            <div className="feature-card">
              <h3>Retail & Wholesale</h3>
              <p>Track inventory, manage vendors, send bulk invoices via WhatsApp, and maintain day books effortlessly.</p>
            </div>
            <div className="feature-card">
              <h3>Services & Consulting</h3>
              <p>Time tracking, project-based invoicing, expense management, and professional invoice templates.</p>
            </div>
            <div className="feature-card">
              <h3>Manufacturing & Distribution</h3>
              <p>Complex inventory management, production tracking, multi-location support, and advanced reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2>See it in action</h2>
            <p>Start your 7-day free trial and experience the difference</p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/signup" className="btn btn-primary btn-lg" style={{ marginRight: '1rem' }}>Start Free Trial</Link>
              <button className="btn btn-secondary btn-lg">Watch Demo Video</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
