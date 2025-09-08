export default function BusinessSectors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Sectors</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Three specialized divisions serving diverse industries across Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Business Sectors Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Business Divisions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aarkey International operates through three specialized divisions, each serving distinct market needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Aarkey International */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Aarkey International</h3>
              <p className="text-gray-600 mb-6 text-center">
                Leading engineering and project promoting construction company specializing in infrastructure development
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Construction & Engineering
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Project Promotion
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Infrastructure Development
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="/business-sectors/international" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Aarkey Trading */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Aarkey Trading</h3>
              <p className="text-gray-600 mb-6 text-center">
                Comprehensive trading division providing civil engineering products and medical supplies
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Civil Engineering Products
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Power Sector Products
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Medical & Healthcare
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="/business-sectors/trading" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Aarkey Solutions */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Aarkey Solutions</h3>
              <p className="text-gray-600 mb-6 text-center">
                Digital media advertising agency founded in 2014 with innovative approaches to marketing
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Digital Media Advertising
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Outdoor Digital Media
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Event Management
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="/business-sectors/solutions" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Aarkey Group</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aarkey International is a leading engineering and project promoting construction company which has secured many medium & large scale infrastructure development projects for Sri Lanka.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The company was the agent for global industry leading corporations in this endeavour, working with organizations like Ceylon Electricity Board, National Water Supply & Drainage Board, Road Development Authority, and many others.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our three specialized divisions, we provide comprehensive solutions across construction, trading, and digital media sectors, making Aarkey a total solution provider for many industries in Sri Lanka.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ICTAD & CIIDA Accredited</h4>
                    <p className="text-gray-600 text-sm">Recognized by governing bodies for construction excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Government Partnerships</h4>
                    <p className="text-gray-600 text-sm">Collaborating with major government institutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">International Funding</h4>
                    <p className="text-gray-600 text-sm">Facilitating ADB, World Bank, and JAICA projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Discover how our three business divisions can serve your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 