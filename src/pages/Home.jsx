import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="landing-page">
      <Navigation />

      {/* Hero Section */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '120px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fdfb 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(82, 183, 136, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
          >
            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: '800',
              color: '#0f1419',
              lineHeight: '1.15',
              marginBottom: '32px',
              letterSpacing: '-0.02em'
            }}>
              Stop Losing Money to<br />
              <span style={{
                background: 'linear-gradient(135deg, #2D6247 0%, #52B788 50%, #74C69D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Bookkeeping Chaos</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: '#536471',
              lineHeight: '1.7',
              marginBottom: '24px',
              maxWidth: '720px',
              margin: '0 auto 24px',
              fontWeight: '400'
            }}>
              Built around insight, liquidity, and control, not bookkeeping.
            </p>

            {/* Trust Line */}
            <p style={{
              fontSize: '15px',
              color: '#8b98a5',
              marginBottom: '48px',
              fontWeight: '500'
            }}>
              Built for Indian SMBs • Launch Special: 50% Off
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: '24px'
            }}>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '18px 48px',
                    background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(82, 183, 136, 0.35), 0 2px 8px rgba(45, 98, 71, 0.2)',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.3px'
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
                    padding: '18px 48px',
                    background: 'white',
                    color: '#2D6247',
                    border: '2px solid #2D6247',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.3px'
                  }}
                >
                  Watch Demo
                </motion.button>
              </Link>
            </div>

            {/* Below CTA Text */}
            <p style={{
              fontSize: '14px',
              color: '#8b98a5',
              fontWeight: '400'
            }}>
              14-day trial • No credit card • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Card Showcase */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(180deg, #f8fdfb 0%, #f0faf5 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                width: '420px',
                height: '260px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #0a5f61 0%, #2D6247 30%, #52B788 100%)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 32px 64px rgba(0, 0, 0, 0.18), 0 12px 24px rgba(45, 98, 71, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Glossy overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
                pointerEvents: 'none'
              }}></div>

              {/* Chip */}
              <div style={{
                width: '56px',
                height: '44px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFED4E 50%, #FFA500 100%)',
                borderRadius: '10px',
                marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                position: 'relative',
                zIndex: 1
              }}></div>

              {/* Card Brand */}
              <div style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '3px',
                marginBottom: '16px',
                opacity: 0.95,
                textTransform: 'uppercase',
                position: 'relative',
                zIndex: 1
              }}>KITAAB</div>

              {/* Balance - Changed to ₹ */}
              <div style={{
                fontSize: '36px',
                fontWeight: '800',
                letterSpacing: '1px',
                marginBottom: 'auto',
                position: 'relative',
                zIndex: 1,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
              }}>₹....453</div>

              {/* Card Details */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                position: 'absolute',
                bottom: '32px',
                left: '32px',
                right: '32px',
                zIndex: 1
              }}>
                <div>
                  <div style={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    opacity: 0.75,
                    letterSpacing: '1px',
                    marginBottom: '4px',
                    fontWeight: '600'
                  }}>You're in</div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '0.3px'
                  }}>Control</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    opacity: 0.75,
                    letterSpacing: '1px',
                    marginBottom: '4px',
                    fontWeight: '600'
                  }}>Peace of</div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    letterSpacing: '0.3px'
                  }}>Mind</div>
                </div>
              </div>

              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '120px 0',
        background: 'white'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              fontWeight: '800',
              color: '#0f1419',
              lineHeight: '1.2',
              marginBottom: '24px',
              letterSpacing: '-0.01em'
            }}>
              The Most Beautiful Way to Run a Business
            </h2>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '48px',
            marginBottom: '80px'
          }}>
            {[
              {
                title: "Scan Invoices, Extract Everything",
                description: "Photograph any bill. AI reads items, quantities, prices, GST details. Your inventory updates automatically. No data entry. Works in Hindi, English, or both."
              },
              {
                title: "Speak Your Transactions",
                description: "Record sales by voice. 'Ramesh ko paanch hazaar ka payment bheja.' Done. The system understands Indian business language. Hindi, English, Hinglish—all work."
              },
              {
                title: "WhatsApp Your Invoices",
                description: "Send bills and payment reminders via WhatsApp. Automated follow-ups. Businesses collect 40% faster because customers actually see and respond to WhatsApp."
              },
              {
                title: "Know Your Numbers Instantly",
                description: "Cash position. Profit margins. Inventory levels. Outstanding payments. Who owes what. Real-time dashboard. Make decisions based on data, not guesses."
              },
              {
                title: "File GST in 5 Minutes",
                description: "Returns auto-generated from daily transactions. Review, approve, file. No manual compilation. No missed deadlines. No penalties. Compliance becomes trivial."
              },
              {
                title: "Works Without Internet",
                description: "Record transactions offline. System syncs when connection returns. Built for real Indian conditions—unreliable power, inconsistent connectivity, actual ground reality."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  textAlign: 'left'
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f1419',
                  marginBottom: '16px',
                  lineHeight: '1.3'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1.0625rem',
                  color: '#536471',
                  lineHeight: '1.7',
                  fontWeight: '400'
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(180deg, #f8fdfb 0%, #f0faf5 100%)'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.25rem, 5vw, 3rem)',
            fontWeight: '800',
            color: '#0f1419',
            textAlign: 'center',
            marginBottom: '80px',
            letterSpacing: '-0.01em'
          }}>
            Impact
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px'
          }}>
            {[
              { value: "AI-Powered", label: "Invoice Scanning" },
              { value: "3+ Hours", label: "Saved Daily" },
              { value: "GST Ready", label: "Compliance Built-in" },
              { value: "Free Trial", label: "No Credit Card" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #2D6247 0%, #52B788 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '12px',
                  lineHeight: '1.1'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '1.125rem',
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

      {/* Final CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a3a2e 0%, #2D6247 50%, #1f4d3c 100%)',
        padding: '112px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(82, 183, 136, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto', color: 'white', position: 'relative', zIndex: 1 }}
          >
            <h2 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3rem)',
              fontWeight: '800',
              marginBottom: '16px',
              lineHeight: '1.2',
              letterSpacing: '-0.01em'
            }}>
              Transform Your Business Management Today
            </h2>

            <p style={{
              fontSize: '1.125rem',
              opacity: 0.92,
              marginBottom: '48px',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              14-day trial. No credit card required.
            </p>

            {/* Email Signup Form */}
            <div style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '540px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <input
                type="email"
                placeholder="Your business email"
                style={{
                  flex: '1',
                  minWidth: '280px',
                  padding: '18px 24px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  fontWeight: '500'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              />
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '18px 36px',
                    background: 'linear-gradient(135deg, #52B788 0%, #74C69D 100%)',
                    color: '#0f1419',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 8px 20px rgba(82, 183, 136, 0.3)',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.3px'
                  }}
                >
                  Start Free Trial
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

export default Home;
