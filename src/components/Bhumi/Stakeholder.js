import { useEffect, useState } from 'react';
import { ChartLayout_Stakeholder } from '../../layout/chartLayout/ChartLayout_Stakeholder';
import CsvTable from '../../layout/CsvTable/CsvTable';
import { CountryFilter } from '../CountryFilter/CountryFilter';
export const Stakeholder = () => {
    const [csvData, setCsvData] = useState(null);

    const [selectedCountry, SetSelectCountry] = useState('');
    return (
        <div>
            <CountryFilter updateState={(e) => SetSelectCountry(e)} />
            {(selectedCountry == 'australia' || selectedCountry == 'all') && (
                <ChartLayout_Stakeholder
                title="Stakeholder in Australia"
                chartChild={
                    <div>
                    <iframe
                        src="Bhumi/stakeholders_australia.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                    />
                    </div>
                }
                DataChild={
                    <CsvTable
                    filePath={'Bhumi/csv/Renewable_Energy_Stakeholder_Australia_with_References.csv'}
                    />
                }
                filePath={'Bhumi/csv/Renewable_Energy_Stakeholder_Australia_with_References.csv'}
                chartDescription="This pie chart shows the top 10 stakeholders in Australia's renewable energy sector by investment share. Each slice represents a stakeholder's portion, with exploded slices highlighting their influence."
                dataSource={
                    ''
                }
                />
                
            )}
            {(selectedCountry == 'australia' || selectedCountry == 'all') && (
                <ChartLayout_Stakeholder
                title="Annual subsidies for renewanle energy in Australia"
                chartChild={
                    <div>
                    <iframe
                        src="Bhumi/Australia_estimated_subsidies_renewable_energy.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                    />
                    </div>
                }
                DataChild={
                    <CsvTable
                    filePath={'Bhumi/csv/renewable_energy_targets.csv'}
                    />
                }
                filePath={'Bhumi/csv/renewable_energy_targets.csv'}
                chartDescription="This chart visualizes the estimated subsidies given to large-scale (LGC) and small-scale (STC) renewable energy projects from 2014 to 2023. It uses stacked bars to compare the annual subsidies, with large-scale subsidies shown in green and small-scale subsidies in purple. The chart highlights how both types of subsidies fluctuated over the years, with a noticeable rise in small-scale subsidies from 2020 to 2022, while large-scale subsidies peaked in 2018. The combined total showcases the government's growing support for renewable energy projects during this period."
                // dataSource={
                //     'Energy Institute - Statistical Review of World Energy (2024)'
                // }
                />
                
            )}

            {(selectedCountry == 'singapore' || selectedCountry == 'all') && (
                <ChartLayout_Stakeholder
                title="Stakeholder in Singapore"
                chartChild={
                    <div>
                    <iframe
                        src="Bhumi/stakeholders_singapore.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                    />
                    </div>
                }
                DataChild={
                    <CsvTable
                    filePath={'Bhumi/csv/singapore_renewable_energy_investments.csv'}
                    />
                }
                filePath={'Bhumi/csv/singapore_renewable_energy_investments.csv'}
                chartDescription="This visualisation showcases the top investors in Singapore's renewable energy sector, emphasizing the financial impact of major companies. Sunseap Group Pte Ltd and Sembcorp Industries Ltd dominate the investments, collectively contributing the largest share, while smaller players like Envision Digital also play important roles in driving the country’s renewable energy initiatives."
                // dataSource={
                //     'Energy Institute - Statistical Review of World Energy (2024)'
                // }
                />
            )}

            {(selectedCountry == 'india' || selectedCountry == 'all') && (
                <ChartLayout_Stakeholder
                title="Stakeholder in India"
                chartChild={
                    <div>
                    <iframe
                        src="Bhumi/stakeholders_india.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                    />
                    </div>
                }
                DataChild={
                    <CsvTable
                    filePath={'Bhumi/csv/Renewable_Energy_Investments_India_with_References.csv'}
                    />
                }
                filePath={'Bhumi/csv/Renewable_Energy_Investments_India_with_References.csv'}
                chartDescription="This pie chart illustrates the major stakeholders in India's renewable energy sector, depicting their share of total investments. It provides a snapshot of the key players contributing to the development and expansion of renewable energy in India."
                // dataSource={
                //     'Energy Institute - Statistical Review of World Energy (2024)'
                // }
                />
            )}

            {(selectedCountry == 'china' || selectedCountry == 'all') && (
                <ChartLayout_Stakeholder
                title="Stakeholder in China"
                chartChild={
                    <div>
                    <iframe
                        src="Bhumi/stakeholders_china.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                    />
                    </div>
                }
                DataChild={
                    <CsvTable
                    filePath={'Bhumi/csv/Renewable_Energy_Stakeholder_China_with_References.csv'}
                    />
                }
                filePath={'Bhumi/csv/Renewable_Energy_Stakeholder_China_with_References.csv'}
                chartDescription="This pie chart showcases the key players in China's renewable energy sector, with Sinohydro (PowerChina) and China Three Gorges Corporation emerging as the top investors. It also highlights the contributions of other significant stakeholders, such as China State Grid and China Huaneng Group, reflecting the diverse and impactful investments shaping the country's renewable energy landscape."
                // dataSource={
                //     'Energy Institute - Statistical Review of World Energy (2024)'
                // }
                />
            )}
        </div>
  );
};
