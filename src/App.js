import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Layout } from './layout/layout';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={
        <Layout>
        <Dashboard />
        </Layout>} />


       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
