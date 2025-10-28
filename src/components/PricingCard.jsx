import { motion } from 'framer-motion';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PricingCard = ({ title, price, features, icon }) => {
  return (
    <motion.div
      className="new-pricing-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'white',
        border: '2px solid rgba(82, 183, 136, 0.15)',
        borderRadius: '24px',
        padding: '48px 40px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease'
      }}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 60px rgba(82, 183, 136, 0.15)',
        borderColor: 'var(--primary-teal)'
      }}
    >
      <div className="pricing-card-icon-wrapper" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="pricing-card-building-icon" style={{
          position: 'relative',
          display: 'inline-block',
          fontSize: '64px',
          color: 'var(--primary-teal)'
        }}>
          {icon}
          <FaMapMarkerAlt
            style={{
              position: 'absolute',
              bottom: '-5px',
              right: '-5px',
              fontSize: '24px',
              color: 'var(--dark-teal)'
            }}
          />
        </div>
      </div>

      <div className="pricing-card-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: '700',
          color: 'var(--gray-900)',
          marginBottom: '16px'
        }}>
          {title}
        </h3>
        <div style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: 'var(--primary-teal)',
          lineHeight: 1
        }}>
          ₹{price.toLocaleString('en-IN')}{' '}
          <span style={{
            fontSize: '1.25rem',
            fontWeight: '400',
            color: 'var(--gray-600)'
          }}>
            /month
          </span>
        </div>
      </div>

      <ul className="pricing-card-features" style={{
        listStyle: 'none',
        margin: '32px 0',
        padding: 0
      }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 0',
            color: 'var(--gray-900)',
            fontSize: '1rem',
            borderBottom: index < features.length - 1 ? '1px solid rgba(82, 183, 136, 0.1)' : 'none'
          }}>
            <FaCheckCircle style={{
              color: '#10B981',
              fontSize: '20px',
              flexShrink: 0
            }} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        className="btn-choose-plan"
        style={{
          width: '100%',
          padding: '16px 32px',
          background: 'linear-gradient(135deg, #52B788 0%, #3A7D5C 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '1.125rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(82, 183, 136, 0.25)',
          transition: 'all 0.3s ease'
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 8px 24px rgba(82, 183, 136, 0.4)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.element.isRequired
};

export default PricingCard;
