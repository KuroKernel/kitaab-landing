import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const IconCard = ({ icon, title, badge }) => {
  return (
    <motion.div
      className="icon-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        boxShadow: '0 12px 32px rgba(82, 183, 136, 0.2)',
        borderColor: 'var(--primary-teal)'
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '32px 24px',
        textAlign: 'center',
        border: '2px solid rgba(82, 183, 136, 0.1)',
        position: 'relative',
        cursor: 'pointer'
      }}
    >
      {badge && (
        <span
          className="icon-card-badge"
          style={{
            position: 'absolute',
            top: '-10px',
            right: '10px',
            background: '#EF4444',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)'
          }}
        >
          {badge}
        </span>
      )}
      <div
        style={{
          width: '64px',
          height: '64px',
          margin: '0 auto 16px',
          background: 'linear-gradient(135deg, #A8E6CF 0%, #52B788 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(82, 183, 136, 0.25)',
          fontSize: '32px',
          color: 'white'
        }}
      >
        {icon}
      </div>
      <h4
        style={{
          fontSize: '14px',
          fontWeight: '600',
          color: 'var(--gray-900)',
          lineHeight: '1.4',
          margin: 0
        }}
      >
        {title}
      </h4>
    </motion.div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  badge: PropTypes.string
};

export default IconCard;
