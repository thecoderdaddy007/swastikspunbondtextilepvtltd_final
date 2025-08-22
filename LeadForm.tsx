import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  onClose: () => void;
}

export default function LeadForm({ onClose }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    budget: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const productCategories = [
    'Crop Cover Making Machines',
    'EPE Foam Net Machines', 
    'Fruit Protection Bag Machines',
    'Seed Feeding Machines',
    'Non-Woven Bag Making Machines',
    'Paper Cup & Glass Making Machines',
    'Multiple Products',
    'Not Sure - Need Consultation'
  ];

  const budgetRanges = [
    'Under ₹1 Lakh',
    '₹1-3 Lakhs',
    '₹3-5 Lakhs',
    '₹5-10 Lakhs',
    'Above ₹10 Lakhs',
    'Need Budget Guidance'
  ];

  const urgencyOptions = [
    'Immediate (Within 1 week)',
    'Soon (Within 1 month)',
    'Planning (2-3 months)',
    'Future Planning (3+ months)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare comprehensive WhatsApp message
      const whatsappMessage = `
*🎯 PRIORITY LEAD FROM WEBSITE*

*👤 Contact Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*🏭 Business Requirements:*
Product Interest: ${formData.category}
Budget Range: ${formData.budget}
Timeline: ${formData.urgency}

*💬 Additional Message:*
${formData.message || 'No additional message'}

*📈 Action Required:*
Please provide detailed quotation, product specifications, and schedule consultation call.

*Priority Lead - Please respond within 1 hour*
      `.trim();

      // Prepare detailed email
      const emailSubject = `🚨 Priority Lead: ${formData.category} - ${formData.name}`;
      const emailBody = `
PRIORITY WEBSITE LEAD
===================

CONTACT INFORMATION:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

BUSINESS REQUIREMENTS:
Product Category: ${formData.category}
Budget Range: ${formData.budget}
Purchase Timeline: ${formData.urgency}

MESSAGE:
${formData.message || 'No additional message provided'}

RECOMMENDED ACTIONS:
1. Call within 1 hour
2. Send detailed product catalog
3. Provide customized quotation
4. Schedule facility visit if nearby

Lead Source: Website Contact Form
Lead Priority: HIGH
Generated: ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}
      `.trim();

      // Open WhatsApp and Email
      const whatsappUrl = `https://wa.me/918269721027?text=${encodeURIComponent(whatsappMessage)}`;
      const mailtoUrl = `mailto:Swastik859@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        window.open(mailtoUrl, '_blank');
      }, 1000);

      setSubmitted(true);
      
      // Auto close after showing success
      setTimeout(() => {
        onClose();
      }, 5000);

    } catch (error) {
      console.error('Error submitting lead form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success State
  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <CheckCircle size={80} className="text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You! 🙏
          </h3>
          <p className="text-gray-600 mb-6">
            Your request has been sent via WhatsApp and email. Our team will contact you within 1 hour.
          </p>
          <div className="space-y-3">
            <a 
              href="https://wa.me/918269721027" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Continue on WhatsApp
            </a>
            <button 
              onClick={onClose}
              className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Form
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-t-2xl relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold mb-2">Get Your Free Quotation</h2>
          <p className="opacity-90">Tell us about your requirements and get personalized recommendations</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          {/* Business Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Which Machine Interests You? *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select your interest</option>
              {productCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Timeline
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                {urgencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Requirements
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Tell us about your specific needs, location, business type, or any questions..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Get My Free Quotation</span>
              </>
            )}
          </button>
        </form>

        {/* Footer Note */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
          <p className="text-sm text-gray-600 text-center">
            🔒 Your information is secure. We'll contact you within 1 hour during business hours.
          </p>
        </div>
      </div>
    </div>
  );
}