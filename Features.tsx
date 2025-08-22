import React from 'react';
import { Tractor, Zap, TrendingUp, Leaf, Wrench, Users } from 'lucide-react';

const features = [
  {
    icon: <Tractor size={32} className="text-green-600" />,
    title: '🚜 Farmer & FPO Empowerment',
    description: 'Create profitable mini-industries in rural areas. Transform agricultural communities with sustainable income generation and employment opportunities.',
    benefits: ['Village-level entrepreneurship', 'FPO income diversification', 'Rural employment creation']
  },
  {
    icon: <Zap size={32} className="text-blue-600" />,
    title: '⚙️ Advanced Technology',
    description: 'Global-standard machinery manufactured locally in India. Cutting-edge technology meets affordable pricing for maximum accessibility.',
    benefits: ['International quality standards', 'Local manufacturing support', 'Cost-effective solutions']
  },
  {
    icon: <TrendingUp size={32} className="text-orange-600" />,
    title: '💼 Business Growth',
    description: 'Generate substantial side income and boost rural entrepreneurship. Turn agricultural by-products into profitable business ventures.',
    benefits: ['Multiple revenue streams', 'Scalable business models', 'Quick ROI potential']
  },
  {
    icon: <Leaf size={32} className="text-green-600" />,
    title: '🌱 Sustainable Impact',
    description: 'Reduce plastic waste and increase crop value through eco-friendly packaging solutions and sustainable agricultural practices.',
    benefits: ['Environmental protection', 'Crop value enhancement', 'Sustainable packaging']
  },
  {
    icon: <Wrench size={32} className="text-purple-600" />,
    title: '🛠️ After-Sales Support',
    description: 'Comprehensive training, servicing, and ongoing technical guidance. We ensure your success with continuous support and expertise.',
    benefits: ['Machine operation training', 'Technical support', 'Maintenance services']
  },
  {
    icon: <Users size={32} className="text-indigo-600" />,
    title: '🤝 Community Building',
    description: 'Building networks of successful rural entrepreneurs. Connect with other machine owners and share best practices for mutual growth.',
    benefits: ['Peer learning networks', 'Success story sharing', 'Collaborative growth']
  }
];

export default function Features() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">Swastik Solutions</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support ecosystem designed to ensure your success in agricultural entrepreneurship and rural business development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-white p-3 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Framework */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Success Framework</span>
            </h3>
            <p className="text-lg text-gray-600">
              Proven methodology to ensure your agricultural machinery investment delivers maximum returns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
              <p className="text-sm text-gray-600">Free business consultation and needs assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Installation</h4>
              <p className="text-sm text-gray-600">Professional machine setup and commissioning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Training</h4>
              <p className="text-sm text-gray-600">Comprehensive operation and maintenance training</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Support</h4>
              <p className="text-sm text-gray-600">Ongoing technical support and business guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}