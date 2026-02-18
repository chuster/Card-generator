
import React, { useState, useMemo } from 'react';
import { AIRLINES, TIER_COLORS } from './constants';
import { CardState, Tier } from './types';
import CreditCard from './components/CreditCard';
import ConfigPanel from './components/ConfigPanel';

const App: React.FC = () => {
  const [state, setState] = useState<CardState>({
    airline: 'lufthansa',
    bank: 'Barclays',
    tier: Tier.GOLD,
    cardHolder: 'ADRIAN SKYWALKER',
    cardNumber: '5412750012349876'
  });

  const selectedAirline = useMemo(() => 
    AIRLINES.find(a => a.id === state.airline) || AIRLINES[0], 
    [state.airline]
  );

  const handleStateChange = (updates: Partial<CardState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const copySvg = () => {
    const svgElement = document.querySelector('svg');
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      navigator.clipboard.writeText(svgData);
      // Small visual feedback instead of alert
      const btn = document.getElementById('copy-btn');
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = 'COPIED!';
        btn.classList.add('bg-green-600');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('bg-green-600');
        }, 2000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      {/* Background Decorative Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1.1.1-1.5.5l-.3.3c-.4.4-.5 1-.1 1.4L10 12l-4 4H2l2 2 2 2v-4l4-4 3.6 7.1c.4.4 1 .3 1.4-.1l.3-.3c.4-.4.6-1 .5-1.5Z"/></svg>
            </div>
            <span className="text-xl font-black tracking-tighter">AEROCARD</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-400 transition-colors">API</a>
            <button className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all border border-slate-700">
              Go Pro
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Stage */}
          <section className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-12 bg-slate-900 rounded-[32px] border border-slate-800 flex items-center justify-center min-h-[480px]">
                <CreditCard 
                  airline={selectedAirline}
                  tier={state.tier}
                  cardHolder={state.cardHolder}
                  cardNumber={state.cardNumber}
                  bank={state.bank}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                id="copy-btn"
                onClick={copySvg}
                className="flex-1 bg-white text-slate-900 hover:bg-slate-100 font-black py-4 px-8 rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                Copy SVG Code
              </button>
              <button 
                onClick={() => window.print()}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all border border-slate-700 flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
                PRINT
              </button>
            </div>
          </section>

          {/* Configuration */}
          <aside className="lg:col-span-5 sticky top-28">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Configure Card</h2>
              <p className="text-slate-400 text-sm">Customize branding, tier, and identification.</p>
            </div>
            <ConfigPanel state={state} onChange={handleStateChange} />
          </aside>
        </div>

        {/* Gallery Section */}
        <section className="mt-32">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-2">Airlines Fleet</h2>
              <p className="text-slate-400">Select a carrier to customize their specific card series.</p>
            </div>
            <div className="flex gap-2">
               {/* Controls for filtering could go here */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AIRLINES.map((airline) => (
              <div 
                key={airline.id} 
                className={`group relative bg-slate-900/40 border p-5 rounded-3xl transition-all cursor-pointer hover:bg-slate-800/60 active:scale-95 ${state.airline === airline.id ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-800 hover:border-slate-700'}`}
                onClick={() => setState(prev => ({ ...prev, airline: airline.id }))}
              >
                <div className="flex justify-center mb-6 scale-[0.8] origin-center">
                  <CreditCard 
                    airline={airline} 
                    tier={Tier.PLATINUM} 
                    cardHolder="FLEET PREVIEW" 
                    cardNumber="0000000000000000" 
                    bank={airline.partners[0].split(' / ')[0]}
                    size="sm"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-slate-100">{airline.name}</h3>
                    <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{airline.partners[0]}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 border-slate-700 flex items-center justify-center transition-colors ${state.airline === airline.id ? 'bg-blue-500 border-blue-400' : 'group-hover:border-slate-500'}`}>
                    {state.airline === airline.id && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-32 py-16 border-t border-slate-900 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <div className="text-xl font-black mb-2 tracking-tighter">AEROCARD</div>
             <p className="text-slate-500 text-sm max-w-xs">Premium vector asset generation for airline loyalty and fintech projects.</p>
          </div>
          <p className="text-slate-600 text-xs text-center md:text-right max-w-sm">
            Disclaimer: All logos and trademarks are properties of their respective owners. 
            This tool is for prototyping and mockup purposes only. 
            Banking details are illustrative.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
