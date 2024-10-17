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
import { PoliciesPage } from './pages/Policies/Policies';  
import { InvestmentsPage } from './pages/Investments/Investments';  


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

        <Route path="/network-diagram" element={
          <Layout>
          {/* Social Network iFrame */}
          <iframe
            src="https://python-be.onrender.com/"
            style={{ width: '100%', height: '600px', border: 'none', paddingLeft: '10px', marginTop: '20px' }}
            title="Social Network of Keywords"
          ></iframe>
          </Layout>} />
        
                             
          <Route path="/Policies" element={
            <Layout>
              <PoliciesPage />  
            </Layout>
          } />

          <Route path="/Investments" element={
            <Layout>
              <InvestmentsPage />
            </Layout>
          } />


       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
