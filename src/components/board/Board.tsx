import { Square } from '../square/Square';
import { useGame } from '../../hooks/useGame';
import './Board.css';
import Heading from '../word/Heading';

export function Board() {
  const { board, handleClick, winner, currentPlayer, resetGame } = useGame();
 

  return (
    <div className="container-fluid boardmain">
      <div className="container  p-5" style={{ maxWidth: '700px' }}>
        <div className="text-center mb-4">
          <Heading title="Tic Tac Toe" />
          <p className="fw-bold fs-2 text-uppercase text-white">
            {winner ? `🎉 Winner: ${winner}` : `Next Player: ${currentPlayer}`}
          </p>
        </div>

        <div className="row g-2 justify-content-center">
          {board.map((value, index) => (
            <div key={index} className="col-4" style={{ height: '60px' }}>
              <Square value={value} onClick={() => handleClick(index)} />
            </div>
          ))}
        </div>

        <div className="mt-4 row justify-content-center">
          <button className="reset-3d-btn" onClick={resetGame}>
            🔄 Reset Game
          </button>
        </div>
        
      </div>
    </div>
  );
}
