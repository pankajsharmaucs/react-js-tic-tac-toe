import { useNavigate } from 'react-router-dom';
import './StartPage.css';

export function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page d-flex justify-content-md-start justify-content-center align-items-center px-5">
      <button className="start-button" onClick={() => navigate('/game')}>
        Start Game
      </button>
    </div>
  );
}
