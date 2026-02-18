import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-coffee py-6 mt-12">
      <div className="container mx-auto text-center">
        <div className="space-y-2">
          <p className="text-sm font-medium">
            © 2026 Berry Bora | Empowering Kenyan Coffee Farmers
          </p>
          <p className="text-xs opacity-75">
             Nairobi, Kenya
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-green-200 transition-colors">
              <i className="fas fa-phone mr-1"></i>
              Contact
            </a> | 
            <a href="#" className="hover:text-green-200 transition-colors">
              <i className="fas fa-info-circle mr-1"></i>
              About
            </a> 
            <a href="#" className="hover:text-green-200 transition-colors">
              <i className="fas fa-question-circle mr-1"></i>
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;