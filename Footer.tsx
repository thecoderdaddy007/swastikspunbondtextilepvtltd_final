import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Swastik Spunbond</h3>
                <p className="text-gray-400">Textile Private Limited</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Technology-driven textile machinery company empowering farmers, FPOs, and rural entrepreneurs 
              with advanced agricultural solutions since 2022.
            </p>

            {/* Legal Information */}
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong>CIN:</strong> U74110MP2022PTC061150</p>
              <p><strong>Directors:</strong> Aryan Singh Parihar & Shashi Prabha</p>
              <p><strong>Established:</strong> 31 May 2022</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://wa.me/918269721027" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors"
                title="WhatsApp"
              >
                📱
              </a>
              <a 
                href="mailto:Swastik859@gmail.com" 
                className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                title="Email"
              >
                📧
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Solutions for FPOs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-green-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">+91 8269721027</p>
                  <p className="text-gray-400 text-sm">WhatsApp & Call</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Swastik859@gmail.com</p>
                  <p className="text-gray-400 text-sm">Official Email</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Registered Office:</p>
                  <p className="text-gray-400 text-sm">
                    Plot No. 27, Apparel Cluster,<br />
                    Bijepur (Betma), Dhar Road,<br />
                    Indore, Madhya Pradesh – 453001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Summary */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-bold mb-4">Our Product Range</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <p>• Crop Cover Making Machines</p>
              <p>• EPE Foam Net Machines</p>
            </div>
            <div>
              <p>• Fruit Protection Bag Machines</p>
              <p>• Seed Feeding Machines</p>
            </div>
            <div>
              <p>• Non-Woven Bag Making Machines</p>
              <p>• Paper Cup & Glass Making Machines</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Swastik Spunbond Textile Private Limited. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                CIN: U74110MP2022PTC061150 | Indore, Madhya Pradesh, India
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={scrollToTop}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Verified Business Entity</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">✓</span>
              <span>Active Company Status</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-400">✓</span>
              <span>Canara Bank Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-400">✓</span>
              <span>Compliance Up-to-Date</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}