import React from 'react';
import { ArrowRight, Tractor, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onGetQuoteClick: () => void;
}

export default function Hero({ onGetQuoteClick }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 6.627-5.373 12-12 12s-12-5.373-12-12S1.373 8 8 8s12 5.373 12 12zm-8 0c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 pt-16 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap size={16} />
                <span>Technology-Driven Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bringing Innovation to
                <span className="text-green-600 block">Modern Agriculture</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Specialist in Technology-Driven Agricultural Solutions. Empowering FPOs, farmers, and entrepreneurs with advanced machinery for profitable mini-industries.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Tractor size={16} className="text-green-600" />
                </div>
                <span className="text-sm font-medium">Advanced Machinery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp size={16} className="text-blue-600" />
                </div>
                <span className="text-sm font-medium">Boost Farm Income</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-orange-600" />
                </div>
                <span className="text-sm font-medium">Rural Employment</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetQuoteClick}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get Free Quotation</span>
                <ArrowRight size={20} />
              </button>
              
              <a 
                href="https://wa.me/918269721027?text=Hello! I'm interested in learning more about your agricultural machinery solutions." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 font-semibold text-lg text-center"
              >
                WhatsApp Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Machines Installed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">FPOs Empowered</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern farming with advanced machinery"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Tractor size={24} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Smart Technology</div>
                  <div className="text-sm text-gray-600">Advanced Automation</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl z-20 hidden lg:block">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹2.25M</div>
                <div className="text-sm text-gray-600">Investment Secured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path d="M0 120V0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}