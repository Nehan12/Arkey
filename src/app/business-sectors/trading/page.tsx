export default function AarkeyTrading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aarkey Trading</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Total solution provider for civil engineering and medical industries
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Trading Solutions</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aarkey Trading is the arm of Aarkey that trades in a majority of products required in the civil engineering industry and others. The arsenal of products available makes Aarkey a total solution provider for many industries in Sri Lanka.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With constant growth expected, the company aspires to extensively expand its portfolio to serve better more industries than it serves now, ensuring comprehensive coverage of all your business needs.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Our Promise</h3>
                <p className="text-green-700">Unlimited growth potential to serve diverse industries across Sri Lanka</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <p className="text-lg font-semibold">Trading Excellence</p>
                <p className="text-sm opacity-75">Quality Products & Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Civil Engineering Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Civil Engineering Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of products for infrastructure development and construction projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Infrastructure Products */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Products</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Gabions</li>
                <li>• Geotextiles</li>
                <li>• Geogrids</li>
                <li>• Guardrails</li>
                <li>• Street lighting poles</li>
                <li>• Bridge bearing pads & expansion joints</li>
                <li>• Soft ground treatment using vertical drains</li>
                <li>• HDPE liners</li>
                <li>• Right of way fencing</li>
                <li>• Cable barriers</li>
              </ul>
            </div>

            {/* Piping Systems */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Piping Systems</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• DI pipes and fittings</li>
                <li>• HDPE pipes</li>
                <li>• GFRP (Glass Fibre Reinforced Pipes)</li>
              </ul>
            </div>

            {/* Power Sector Products */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Power Sector Products</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Conductors</li>
                <li>• OPGW - Optical Ground wire/ Fibre optic cables</li>
                <li>• Insulators</li>
                <li>• Line hardware accessories</li>
                <li>• Transmission line steel towers</li>
                <li>• Power transformers</li>
                <li>• Monitoring equipment</li>
                <li>• Switch gears</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical & Healthcare Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical & Healthcare Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personal Protective Equipment (PPE) and healthcare supplies for medical professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PPE Products */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Protective Equipment</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 3Ply disposable masks</li>
                <li>• Full face shield</li>
                <li>• Coverall (reusable)</li>
                <li>• Safety goggles</li>
                <li>• Protective gloves</li>
                <li>• Safety helmets</li>
              </ul>
            </div>

            {/* Medical Supplies */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Supplies</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• First aid kits</li>
                <li>• Medical equipment</li>
                <li>• Healthcare accessories</li>
                <li>• Medical consumables</li>
                <li>• Hospital supplies</li>
              </ul>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Certified products</li>
                <li>• International standards</li>
                <li>• Quality testing</li>
                <li>• Reliable suppliers</li>
                <li>• Customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aarkey Trading provides solutions across multiple industries in Sri Lanka
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Construction</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Power & Energy</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Healthcare</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Water & Utilities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Need Quality Products?</h2>
          <p className="text-xl mb-8 text-green-200">
            Contact Aarkey Trading for all your civil engineering and medical supply needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Quote
            </a>
            <a href="/business-sectors" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Business Sectors
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 