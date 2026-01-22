import { useState } from 'react';
import './App.css';
import InsuranceCard from './InsuranceCard';
import Claims from './Claim';
import carImage from './car.png';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (

    <div className="dashboard-container">
      {activeTab === 'home' && (
        <div>
          <div className="blue-theme-wrapper">
            <header className="header">
              <div className="user-info">
                <h1 className="title">AI Insurance Dashboard</h1>
              </div>
              <div className="profile-img-container">
                <img src="https://i.pravatar.cc/100?img=32" alt="profile" className="avatar-img" />
              </div>
            </header>

            <div className="main-content-sheet">
              <div className="welcome-header">
                <h2 className="subtitle">Welcome back, Mike!</h2>
                <p className="overview-text">Here's your performance overview.</p>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  {/* <div className="stat-icon-circle">📩</div> */}
                  <span className="stat-value">132</span>
                  <span className="stat-label">Active policies</span>
                </div>
                <div className="stat-card border-left">
                  <span className="stat-value">38%</span>
                  <span className="stat-label">Conv. rate</span>
                </div>
                <div className="stat-card border-left">
                  <span className="stat-value">2m 45s</span>
                  <span className="stat-label">Quote time</span>
                </div>
              </div>

              <div className="card revenue-card">
                <div className="revenue-content">
                  <div>
                    <span className="revenue-amount">$43,200<span className="asterisk">*</span></span>
                    <p className="label">AI REVENUE TODAY</p>
                  </div>
                  <div className="revenue-growth">
                    <span className="pill">+73% WAW</span>
                    <p className="growth-sub">up last week</p>
                  </div>
                </div>
              </div>

              <div >
                <div
                  className="card tracking-card"
                  style={{ backgroundImage: `url(${carImage})` }}
                >
                  <div className="tracking-overlay"></div>
                  <div className="tracking-content">
                    <h4 className="tracking-title">Smart Tracking</h4>
                    <div className="tracking-stats">
                      <span className="tracking-value">+800</span>
                      <span className="tracking-label">Policies</span>
                    </div>
                    <p className="tracking-subtext">this month</p>
                  </div>
                </div>



              </div>

              <section className="policies-section">
                <div className="section-header">
                  <h3 className="section-title">Policies</h3>
                  <span className="section-link">bar export</span>
                </div>

                <div className="policy-grid">
                  <div className="policy-row">
                    <div className="policy-item">
                      <span className="policy-icon blue-text">S</span>
                      <span className="policy-number">6,476</span>
                      <span className="policy-status">Low</span>
                    </div>
                    <div className="policy-item">
                      <span className="status-check checked">✓</span>
                      <span className="policy-number">3,382</span>
                    </div>
                  </div>

                  <div className="policy-row">
                    <div className="policy-item">
                      <span className="policy-icon navy-text">🛡️</span>
                      <span className="policy-number">2,814</span>
                      <span className="policy-status">Medium</span>
                    </div>
                    <div className="policy-item">
                      <span className="status-check pending">📋</span>
                      <span className="policy-number">280</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="claims-section">
                <h3 className="section-title">Claims</h3>

                <div className="card claim-item">
                  <div className="claim-left">
                    <div className="avatar"></div>
                    <div>
                      <p className="claim-name">Houston, TX</p>
                      <span className="tag collision">Collision</span>
                    </div>
                  </div>
                  <div className="claim-right">
                    <p className="claim-time">23m</p>
                    <span className="priority-high">● High</span>
                  </div>
                </div>

                <div className="card claim-item">
                  <div className="claim-left">
                    <div className="avatar"></div>
                    <div>
                      <p className="claim-name">Sarah Peterson</p>
                      <span className="tag medium">Medium</span>
                    </div>
                  </div>
                  <div className="claim-right">
                    <p className="claim-time">119m</p>
                    <span className="priority-med">● Medium</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'claims' && (
        <Claims onComplete={() => setActiveTab('home')} />
      )}
      {activeTab === 'profile' && (
        <InsuranceCard />
      )}

      <nav className="bottom-nav">
        <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>Home</div>
        <div className="nav-item">Policies</div>
        <div className={`nav-item ${activeTab === 'claims' ? 'active' : ''}`} onClick={() => setActiveTab('claims')}>Claims</div>
        <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</div>
      </nav>
    </div>
  );
}

export default App;

