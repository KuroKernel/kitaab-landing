import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaHeart, FaUsers, FaBullseye } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: <FaBullseye />,
      title: "Mission Driven",
      desc: "Empowering every Indian business owner with technology that was once only available to large enterprises."
    },
    {
      icon: <FaHeart />,
      title: "Built with Care",
      desc: "Every feature is designed with real business owners in mind. We obsess over simplicity and usability."
    },
    {
      icon: <FaUsers />,
      title: "Customer First",
      desc: "Your success is our success. We're not satisfied until you're growing faster than ever."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      desc: "Constantly pushing boundaries with AI, automation, and cutting-edge technology."
    }
  ];

  const team = [
    {
      role: "Leadership",
      desc: "Serial entrepreneurs who've built and scaled multiple businesses in India."
    },
    {
      role: "Engineering",
      desc: "World-class engineers from top tech companies, passionate about solving real problems."
    },
    {
      role: "Support",
      desc: "Dedicated team of business experts who understand your challenges intimately."
    }
  ];

  const stats = [
    { value: "AI-First", label: "Modern Technology" },
    { value: "India-Built", label: "For Indian Business" },
    { value: "Free Trial", label: "No Credit Card" },
    { value: "24/7", label: "Support Available" }
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
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: '800',
              color: '#0f1419',
              lineHeight: '1.15',
              marginBottom: '32px',
              letterSpacing: '-0.02em'
            }}>
              Operating System for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 50%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Indian Commerce
              </span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              Built in India, for India. Kitaab is democratizing business intelligence through AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
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
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.8',
                color: '#536471',
                marginBottom: '24px'
              }}>
                Large enterprises have expensive ERPs. International tools built for different markets. Meanwhile, small Indian businesses—the economy's backbone—struggle with pen, paper, and Excel chaos.
              </p>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.8',
                color: '#536471',
                marginBottom: '24px'
              }}>
                We're changing that.
              </p>
              <p style={{
                fontSize: '1.0625rem',
                lineHeight: '1.8',
                color: '#536471',
                marginBottom: '0'
              }}>
                World-class technology that understands Indian business practices. Speaks your language. Works in Indian conditions. Priced for Indian businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{
        padding: '96px 0',
        backgroundColor: '#f8faf9'
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
            Our Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {values.map((value, i) => (
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
                  transition: 'all 0.2s'
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
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
                  fontSize: '24px',
                  marginBottom: '20px'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
            Our Team
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {team.map((member, i) => (
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
                  border: '1px solid rgba(45, 98, 71, 0.1)',
                  transition: 'all 0.2s'
                }}
                whileHover={{
                  y: -4,
                  background: 'white',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {member.role}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(135deg, #1a3a2e 0%, #0f1419 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '64px',
              letterSpacing: '-0.02em'
            }}>
              Impact by Numbers
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '48px'
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #52B788 0%, #74C69D 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: '#8b98a5',
                    fontWeight: '500',
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: '#0f1419',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Join Us in Transforming Indian Business
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '48px'
            }}>
              Whether you're a customer, partner, or future team member, there's a place for you at Kitaab.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 16px rgba(82, 183, 136, 0.3)',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 32px',
                    background: 'white',
                    color: '#2D6247',
                    borderRadius: '12px',
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    border: '2px solid #2D6247',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
