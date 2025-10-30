import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaShieldAlt, FaCheckCircle, FaRocket, FaCreditCard, FaHeadset, FaMobileAlt, FaSync, FaFileExport } from 'react-icons/fa';
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
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      value: "hello@kitaab.live",
      link: "mailto:hello@kitaab.live"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      value: "+91 89828 70739",
      link: "tel:+918982870739"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/918982870739"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      value: "Bangalore, Karnataka, India",
      link: null
    }
  ];

  const quickLinks = [
    {
      title: "Getting Started",
      icon: <FaRocket />,
      links: [
        { text: "How to sign up", url: "#signup" },
        { text: "Import existing data", url: "#import" },
        { text: "First transaction", url: "#first-transaction" }
      ]
    },
    {
      title: "Billing & Plans",
      icon: <FaCreditCard />,
      links: [
        { text: "Pricing details", url: "#pricing" },
        { text: "Payment methods", url: "#payment" },
        { text: "Cancel anytime", url: "#cancel" }
      ]
    },
    {
      title: "Technical Support",
      icon: <FaHeadset />,
      links: [
        { text: "Mobile app download", url: "#download" },
        { text: "Sync issues", url: "#sync" },
        { text: "Data export", url: "#export" }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navigation />

      {/* Hero */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '96px',
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8faf9 100%)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: '800',
              color: '#0f1419',
              lineHeight: '1.15',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Let's{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 50%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                talk
              </span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              We're here to help your business grow. Reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{
        padding: '96px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(45, 98, 71, 0.1)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: method.link ? 'pointer' : 'default',
                  transition: 'all 0.2s'
                }}
                whileHover={method.link ? {
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                } : {}}
                onClick={() => method.link && window.open(method.link, method.link.startsWith('http') ? '_blank' : '_self')}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  margin: '0 auto 20px'
                }}>
                  {method.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em'
                }}>
                  {method.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  margin: 0
                }}>
                  {method.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{
        padding: '96px 0',
        backgroundColor: '#f8faf9'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: '#0f1419',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}>
                Send us a message
              </h2>
              <p style={{
                fontSize: '1.0625rem',
                color: '#536471',
                lineHeight: '1.6'
              }}>
                We typically respond within 24 hours
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '48px',
                borderRadius: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(45, 98, 71, 0.1)'
              }}
            >
              {/* Name Field */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: `2px solid ${errors.name ? '#dc2626' : '#e5e7eb'}`,
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => !errors.name && (e.target.style.borderColor = '#52B788')}
                  onBlur={(e) => !errors.name && (e.target.style.borderColor = '#e5e7eb')}
                />
                {errors.name && (
                  <p style={{
                    color: '#dc2626',
                    fontSize: '0.875rem',
                    marginTop: '6px',
                    marginBottom: 0
                  }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: `2px solid ${errors.email ? '#dc2626' : '#e5e7eb'}`,
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => !errors.email && (e.target.style.borderColor = '#52B788')}
                  onBlur={(e) => !errors.email && (e.target.style.borderColor = '#e5e7eb')}
                />
                {errors.email && (
                  <p style={{
                    color: '#dc2626',
                    fontSize: '0.875rem',
                    marginTop: '6px',
                    marginBottom: 0
                  }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '2px solid #e5e7eb',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#52B788'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {/* Business Name Field */}
              <div style={{ marginBottom: '24px' }}>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '2px solid #e5e7eb',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#52B788'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              {/* Message Field */}
              <div style={{ marginBottom: '24px' }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? *"
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '12px',
                    border: `2px solid ${errors.message ? '#dc2626' : '#e5e7eb'}`,
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                    outline: 'none',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => !errors.message && (e.target.style.borderColor = '#52B788')}
                  onBlur={(e) => !errors.message && (e.target.style.borderColor = '#e5e7eb')}
                />
                {errors.message && (
                  <p style={{
                    color: '#dc2626',
                    fontSize: '0.875rem',
                    marginTop: '6px',
                    marginBottom: 0
                  }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  background: status === 'sending' ? '#8b98a5' : 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 16px rgba(82, 183, 136, 0.3)',
                  transition: 'all 0.2s'
                }}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: '#d1fae5',
                    border: '1px solid #52B788',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <FaCheckCircle style={{ color: '#52B788', fontSize: '20px', flexShrink: 0 }} />
                  <p style={{
                    color: '#0f1419',
                    fontSize: '0.9375rem',
                    fontWeight: '500',
                    margin: 0
                  }}>
                    Message sent! We'll respond within 24 hours.
                  </p>
                </motion.div>
              )}

              {/* Trust Signals */}
              <div style={{
                marginTop: '32px',
                paddingTop: '32px',
                borderTop: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.875rem',
                  color: '#536471'
                }}>
                  <FaCheckCircle style={{ color: '#52B788', flexShrink: 0 }} />
                  We respond within 24 hours
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.875rem',
                  color: '#536471'
                }}>
                  <FaShieldAlt style={{ color: '#52B788', flexShrink: 0 }} />
                  Your information is never shared
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.875rem',
                  color: '#536471'
                }}>
                  <FaCheckCircle style={{ color: '#52B788', flexShrink: 0 }} />
                  No spam, just helpful responses
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section style={{
        padding: '96px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            textAlign: 'center',
            color: '#0f1419',
            marginBottom: '64px',
            letterSpacing: '-0.02em'
          }}>
            Common Questions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {quickLinks.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: '#f8faf9',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(45, 98, 71, 0.1)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  marginBottom: '20px'
                }}>
                  {section.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em'
                }}>
                  {section.title}
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {section.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      style={{
                        color: '#536471',
                        textDecoration: 'none',
                        fontSize: '0.9375rem',
                        transition: 'color 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#52B788'}
                      onMouseLeave={(e) => e.target.style.color = '#536471'}
                    >
                      <span style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#52B788',
                        flexShrink: 0
                      }} />
                      {link.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section style={{
        padding: '96px 0',
        backgroundColor: '#f8faf9'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'white',
              padding: '48px',
              borderRadius: '20px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(45, 98, 71, 0.1)'
            }}
          >
            <div style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '32px',
                margin: '0 auto 24px'
              }}>
                <FaClock />
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '800',
                color: '#0f1419',
                marginBottom: '12px',
                letterSpacing: '-0.02em'
              }}>
                When We're Available
              </h2>
              <p style={{
                fontSize: '1.0625rem',
                color: '#536471',
                lineHeight: '1.6'
              }}>
                We're here to help during business hours and beyond
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
              marginBottom: '48px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}>
                  Support Hours
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontSize: '0.9375rem',
                  color: '#536471',
                  lineHeight: '1.6'
                }}>
                  <div>
                    <strong style={{ color: '#0f1419' }}>Monday - Saturday:</strong><br />
                    9:00 AM - 7:00 PM IST
                  </div>
                  <div>
                    <strong style={{ color: '#0f1419' }}>Sunday:</strong><br />
                    10:00 AM - 4:00 PM IST
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}>
                  Response Times
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontSize: '0.9375rem',
                  color: '#536471',
                  lineHeight: '1.6'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FaWhatsapp style={{ color: '#52B788', flexShrink: 0 }} />
                    WhatsApp: Within 2 hours
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FaEnvelope style={{ color: '#52B788', flexShrink: 0 }} />
                    Email: Within 24 hours
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <FaHeadset style={{ color: '#52B788', flexShrink: 0 }} />
                    Live Chat: Instant
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              padding: '20px',
              background: '#d1fae5',
              border: '1px solid #52B788',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#0f1419',
                fontSize: '0.9375rem',
                fontWeight: '600',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <FaShieldAlt style={{ color: '#52B788' }} />
                Emergency support available 24/7 for critical issues
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Need Immediate Help */}
      <section style={{
        padding: '96px 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#0f1419',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              Need immediate help?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '48px'
            }}>
              Check out our Help Center for instant answers or start a live chat with our support team.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <motion.a
                href="#help"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '16px 32px',
                  background: 'white',
                  color: '#2D6247',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  border: '2px solid #2D6247',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                Visit Help Center
              </motion.a>
              <motion.a
                href="https://wa.me/918982870739"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 16px rgba(82, 183, 136, 0.3)',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                Start Live Chat
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
