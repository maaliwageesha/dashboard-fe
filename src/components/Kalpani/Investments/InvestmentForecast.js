import React, { useState } from 'react';
import { CountryFilter } from '../../CountryFilter/CountryFilter';  
import { ChartLayout } from '../../../layout/chartLayout/ChartLayout';  
import CsvTable from '../../../layout/CsvTable/CsvTable';  

export const InvestmentForecast = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const iframeStyle = {
    width: '100%',
    height: '500px',
    border: 'none',
  };

  return (
    <div>
      <CountryFilter updateState={(e) => setSelectedCountry(e)} />

      {selectedCountry === 'australia' && (
        <ChartLayout
          title="Investment Forecast for Renewable Energy - Australia"
          chartChild={
            <div>
              <iframe
                src="/Investment/australia_investment_forecast.html"
                title="Investment Forecast - Australia"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'} />
          }
          filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'}
          chartDescription="This graph provides insights into the forecasted investments in the renewable energy sector in Australia."
          dataSource={'Australian Government Budget Data'}
        />
      )}

      {selectedCountry === 'india' && (
        <ChartLayout
          title="Investment Forecast for Renewable Energy - India"
          chartChild={
            <div>
              <iframe
                src="/Investment/india_investment_forecast.html"
                title="Investment Forecast - India"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'} />
          }
          filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'}
          chartDescription="This graph provides insights into the forecasted investments in the renewable energy sector in India."
          dataSource={'Indian Government Budget Data'}
        />
      )}

      {selectedCountry === 'china' && (
        <ChartLayout
          title="Investment Forecast for Renewable Energy - China"
          chartChild={
            <div>
              <iframe
                src="/Investment/china_investment_forecast.html"
                title="Investment Forecast - China"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'} />
          }
          filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'}
          chartDescription="This graph provides insights into the forecasted investments in the renewable energy sector in China."
          dataSource={'https://www.iea.org/data-and-statistics/data-product/world-energy-investment-2024-datafile'}
        />
      )}

      {selectedCountry === 'all' && (
        <ChartLayout
          title="Combined Investment Forecast for Renewable Energy - Australia, India, China"
          chartChild={
            <div>
              <iframe
                src="/Investment/combined_investment_forecast.html"
                title="Investment Forecast - Combined Countries"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'} />
          }
          filePath={'/Investment/InvestmentData/Investment Amounts by country.csv'}
          chartDescription="This graph provides combined insights into the forecasted investments in renewable energy sectors across Australia, India, and China."
          dataSource={'Government Investment Data from Australia, India, and China'}
        />
      )}
    </div>
  );
};

export default InvestmentForecast;
