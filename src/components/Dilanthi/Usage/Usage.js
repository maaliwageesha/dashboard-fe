import { useState } from 'react';
import { CountryFilter } from '../../CountryFilter/CountryFilter';
import { ChartLayout } from '../../../layout/chartLayout/ChartLayout';
import CsvTable from '../../../layout/CsvTable/CsvTable';

export const Usage = () => {
    const [selectedCountry, SetSelectCountry] = useState('');

    return (
        <div>
            <CountryFilter updateState={(e) => SetSelectCountry(e)} />
            {selectedCountry == 'australia' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for Australia"
                chartChild={
                    <div>
                        <iframe
                            src="Dil/Australia_renewable_energy.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/Dil/selected_countries_data.csv'}
                    />
                }
                filePath={'/Dil/selected_countries_data.csv'}
                chartDescription=""
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            {selectedCountry == 'india' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for India"
                chartChild={
                    <div>
                        <iframe
                            src="Dil/India_renewable_energy.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/Dil/selected_countries_data.csv'}
                    />
                }
                filePath={'/Dil/selected_countries_data.csv'}
                chartDescription=""
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            {selectedCountry == 'china' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for China"
                chartChild={
                    <div>
                        <iframe
                            src="Dil/China_renewable_energy.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/Dil/selected_countries_data.csv'}
                    />
                }
                filePath={'/Dil/selected_countries_data.csv'}
                chartDescription=""
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            {selectedCountry == 'singapore' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for Singapore"
                chartChild={
                    <div>
                        <iframe
                            src="Dil/Singapore_renewable_energy.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/Dil/selected_countries_data.csv'}
                    />
                }
                filePath={'/Dil/selected_countries_data.csv'}
                chartDescription=""
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            
        </div>
    );
}
