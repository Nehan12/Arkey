export default function AarkeyInternational() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aarkey International</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Leading engineering and project promoting construction company
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With extensive experience in executing to perfection, mid to large scale infrastructure development projects and diverse construction projects, the team's competency levels and skills are at optimum, making them masters of their trade.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aarkey International is accredited by the governing bodies of ICTAD and CIIDA, ensuring the highest standards of quality and professionalism in all our construction projects.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Accreditations</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">ICTAD</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">CIIDA</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-lg font-semibold">Infrastructure Development</p>
                <p className="text-sm opacity-75">Construction Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Promotion Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Promotion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The company has undertaken project promotions for major government institutions and international organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Government Institutions */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Institutions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Ceylon Electricity Board</li>
                <li>• National Water Supply & Drainage Board</li>
                <li>• Road Development Authority</li>
                <li>• Petroleum Corporation</li>
                <li>• Airport and Aviation Authority</li>
              </ul>
            </div>

            {/* International Organizations */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Organizations</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Asian Development Bank (ADB)</li>
                <li>• World Bank</li>
                <li>• Japan International Cooperation Agency (JAICA)</li>
                <li>• Other donor organizations</li>
              </ul>
            </div>

            {/* Infrastructure Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Development</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Roads and Bridges</li>
                <li>• Power and Energy</li>
                <li>• Water and Sanitation</li>
                <li>• Transportation Systems</li>
                <li>• Public Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Construction Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of construction materials and infrastructure products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Civil Engineering Products */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Civil Engineering Products</h3>
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
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Piping Systems</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• DI pipes and fittings</li>
                <li>• HDPE pipes</li>
                <li>• GFRP (Glass Fibre Reinforced Pipes)</li>
              </ul>
            </div>

            {/* Power Sector Products */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Power Sector Products</h3>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Let's discuss how Aarkey International can help bring your infrastructure vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Quote
            </a>
            <a href="/business-sectors" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Business Sectors
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 