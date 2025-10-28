import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaUserPlus, FaCamera, FaRocket, FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaDownload />,
      title: "Download & Sign Up",
      desc: "Get the app from Play Store, App Store, or use our web app. Sign up in 30 seconds with just your phone number.",
      checkmarks: ["No credit card required", "7-day free trial", "Instant activation"]
    },
    {
      number: "02",
      icon: <FaUserPlus />,
      title: "Set Up Your Business",
      desc: "Tell us about your business. Our AI automatically configures the perfect setup for your industry.",
      checkmarks: ["Auto-detect business type", "Import existing data", "Customize categories"]
    },
    {
      number: "03",
      icon: <FaCamera />,
      title: "Start Recording Transactions",
      desc: "Snap photos of invoices, speak your entries, or type them manually. Kitaab handles the rest.",
      checkmarks: ["AI extracts data", "Auto-categorization", "GST calculations"]
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Let AI Handle the Rest",
      desc: "Review AI-categorized entries once daily. System maintains your books, generates reports, files GST automatically.",
      checkmarks: ["Automated bookkeeping", "Real-time reports", "Smart reminders"]
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
              Getting started is{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 50%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                simple
              </span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              From sign-up to automated bookkeeping in minutes, not months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Simple Steps */}
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
            Four Simple Steps
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {steps.map((step, i) => (
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
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: '#52B788',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em'
                }}>
                  {step.number}
                </div>
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
                  {step.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {step.desc}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {step.checkmarks.map((item, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.875rem',
                      color: '#536471',
                      marginBottom: '8px'
                    }}>
                      <FaCheckCircle style={{ color: '#52B788', flexShrink: 0, fontSize: '14px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
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
            Real-World Workflows
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {workflows.map((workflow, i) => (
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
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '20px',
                  letterSpacing: '-0.01em'
                }}>
                  {workflow.title}
                </h3>
                <ol style={{
                  listStylePosition: 'outside',
                  paddingLeft: '24px',
                  margin: 0,
                  fontSize: '0.9375rem',
                  lineHeight: '1.8',
                  color: '#536471'
                }}>
                  {workflow.steps.map((workflowStep, j) => (
                    <li key={j} style={{ marginBottom: '12px' }}>
                      {workflowStep}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
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
            See Kitaab in Action
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              background: '#f8faf9',
              borderRadius: '24px',
              padding: '48px',
              textAlign: 'center'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
              borderRadius: '16px',
              padding: '64px 32px',
              color: 'white',
              position: 'relative'
            }}>
              <FaPlayCircle style={{
                fontSize: '64px',
                marginBottom: '24px',
                opacity: 0.95
              }} />
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '16px',
                letterSpacing: '-0.01em'
              }}>
                Watch 2-Minute Demo
              </h3>
              <p style={{
                fontSize: '1.0625rem',
                color: 'white',
                opacity: 0.95,
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                See how Kitaab transforms bookkeeping from hours to minutes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Ready to transform your bookkeeping?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#8b98a5',
              lineHeight: '1.7',
              marginBottom: '48px'
            }}>
              Join 500+ businesses saving 3 hours daily
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}>
              <motion.a
                href="https://app.kitaab.live"
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
                Start Free Trial
              </motion.a>
              <motion.a
                href="#sales"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                Talk to Sales
              </motion.a>
            </div>
            <div style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: '0.9375rem',
              color: '#8b98a5'
            }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <FaCheckCircle style={{ color: '#52B788' }} />
                14-day trial
              </span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <FaCheckCircle style={{ color: '#52B788' }} />
                No credit card
              </span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <FaCheckCircle style={{ color: '#52B788' }} />
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
