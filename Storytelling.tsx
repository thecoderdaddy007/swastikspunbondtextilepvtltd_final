import React from 'react';
import { Heart, Sprout, Home, TrendingUp } from 'lucide-react';

export default function Storytelling() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <Heart size={16} />
                <span>किसान की सफलता की कहानी</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                हर किसान का सपना है
                <span className="text-green-600 block">बेहतर आय का</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                भारत की मिट्टी में छुपे हैं अनगिनत सपने। हर खेत में, हर किसान के दिल में एक ही चाह है - अपने परिवार के लिए बेहतर कल का निर्माण करना।
              </p>
              
              <p>
                <strong>Swastik के innovative machines</strong> के साथ, FPOs और rural entrepreneurs अपने गांव में ही छोटे industries शुरू कर सकते हैं। फसल को protect करने से लेकर fruits की packaging तक, हमारी machines सिर्फ tools नहीं हैं — ये हैं <em>समृद्धि के साथी</em>।
              </p>

              <blockquote className="bg-white/80 backdrop-blur p-6 rounded-xl border-l-4 border-green-600 italic text-lg">
                "जब किसान खुशहाल होता है, तो पूरा देश आगे बढ़ता है। हमारी मशीनें इसी विश्वास की नींव हैं।"
              </blockquote>
            </div>

            {/* Impact Stories */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur p-6 rounded-xl border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Sprout size={20} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">फसल सुरक्षा</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Climate change से बचाव और 40% तक yield increase के साथ, किसानों की आर्थिक स्थिति में सुधार।
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Home size={20} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">गांव में रोजगार</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Migration रोकना और local employment के साथ गांव की economy को मजबूत बनाना।
                </p>
              </div>
            </div>
          </div>

          {/* Visual Story */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Happy Indian farmers with modern machinery"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">50+</div>
                      <div className="text-xs text-gray-600">FPOs Empowered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-xs text-gray-600">Machines Installed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">10+</div>
                      <div className="text-xs text-gray-600">States Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Testimonial */}
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border border-green-200 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">रामेश्वर सिंह, किसान</h4>
                  <p className="text-gray-700 italic mb-3">
                    "Swastik की crop cover machine से मेरी फसल का नुकसान 70% कम हो गया। अब मैं अपने बच्चों को अच्छी education दे सकता हूं।"
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <TrendingUp size={16} />
                    <span className="font-medium">Income increased by 45%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <a 
                href="https://wa.me/918269721027?text=Hello! मैं अपने खेत के लिए Swastik की machines के बारे में जानना चाहता हूं। कृपया मुझे details provide करें।" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>अपना Success Story शुरू करें</span>
                <span className="text-xl">🚀</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}