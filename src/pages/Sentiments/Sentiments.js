import { useState } from "react";

export const Sentiments =()=>{
    const [selectedCountry, setSelectedCountry] = useState('australia');

    // A reusable component for country selection dropdown
const CountrySelect = ({ selectedCountry, onChange }) => (
    <select value={selectedCountry} onChange={onChange}>
      <option value="australia">Australia</option>
      <option value="india">India</option>
      <option value="singapore">Singapore</option>
      <option value="china">China</option>
    </select>
  );

  
  // Handle country selection changes
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

    return(
        <div>
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
        </div>
    )
}