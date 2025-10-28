import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCalculator, FaFileInvoiceDollar, FaClock, FaBrain, FaLanguage, FaWifi,
  FaRupeeSign, FaUsers, FaChartLine, FaCheckCircle, FaShieldAlt, FaLock,
  FaServer, FaTimesCircle
} from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const WhyKitaab = () => {
  const hiddenCosts = [
    { icon: <FaClock />, title: "3 hours daily on data entry", cost: "₹2.7 lakhs yearly (at ₹300/hour)" },
    { icon: <FaFileInvoiceDollar />, title: "GST penalties average", cost: "₹25,000 annually for late filing" },
    { icon: <FaChartLine />, title: "30% of receivables delayed", cost: "Due to poor follow-up" },
    { icon: <FaCalculator />, title: "Lost opportunities", cost: "Can't make decisions without current data" }
  ];

  const traditionalProblems = [
    "Built for accountants, not business owners",
    "Steep learning curve (2-3 months minimum)",
    "Requires dedicated data entry staff",
    "Doesn't understand Indian business language",
    "No mobile-first experience",
    "Expensive training and maintenance"
  ];

  const differentiators = [
    {
      icon: <FaBrain />,
      title: "Zero Learning Curve",
      desc: "Take a photo. Speak your entry. Done. No training required. Your 60-year-old father can use it."
    },
    {
      icon: <FaLanguage />,
      title: "Understands Indian Business",
      desc: "Speaks Hindi and English. Knows udhar, naqad, bill. Built for how you actually work, not textbook accounting."
    },
    {
      icon: <FaBrain />,
      title: "AI Does the Heavy Lifting",
      desc: "99.7% accurate extraction. Auto-categorization. Smart predictions. You just review and approve."
    },
    {
      icon: <FaWifi />,
      title: "Works in Real Conditions",
      desc: "Offline mode. Unreliable internet. Power cuts. Built for actual India, not ideal scenarios."
    },
    {
      icon: <FaRupeeSign />,
      title: "Pays for Itself in Week 1",
      desc: "Save 3 hours daily = ₹900/day. Kitaab costs ₹50/day. ROI is obvious."
    }
  ];

  const objections = [
    {
      question: "We're doing fine with Excel",
      answer: "You're not tracking receivables properly. 30% of your money is stuck. Excel doesn't send WhatsApp reminders or predict cash flow."
    },
    {
      question: "Too expensive for a small business",
      answer: "₹1,499/month vs 3 hours daily at ₹300/hour = ₹27,000/month saved. It's 5% of what you're currently paying in time."
    },
    {
      question: "What if we don't like it?",
      answer: "14-day trial. No credit card. Cancel anytime. Export all data. No lock-in."
    },
    {
      question: "Is our data safe?",
      answer: "Bank-grade encryption. SOC 2 certified. Stored in India. We never see your actual data."
    },
    {
      question: "We need human support",
      answer: "WhatsApp support in Hindi/English. Video tutorials. Onboarding call included. We're available when you need us."
    }
  ];

  const beforeAfter = {
    before: [
      "Evenings spent on data entry",
      "Guessing cash position",
      "GST deadline stress",
      "Chasing payments manually",
      "Can't answer: 'What's our profit this month?'"
    ],
    after: [
      "10 minutes daily review",
      "Real-time financial visibility",
      "GST filed in 5 minutes",
      "Automated payment reminders",
      "Dashboard answers every question"
    ]
  };

  const securityBadges = [
    { icon: <FaLock />, title: "256-bit encryption", desc: "(bank-grade)" },
    { icon: <FaShieldAlt />, title: "SOC 2 Type II certified", desc: "" },
    { icon: <FaServer />, title: "AWS infrastructure", desc: "(same as major banks)" },
    { icon: <FaCheckCircle />, title: "Data stored in India", desc: "(RBI compliant)" }
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
              Why Indian Businesses Choose{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 50%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Kitaab
              </span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              The real cost of manual bookkeeping isn't the hours—it's the missed opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hidden Cost of Chaos */}
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
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            What Manual Bookkeeping Actually Costs You
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#536471',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 64px',
            lineHeight: '1.7'
          }}>
            The Real Numbers:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {hiddenCosts.map((item, i) => (
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
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  color: '#dc2626',
                  marginBottom: '16px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#0f1419',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  fontWeight: '700',
                  color: '#dc2626',
                  margin: '0'
                }}>
                  {item.cost}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
              padding: '32px',
              borderRadius: '16px',
              textAlign: 'center',
              color: 'white'
            }}
          >
            <p style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: '0',
              lineHeight: '1.6'
            }}>
              "You're not saving money by doing it yourself. You're just paying with time instead of cash."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Traditional Software Fails */}
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
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Why Generic Accounting Software Doesn't Work
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#536471',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 64px',
            lineHeight: '1.7'
          }}>
            The Problem with Tally, Busy, etc.:
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'white',
            padding: '48px',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }}>
            {traditionalProblems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 0',
                  borderBottom: i < traditionalProblems.length - 1 ? '1px solid rgba(45, 98, 71, 0.1)' : 'none'
                }}
              >
                <FaTimesCircle style={{ color: '#dc2626', fontSize: '20px', flexShrink: 0 }} />
                <p style={{
                  fontSize: '1.0625rem',
                  color: '#536471',
                  margin: '0'
                }}>
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginTop: '48px'
            }}
          >
            <p style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#2D6247',
              fontStyle: 'italic',
              margin: '0'
            }}>
              "You need software that adapts to your business, not the other way around."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Kitaab Difference */}
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
            Built Different. Built for You.
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {differentiators.map((item, i) => (
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
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px',
                  letterSpacing: '-0.01em'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
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
            Perfect for Growing Businesses
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#0f1419',
                marginBottom: '20px'
              }}>
                Ideal For:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  "Monthly revenue: ₹10 lakhs to ₹10 crores",
                  "1-20 employees",
                  "Currently using: notebooks, Excel, or basic software",
                  "Pain points: Time waste, GST stress, cash flow uncertainty",
                  "Goal: Professional operations without hiring accountants"
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#536471',
                    lineHeight: '1.6'
                  }}>
                    <FaCheckCircle style={{ color: '#52B788', flexShrink: 0, marginTop: '4px', fontSize: '16px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#0f1419',
                marginBottom: '20px'
              }}>
                Not For:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  "Ultra-large enterprises (contact for custom)",
                  "Businesses below ₹10L monthly (use free tools)",
                  "Those who love complexity (we're radically simple)"
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#536471',
                    lineHeight: '1.6'
                  }}>
                    <FaTimesCircle style={{ color: '#dc2626', flexShrink: 0, marginTop: '4px', fontSize: '16px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Objections */}
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
            Questions We Always Get
          </h2>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {objections.map((item, i) => (
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
                  marginBottom: '24px',
                  border: '1px solid rgba(45, 98, 71, 0.1)'
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '12px'
                }}>
                  "{item.question}"
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  color: '#536471',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation */}
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
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px',
            letterSpacing: '-0.02em'
          }}>
            What Changes When You Use Kitaab
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#dc2626'
              }}>
                Before Kitaab:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {beforeAfter.before.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: '#8b98a5',
                    lineHeight: '1.6'
                  }}>
                    <FaTimesCircle style={{ color: '#dc2626', flexShrink: 0, marginTop: '4px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(82, 183, 136, 0.1)',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(82, 183, 136, 0.3)'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#52B788'
              }}>
                After Kitaab:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {beforeAfter.after.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px',
                    fontSize: '1rem',
                    color: 'white',
                    lineHeight: '1.6'
                  }}>
                    <FaCheckCircle style={{ color: '#52B788', flexShrink: 0, marginTop: '4px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginTop: '48px'
            }}
          >
            <p style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              fontStyle: 'italic',
              margin: '0',
              color: '#74C69D'
            }}>
              "You started a business to build something, not to be a bookkeeper. Let AI handle the books."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proof */}
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
            Real Businesses, Real Results
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}>
            {[
              { value: "2,847", label: "Active Businesses" },
              { value: "₹14.7 Cr", label: "Processed Monthly" },
              { value: "50,000+", label: "Hours Saved" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "40%", label: "Faster Collections" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: '800',
                  color: '#2D6247',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#536471',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security (Condensed) */}
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
            Built on Enterprise-Grade Infrastructure
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {securityBadges.map((badge, i) => (
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
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  color: '#2D6247',
                  marginBottom: '16px'
                }}>
                  {badge.icon}
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '4px'
                }}>
                  {badge.title}
                </h3>
                {badge.desc && (
                  <p style={{
                    fontSize: '0.9375rem',
                    color: '#536471',
                    margin: '0'
                  }}>
                    {badge.desc}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          <div style={{
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#536471',
              marginBottom: '16px'
            }}>
              Regular security audits • Your data never shared • RBI compliant
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
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
              Experience the Difference
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              marginBottom: '48px'
            }}>
              Join 500+ businesses transforming their bookkeeping
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
                  background: 'white',
                  color: '#2D6247',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                Start 14-Day Free Trial
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontSize: '1.0625rem',
                  fontWeight: '600',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
              >
                Talk to Our Team
              </motion.a>
            </div>
            <p style={{
              fontSize: '0.9375rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '32px'
            }}>
              No credit card • Full features • Cancel anytime
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              {[
                "99.7% AI accuracy",
                "Bank-grade security",
                "Data stays in India",
                "Cancel anytime"
              ].map((badge, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '0.9375rem',
                  color: 'white'
                }}>
                  <FaCheckCircle />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyKitaab;
