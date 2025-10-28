import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    plan: 'business'
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!formData.name) newErrors.name = 'Your name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password && formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('https://kitaab-api-production.up.railway.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          business_name: formData.businessName,
          owner_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Redirect to login or dashboard after a delay
        setTimeout(() => {
          window.location.href = 'https://app.kitaab.live';
        }, 2000);
      } else {
        const error = await response.json();
        setStatus('error');
        setErrors({ submit: error.detail || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      setStatus('error');
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google OAuth
    alert('Google signup coming soon!');
  };

  return (
    <div className="landing-page">
      <Navigation />

      <section className="hero">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="hero-content">
            <h1>Start Your <span className="gradient-text">7-Day Free Trial</span></h1>
            <p className="hero-subtitle">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--gray-900)' }}>Create Your Account</h2>

              {status === 'success' && (
                <div style={{ padding: '1rem', background: '#d1fae5', borderRadius: '0.5rem', marginBottom: '1.5rem', color: '#065f46' }}>
                  <FaCheckCircle style={{ marginRight: '0.5rem' }} />
                  Account created! Redirecting to app...
                </div>
              )}

              {errors.submit && (
                <div style={{ padding: '1rem', background: '#fee2e2', borderRadius: '0.5rem', marginBottom: '1.5rem', color: '#991b1b' }}>
                  {errors.submit}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: '2px solid var(--gray-200)',
                      fontSize: '1rem',
                      background: 'var(--gray-50)',
                      color: 'var(--gray-900)',
                      fontWeight: 600
                    }}
                  >
                    <option value="business">Business Plan - ₹1,499/month</option>
                    <option value="essential">Essential Plan - ₹2,499/month</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Business Name *"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: `2px solid ${errors.businessName ? '#ef4444' : 'var(--gray-200)'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.businessName && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.businessName}</span>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: `2px solid ${errors.name ? '#ef4444' : 'var(--gray-200)'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.name}</span>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: `2px solid ${errors.email ? '#ef4444' : 'var(--gray-200)'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: `2px solid ${errors.phone ? '#ef4444' : 'var(--gray-200)'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.phone}</span>}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create Password *"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      border: `2px solid ${errors.password ? '#ef4444' : 'var(--gray-200)'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.password && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.password}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={status === 'loading'}
                  style={{ marginBottom: '1rem' }}
                >
                  {status === 'loading' ? 'Creating Account...' : 'Start Free Trial'}
                </button>

                <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--gray-600)' }}>or</div>

                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'white',
                    color: 'var(--gray-900)',
                    border: '2px solid var(--gray-300)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FaGoogle /> Continue with Google
                </button>
              </form>

              <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                Already have an account? <Link to="https://app.kitaab.live" style={{ color: 'var(--primary-purple)', fontWeight: 600 }}>Login</Link>
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 style={{ marginBottom: '1.5rem' }}>What's included in your trial:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Full access to all Business plan features',
                  'Unlimited AI invoice scanning',
                  'WhatsApp business integration',
                  'GST filing automation',
                  'Real-time analytics dashboard',
                  'Priority email support',
                  '3 team member accounts',
                  'No credit card required'
                ].map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <FaCheckCircle style={{ color: '#10b981', fontSize: '1.25rem', flexShrink: 0, marginTop: '0.125rem' }} />
                    <p style={{ margin: 0, fontSize: '1.125rem', color: 'var(--gray-700)' }}>{benefit}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--gray-50)', borderRadius: '1rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--gray-900)' }}>After your trial:</h4>
                <p style={{ margin: 0, color: 'var(--gray-700)' }}>
                  Your trial automatically ends after 7 days. Choose to continue with paid plan or cancel - no charges, no questions asked.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signup;
