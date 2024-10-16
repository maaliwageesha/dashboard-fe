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
          title="Total Consumed Renewable Energy in Australia"
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
          chartDescription="The following graph shows the renewable energy consumption in Australia from 2016-2028. As per the graph there have not been a steady growth within the years. There have been up's and downs during years specially between 2001 and 2002. But according to the forecasted prediction there is a growth of consumption in renewable energy within Australia for the next couple of years."
          dataSource={
            'Australian Government Clean Energy Regulator - Large-scale renewable energy data (https://cer.gov.au/markets/reports-and-data/large-scale-renewable-energy-data)'
          }
        />
      )}

      {selectedCountry == 'australia' && (
        <ChartLayout
          title="Total Generated Renewable Energy in Australia "
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
          chartDescription="The graph below shows the renewable energy generated within Australia. Accoriding to the graph there have been a steady increase in the generation of renewable energy between 2026-2026. The future forecaste also reveals that there will be a increase but of a very small amount. As the graph line have been going horizontal in the past years."
          dataSource={
            'Australian Government Clean Energy Regulator - Large-scale renewable energy data (https://cer.gov.au/markets/reports-and-data/large-scale-renewable-energy-data)'
          }
        />
      )}

      {selectedCountry == 'australia' && (
        <ChartLayout
          title="Total Installed Renewable Energy in Australia"
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
          chartDescription="The following graph shows the probable renewable energy in Australia. The probable renewable energy has fluctuated rapidly during the years but it has somehow managed to increase the probable renewable energy within the country. "
          dataSource={
            'Australian Government Clean Energy Regulator - Large-scale renewable energy data (https://cer.gov.au/markets/reports-and-data/large-scale-renewable-energy-data)'
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

      {(selectedCountry == 'china' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total consumed Renewable Energy in China"
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

      {(selectedCountry == 'china' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Generated Renewable Energy in China"
          chartChild={
            <div>
              <iframe
                src="consumption/china/china_generation_forecast.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/consumption/China_generation.csv'} />
          }
          filePath={'/consumption/China_generation.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'china' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Installed Renewable Energy in China"
          chartChild={
            <div>
              <iframe
                src="consumption/china/china_generation_forecast.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/consumption/China_generation.csv'} />
          }
          filePath={'/consumption/China_generation.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'india' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Consumed Renewable Energy in India"
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
              filePath={'/consumption/India_consumptions.csv'}
            />
          }
          filePath={'/consumption/AUS Renewable Energy Progress.csv'}
          chartDescription="The graph below shows the renewable energy consumption in India. When looking at long time back like in 1980's they have used alot of renewable energy for their electricity usage and it has gradually reduced with time. after 2000 the line starts to gradually increase."
          dataSource={
            'U.S. Energy Information Administration (2023); Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'india' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Generated Renewable Energy in India"
          chartChild={
            <div>
              <iframe
                src="consumption/india/india_generation_forecast.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/consumption/India_generation.csv'} />
          }
          filePath={'/consumption/India_generation.csv'}
          chartDescription="The following graph shows the total renewable energy generated in India from 2000 to 2026. There have been a steady increase in the generation of renewable energy"
          dataSource={
            'International Renewable Energy Agency (http://www.irena.org/-/media/Files/IRENA/Agency/Publication/2024/Jul/IRENA_Stats_extract_2024-H2.xlsx)'
          }
        />
      )}

      {(selectedCountry == 'india' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Installed Capacity Renewable Energy in India"
          chartChild={
            <div>
              <iframe
                src="consumption/india/india_capacity_forecast.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/consumption/India_generation.csv'} />
          }
          filePath={'/consumption/India_generation.csv'}
          chartDescription="The following graph shows the total capacity of renewable enrgy in India and how it has increased with time. It shows the maximum GWh of renewable energy that can be produced in India. It also shows a steady increase of capacity with time."
          dataSource={
            'International Renewable Energy Agency (http://www.irena.org/-/media/Files/IRENA/Agency/Publication/2024/Jul/IRENA_Stats_extract_2024-H2.xlsx)'
          }
        />
      )}

      {(selectedCountry == 'singapore' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Consumed Renewable Energy in Singapore"
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

      {(selectedCountry == 'singapore' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Generated Renewable Energy in Singapore"
          chartChild={
            <div>
              <iframe
                src="consumption/singapore/singapore_generation_forecast.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/IRENA_Stats_extract_2024 H2.csv'}
            />
          }
          filePath={'/consumption/IRENA_Stats_extract_2024 H2.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}

      {(selectedCountry == 'singapore' || selectedCountry == 'all') && (
        <ChartLayout
          title="Total Installed Capacity Renewable Energy in Singapore"
          chartChild={
            <div>
              <iframe
                src="consumption/singapore/singapore_capacity_forecast.html"
                title="Plotly Graph"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
            </div>
          }
          DataChild={
            <CsvTable
              filePath={'/consumption/IRENA_Stats_extract_2024 H2.csv'}
            />
          }
          filePath={'/consumption/IRENA_Stats_extract_2024 H2.csv'}
          chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
          dataSource={
            'Energy Institute - Statistical Review of World Energy (2024)'
          }
        />
      )}
    </div>
  );
};
