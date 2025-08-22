import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, MapPin, Leaf } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <TrendingUp size={40} className="text-green-600" />,
      value: 100,
      suffix: '+',
      label: 'Machines Installed',
      description: 'Advanced agricultural machinery successfully deployed across India',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <MapPin size={40} className="text-blue-600" />,
      value: 10,
      suffix: '+',
      label: 'States Served',
      description: 'Pan-India presence with growing network of satisfied customers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users size={40} className="text-orange-600" />,
      value: 50,
      suffix: '+',
      label: 'FPOs Empowered',
      description: 'Farmer Producer Organizations transformed with our solutions',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Leaf size={40} className="text-green-600" />,
      value: 0,
      label: 'Zero-Waste Solutions',
      description: 'Sustainable packaging and eco-friendly agricultural practices',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 6.627-5.373 12-12 12s-12-5.373-12-12S1.373 8 8 8s12 5.373 12 12zm-8 0c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4 4-1.791 4-4z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-green-400">Impact Across India</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Measurable success in transforming agricultural communities and empowering rural entrepreneurship nationwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Counter */}
                <div className="mb-2 text-white">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="font-bold text-white mb-2">Quality Excellence</h4>
            <p className="text-gray-300 text-sm">International quality standards with local manufacturing expertise</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-bold text-white mb-2">Trusted Partnership</h4>
            <p className="text-gray-300 text-sm">Long-term relationships built on reliability and comprehensive support</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-bold text-white mb-2">Rapid Growth</h4>
            <p className="text-gray-300 text-sm">Expanding network with 2x growth in machine installations year-over-year</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-gray-300 mb-6">
              Become part of India's agricultural transformation. Start your profitable mini-industry today.
            </p>
            <a 
              href="https://wa.me/918269721027?text=Hello! I want to be part of Swastik's success story. Please provide information about your machinery solutions."
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Journey</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}