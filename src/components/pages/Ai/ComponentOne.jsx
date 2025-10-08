import React from 'react';

// Main App component that renders the single, improved component
export default function App() {
  return (
    <div className="bg-slate-900 font-sans p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-screen">
      <AIIntroduction />
    </div>
  );
}

// --- Improved Component One: AI Introduction ---

// Helper component for list items with custom icons
const FeatureListItem = ({ icon, title, children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-4 mt-1 border border-slate-600">
      {icon}
    </div>
    <span className="text-gray-300">
      <strong className="text-white">{title}:</strong> {children}
    </span>
  </li>
);

function AIIntroduction() {
  return (
    <div className="bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-md max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Text Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit shadow-lg">
            THE GENESIS
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Dawn of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Artificial Intelligence is the art and science of creating systems that can learn, reason, and create. It's not just about simulating human thought; it's about extending the reach of our own creativity and problem-solving abilities.
          </p>

          <div className="mb-10">
            <ul className="space-y-4">
              <FeatureListItem
                icon={<svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>}
                title="Cognitive Automation"
              >
                Streamline complex processes and unlock new levels of efficiency.
              </FeatureListItem>
              <FeatureListItem
                icon={<svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>}
                title="Predictive Insight"
              >
                Analyze vast datasets to forecast trends and inform strategy.
              </FeatureListItem>
              <FeatureListItem
                icon={<svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>}
                title="Enhanced Creativity"
              >
                Act as a collaborative partner to generate novel ideas and designs.
              </FeatureListItem>
            </ul>
          </div>

          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden">
             <span className="relative z-10">Discover the Possibilities</span>
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Image Side */}
        <div className="bg-slate-900/50 p-8 md:p-12 flex items-center justify-center min-h-[400px] md:min-h-0 relative overflow-hidden">
           {/* Grid Pattern in Background */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
           
           <div className="relative w-full max-w-sm">
            {/* Animated AI Core Illustration */}
            <svg viewBox="0 0 400 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* Outer rotating rings */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="#4F46E5" strokeWidth="1" opacity="0.3">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="25s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="120" fill="none" stroke="#6366F1" strokeWidth="1.5" opacity="0.4">
                 <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="20s" repeatCount="indefinite" />
              </circle>
              
              {/* Central Core */}
              <circle cx="200" cy="200" r="50" fill="url(#coreGradient)" filter="url(#glow)"/>
              <radialGradient id="coreGradient">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4F46E5" />
              </radialGradient>
              
              {/* Pulsing Core Animation */}
              <circle cx="200" cy="200" r="50" fill="none" stroke="#A5B4FC" strokeWidth="2">
                 <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite" />
                 <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Neural network nodes and connections */}
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * 2 * Math.PI;
                const x1 = 200 + 50 * Math.cos(angle);
                const y1 = 200 + 50 * Math.sin(angle);
                const x2 = 200 + 100 * Math.cos(angle);
                const y2 = 200 + 100 * Math.sin(angle);
                const x3 = 200 + 140 * Math.cos(angle + Math.PI/6);
                const y3 = 200 + 140 * Math.sin(angle + Math.PI/6);
                
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6366F1" strokeWidth="1.5" opacity="0.6"/>
                    <line x1={x2} y1={y2} x2={x3} y2={y3} stroke="#4F46E5" strokeWidth="1" opacity="0.4"/>
                    <circle cx={x2} cy={y2} r="4" fill="#A5B4FC">
                       <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
                    </circle>
                     <circle cx={x3} cy={y3} r="3" fill="#818CF8" />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

