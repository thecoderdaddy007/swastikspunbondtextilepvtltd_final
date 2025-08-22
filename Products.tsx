import React, { useState } from 'react';
import { ArrowRight, Leaf, Package, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  benefits: string;
}

const products: Product[] = [
  {
    id: 'crop-cover',
    name: 'Crop Cover Making Machines',
    description: 'Advanced machinery for producing high-quality crop protection covers that shield plants from climate stress, pests, and adverse weather conditions.',
    features: [
      'Weather-resistant cover production',
      'UV protection materials',
      'Custom size capabilities',
      'Automated cutting system'
    ],
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Shield size={24} className="text-green-600" />,
    benefits: 'Protect crops, increase yield by 30-40%'
  },
  {
    id: 'epe-foam',
    name: 'EPE Foam Net Machines',
    description: 'Specialized equipment for manufacturing EPE foam nets used in fruit packaging and cushioning, significantly reducing damage during transit.',
    features: [
      'Fruit-safe foam production',
      'Shock absorption technology',
      'Customizable net sizes',
      'Food-grade materials'
    ],
    image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Package size={24} className="text-blue-600" />,
    benefits: 'Reduce fruit damage by 60-70%'
  },
  {
    id: 'fruit-protection',
    name: 'Fruit Protection Bag Machines',
    description: 'Innovative machinery for producing protective bags that extend fruit shelf-life and prevent damage from birds, insects, and environmental factors.',
    features: [
      'Breathable bag materials',
      'Pest protection design',
      'Extended shelf-life technology',
      'Eco-friendly options'
    ],
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Leaf size={24} className="text-orange-600" />,
    benefits: 'Extend fruit life by 40-50%'
  },
  {
    id: 'seed-feeding',
    name: 'Seed Feeding Machines',
    description: 'Precision seed distribution equipment that enables accurate and efficient seed feeding for optimal crop establishment and growth.',
    features: [
      'Precision seed placement',
      'Adjustable feeding rates',
      'Multiple crop compatibility',
      'Automated distribution'
    ],
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Zap size={24} className="text-purple-600" />,
    benefits: 'Improve seed germination by 25-35%'
  },
  {
    id: 'non-woven-bags',
    name: 'Non-Woven Bag Making Machines',
    description: 'High-capacity automatic and semi-automatic machines producing eco-friendly non-woven bags at 120 pieces per minute.',
    features: [
      '120 pcs/min production capacity',
      'Automatic & semi-automatic options',
      'Eco-friendly materials',
      'Multiple bag sizes'
    ],
    image: 'https://images.pexels.com/photos/1210276/pexels-photo-1210276.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Package size={24} className="text-green-600" />,
    benefits: 'Start sustainable packaging business'
  },
  {
    id: 'paper-cup',
    name: 'Paper Cup & Glass Making Machines',
    description: 'Environmental-friendly machinery for producing biodegradable paper cups and glasses, perfect for eco-conscious packaging ventures.',
    features: [
      'Biodegradable cup production',
      'Food-grade safety standards',
      'High-speed manufacturing',
      'Customizable designs'
    ],
    image: 'https://images.pexels.com/photos/6591304/pexels-photo-6591304.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: <Shield size={24} className="text-blue-600" />,
    benefits: 'Eco-friendly packaging solutions'
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + itemsPerSlide >= products.length ? 0 : prev + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, products.length - itemsPerSlide) : prev - itemsPerSlide
    );
  };

  const handleQuoteRequest = (productName: string) => {
    const message = `Hello! I'm interested in getting a quotation for ${productName}. Please provide details about pricing, specifications, and delivery.`;
    const whatsappUrl = `https://wa.me/918269721027?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Product Catalog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of advanced agricultural and textile machinery designed to empower farmers, FPOs, and rural entrepreneurs with profitable mini-industry solutions.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  {product.icon}
                </div>
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  View Details
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-green-600 font-medium">
                    {product.benefits}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuoteRequest(product.name);
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                          {product.icon}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {product.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="text-sm text-green-600 font-medium">
                            {product.benefits}
                          </div>
                          <button 
                            onClick={() => handleQuoteRequest(product.name)}
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg"
            >
              <ChevronRight size={20} />
            </button>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Agricultural Business?
          </h3>
          <p className="text-gray-600 mb-6">
            Get personalized consultation and detailed quotations for our machinery solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918269721027?text=Hello! I need a consultation about your agricultural machinery solutions."
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <span>WhatsApp Consultation</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="mailto:Swastik859@gmail.com?subject=Product Inquiry&body=Hello, I am interested in your agricultural machinery solutions. Please provide more information."
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Email Inquiry
            </a>
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    {selectedProduct.icon}
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-semibold text-green-800 mb-1">Business Impact:</div>
                      <div className="text-green-700">{selectedProduct.benefits}</div>
                    </div>
                    
                    <button 
                      onClick={() => handleQuoteRequest(selectedProduct.name)}
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      <span>Get Detailed Quotation</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}