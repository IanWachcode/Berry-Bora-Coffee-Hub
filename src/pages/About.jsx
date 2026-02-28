import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '2rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        <div style={{
          width: '5rem',
          height: '5rem',
          backgroundColor: '#6d4c41',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem'
        }}>
          <i className="fas fa-coffee" style={{ fontSize: '2.5rem', color: 'white' }}></i>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', color: '#6d4c41', marginBottom: '0.5rem' }}>
        Berry Bora Coffee Hub
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
          Empowering Coffee Farmers Through Secure Data Management and Real-Time Insights
        </p>
      </div>

      {/* Introduction */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#6d4c41', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-seedling" style={{ color: '#3d8b3d' }}></i>
          What We Do
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
          Berry Bora Coffee Hub is a digital platform dedicated to supporting coffee farmers through secure and accurate harvest record management. 
          We enable farmers to safely document and store detailed harvest data to ensure transparency, accountability, and precision during payment periods. 
          Our objective is to replace unreliable manual record-keeping methods with a secure and structured digital system that guarantees accuracy and easy access to harvest information whenever required.
        </p>
      </div>

      {/* Mission Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#6d4c41', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-bullseye" style={{ color: '#3d8b3d' }}></i>
          Our Mission
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
          Our mission is to empower coffee farmers with accurate data and timely information that 
          improves productivity and profitability. By tracking harvest records season after season, 
          farmers can analyze performance, identify trends, and make better decisions for future 
          planting and production.
        </p>
      </div>
      {/* Key Features */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#6d4c41', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-star" style={{ color: '#3d8b3d' }}></i>
          What We Offer
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {/* Secure Record Keeping */}
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-database" style={{ fontSize: '1.5rem', color: '#3d8b3d' }}></i>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Secure Record Keeping</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
              Safely store tree numbers, input usage, labor details, and harvest records. Replace 
              unreliable paper records with organized digital storage accessible anytime.
            </p>
            <Link to="/weights" style={{ color: '#3d8b3d', fontWeight: '600', textDecoration: 'underline' }}>Record Harvest</Link>  
          </div>

          {/* Real-Time Alerts */}
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-bell" style={{ fontSize: '1.5rem', color: '#3d8b3d' }}></i>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Real-Time Alerts</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
              Receive early notifications about weather conditions, coffee diseases, pest outbreaks, and market price changes. 
              Take preventive action and reduce crop losses before problems become serious.
            </p>
            <Link to="/alerts" style={{ color: '#3d8b3d', fontWeight: '600', textDecoration: 'underline' }}>View Alerts</Link>
          </div>

          {/* Performance Analysis */}
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-chart-line" style={{ fontSize: '1.5rem', color: '#3d8b3d' }}></i>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Performance Analysis</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
              Track harvest records season after season to analyze performance, identify trends, 
              and make better decisions for future planting and production.
            </p>
            <Link to="/trends" style={{ color: '#3d8b3d', fontWeight: '600', textDecoration: 'underline' }}>View Trends</Link>
          </div>

          {/* Market Price Insights */}
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <i className="fas fa-tag" style={{ fontSize: '1.5rem', color: '#3d8b3d' }}></i>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Market Price Insights</h3>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: '1.5' }}>
              Access up-to-date coffee price trends from Nairobi Coffee Exchange. Make informed 
              selling decisions based on real market data.
            </p>
            <Link to="/prices" style={{ color: '#3d8b3d', fontWeight: '600', textDecoration: 'underline' }}>View Prices</Link>
          </div>
        </div>
      </div>

      {/* Why Choose Berry Bora */}
      <div style={{
        backgroundColor: '#dcfce7',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        border: '2px solid #16a34a'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#166534', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-check-circle" style={{ color: '#16a34a' }}></i>
          Why Choose Berry Bora?
        </h2>
        <ul style={{ 
          fontSize: '1rem', 
          color: '#166534', 
          lineHeight: '1.75',
          paddingLeft: '1.5rem',
          margin: 0
        }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Replace Paper Records:</strong> No more lost or damaged notebooks
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Early Warning System:</strong> Prevent crop losses with timely alerts
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Data-Driven Decisions:</strong> Track trends and improve productivity
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Market Oversight:</strong> Know when to sell for best prices
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Accessible Anytime:</strong> Your data is always available when you need it
          </li>
        </ul>
      </div>

      {/* Technology Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#6d4c41', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-laptop-code" style={{ color: '#3d8b3d' }}></i>
          Our Technology
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
          Berry Bora is built with modern web technologies to ensure a fast, reliable, and 
          secure experience:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <i className="fas fa-shield-alt" style={{ color: '#3d8b3d', marginTop: '0.25rem' }}></i>
            <div>
              <strong style={{ fontSize: '0.875rem' }}>Secure Storage:</strong>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                Your data is stored safely and privately
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <i className="fas fa-mobile-alt" style={{ color: '#3d8b3d', marginTop: '0.25rem' }}></i>
            <div>
              <strong style={{ fontSize: '0.875rem' }}>Mobile Friendly:</strong>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                Works on any device, anywhere
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <i className="fas fa-cloud" style={{ color: '#3d8b3d', marginTop: '0.25rem' }}></i>
            <div>
              <strong style={{ fontSize: '0.875rem' }}>Real-Time Data:</strong>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                Live updates from trusted sources
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem' }}>
            <i className="fas fa-lock" style={{ color: '#3d8b3d', marginTop: '0.25rem' }}></i>
            <div>
              <strong style={{ fontSize: '0.875rem' }}>Privacy First:</strong>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: '0.25rem 0 0 0' }}>
                Your farm data stays private
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#6d4c41', 
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <i className="fas fa-envelope" style={{ color: '#3d8b3d' }}></i>
          Get in Touch
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem', 
          fontSize: '0.875rem', 
          color: '#374151' 
        }}>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.25rem', color: '#6d4c41' }}>SMS Helpline:</strong>
            <p style={{ margin: 0 }}>Send <strong>HELP</strong> to <strong>22000</strong></p>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.25rem', color: '#6d4c41' }}>Email:</strong>
            <p style={{ margin: 0 }}>support@berrybora.ke</p>
          </div>
          <div>
            <strong style={{ display: 'block', marginBottom: '0.25rem', color: '#6d4c41' }}>Location:</strong>
            <p style={{ margin: 0 }}>Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* Commitment Statement */}
      <div style={{
        backgroundColor: '#6d4c41',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '2rem',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Building a Smarter Coffee Farming Community
        </h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.75', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
          Berry Bora is committed to combining secure data management with practical, actionable 
          insights. Together, we're building a more resilient and prosperous coffee farming 
          community in Kenya.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41', marginBottom: '1rem' }}>
          Ready to Get Started?
        </h3>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
          Start managing your coffee farm data more effectively today
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/weights"
            style={{
              display: 'inline-block',
              backgroundColor: '#3d8b3d',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            <i className="fas fa-weight" style={{ marginRight: '0.5rem' }}></i>
            Record Harvest
          </Link>
          <Link
            to="/prices"
            style={{
              display: 'inline-block',
              backgroundColor: '#6d4c41',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            <i className="fas fa-tag" style={{ marginRight: '0.5rem' }}></i>
            View Prices
          </Link>
          <Link
            to="/prices"
            style={{
              display: 'inline-block',
              backgroundColor: 'blue',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            <i className="fas fa-cloud-sun" style={{ marginRight: '0.5rem' }}></i>
            Weather Alerts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;