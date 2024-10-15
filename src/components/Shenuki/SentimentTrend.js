import { useState } from 'react';
import { CountryFilter } from '../CountryFilter/CountryFilter';
import { ChartLayout } from '../../layout/chartLayout/ChartLayout';
import CsvTable from '../../layout/CsvTable/CsvTable';

export const SentimentTrend = () => {
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
                            src="SAGraphs/australia_sentiment_trends.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                    />
                }
                filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                chartDescription="This analysis provides insights into how public opinion on renewable energy has evolved over time and offers predictive trends for the next two years based on the gathered data."
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            {selectedCountry == 'india' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for India"
                chartChild={
                    <div>
                        <iframe
                            src="SAGraphs/india_sentiment_trends.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                    />
                }
                filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                chartDescription="This analysis provides insights into how public opinion on renewable energy has evolved over time and offers predictive trends for the next two years based on the gathered data."
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            {selectedCountry == 'china' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for China"
                chartChild={
                    <div>
                        <iframe
                            src="SAGraphs/china_sentiment_trends.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                    />
                }
                filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                chartDescription="This analysis provides insights into how public opinion on renewable energy has evolved over time and offers predictive trends for the next two years based on the gathered data."
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

            {selectedCountry == 'singapore' && (
                <ChartLayout
                title="Sentiment Trends with Predictions for Singapore"
                chartChild={
                    <div>
                        <iframe
                            src="SAGraphs/singapore_sentiment_trends.html"
                            title="Plotly Graph"
                            style={{width: '100%', height: '500px', border: 'none'}}
                        />
                    </div>
                }
                DataChild={
                    <CsvTable
                        filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                    />
                }
                filePath={'/SAGraphs/data/news_data_with_keywords.csv'}
                chartDescription="This analysis provides insights into how public opinion on renewable energy has evolved over time and offers predictive trends for the next two years based on the gathered data."
                dataSource={'Data Collected form Reddit threads and Facebook post comments'}
            />
            )}

        </div>
    )

}