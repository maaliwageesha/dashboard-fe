import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<Dashboard />} />


       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
