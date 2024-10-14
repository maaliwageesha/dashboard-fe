import { ChartLayout } from "../../../layout/chartLayout/ChartLayout";
import CsvTable from "../../../layout/CsvTable/CsvTable";

export const Reddit = () => {
  return (
    <div>
      <ChartLayout
        title="Latest Engagements in Renewable Energy (past week)"
        chartChild={
          <div>
            <iframe
              src="reddit/reddit.html"
              title="Plotly Graph"
              style={{ width: '100%', height: '500px', border: 'none' }}
            />
          </div>
        }
        DataChild={
          <CsvTable
            filePath={'/reddit/reddit_renewable_energy.csv'}
          />
        }
        filePath={'/reddit/reddit_renewable_energy.csv'}
        chartDescription="When looking at longer historical data it can be difficult to see how the energy mix is changing from year-to-year. Are we adding more renewables than fossil fuels? Are we in fact reducing our consumption of coal or oil?"
        dataSource={
          'Energy Institute - Statistical Review of World Energy (2024)'
        }
      />
    </div>
  );
};
