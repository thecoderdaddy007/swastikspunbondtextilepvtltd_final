import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                Swastik Spunbond
              </h1>
              <p className="text-sm text-gray-600">Textile Pvt. Ltd.</p>
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={16} className="text-green-600" />
              <span className="text-sm font-medium">+91 8269721027</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail size={16} className="text-blue-600" />
              <span className="text-sm">Swastik859@gmail.com</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Solutions for FPOs
            </button>
            <button 
              onClick={onContactClick}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600"
              >
                Solutions for FPOs
              </button>
              
              {/* Mobile Contact Info */}
              <div className="px-4 py-3 bg-gray-50 space-y-2">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone size={16} className="text-green-600" />
                  <span className="text-sm font-medium">+91 8269721027</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Mail size={16} className="text-blue-600" />
                  <span className="text-sm">Swastik859@gmail.com</span>
                </div>
                <button 
                  onClick={onContactClick}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium mt-2"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}