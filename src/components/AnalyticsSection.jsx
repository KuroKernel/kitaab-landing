import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaSpotify, FaAmazon, FaGoogle } from 'react-icons/fa';

const AnalyticsSection = () => {
  const [activeTab, setActiveTab] = useState('Month');

  const financialGoals = [
    { id: 1, text: "Paying off high cost debt", selected: true },
    { id: 2, text: "Build savings", selected: false },
    { id: 3, text: "Save for retirement", selected: false },
    { id: 4, text: "Move to a new home", selected: false },
    { id: 5, text: "Accelerate my mortgage paydown", selected: false },
    { id: 6, text: "Purchase an investment property", selected: false },
    { id: 7, text: "Accelerate mortgage pay", selected: false },
    { id: 8, text: "Other", selected: false }
  ];

  const transactions = [
    { brand: "Apple", logo: <FaApple />, amount: "- $28.50", time: "10:24 AM", type: "expense" },
    { brand: "Spotify", logo: <FaSpotify />, amount: "- $12.99", time: "09:15 AM", type: "expense" },
    { brand: "Amazon", logo: <FaAmazon />, amount: "- $156.00", time: "Yesterday", type: "expense" },
    { brand: "Google", logo: <FaGoogle />, amount: "+ $2,500", time: "Yesterday", type: "income" }
  ];

  return (
    <section className="analytics-section">
      <div className="container">
        <h2 className="section-title">Financial Overview & Analytics</h2>
        <p className="section-description">Track your spending, manage your goals, and stay on top of your finances</p>

        <div className="analytics-grid">
          {/* Chart Card */}
          <div className="analytics-card">
            <div className="tab-toggle">
              {['Week', 'Month', 'Year'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="donut-chart-wrapper">
              <svg viewBox="0 0 200 200" className="donut-chart">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#A8E6CF"
                  strokeWidth="30"
                  strokeDasharray="251.2 502.4"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#52B788"
                  strokeWidth="30"
                  strokeDasharray="125.6 502.4"
                  strokeDashoffset="-251.2"
                  transform="rotate(-90 100 100)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#3A7D5C"
                  strokeWidth="30"
                  strokeDasharray="125.6 502.4"
                  strokeDashoffset="-376.8"
                  transform="rotate(-90 100 100)"
                />
              </svg>
              <div className="chart-center-text">
                <div className="chart-amount">$8,245</div>
                <div className="chart-label">Total Balance</div>
              </div>
            </div>

            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#3A7D5C' }}></span>
                <span>Expenses</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#52B788' }}></span>
                <span>Savings</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: '#A8E6CF' }}></span>
                <span>Income</span>
              </div>
            </div>
          </div>

          {/* Financial Goals Card */}
          <div className="analytics-card">
            <h3 className="card-title">What are your top 3 financial goals this year?</h3>
            <div className="goals-grid">
              {financialGoals.map((goal) => (
                <motion.button
                  key={goal.id}
                  className={`goal-pill ${goal.selected ? 'selected' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {goal.text}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Transactions Card */}
          <div className="analytics-card">
            <div className="card-header">
              <h3 className="card-title">Recent Transactions</h3>
              <span className="card-date">Today, 2 Dec</span>
            </div>
            <div className="transactions-list">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={index}
                  className="transaction-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="transaction-icon">{transaction.logo}</div>
                  <div className="transaction-details">
                    <div className="transaction-brand">{transaction.brand}</div>
                    <div className="transaction-time">{transaction.time}</div>
                  </div>
                  <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.amount}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
