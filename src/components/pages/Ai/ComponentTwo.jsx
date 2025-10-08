import React, { useState, useEffect, useRef } from 'react';

// Main App component that renders everything
export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center font-sans p-4">
      <AIServicesShowcase />
    </div>
  );
}

// Data for the services section
const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI Creativity Suite",
    description: "Generate compelling narratives, scripts, and marketing copy that resonates with your audience."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"></circle>
        <polyline points="21 15 16 10 5 21" stroke="currentColor" strokeWidth="2"></polyline>
      </svg>
    ),
    title: "Generative Visuals",
    description: "Create breathtaking concept art, product designs, and photorealistic imagery from simple text prompts."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20l4-16m4 16L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Code Synthesis",
    description: "Accelerate development by generating boilerplate code, functions, and even entire algorithms in seconds."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor"/>
      </svg>
    ),
    title: "Strategic Automation",
    description: "Design intelligent agents to automate complex workflows, analyze data, and drive efficiency."
  }
];

// Helper component for the interactive service cards
const ServiceCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGlowStyle({
        '--glow-x': `${x}px`,
        '--glow-y': `${y}px`,
        opacity: 1
      });
    }
  };

  const handleMouseLeave = () => {
    setGlowStyle({ opacity: 0 });
  };
  
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
    >
      {/* Interactive Glow Effect */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          ...glowStyle,
          background: 'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(192, 132, 252, 0.15), transparent 40%)'
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex items-center text-purple-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};


// The main component for the AI Services section
function AIServicesShowcase() {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900/40 to-slate-900 py-20 px-6 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/50 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: `30px 30px`
      }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            🚀 The Future of Creation
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ecosystem</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Harness the power of our next-generation AI platform to create, innovate, and automate at the speed of thought. 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Pioneer the Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join our exclusive waitlist for early access to the platform and help shape the next wave of AI innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-auto bg-white/10 border-2 border-white/20 text-white px-6 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-center sm:text-left"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                Secure My Spot
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
             ✨ 10,000+ pioneers on board
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

