import React from 'react';

export default function PregnenoloneStealInfographic() {
  return (
    <div className="w-full my-12 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden flex flex-col items-center">
      <h3 className="text-2xl font-display text-primary mb-2 text-center">The Pregnenolone Steal</h3>
      <p className="text-gray-500 text-sm mb-10 text-center max-w-lg">
        How chronic stress diverts resources away from sex hormones (like progesterone) and funnels them into cortisol production.
      </p>
      
      <div className="relative w-full max-w-3xl aspect-[16/9] hidden md:block">
        <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-md">
          {/* Definitions for gradients and arrows */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0D060" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D3A4F" />
              <stop offset="100%" stopColor="#1E2738" />
            </linearGradient>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCA5A5" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <marker id="arrowGold" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#D4AF37" />
            </marker>
            <marker id="arrowNavy" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E2738" />
            </marker>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
            </marker>
            
            {/* Dashed line animation */}
            <style>
              {`
                .dash-anim { stroke-dasharray: 8; animation: dash 2s linear infinite; }
                @keyframes dash { to { stroke-dashoffset: -16; } }
              `}
            </style>
          </defs>

          {/* Cholesterol Node */}
          <rect x="300" y="20" width="200" height="50" rx="10" fill="url(#navyGradient)" />
          <text x="400" y="50" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Cholesterol</text>

          {/* Arrow to Pregnenolone */}
          <line x1="400" y1="70" x2="400" y2="110" stroke="#1E2738" strokeWidth="3" markerEnd="url(#arrowNavy)" />

          {/* Pregnenolone Node (The Mother Hormone) */}
          <rect x="250" y="110" width="300" height="60" rx="30" fill="url(#goldGradient)" />
          <text x="400" y="146" fill="#1E2738" fontSize="22" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Pregnenolone</text>
          <text x="400" y="165" fill="#1E2738" fontSize="12" textAnchor="middle" fontFamily="sans-serif">(The Mother Hormone)</text>

          {/* Path 1: To Sex Hormones (Diverted/Blocked) */}
          <path d="M 300 170 C 300 220 150 220 150 270" stroke="#EF4444" strokeWidth="4" fill="transparent" strokeDasharray="5,5" markerEnd="url(#arrowRed)" />
          {/* Path 2: To Stress Hormones (The Steal) */}
          <path d="M 500 170 C 500 220 650 220 650 270" stroke="#D4AF37" strokeWidth="6" fill="transparent" className="dash-anim" markerEnd="url(#arrowGold)" />

          {/* Labels on arrows */}
          <rect x="160" y="195" width="100" height="24" rx="4" fill="white" stroke="#EF4444" />
          <text x="210" y="212" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Diverted Flow</text>

          <rect x="520" y="195" width="120" height="24" rx="4" fill="#D4AF37" />
          <text x="580" y="212" fill="#1E2738" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">"The Steal" Flow</text>

          {/* Left Branch (Sex Hormones) */}
          <rect x="50" y="270" width="200" height="50" rx="10" fill="white" stroke="#EF4444" strokeWidth="2" opacity="0.7" />
          <text x="150" y="300" fill="#EF4444" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DHEA & Progesterone</text>
          
          <line x1="150" y1="320" x2="150" y2="350" stroke="#EF4444" strokeWidth="2" opacity="0.5" markerEnd="url(#arrowRed)" />
          
          <rect x="50" y="350" width="200" height="50" rx="10" fill="white" stroke="#EF4444" strokeWidth="2" opacity="0.4" />
          <text x="150" y="380" fill="#EF4444" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Estrogen & Testosterone</text>
          
          <text x="150" y="420" fill="#EF4444" fontSize="14" fontStyle="italic" textAnchor="middle" fontFamily="sans-serif">Levels drop causing symptoms</text>

          {/* Right Branch (Stress Hormones) */}
          <rect x="550" y="270" width="200" height="50" rx="10" fill="url(#navyGradient)" />
          <text x="650" y="300" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Cortisol</text>
          
          <text x="650" y="340" fill="#1E2738" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">OVERPRODUCTION</text>
          <text x="650" y="360" fill="#666" fontSize="12" textAnchor="middle" fontFamily="sans-serif">• Visceral Fat Storage</text>
          <text x="650" y="380" fill="#666" fontSize="12" textAnchor="middle" fontFamily="sans-serif">• Insulin Resistance</text>
          <text x="650" y="400" fill="#666" fontSize="12" textAnchor="middle" fontFamily="sans-serif">• Thyroid Suppression</text>

        </svg>
      </div>

      {/* Mobile fallback view */}
      <div className="md:hidden flex flex-col w-full gap-4">
        <div className="p-4 bg-primary text-white rounded-xl text-center font-bold">Cholesterol</div>
        <div className="text-center text-primary">↓</div>
        <div className="p-4 bg-gradient-to-r from-[#D4AF37] to-[#F0D060] text-primary rounded-xl text-center font-bold text-lg">Pregnenolone</div>
        
        <div className="flex gap-4 mt-2">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-red-500 font-bold text-xs mb-2 text-center">FLOW DIVERTED</span>
            <div className="w-full p-3 border-2 border-red-200 text-red-500 rounded-lg text-center font-bold text-sm opacity-60 h-full flex items-center justify-center">
              Sex Hormones (Progesterone)
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-gold font-bold text-xs mb-2 text-center">THE STEAL</span>
            <div className="w-full p-3 bg-primary text-white rounded-lg text-center font-bold text-sm h-full flex items-center justify-center">
              Stress Hormones (Cortisol)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
