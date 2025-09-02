
import React, { useState } from 'react';
import Cody from './components/Cody';
import StartButton from './components/StartButton';
import GameObjects from './components/GameObjects';

type SelectionResult = 'correct' | 'incorrect' | null;

const levels = [
  { level: 1, question: "나의 반짝이는 눈을 찾아줘!", answer: "monitor" },
  { level: 2, question: "나의 따뜻한 심장을 찾아줘!", answer: "computer" },
  { level: 3, question: "나의 목소리를 들려줘!", answer: "keyboard" },
  { level: 4, question: "세상과 악수할 나의 손을 찾아줘!", answer: "mouse" },
];

const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [selectionResult, setSelectionResult] = useState<SelectionResult>(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const currentGame = levels[currentLevel - 1];

  const handleStartGame = () => {
    setIsGameStarted(true);
    setSelectionResult(null);
    setCurrentLevel(1);
    setIsGameComplete(false);
  };

  const handlePlayAgain = () => {
    setIsGameStarted(false);
    setCurrentLevel(1);
    setSelectionResult(null);
    setIsGameComplete(false);
  };

  const handleObjectClick = (id: string) => {
    if (selectionResult !== null) return; // Prevent clicks while processing

    if (id === currentGame.answer) {
      setSelectionResult('correct');
    } else {
      setSelectionResult('incorrect');
      setTimeout(() => {
        setSelectionResult(null);
      }, 2000);
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < levels.length) {
      setCurrentLevel(prev => prev + 1);
      setSelectionResult(null);
    } else {
      // End of game, show completion screen
      setIsGameComplete(true);
    }
  };

  const getFeedbackMessage = () => {
    if (!isGameStarted) {
        return '나의 첫 디지털 친구, 코디';
    }
    switch (selectionResult) {
      case 'correct':
        return '찾았다! 고마워!';
      case 'incorrect':
        return '이게 아닌데...';
      default:
        return currentGame?.question;
    }
  };
  
  const getCodyEmotion = () => {
    switch (selectionResult) {
      case 'correct':
        return 'happy';
      case 'incorrect':
        return 'sad';
      default:
        return 'default';
    }
  };

  if (isGameComplete) {
    return (
      <main className="bg-sky-200 min-h-screen w-full flex flex-col items-center justify-between p-4 font-sans text-center">
        <header className="w-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mt-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            나의 첫 디지털 친구, 코디
          </h1>
        </header>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-3xl md:text-4xl font-bold text-white h-12" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            네 덕분에 내 집이 완성됐어! 고마워, 나의 첫 번째 친구!
          </p>
          <Cody emotion="complete" />
        </div>
        <footer className="w-full flex items-center justify-center mb-8 h-32">
          <button
            onClick={handlePlayAgain}
            className="px-12 py-4 bg-white text-sky-600 font-bold text-2xl rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            처음으로 돌아가기
          </button>
        </footer>
      </main>
    );
  }


  return (
    <main className="bg-sky-200 min-h-screen w-full flex flex-col items-center justify-between p-4 font-sans">
      <header className="w-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mt-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
          나의 첫 디지털 친구, 코디
        </h1>
      </header>
      
      <div className="flex flex-col items-center justify-center gap-6">
         <p className="text-3xl md:text-4xl font-bold text-white text-center h-12" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            {getFeedbackMessage()}
          </p>
        <Cody emotion={getCodyEmotion()} />
      </div>

      <footer className="w-full flex items-center justify-center mb-8 h-32">
        {!isGameStarted ? (
          <StartButton onStartClick={handleStartGame} />
        ) : selectionResult === 'correct' ? (
          <button
            onClick={handleNextLevel}
            className="px-12 py-4 bg-white text-sky-600 font-bold text-2xl rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            {currentLevel < levels.length ? '다음 문제' : '완성!'}
          </button>
        ) : (
          <GameObjects onObjectClick={handleObjectClick} disabled={selectionResult !== null} />
        )}
      </footer>
    </main>
  );
};

export default App;
