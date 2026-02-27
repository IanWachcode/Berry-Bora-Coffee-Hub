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
          About Berry Bora
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Empowering Kenyan Coffee Farmers with Technology
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
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className="fas fa-bullseye" style={{ color: '#3d8b3d' }}></i>
          Our Mission
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
          Berry Bora is dedicated to empowering Kenyan coffee farmers with real-time market insights, 
          weather alerts, and tools to manage their harvest efficiently. We believe that access to 
          information and technology can transform the lives of smallholder farmers across Kenya.
        </p>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.75' }}>
          Our platform combines government data from KilimoSTAT with modern web technology to provide 
          farmers with the tools they need to make informed decisions about their coffee production 
          and sales.
        </p>
      </div>

      {/* Features Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className="fas fa-star" style={{ color: '#3d8b3d' }}></i>
          What We Offer
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem' }}>
            <i className="fas fa-chart-line" style={{ fontSize: '2rem', color: '#3d8b3d', marginBottom: '0.5rem' }}></i>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Real-Time Prices</h3>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              Get up-to-date coffee prices from Nairobi Coffee Exchange and local markets.
            </p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem' }}>
            <i className="fas fa-cloud-sun-rain" style={{ fontSize: '2rem', color: '#3d8b3d', marginBottom: '0.5rem' }}></i>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Weather Alerts</h3>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              Receive timely weather alerts to protect your crops and plan harvesting.
            </p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem' }}>
            <i className="fas fa-weight" style={{ fontSize: '2rem', color: '#3d8b3d', marginBottom: '0.5rem' }}></i>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Harvest Tracking</h3>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              Record and track your coffee harvest weights across seasons.
            </p>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem' }}>
            <i className="fas fa-mobile-alt" style={{ fontSize: '2rem', color: '#3d8b3d', marginBottom: '0.5rem' }}></i>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>SMS Support</h3>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              Access key features via SMS - no internet required for basic functions.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className="fas fa-laptop-code" style={{ color: '#3d8b3d' }}></i>
          Our Technology
        </h2>
        <p style={{ fontSize: '1rem', color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
          Berry Bora is built with modern web technologies to ensure a fast, reliable, and 
          user-friendly experience:
        </p>
        <ul style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.75', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>React 19:</strong> Modern JavaScript framework for a smooth user experience
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>KilimoSTAT API:</strong> Official Kenya Ministry of Agriculture data
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>OpenWeather API:</strong> Accurate weather data for farming regions
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Progressive Web App:</strong> Works offline and can be installed on mobile devices
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Local Storage:</strong> Your data is stored securely on your device
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div style={{
        backgroundColor: '#dcfce7',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        border: '2px solid #16a34a'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#166534', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <i className="fas fa-envelope" style={{ color: '#16a34a' }}></i>
          Get in Touch
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.875rem', color: '#166534' }}>
          <div>
            <strong>SMS Helpline:</strong>
            <p style={{ marginTop: '0.25rem' }}>Send <strong>HELP</strong> to <strong>22000</strong></p>
          </div>
          <div>
            <strong>Email:</strong>
            <p style={{ marginTop: '0.25rem' }}>support@berrybora.ke</p>
          </div>
          <div>
            <strong>Location:</strong>
            <p style={{ marginTop: '0.25rem' }}>Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6d4c41', marginBottom: '1rem' }}>
          Ready to Get Started?
        </h3>
        <Link
          to="/prices"
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
          <i className="fas fa-arrow-right" style={{ marginRight: '0.5rem' }}></i>
          View Coffee Prices
        </Link>
      </div>
    </div>
  );
};

export default About;