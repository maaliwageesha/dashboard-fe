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
        chartDescription="The following graph shows the engagements of renewable energy in the past week. ."
        dataSource={
          'Reddit forums,comments and posts'
        }
      />
    </div>
  );
};
