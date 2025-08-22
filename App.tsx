import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Storytelling from './components/Storytelling';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LeadForm from './components/LeadForm';
import { Helmet } from 'react-helmet-async';

function App() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  // Show lead form after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLeadForm(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Swastik Spunbond Textile Private Limited",
    "alternateName": "Swastik Spunbond Textile Pvt. Ltd.",
    "url": "https://swastikspunbond.com",
    "logo": "https://swastikspunbond.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8269721027",
      "contactType": "customer service",
      "availableLanguage": ["Hindi", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 27, Apparel Cluster, Bijepur (Betma), Dhar Road",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "453001",
      "addressCountry": "IN"
    },
    "foundingDate": "2022-05-31",
    "founder": [
      {
        "@type": "Person",
        "name": "Aryan Singh Parihar"
      },
      {
        "@type": "Person",
        "name": "Shashi Prabha"
      }
    ],
    "description": "Technology-driven textile machinery company specializing in non-woven processing machines and agricultural protection machinery for farmers and FPOs.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agricultural and Textile Machinery",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Crop Cover Making Machines",
            "description": "Advanced machines for producing crop protection covers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Non-Woven Bag Making Machines",
            "description": "Automatic and semi-automatic bag making machines with 120 pcs/min capacity"
          }
        }
      ]
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can FPOs benefit from Swastik machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FPOs can establish profitable mini-industries using our machines, create employment opportunities for farmers, add value to agricultural produce, and generate additional income streams for their members."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide training & support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive after-sales support including machine training, technical guidance, servicing, and ongoing assistance to ensure successful operation of your machinery."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of crop cover making machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Machine costs vary based on specifications and capacity. Contact us on +91 8269721027 for detailed quotations and customized pricing based on your requirements."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Swastik Spunbond Textile Pvt. Ltd. – Advanced Agriculture & Textile Machinery, Indore</title>
        <meta name="description" content="Manufacturer of crop cover, fruit protection, seed feeding & non-woven machinery for farmers, FPOs & MSMEs across India. Technology-driven agricultural solutions." />
        <meta name="keywords" content="agricultural machinery, crop cover machines, non-woven bag machines, FPO solutions, textile machinery, Indore, farmers equipment" />
        <meta name="author" content="Swastik Spunbond Textile Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Swastik Spunbond Textile Pvt. Ltd. – Advanced Agriculture & Textile Machinery" />
        <meta property="og:description" content="Technology-driven agricultural machinery for farmers, FPOs & MSMEs. Crop protection, packaging solutions & rural entrepreneurship." />
        <meta property="og:image" content="https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Swastik Spunbond Textile – Agricultural Machinery Solutions" />
        <meta property="twitter:description" content="Empowering farmers with advanced textile and agricultural machinery. Create mini-industries and boost rural entrepreneurship." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>

      <Header onContactClick={() => setShowLeadForm(true)} />
      <Hero onGetQuoteClick={() => setShowLeadForm(true)} />
      <About />
      <Products />
      <Features />
      <Storytelling />
      <Stats />
      <Contact onFormSubmit={() => setShowLeadForm(true)} />
      <Footer />
      <WhatsAppFloat />
      
      {showLeadForm && (
        <LeadForm onClose={() => setShowLeadForm(false)} />
      )}
    </div>
  );
}

export default App;