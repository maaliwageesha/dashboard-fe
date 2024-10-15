import React, { useState } from 'react';
import { ElectricityUsage } from '../../components/Malidi/Consumption/ElectricityUsage';
import { Twitter } from '../../components/Malidi/Twitter/Twitter';
import { Reddit } from '../../components/Malidi/Reddit/Reddit';
import { Usage } from '../../components/Dilanthi/Usage/Usage';
import './Dashboard.scss';
import { Analysis, Stakeholder } from '../../components/Bhumi/Stakeholder';

// A reusable component for country selection dropdown
const CountrySelect = ({ selectedCountry, onChange }) => (
  <select value={selectedCountry} onChange={onChange}>
    <option value="australia">Australia</option>
    <option value="india">India</option>
    <option value="singapore">Singapore</option>
    <option value="china">China</option>
  </select>
);

export const Dashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState('australia');

  // Handle country selection changes
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className='border-margin'>
      <div className='padding-top'>
        {/* <div className='heading'>
          <h1 className='heading-txt'>DASHBOARD FOR RENEWABLE ENERGY</h1>
        </div> */}

        {/* Country Selection Dropdown */}
        <CountrySelect selectedCountry={selectedCountry} onChange={handleCountryChange} />

        <div className='heading2'>
          <h1 className='heading-txt2'>Latest trends & current affairs on renewable energy</h1>
        </div>

        {/* Twitter and Reddit Components */}
        <div className='align-flex'>
          <div style={{ width: '50%' }}>
            <Twitter selectedCountry={selectedCountry} />
          </div>
          <div style={{ width: '50%' }}>
            <Reddit />
          </div>
        </div>

        <div className='heading2'>
          <h1 className='heading-txt2'>Sentiment Trends with Prediction (2021-2026)</h1>
        </div>

        {/* Country Select for Sentiment Trends */}
        <CountrySelect selectedCountry={selectedCountry} onChange={handleCountryChange} />

        {/* Sentiment Trends iFrame */}
        <div style={{ marginTop: '20px' }}>
          <iframe
            src={`/SAGraphs/${selectedCountry}_sentiment_trends.html`}
            width="100%"
            height="600px"
            title="Sentiment Trends"
            frameBorder="0"
          ></iframe>
        </div>
        <div className='heading2'>
          <h1 className='heading-txt2'>Social Network of Keywords in Renewable Energy Comments</h1>
        </div>

        {/* Social Network iFrame */}
        <iframe
          src="http://127.0.0.1:8050/"
          style={{ width: '100%', height: '600px', border: 'none', paddingLeft: '10px', marginTop: '20px' }}
          title="Social Network of Keywords"
        ></iframe>

        <div className='heading2'>
          <h1 className='heading-txt2'>Current & Future Renewable Energy Production Analysis</h1>
        </div>
        {/* Electricity Usage Component */}
        <ElectricityUsage selectedCountry={selectedCountry} />

        <div className='heading2'>
          <h1 className='heading-txt2'>Usage of Renewable Energy</h1>
        </div>
        {/* Renewable Energy Usage Component */}
        <Usage selectedCountry={selectedCountry} />

        <div className='heading2'>
          <h1 className='heading-txt2'>Annual Subsidies for Renewable Energy Projects Australia (2014-2023)</h1>
        </div>
        {/* Renewable Energy Usage Component */}
        <Stakeholder selectedCountry={selectedCountry} />
      </div>
    </div>
  );
};
