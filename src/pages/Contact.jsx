import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    { icon: <FaEnvelope />, title: "Email Us", value: "support@kitaab.live", link: "mailto:support@kitaab.live" },
    { icon: <FaPhone />, title: "Call Us", value: "+91 99999 99999", link: "tel:+919999999999" },
    { icon: <FaWhatsapp />, title: "WhatsApp", value: "Chat with us", link: "https://wa.me/919999999999" },
    { icon: <FaMapMarkerAlt />, title: "Office", value: "Bangalore, Karnataka, India", link: "#" }
  ];

  return (
    <div className="landing-page">
      <Navigation />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>Let's <span className="gradient-text">talk</span></h1>
            <p className="hero-subtitle">We're here to help your business grow. Reach out anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                className="feature-card"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="benefits-section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="text-center">Send us a message</h2>
            <motion.form
              onSubmit={handleSubmit}
              className="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                marginTop: '3rem'
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid var(--gray-200)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid var(--gray-200)',
                    fontSize: '1rem'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid var(--gray-200)',
                    fontSize: '1rem'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid var(--gray-200)',
                    fontSize: '1rem'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? *"
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid var(--gray-200)',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p style={{ marginTop: '1rem', textAlign: 'center', color: '#10b981', fontWeight: 600 }}>
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="features-section">
        <div className="container">
          <div className="solution-text">
            <h3>Need immediate help?</h3>
            <p>Check out our Help Center for instant answers or start a live chat with our support team.</p>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-secondary btn-lg" style={{ marginRight: '1rem' }}>Visit Help Center</button>
              <button className="btn btn-primary btn-lg">Start Live Chat</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
