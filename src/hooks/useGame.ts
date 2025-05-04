import { useState, useEffect } from 'react';
import { BoardState, Player } from '../types';
import { calculateWinner } from '../utils/helpers';
import Swal from 'sweetalert2';

export function useGame() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const winner = calculateWinner(board);
  const currentPlayer: Player = isXNext ? 'X' : 'O';

  useEffect(() => {
    if (winner) {
      Swal.fire({
        title: `🎉 Player ${winner} wins!`,
        text: 'Do you want to play again?',
        icon: 'success',
        confirmButtonText: 'Yes, reset game',
        confirmButtonColor: '#3085d6',
        background: '#f8f9fa',
      }).then(() => {
        resetGame();
      });
    }
  }, [winner]);

  function handleClick(index: number) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return {
    board,
    currentPlayer,
    winner,
    handleClick,
    resetGame,
  };
}
