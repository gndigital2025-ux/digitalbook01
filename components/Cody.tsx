
import React from 'react';

interface CodyProps {
  emotion?: 'default' | 'happy' | 'sad' | 'complete';
}

const Cody: React.FC<CodyProps> = ({ emotion = 'default' }) => {
  const renderFace = () => {
    switch (emotion) {
      case 'complete': // Fallthrough for happy face
      case 'happy':
        return (
          <>
            {/* Eyes */}
            <path d="M 70 90 A 10 10 0 0 1 80 90" stroke="#333" strokeWidth="4" fill="none" />
            <path d="M 120 90 A 10 10 0 0 1 130 90" stroke="#333" strokeWidth="4" fill="none" />
            {/* Mouth */}
            <path d="M 85 125 Q 100 150 115 125" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        );
      case 'sad':
        return (
          <>
            {/* Eyes */}
            <path d="M 70 100 A 10 10 0 0 0 80 100" stroke="#333" strokeWidth="4" fill="none" />
            <path d="M 120 100 A 10 10 0 0 0 130 100" stroke="#333" strokeWidth="4" fill="none" />
            {/* Mouth */}
            <path d="M 90 135 Q 100 120 110 135" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        );
      default:
        return (
          <>
            {/* Eyes */}
            <circle cx="75" cy="95" r="10" fill="#333" />
            <circle cx="125" cy="95" r="10" fill="#333" />
            {/* Eye shines */}
            <circle cx="78" cy="92" r="3" fill="white" />
            <circle cx="128" cy="92" r="3" fill="white" />
            {/* Mouth */}
            <path d="M 90 125 Q 100 140 110 125" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        );
    }
  };

  const Sparkles = () => (
    <g className="sparkles">
      <path d="M180 80 L182 75 L184 80 L189 82 L184 84 L182 89 L180 84 L175 82 Z" fill="gold" />
      <path d="M40 60 L42 55 L44 60 L49 62 L44 64 L42 69 L40 64 L35 62 Z" fill="gold" />
      <path d="M160 150 L162 145 L164 150 L169 152 L164 154 L162 159 L160 154 L155 152 Z" fill="gold" />
    </g>
  );

  return (
    <div className="relative group cursor-pointer">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes sparkle {
            0%, 100% { transform: scale(0.8); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .sparkles path:nth-child(1) { animation: sparkle 1s ease-in-out infinite; }
          .sparkles path:nth-child(2) { animation: sparkle 1s ease-in-out infinite 0.3s; }
          .sparkles path:nth-child(3) { animation: sparkle 1s ease-in-out infinite 0.6s; }
        `}
      </style>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="drop-shadow-2xl animate-float"
      >
        <defs>
          <radialGradient id="cody-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#FFFDE1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFD54F', stopOpacity: 0.8 }} />
          </radialGradient>
          <radialGradient id="rainbow-glow" gradientUnits="objectBoundingBox" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="hsl(0, 100%, 80%)" />
              <stop offset="16.66%" stopColor="hsl(60, 100%, 80%)" />
              <stop offset="33.33%" stopColor="hsl(120, 100%, 80%)" />
              <stop offset="50%" stopColor="hsl(180, 100%, 80%)" />
              <stop offset="66.66%" stopColor="hsl(240, 100%, 80%)" />
              <stop offset="83.33%" stopColor="hsl(300, 100%, 80%)" />
              <stop offset="100%" stopColor="hsl(360, 100%, 80%)" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 0.5 0.5"
                to="360 0.5 0.5"
                dur="4s"
                repeatCount="indefinite"
              />
          </radialGradient>
          <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#glow-effect)">
          <circle cx="100" cy="100" r="80" fill={emotion === 'complete' ? "url(#rainbow-glow)" : "url(#cody-glow)"} />
        </g>
        
        {renderFace()}

        {/* Blushes */}
        <ellipse cx="60" cy="115" rx="15" ry="8" fill="#FFC0CB" opacity="0.6" />
        <ellipse cx="140" cy="115" rx="15" ry="8" fill="#FFC0CB" opacity="0.6" />

        {(emotion === 'happy' || emotion === 'complete') && <Sparkles />}
      </svg>
    </div>
  );
};

export default Cody;