import { NavBar } from './components/navBar';
import { LandingPage, Pomodoro, Error404 } from './templates';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      
    </div>
  );
}

export default App;
