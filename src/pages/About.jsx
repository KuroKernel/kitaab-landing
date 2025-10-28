import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaUsers, FaBullseye } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    { icon: <FaBullseye />, title: "Mission Driven", desc: "Empowering every Indian business owner with technology that was once only available to large enterprises." },
    { icon: <FaHeart />, title: "Built with Care", desc: "Every feature is designed with real business owners in mind. We obsess over simplicity and usability." },
    { icon: <FaUsers />, title: "Customer First", desc: "Your success is our success. We're not satisfied until you're growing faster than ever." },
    { icon: <FaRocket />, title: "Innovation", desc: "Constantly pushing boundaries with AI, automation, and cutting-edge technology." }
  ];

  const team = [
    { role: "Leadership", desc: "Serial entrepreneurs who've built and scaled multiple businesses in India." },
    { role: "Engineering", desc: "World-class engineers from top tech companies, passionate about solving real problems." },
    { role: "Support", desc: "Dedicated team of business experts who understand your challenges intimately." }
  ];

  return (
    <div className="landing-page">
      <Navigation />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>We're on a mission to <span className="gradient-text">transform</span> Indian businesses</h1>
            <p className="hero-subtitle">Built in India, for India. Kitaab is democratizing business intelligence through AI.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="features-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-center">Our Story</h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                Kitaab was born from a simple observation: while large corporations had access to expensive ERPs and business intelligence tools,
                small and medium businesses were still managing their operations with pen, paper, and Excel sheets.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-700)', marginBottom: '1.5rem' }}>
                We realized that AI and automation could level the playing field. Every business owner deserves tools that are as smart
                as they are - tools that understand context, predict needs, and adapt to unique workflows.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                Today, Kitaab serves thousands of businesses across India, helping them save time, reduce errors, and grow faster.
                But we're just getting started. Our vision is to become the operating system for every business in India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <div className="features-grid">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="features-section">
        <div className="container">
          <h2 className="text-center">Our Team</h2>
          <div className="features-grid" style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{member.role}</h3>
                <p>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2>Impact by Numbers</h2>
            <div className="hero-stats" style={{ marginTop: '3rem' }}>
              <div><strong>2,847</strong> Active Businesses</div>
              <div><strong>₹14.7 Cr</strong> Processed</div>
              <div><strong>50,000+</strong> Hours Saved</div>
              <div><strong>98%</strong> Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-section">
        <div className="container">
          <div className="solution-text">
            <h3>Join us in transforming Indian businesses</h3>
            <p>Whether you're a customer, partner, or future team member, there's a place for you at Kitaab.</p>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-primary btn-lg" style={{ marginRight: '1rem' }}>Start Free Trial</button>
              <button className="btn btn-secondary btn-lg">View Careers</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
