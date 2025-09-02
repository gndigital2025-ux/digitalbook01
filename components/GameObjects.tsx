
import React from 'react';

interface GameObjectsProps {
  onObjectClick: (id: string) => void;
  disabled: boolean;
}

const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ComputerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="9" y1="6" x2="15" y2="6"></line>
      <circle cx="12" cy="17" r="1"></circle>
    </svg>
);

const KeyboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 8.5v7a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2Z"></path>
    <path d="M7 11.5h.01"></path>
    <path d="M10 11.5h.01"></path>
    <path d="M13 11.5h.01"></path>
    <path d="M16 11.5h.01"></path>
    <path d="M7 14.5h10"></path>
  </svg>
);

const MouseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17a5 5 0 1 1 4 0v-6a2 2 0 0 0-2-2h-0a2 2 0 0 0-2 2Z"></path>
      <path d="M12 9v4"></path>
    </svg>
);

const gameObjects = [
  { id: 'monitor', name: '모니터', icon: <MonitorIcon /> },
  { id: 'computer', name: '본체', icon: <ComputerIcon /> },
  { id: 'keyboard', name: '키보드', icon: <KeyboardIcon /> },
  { id: 'mouse', name: '마우스', icon: <MouseIcon /> },
];

const GameObjects: React.FC<GameObjectsProps> = ({ onObjectClick, disabled }) => {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
      {gameObjects.map((obj) => (
        <button
          key={obj.id}
          onClick={() => onObjectClick(obj.id)}
          disabled={disabled}
          className="bg-white rounded-2xl p-4 md:p-6 shadow-lg transform transition-all duration-200 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
          aria-label={obj.name}
        >
          {obj.icon}
        </button>
      ))}
    </div>
  );
};

export default GameObjects;
