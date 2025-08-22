import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after another 2 seconds
      setTimeout(() => setShowTooltip(true), 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const message = "Hello! मैं Swastik Spunbond Textile की agricultural machinery के बारे में जानकारी चाहता हूं। Please provide details about your products and quotations.";
    const whatsappUrl = `https://wa.me/918269721027?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 mr-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg max-w-xs animate-bounce">
            <p className="text-sm font-medium">Need help? Chat with us!</p>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1 -right-1 w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600"
            >
              <X size={12} />
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
          }}
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
          
          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center">
            <MessageCircle size={28} className="group-hover:animate-bounce" />
          </div>
        </button>

        {/* Badge */}
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          Chat Now
        </div>
      </div>

      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white p-4 shadow-2xl z-40 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="font-bold text-sm">Free Consultation Available!</p>
            <p className="text-xs opacity-90">Get expert advice on machinery selection</p>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
          >
            Chat Now
          </button>
        </div>
      </div>

      {/* Secondary Sticky Button */}
      <div className="fixed bottom-24 right-6 z-40 hidden md:block">
        <button
          onClick={handleWhatsAppClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm font-semibold"
        >
          Get Free Consultation
        </button>
      </div>
    </>
  );
}