
import React from 'react';
import { Airline, CardState } from '../types';
import { AIRLINES, BANKS } from '../constants';

interface ConfigPanelProps {
  state: CardState;
  selectedAirline: Airline;
  onChange: (newState: Partial<CardState>) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ state, selectedAirline, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-500 mb-2">Airline Carrier</label>
        <select 
          value={state.airlineId}
          onChange={(e) => {
            const newAirline = AIRLINES.find(a => a.id === e.target.value) || AIRLINES[0];
            onChange({ 
              airlineId: e.target.value,
              tierIndex: 0 // Reset to first tier of new airline
            });
          }}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 font-medium"
        >
          {AIRLINES.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-500 mb-2">Loyalty Status Tier</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {selectedAirline.tiers.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => onChange({ tierIndex: idx })}
              className={`px-3 py-2 rounded-lg text-sm font-bold transition-all border text-left flex flex-col ${
                state.tierIndex === idx 
                  ? 'bg-slate-900 text-white shadow-md border-slate-900' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-transparent'
              }`}
            >
              <span className="text-[10px] uppercase opacity-60">Status</span>
              <span className="truncate">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-500 mb-2">Banking Partner</label>
        <select 
          value={state.bank}
          onChange={(e) => onChange({ bank: e.target.value })}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 font-medium"
        >
          {BANKS.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-500 mb-2">Card Holder Name</label>
        <input 
          type="text"
          value={state.cardHolder}
          onChange={(e) => onChange({ cardHolder: e.target.value })}
          placeholder="e.g. JOHN DOE"
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none uppercase text-slate-900 font-medium placeholder:text-slate-400"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-500 mb-2">Card Number</label>
        <input 
          type="text"
          value={state.cardNumber}
          maxLength={16}
          onChange={(e) => onChange({ cardNumber: e.target.value.replace(/\D/g, '') })}
          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none mono text-slate-900 font-bold"
        />
      </div>
    </div>
  );
};

export default ConfigPanel;
