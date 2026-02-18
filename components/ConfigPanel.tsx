
import React from 'react';
import { Airline, Tier, CardState } from '../types';
import { AIRLINES, BANKS } from '../constants';

interface ConfigPanelProps {
  state: CardState;
  onChange: (newState: Partial<CardState>) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ state, onChange }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Airline Carrier</label>
        <select 
          value={state.airline}
          onChange={(e) => onChange({ airline: e.target.value })}
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {AIRLINES.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Membership Tier</label>
        <div className="grid grid-cols-2 gap-2">
          {Object.values(Tier).map(t => (
            <button
              key={t}
              onClick={() => onChange({ tier: t })}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                state.tier === t 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Banking Partner</label>
        <select 
          value={state.bank}
          onChange={(e) => onChange({ bank: e.target.value })}
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {BANKS.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Card Holder Name</label>
        <input 
          type="text"
          value={state.cardHolder}
          onChange={(e) => onChange({ cardHolder: e.target.value })}
          placeholder="e.g. JOHN DOE"
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none uppercase"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Custom Card Number (Last 4 digits visible)</label>
        <input 
          type="text"
          value={state.cardNumber}
          maxLength={16}
          onChange={(e) => onChange({ cardNumber: e.target.value.replace(/\D/g, '') })}
          className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none mono"
        />
      </div>
    </div>
  );
};

export default ConfigPanel;
