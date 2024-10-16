import { useEffect, useState } from 'react';
import { ChartLayout } from '../../../layout/chartLayout/ChartLayout';
import CsvTable from '../../../layout/CsvTable/CsvTable';
import './Twitter.scss';
import ChartCSV from './twitter_renewable_energy_australia.csv';
import { CountryFilter } from '../../CountryFilter/CountryFilter';
export const Twitter = () => {
  const [csvData, setCsvData] = useState(null);

  const [selectedCountry, SetSelectCountry] = useState('');

  return (
    <div>
      <CountryFilter updateState={(e) => SetSelectCountry(e)} />
      {(selectedCountry == 'australia' || selectedCountry == 'all') && (
        <ChartLayout
          title="Latest Energy Sources Focused on Twitter in Australia"
          chartChild={
            <div>
              <iframe
                src="twitter/australia.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/twitter/twitter_renewable_energy_australia.csv'}
            />
          }
          filePath={'/twitter/twitter_renewable_energy_australia.csv'}
          chartDescription="The below graph shows the engagement of tweets in Australia regarding the sources of renewable energy. This is from the officially government account"
          dataSource={
            'Tweets from Australia account'
          }
        />
      )}

      {(selectedCountry == 'singapore' || selectedCountry == 'all') && (
        <ChartLayout
          title="Latest Energy Sources Focused on Twitter in Singapore"
          chartChild={
            <div>
              <iframe
                src="twitter/singapore.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/twitter/twitter_renewable_energy_singapore.csv'}
            />
          }
          filePath={'/twitter/twitter_renewable_energy_singapore.csv'}
          chartDescription="The below graph shows the engagement of tweets in Singapore regarding the sources of renewable energy. This is from the officially government account"
          dataSource={
            'Tweets from Singapore account'
          }
        />
      )}

      {(selectedCountry == 'india' || selectedCountry == 'all') && (
        <ChartLayout
          title="Latest Energy Sources Focused on Twitter in India"
          chartChild={
            <div>
              <iframe
                src="twitter/india.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/twitter/twitter_renewable_energy_india.csv'}
            />
          }
          filePath={'/twitter/twitter_renewable_energy_india.csv'}
          chartDescription="The below graph shows the engagement of tweets in India regarding the sources of renewable energy. This is from the officially government account"
          dataSource={
            'Tweets from india account'
          }
        />
      )}

      {(selectedCountry == 'china' || selectedCountry == 'all') && (
        <ChartLayout
          title="Latest Energy Sources Focused on Twitter in China"
          chartChild={
            <div>
              <iframe
                src="twitter/china.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/twitter/twitter_renewable_energy_china.csv'}
            />
          }
          filePath={'/twitter/twitter_renewable_energy_india.csv'}
          chartDescription="The below graph shows the engagement of tweets in China regarding the sources of renewable energy. This is from the officially government account"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}
    </div>
  );
};
