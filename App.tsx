
import React, { useState, useMemo } from 'react';
import { AIRLINES } from './constants';
import { CardState } from './types';
import CreditCard from './components/CreditCard';
import ConfigPanel from './components/ConfigPanel';

const App: React.FC = () => {
  const [state, setState] = useState<CardState>({
    airlineId: 'ba',
    bank: 'American Express',
    tierIndex: 3, // Start with BA Gold
    cardHolder: 'EXECUTIVE CLUB MEMBER',
    cardNumber: '3791123456780009'
  });

  const selectedAirline = useMemo(() => 
    AIRLINES.find(a => a.id === state.airlineId) || AIRLINES[0], 
    [state.airlineId]
  );

  const selectedTier = useMemo(() => 
    selectedAirline.tiers[state.tierIndex] || selectedAirline.tiers[0],
    [selectedAirline, state.tierIndex]
  );

  const handleStateChange = (updates: Partial<CardState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const copySvg = () => {
    const svgElement = document.getElementById('airline-card-svg');
    if (svgElement) {
      const clonedSvg = svgElement.cloneNode(true) as HTMLElement;
      const svgData = new XMLSerializer().serializeToString(clonedSvg);
      navigator.clipboard.writeText(svgData);
      
      const btn = document.getElementById('copy-btn');
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = 'COPIED!';
        btn.classList.add('bg-green-600', 'text-white');
        btn.classList.remove('bg-slate-900');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('bg-green-600', 'text-white');
          btn.classList.add('bg-slate-900');
        }, 2000);
      }
    }
  };

  const downloadPng = () => {
    const svgElement = document.getElementById('airline-card-svg');
    if (!svgElement) return;

    const canvas = document.createElement('canvas');
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      canvas.width = 1000;
      canvas.height = 630;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, 1000, 630);
        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `${selectedAirline.id}-${selectedTier.name.toLowerCase().replace(/\s/g, '-')}-card.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 blur-[120px] rounded-full"></div>
      </div>

      <nav className="relative z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1.1.1-1.5.5l-.3.3c-.4.4-.5 1-.1 1.4L10 12l-4 4H2l2 2 2 2v-4l4-4 3.6 7.1c.4.4 1 .3 1.4-.1l.3-.3c.4-.4.6-1 .5-1.5Z"/></svg>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">AEROCARD</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800 transition-all shadow-md">
              SIGN UP
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <section className="lg:col-span-7 flex flex-col gap-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-100 rounded-[32px] blur-2xl opacity-50"></div>
              <div className="relative p-12 bg-white rounded-[32px] border border-white shadow-2xl flex items-center justify-center min-h-[480px]">
                <CreditCard 
                  airline={selectedAirline}
                  tier={selectedTier}
                  cardHolder={state.cardHolder}
                  cardNumber={state.cardNumber}
                  bank={state.bank}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                id="copy-btn"
                onClick={copySvg}
                className="flex-1 bg-slate-900 text-white hover:bg-slate-800 font-bold py-5 px-10 rounded-2xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                Copy SVG Code
              </button>
              <button 
                onClick={downloadPng}
                className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-5 px-10 rounded-2xl transition-all border border-slate-200 shadow-lg flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download PNG
              </button>
            </div>
          </section>

          <aside className="lg:col-span-5 sticky top-32">
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2 uppercase">Customise Card</h2>
              <p className="text-slate-500 font-medium">Real-world loyalty tiers for global carriers.</p>
            </div>
            <ConfigPanel state={state} selectedAirline={selectedAirline} onChange={handleStateChange} />
          </aside>
        </div>

        <section className="mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-2 uppercase">Airlines Fleet</h2>
              <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs">Explore Real Status Levels</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {AIRLINES.map((airline) => {
              const previewTier = airline.tiers[airline.tiers.length - 1]; // Preview highest tier
              return (
                <div 
                  key={airline.id} 
                  className={`group relative bg-white border p-6 rounded-[32px] transition-all cursor-pointer hover:shadow-xl hover:border-blue-200 active:scale-95 ${state.airlineId === airline.id ? 'border-blue-500 ring-4 ring-blue-500/5 shadow-lg' : 'border-slate-100 shadow-sm'}`}
                  onClick={() => setState(prev => ({ ...prev, airlineId: airline.id, tierIndex: airline.tiers.length - 1 }))}
                >
                  <div className="flex justify-center mb-8 scale-[0.85] origin-center">
                    <CreditCard 
                      airline={airline} 
                      tier={previewTier} 
                      cardHolder="FLEET PREVIEW" 
                      cardNumber="0000000000000000" 
                      bank={airline.partners[0]}
                      size="sm"
                      includeBackground={false}
                    />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div>
                      <h3 className="font-black text-slate-900 tracking-tight uppercase">{airline.name}</h3>
                      <p className="text-slate-400 text-[10px] mt-1 font-bold uppercase tracking-widest">{airline.tiers.length} Status Levels</p>
                    </div>
                    <div className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${state.airlineId === airline.id ? 'bg-slate-900 border-slate-900 shadow-lg' : 'bg-slate-50 border-slate-200 group-hover:border-slate-300'}`}>
                      {state.airlineId === airline.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="mt-40 py-24 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-2xl font-black mb-4 tracking-tighter text-slate-900 uppercase">AEROCARD DESIGNER</div>
           <p className="text-slate-400 text-sm font-medium max-w-xl mx-auto mb-10">Premium vector mockups for high-end aviation fintech. Specifically tailored for European and British market presentation.</p>
           <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">
             &copy; 2025 AeroCard Designer. All Rights Reserved.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
