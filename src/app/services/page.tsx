'use client';

import { useState, useEffect } from 'react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Project Promotions & Construction",
      description: "Comprehensive project promotion and construction management services for infrastructure development across Sri Lanka. We work closely with stakeholders to ensure successful project outcomes.",
      features: [
        "Project feasibility studies and planning",
        "Stakeholder engagement and coordination",
        "Investment facilitation and funding",
        "Construction management and oversight",
        "Quality control and safety management"
      ],
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Trade",
      description: "International trade facilitation and business development services connecting Sri Lanka with global markets. We help businesses expand their reach and establish international partnerships.",
      features: [
        "International market analysis",
        "Trade agreement facilitation",
        "Export-import documentation",
        "Business partnership development",
        "Market entry strategies"
      ],
      image: "bg-gradient-to-br from-green-400 to-green-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Digital Advertising",
      description: "Modern digital marketing and advertising solutions to promote your business and reach target audiences effectively. We create comprehensive digital strategies for maximum impact.",
      features: [
        "Digital marketing strategy development",
        "Social media advertising campaigns",
        "Search engine optimization (SEO)",
        "Content marketing and creation",
        "Analytics and performance tracking"
      ],
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Power and Energy",
      description: "Sustainable energy solutions including renewable power generation and energy infrastructure development. We focus on creating efficient and environmentally friendly energy systems.",
      features: [
        "Renewable energy project development",
        "Power plant construction and management",
        "Energy infrastructure planning",
        "Grid modernization and upgrades",
        "Energy efficiency consulting"
      ],
      image: "bg-gradient-to-br from-yellow-400 to-orange-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Water",
      description: "Water infrastructure development including treatment plants, distribution systems, and sustainable water management. We ensure access to clean water for communities across Sri Lanka.",
      features: [
        "Water treatment plant construction",
        "Distribution system development",
        "Wastewater management solutions",
        "Water quality monitoring systems",
        "Sustainable water resource management"
      ],
      image: "bg-gradient-to-br from-cyan-400 to-blue-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Roads and Bridges",
      description: "Transportation infrastructure development including highways, bridges, and road networks across Sri Lanka. We build modern, safe, and efficient transportation systems.",
      features: [
        "Highway and expressway construction",
        "Bridge design and construction",
        "Road network planning and development",
        "Traffic management systems",
        "Infrastructure maintenance and repair"
      ],
      image: "bg-gradient-to-br from-emerald-400 to-green-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Petroleum",
      description: "Petroleum infrastructure and energy solutions including storage facilities and distribution networks. We develop safe and efficient petroleum infrastructure systems.",
      features: [
        "Petroleum storage facility construction",
        "Pipeline network development",
        "Distribution center construction",
        "Safety and security systems",
        "Environmental compliance management"
      ],
      image: "bg-gradient-to-br from-red-400 to-red-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Real Estate",
      description: "Comprehensive real estate development services including commercial, residential, and mixed-use projects. We create sustainable and innovative real estate solutions.",
      features: [
        "Commercial property development",
        "Residential housing projects",
        "Mixed-use development planning",
        "Property management services",
        "Investment consulting and analysis"
      ],
      image: "bg-gradient-to-br from-indigo-400 to-purple-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 9,
      title: "Medical and Healthcare",
      description: "Healthcare infrastructure development including hospitals, clinics, and medical facilities across Sri Lanka. We build modern healthcare facilities that improve community health outcomes.",
      features: [
        "Hospital and clinic construction",
        "Medical facility planning and design",
        "Healthcare infrastructure development",
        "Medical equipment installation",
        "Healthcare facility management"
      ],
      image: "bg-gradient-to-br from-pink-400 to-rose-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 10,
      title: "IT, Aviation & Telecommunication",
      description: "Technology infrastructure, aviation facilities, and telecommunications network development services. We build the digital and aviation infrastructure of the future.",
      features: [
        "Data center construction and management",
        "Aviation facility development",
        "Telecommunications network infrastructure",
        "Smart city technology integration",
        "Digital transformation consulting"
      ],
      image: "bg-gradient-to-br from-slate-400 to-gray-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Comprehensive infrastructure development solutions across multiple sectors
            </p>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of services to support your infrastructure development needs
            </p>
          </div>
          
          {/* Slider Container */}
          <div className="relative">
            {/* Slider */}
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 min-h-[500px]">
                      {/* Image Side */}
                      <div className={`${service.image} flex items-center justify-center p-12`}>
                        <div className="text-center text-white">
                          <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
                            {service.icon}
                          </div>
                          <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                          <p className="text-lg opacity-90 max-w-md mx-auto">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Content Side */}
                      <div className="bg-gray-50 p-12 flex flex-col justify-center">
                        <div className="mb-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services span across multiple sectors and industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Development</h3>
              <p className="text-gray-600">
                Roads, bridges, water systems, and energy infrastructure development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Services</h3>
              <p className="text-gray-600">
                Trade facilitation, digital advertising, and business development support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Sectors</h3>
              <p className="text-gray-600">
                Healthcare, real estate, petroleum, and technology infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Let's discuss how our comprehensive services can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Quote
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 