import React from 'react';
import { Calendar, MapPin, Users, Shield, Ban as Bank, FileText } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About <span className="text-green-600">Swastik Spunbond</span> Textile Pvt. Ltd.
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p>
                Swastik Spunbond Textile Pvt. Ltd., established on <strong>31 May 2022</strong> in Indore, Madhya Pradesh, is a technology-driven textile machinery company. We design and manufacture advanced non-woven processing machines and custom agricultural protection machinery that empower FPOs (Farmer Producer Organisations), farmers, and small manufacturers to establish profitable mini-industries.
              </p>
              
              <p>
                With a focus on innovation, quality, and farmer prosperity, our machines help rural communities add value to crops, reduce wastage, and generate employment. Our commitment extends beyond manufacturing – we're partners in rural transformation, enabling sustainable growth and economic empowerment across agricultural communities.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                <Calendar size={24} className="text-green-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Established 2022</div>
                  <div className="text-sm text-gray-600">Technology-driven innovation</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <MapPin size={24} className="text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Indore, MP</div>
                  <div className="text-sm text-gray-600">Central India operations</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                <Users size={24} className="text-orange-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">FPO Focus</div>
                  <div className="text-sm text-gray-600">Farmer empowerment</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                <Shield size={24} className="text-purple-600 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Quality Assured</div>
                  <div className="text-sm text-gray-600">Global standards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Credentials */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="text-green-600 mr-3" size={28} />
                Company Credentials & Legal Trust
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <FileText size={20} className="text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Corporate Identity</div>
                    <div className="text-sm text-gray-700">CIN: U74110MP2022PTC061150</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users size={20} className="text-green-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Directors</div>
                    <div className="text-sm text-gray-700">Aryan Singh Parihar & Shashi Prabha</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-orange-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Registered Office</div>
                    <div className="text-sm text-gray-700">
                      Plot No. 27, Apparel Cluster, Bijepur (Betma),<br />
                      Dhar Road, Indore, Madhya Pradesh – 453001
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield size={20} className="text-purple-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Legal Status</div>
                    <div className="text-sm text-gray-700">
                      Active company; filings up to 31 March 2024
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Bank size={20} className="text-indigo-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Banking & Finance</div>
                    <div className="text-sm text-gray-700">
                      Canara Bank registered charge ₹2.25 million (2023)
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="text-green-800 font-semibold">✓ Verified Business Entity</div>
                  <div className="text-green-700 text-sm mt-1">
                    All legal compliances maintained and up-to-date
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Official Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <span className="text-sm">Swastik859@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    📱
                  </div>
                  <span className="text-sm font-medium">+91 8269721027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}