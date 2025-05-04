import { Routes, Route } from 'react-router-dom';
import { StartPage } from './pages/start/StartPage';
import { GamePage } from './pages/GamePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}

export default App;
