import React, { useState } from 'react';
import { CountryFilter } from '../../CountryFilter/CountryFilter';  
import { ChartLayout } from '../../../layout/chartLayout/ChartLayout';  
import CsvTable from '../../../layout/CsvTable/CsvTable';  

export const PolicyAnalysis = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const iframeStyle = {
    width: '100%',
    height: '500px',
    border: 'none',
    marginBottom: '30px', 
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
  };

  return (
    <div>
      <CountryFilter updateState={(e) => setSelectedCountry(e)} />

      {selectedCountry === 'australia' && (
        <ChartLayout
          title="Assessment of Current Landscape of Renewable Energy Policies - Australia"
          chartChild={
            <div>
              <div style={titleStyle}>Topic Modeling of Policy Documents - Australia</div>
              <iframe
                src="/Policy/Aus_lda.html"
                title="LDA Visualization - Australia"
                style={iframeStyle}
              />
              <div style={titleStyle}>Word Frequency Analysis of Policy Documents - Australia</div>
              <iframe
                src="/Policy/Aus_wordcloud.html"
                title="Wordcloud Visualization - Australia"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Policy/PolicyData/cleaned_policy_docs-Aus.csv'} />
          }
          filePath={'/Policy/PolicyData/cleaned_policy_docs-Aus.csv'}
          chartDescription="These graphs provide insights on the current policy landscape in Australia, focusing on key topics and trends in renewable energy policies. Each circle indicate a topic identified through the topic modelling.Size of the circle indicate the significance of the topic in the analysed policy documents.Distance between circle shows the relationship between topics. When relevance matrix is 1, the key words are the most frequently used words in the topic and When the relevance matrix is 0, the key shown key words are unique to the topic. In the Word Cloud, size of the key word indicate the frequency of the key word"
          dataSource={'Australian Government Policy Documents'}
        />
      )}

      {selectedCountry === 'india' && (
        <ChartLayout
          title="Assessment of Current Landscape of Renewable Energy Policies - India"
          chartChild={
            <div>
              <div style={titleStyle}>Topic Modeling of Policy Documents - India</div>
              <iframe
                src="/Policy/India_lda_visualization.html"
                title="LDA Visualization - India"
                style={iframeStyle}
              />
              <div style={titleStyle}>Word Frequency Analysis of Policy Documents - India</div>
              <iframe
                src="/Policy/India_wordcloud.html"
                title="Wordcloud Visualization - India"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Policy/PolicyData/cleaned_policy_docs-India.csv'} />
          }
          filePath={'/Policy/PolicyData/cleaned_policy_docs-India.csv'}
          chartDescription="These graphs provide insights on the current policy landscape in India, focusing on key topics and trends in renewable energy policies."
          dataSource={'Indian Government Policy Documents'}
        />
      )}

      {selectedCountry === 'china' && (
        <ChartLayout
          title="Assessment of Current Landscape of Renewable Energy Policies - China"
          chartChild={
            <div>
              <div style={titleStyle}>Topic Modeling of Policy Documents - China</div>
              <iframe
                src="/Policy/China_lda.html"
                title="LDA Visualization - China"
                style={iframeStyle}
              />
              <div style={titleStyle}>Word Frequency Analysis of Policy Documents - China</div>
              <iframe
                src="/Policy/China_wordcloud.html"
                title="Wordcloud Visualization - China"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Policy/PolicyData/cleaned_policy_docs-China.csv'} />
          }
          filePath={'/Policy/PolicyData/cleaned_policy_docs-China.csv'}
          chartDescription="These graphs provide insights on the current policy landscape in China, focusing on key topics and trends in renewable energy policies."
          dataSource={'Chinese Government Policy Documents'}
        />
      )}

      {selectedCountry === 'singapore' && (
        <ChartLayout
          title="Assessment of Current Landscape of Renewable Energy Policies - Singapore"
          chartChild={
            <div>
              <div style={titleStyle}>Topic Modeling of Policy Documents - Singapore</div>
              <iframe
                src="/Policy/Singapre_lda_visualization.html"
                title="LDA Visualization - Singapore"
                style={iframeStyle}
              />
              <div style={titleStyle}>Word Frequency Analysis of Policy Documents - Singapore</div>
              <iframe
                src="/Policy/Singapore_wordcloud.html"
                title="Wordcloud Visualization - Singapore"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Policy/PolicyData/cleaned_policy_docs-Singapore.csv'} />
          }
          filePath={'/Policy/PolicyData/cleaned_policy_docs-Singapore.csv'}
          chartDescription="These graphs provide insights on the current policy landscape in Singapore, focusing on key topics and trends in renewable energy policies."
          dataSource={'Singapore Government Policy Documents'}
        />
      )}

      {selectedCountry === 'all' && (
        <ChartLayout
          title="Assessment of Current Landscape of Renewable Energy Policies - India, China, Singapore, and Australia"
          chartChild={
            <div>
              <div style={titleStyle}>Topic Modeling of Policy Documents - Combined Countries</div>
              <iframe
                src="/Policy/combined_lda.html"
                title="LDA Visualization - Combined"
                style={iframeStyle}
              />
              <div style={titleStyle}>Word Frequency Analysis of Policy Documents - Combined Countries</div>
              <iframe
                src="/Policy/combined_wordcloud.html"
                title="Wordcloud Visualization - Combined"
                style={iframeStyle}
              />
            </div>
          }
          DataChild={
            <CsvTable filePath={'/Policy/PolicyData/cleaned_policy_docs-India.csv'} />
          }
          filePath={'/Policy/PolicyData/cleaned_policy_docs-India.csv'}
          chartDescription="These graphs provide insights on the current policy landscape in India, China, Singapore, and Australia."
          dataSource={'Indian Government Policy Documents'}
        />
      )}
    </div>
  );
};

export default PolicyAnalysis;
