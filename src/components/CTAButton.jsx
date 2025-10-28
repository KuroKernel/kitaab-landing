import { Link } from 'react-router-dom';

const CTAButton = ({ children, variant = 'primary', size = 'lg', to = '/signup', ...props }) => {
  const className = `btn btn-${variant} btn-${size}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default CTAButton;
