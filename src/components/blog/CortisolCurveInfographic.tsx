import React from 'react';

export default function CortisolCurveInfographic() {
  return (
    <div className="w-full my-12 p-6 md:p-10 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden flex flex-col items-center">
      <h3 className="text-2xl font-display text-primary mb-2 text-center">The Dysregulated Cortisol Curve</h3>
      <p className="text-gray-500 text-sm mb-8 text-center max-w-lg">
        Comparing a healthy, biological cortisol rhythm to the inverted curve often seen in Stage 2 & 3 HPA-axis dysfunction ("Tired All Day, Wired at 2 AM").
      </p>
      
      <div className="relative w-full max-w-3xl aspect-[16/9] hidden md:block">
        <svg viewBox="0 0 800 450" className="w-full h-full">
          {/* Grid lines */}
          <line x1="50" y1="50" x2="750" y2="50" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />
          <line x1="50" y1="150" x2="750" y2="150" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />
          <line x1="50" y1="250" x2="750" y2="250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4" />
          <line x1="50" y1="350" x2="750" y2="350" stroke="#E5E7EB" strokeWidth="1" />
          
          {/* Y Axis Labels */}
          <text x="40" y="55" fill="#6B7280" fontSize="12" textAnchor="end">High</text>
          <text x="40" y="355" fill="#6B7280" fontSize="12" textAnchor="end">Low</text>
          
          {/* X Axis Labels */}
          <text x="100" y="380" fill="#1E2738" fontSize="14" fontWeight="bold" textAnchor="middle">8:00 AM</text>
          <text x="300" y="380" fill="#1E2738" fontSize="14" fontWeight="bold" textAnchor="middle">12:00 PM</text>
          <text x="500" y="380" fill="#1E2738" fontSize="14" fontWeight="bold" textAnchor="middle">5:00 PM</text>
          <text x="700" y="380" fill="#1E2738" fontSize="14" fontWeight="bold" textAnchor="middle">10:00 PM</text>

          {/* Healthy Curve (Gold) */}
          <path d="M 50 300 C 70 80, 100 50, 150 90 S 300 200, 400 250 S 600 320, 750 340" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
          
          {/* Dysregulated Curve (Red/Navy) */}
          <path d="M 50 280 C 100 340, 200 350, 300 320 S 450 280, 550 250 S 650 150, 750 80" fill="none" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" strokeDasharray="10, 5" />
          
          {/* Legend */}
          <rect x="250" y="410" width="15" height="15" rx="3" fill="#D4AF37" />
          <text x="275" y="423" fill="#1E2738" fontSize="14" fontFamily="sans-serif">Healthy Rhythm</text>
          
          <rect x="420" y="410" width="15" height="15" rx="3" fill="#EF4444" />
          <text x="445" y="423" fill="#1E2738" fontSize="14" fontFamily="sans-serif">Dysregulated Rhythm</text>

          {/* Annotations */}
          <circle cx="110" cy="70" r="5" fill="#D4AF37" />
          <text x="125" y="75" fill="#6B7280" fontSize="12" fontFamily="sans-serif">Morning Awakening Surge</text>
          
          <circle cx="730" cy="95" r="5" fill="#EF4444" />
          <text x="715" y="85" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">The 10 PM "Second Wind"</text>
          
          <circle cx="200" cy="335" r="5" fill="#EF4444" />
          <text x="215" y="340" fill="#EF4444" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Morning Exhaustion</text>
        </svg>
      </div>

      {/* Mobile fallback view */}
      <div className="md:hidden flex flex-col w-full gap-6">
        <div className="p-4 border border-gold bg-gold/5 rounded-xl">
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gold"></div>
            Healthy Rhythm
          </h4>
          <p className="text-sm text-gray-600 mb-0">High in the morning to wake you up, slowly tapering down throughout the afternoon, and hitting its lowest point at night to allow for sleep.</p>
        </div>
        <div className="p-4 border border-red-200 bg-red-50 rounded-xl">
          <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            Dysregulated Rhythm
          </h4>
          <p className="text-sm text-gray-600 mb-0">Flatlined in the morning (extreme fatigue), dragging through the afternoon, and then surging with a "second wind" right before bed, blocking melatonin.</p>
        </div>
      </div>
    </div>
  );
}
