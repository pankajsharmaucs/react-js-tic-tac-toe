import { Player } from '../../types';
import './square.css'

interface SquareProps {
  value: Player;
  onClick: () => void;
}

export function Square(props: SquareProps) {
  return (
    <button
      className="btn btn-3d w-100 h-100 fs-1"
      onClick={props.onClick}
      disabled={Boolean(props.value)}
    >
      {props.value}
    </button>
  );
}
