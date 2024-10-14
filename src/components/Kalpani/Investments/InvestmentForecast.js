import React from 'react';

export const InvestmentForecast = ({ selectedCountry }) => {
  return (
    <div>
      {selectedCountry === "australia" && (
        <iframe
          src="/Investment/australia_investment_forecast.html"
          title="Investment Forecast - Australia"
          style={{ width: '100%', height: '500px', border: 'none' }}
        />
      )}
      {selectedCountry === "india" && (
        <iframe
          src="/Investment/india_investment_forecast.html"
          title="Investment Forecast - India"
          style={{ width: '100%', height: '500px', border: 'none' }}
        />
      )}
      {selectedCountry === "china" && (
        <iframe
          src="/Investment/china_investment_forecast.html"
          title="Investment Forecast - China"
          style={{ width: '100%', height: '500px', border: 'none' }}
        />
      )}
      {/* Optional: Handle case when no country matches */}
      {selectedCountry && !["australia", "india", "china"].includes(selectedCountry) && (
        <div>
          <p>No investment forecast data available for the selected country.</p>
        </div>
      )}
    </div>
  );
};

export default InvestmentForecast;  