import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCamera, FaMicrophone, FaWhatsapp, FaFileInvoice, FaRobot, FaChartBar, FaMobile, FaCloud, FaLock, FaBolt, FaUsers, FaChartLine } from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Features = () => {
  const coreFeatures = [
    {
      icon: <FaCamera />,
      title: "AI Invoice Scanner",
      desc: "Photograph any invoice or bill. AI extracts vendor name, items, quantities, prices, GST details instantly. Updates your books automatically. No manual data entry ever again.",
      tag: "Photo → Inventory in 10 seconds"
    },
    {
      icon: <FaMicrophone />,
      title: "Voice Commands",
      desc: "Record transactions while driving, at the shop, anywhere. Speak naturally in Hindi or English. 'Sharma ji ko pachaas hazaar receive kiya' - done. System understands Indian business language.",
      tag: "Hands-free bookkeeping"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Business Integration",
      desc: "Send invoices, payment reminders, and receipts directly via WhatsApp. Bulk send 100 invoices with one tap. Track delivery and read receipts. Customers respond to WhatsApp - collect 40% faster.",
      tag: "100 invoices in 1 tap"
    },
    {
      icon: <FaFileInvoice />,
      title: "GST Autopilot",
      desc: "Auto-categorize expenses, calculate GST, generate returns. File GSTR-1, GSTR-3B in minutes. Smart reminders ensure you never miss deadlines. Compliance becomes effortless.",
      tag: "Filing in 5 minutes"
    },
    {
      icon: <FaRobot />,
      title: "Smart Collections AI",
      desc: "Predictive intelligence tells you who's likely to pay on time, who needs a reminder, who might default. Optimize cash flow automatically. Know exactly when money's coming.",
      tag: "Predict payments"
    },
    {
      icon: <FaChartBar />,
      title: "Real-time Analytics",
      desc: "Know your profit, cash position, outstanding payments instantly. Beautiful dashboards update in real-time as transactions happen. Make decisions based on current data, not last month's guesses.",
      tag: "Live business intelligence"
    }
  ];

  const advancedFeatures = [
    {
      icon: <FaMobile />,
      title: "Mobile + Web",
      desc: "Full-featured apps on iOS, Android, and web. Your data syncs instantly across all devices."
    },
    {
      icon: <FaCloud />,
      title: "Offline Mode",
      desc: "Work without internet. All entries sync automatically when you're back online."
    },
    {
      icon: <FaLock />,
      title: "Bank-Grade Security",
      desc: "256-bit AES encryption, ISO 27001 standards, regular penetration testing. Your data is protected with enterprise-grade security."
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      desc: "Optimized for speed. Every action feels instant, even with years of transaction history."
    },
    {
      icon: <FaUsers />,
      title: "Multi-User Access",
      desc: "Add team members with role-based permissions. Accountant, staff, or read-only access."
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Insights",
      desc: "AI forecasts cash flow, identifies spending patterns, alerts you to anomalies."
    },
    {
      icon: <FaRobot />,
      title: "Smart Automation",
      desc: "Auto-categorize transactions, send payment reminders, generate recurring invoices. Set it once, forget it."
    },
    {
      icon: <FaFileInvoice />,
      title: "Automated Backups",
      desc: "Daily encrypted backups to multiple secure locations. Your data is always safe and recoverable."
    }
  ];

  const businessTypes = [
    {
      title: "Retail & Wholesale",
      desc: "Track inventory, manage vendors, send bulk invoices via WhatsApp, maintain day books effortlessly."
    },
    {
      title: "Services & Consulting",
      desc: "Time tracking, project-based invoicing, expense management, professional invoice templates."
    },
    {
      title: "Manufacturing & Distribution",
      desc: "Complex inventory management, production tracking, multi-location support, advanced reporting."
    },
    {
      title: "Food & Restaurant",
      desc: "Table management, recipe costing, supplier tracking, daily sales reports, ingredient inventory."
    },
    {
      title: "Healthcare & Pharmacy",
      desc: "Medicine stock management, prescription tracking, batch expiry alerts, GST-compliant billing."
    },
    {
      title: "E-commerce & Online",
      desc: "Multi-channel order sync, payment gateway integration, shipping tracking, marketplace reconciliation."
    },
    {
      title: "Logistics & Transport",
      desc: "Vehicle management, fuel tracking, trip billing, driver payments, route optimization data."
    },
    {
      title: "Construction & Contractors",
      desc: "Project-wise accounting, material tracking, labor management, site expense monitoring."
    },
    {
      title: "Professional Services",
      desc: "Client billing, retainer management, time-based invoicing, expense reimbursement tracking."
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
              Features that{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 50%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                work for you
              </span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              Powerful AI-driven tools designed for Indian businesses. No learning curve, just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
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
            Core Features
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {coreFeatures.map((feature, i) => (
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
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column'
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
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  {feature.desc}
                </p>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#52B788'
                }}>
                  ✓ {feature.tag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
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
            Advanced Capabilities
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {advancedFeatures.map((feature, i) => (
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
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Every Business */}
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
            Built for Every Business
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {businessTypes.map((business, i) => (
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
                  {business.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {business.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
              See it in action
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#8b98a5',
              lineHeight: '1.7',
              marginBottom: '48px'
            }}>
              Start your 14-day free trial and experience the difference
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
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                >
                  Watch Demo Video
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
