'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, ref };
}

// Typewriter effect component
function TypewriterText({ text, speed = 100, delay = 0 }: { text: string; speed?: number; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, delay, isVisible]);

  return (
    <span ref={ref}>
      {displayText}
    </span>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Counting animations for performance section
  const projectsCount = useCountUp(50, 2000);
  const yearsCount = useCountUp(15, 2000);
  const satisfactionCount = useCountUp(100, 2000);
  const supportCount = useCountUp(24, 2000);

  const heroSlides = [
    {
      id: 1,
      title: "Powering Nations",
      subtitle: "Infrastructure Development",
      description: "Leading the way in power generation and electrical infrastructure projects across Sri Lanka",
      image: "/poweringNations.jpg", // Add your power infrastructure image here
      gradient: "from-blue-900/80 to-blue-700/60"
    },
    {
      id: 2,
      title: "Linking Borders",
      subtitle: "Transportation Solutions",
      description: "Connecting communities through innovative road and bridge construction projects",
      image: "/linkingBorders.jpg", // Add your transportation image here
      gradient: "from-green-900/80 to-green-700/60"
    },
    {
      id: 3,
      title: "Hydrating Masses",
      subtitle: "Water Infrastructure",
      description: "Ensuring clean water access through advanced treatment and distribution systems",
      image: "/hydratingMasses.jpg", // Add your water infrastructure image here
      gradient: "from-purple-900/80 to-purple-700/60"
    },
    {
      id: 4,
      title: "Renewing Lifestyles",
      subtitle: "Sustainable Development",
      description: "Building sustainable communities with eco-friendly infrastructure solutions",
      image: "/renewingLifestyles.jpeg", // Using the available image
      gradient: "from-yellow-900/80 to-yellow-700/60"
    },
    {
      id: 5,
      title: "Healing Mankind",
      subtitle: "Healthcare Infrastructure",
      description: "Supporting healthcare delivery through modern medical facility construction",
      image: "/healingMankind.jpeg", // Add your healthcare infrastructure image here
      gradient: "from-cyan-900/80 to-cyan-700/60"
    }
  ];


  // Auto-scroll functionality disabled
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval);
  // }, [heroSlides.length]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image Slider */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Slider Container */}
        <div className="relative w-full h-screen">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
        <div className="absolute inset-0">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={`${slide.title} - ${slide.subtitle}`}
                  fill
                  className="object-cover blur-sm"
                  priority={index === 0}
                />
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-center text-white">
                    {/* Main Title */}
            <div className="mb-6">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {slide.title}
              </h1>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {slide.subtitle}
                      </h2>
            </div>

                    {/* Description */}
            <div className="mb-8 max-w-4xl mx-auto">
                      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        {slide.description}
              </p>
            </div>

                    {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link 
                href="/about" 
                        className="group relative bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/contact" 
                        className="group relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
                  </div>
            </div>
          </div>
        </div>
          ))}
        </div>

        {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
            >
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
            >
          <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-300 group ${
                    index === currentSlide 
                  ? 'w-10 h-3' 
                      : 'w-3 h-3'
                  }`}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentSlide 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
                  }`}>
                    {index === currentSlide && (
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-50"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <TypewriterText text="Welcome to " speed={80} delay={500} />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <TypewriterText text="Aarkey Group" speed={80} delay={2000} />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '4s' }}>
              A leading project promotion, engineering & construction company which has secured many medium & large-scale infrastructure development projects for Sri Lanka. We bring world-class expertise and innovative solutions to infrastructure development across the nation.
            </p>
            
            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-30" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-32 right-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-green-200/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-left">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group">
                <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Aarkey aspires to be the world&apos;s leading and most respected conglomerate, setting new standards of sustainability with the greenest global footprint, while proudly embodying the spirit and authenticity of Sri Lanka.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-right">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group">
                <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                At Aarkey, we deliver excellence through uncompromising quality, unmatched speed, and true craftsmanship. Guided by integrity and a commitment to exceptional service, we strive to create enduring value in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sectors Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-100/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-100/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">Business Sectors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              We operate across three key business sectors, delivering comprehensive infrastructure solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Arkey International */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Arkey International</h3>
              <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Leading project promotion, engineering & construction company specializing in medium & large-scale infrastructure development projects across Sri Lanka.
              </p>
              <Link href="/business-sectors/international" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Arkey Trading */}
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Arkey Trading</h3>
              <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                Comprehensive trading solutions and commercial services, facilitating international trade and business partnerships across various industries.
              </p>
              <Link href="/business-sectors/trading" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Arkey Solutions */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Arkey Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                Innovative technology solutions and consulting services, providing cutting-edge solutions for modern business challenges and digital transformation.
              </p>
              <Link href="/business-sectors/solutions" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Performance Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Our Performance</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Delivering excellence in infrastructure development with measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }} ref={projectsCount.ref}>
              <div className="text-5xl md:text-6xl font-bold text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {projectsCount.count}+
              </div>
              <div className="text-lg text-blue-200 mb-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Projects Completed</div>
              <div className="text-sm text-blue-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Successfully delivered infrastructure projects across Sri Lanka</div>
            </div>
            <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }} ref={yearsCount.ref}>
              <div className="text-5xl md:text-6xl font-bold text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {yearsCount.count}+
              </div>
              <div className="text-lg text-blue-200 mb-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Years Experience</div>
              <div className="text-sm text-blue-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Proven track record in infrastructure development</div>
            </div>
            <div className="group animate-fade-in-up" style={{ animationDelay: '0.6s' }} ref={satisfactionCount.ref}>
              <div className="text-5xl md:text-6xl font-bold text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {satisfactionCount.count}%
              </div>
              <div className="text-lg text-blue-200 mb-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>Client Satisfaction</div>
              <div className="text-sm text-blue-300 animate-fade-in-up" style={{ animationDelay: '1s' }}>Committed to exceeding client expectations</div>
            </div>
            <div className="group animate-fade-in-up" style={{ animationDelay: '0.8s' }} ref={supportCount.ref}>
              <div className="text-5xl md:text-6xl font-bold text-blue-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {supportCount.count}/7
              </div>
              <div className="text-lg text-blue-200 mb-2 animate-fade-in-up" style={{ animationDelay: '1s' }}>Support Available</div>
              <div className="text-sm text-blue-300 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>Round-the-clock project support and maintenance</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
