import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Layout } from './layout/layout';
import { Sentiments } from './pages/Sentiments/Sentiments';
import { OverallConsumption } from './pages/OverallConsumption/OverallConsumption';
import { EnergySource } from './pages/EnergySource/EnergySource';
import { RedditPage } from './pages/Reddit/Reddit';

import { TwitterPage } from './pages/Twitter/Twitter';
import { Stakehokder } from './pages/Stakeholder/Stakeholder';
import { Main } from './pages/Main/Main';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path="/" element={
        <Layout>
        <Main />
        </Layout>} />


        <Route path="/sentiments" element={
        <Layout>
        <Sentiments />
        </Layout>} />


        <Route path="/overall-consumption" element={
        <Layout>
        <OverallConsumption />
        </Layout>} />


        <Route path="/energy-source" element={
        <Layout>
        <EnergySource />
        </Layout>} />


        <Route path="/reddit-analysis" element={
        <Layout>
        <RedditPage />
        </Layout>} />

        <Route path="/twitter-analysis" element={
        <Layout>
        <TwitterPage  />
        </Layout>} />


        
        <Route path="/stakeholder-analysis" element={
        <Layout>
        <Stakehokder  />
        </Layout>} />



       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
