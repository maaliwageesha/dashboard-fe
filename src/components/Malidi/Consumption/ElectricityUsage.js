import { useState } from 'react';
import { CountryFilter } from '../../CountryFilter/CountryFilter';
import { ChartLayout } from '../../../layout/chartLayout/ChartLayout';
import CsvTable from '../../../layout/CsvTable/CsvTable';

export const ElectricityUsage = () => {
  const [selectedCountry, SetSelectCountry] = useState('');

  return (
    <div>
      <CountryFilter updateState={(e) => SetSelectCountry(e)} />

      {selectedCountry == 'australia' && (
        <ChartLayout
          title="Total Created Renewable Energy in Australia (2016-2026)"
          chartChild={
            <div>
              <iframe
                src="consumption/australia/1.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {selectedCountry == 'australia' && (
        <ChartLayout
          title="Total Used Renewable Energy in Australia (2016-2026)"
          chartChild={
            <div>
              <iframe
                src="consumption/australia/2.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {selectedCountry == 'australia' && (
        <ChartLayout
          title="Total Probable Renewable Energy in Australia (2016-2026)"
          chartChild={
            <div>
              <iframe
                src="consumption/australia/3.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {selectedCountry == 'all' && (
        <ChartLayout
          title="Total Created/Used/Probable Renewable Energy in Australia (2016-2026)"
          chartChild={
            <div>
              <iframe
                src="consumption/australia/CombineAll.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'china' || selectedCountry =='all') && (
        <ChartLayout
          title="Total consumed Renewable Energy in China (1966-2028)"
          chartChild={
            <div>
              <iframe
                src="consumption/china/china.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'india' || selectedCountry =='all')&& (
        <ChartLayout
          title="Total consumed Renewable Energy in India (1966-2028)"
          chartChild={
            <div>
              <iframe
                src="consumption/india/india.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'singapore' || selectedCountry =='all')&& (
        <ChartLayout
          title="Total consumed Renewable Energy in Singapore (1966-2028)"
          chartChild={
            <div>
              <iframe
                src="consumption/singapore/singapore.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/AUS Renewable Energy Progress.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}
    </div>
  );
};
