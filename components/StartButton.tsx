
import React from 'react';

interface StartButtonProps {
  onStartClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartClick }) => {
  return (
    <button
      onClick={onStartClick}
      className="px-12 py-4 bg-white text-sky-600 font-bold text-2xl rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300"
    >
      게임 시작
    </button>
  );
};

export default StartButton;
