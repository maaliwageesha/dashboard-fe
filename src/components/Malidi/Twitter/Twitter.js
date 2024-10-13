
import { useEffect, useState } from 'react'
import { ChartLayout } from '../../../layout/chartLayout/ChartLayout'
import CsvTable from '../../../layout/CsvTable/CsvTable'
import './Twitter.scss'
import ChartCSV from './twitter_renewable_energy_australia.csv'
export const Twitter =(selectedCountry)=>{
    const [csvData, setCsvData] = useState(null);


    return(
        <div>
            <ChartLayout title="Latest Energy Sources Focused on Twitter" chartChild={selectedCountry.selectedCountry=="australia" && <div>
          <iframe
      src="twitter/australia.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>} DataChild={<CsvTable filePath={'/twitter/twitter_renewable_energy_australia.csv'}/>}
/>
                                

        {selectedCountry.selectedCountry=="singapore" && <div>
          <iframe
      src="twitter/singapore.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}


        {selectedCountry.selectedCountry=="india" && <div>
          <iframe
      src="twitter/india.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}
                    {selectedCountry.selectedCountry=="china" && <div>
          <iframe
      src="twitter/china.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}

        </div>
    )
}