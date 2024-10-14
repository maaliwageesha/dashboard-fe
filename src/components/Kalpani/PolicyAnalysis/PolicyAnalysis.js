import React from 'react';

export const PolicyAnalysis = ({ selectedCountry }) => {
  return (
    <div>
      {selectedCountry === "australia" && (
        <>
          <iframe
            src="/policy/Aus_lda.html"
            title="LDA Visualization - Australia"
            style={{ width: '100%', height: '500px', border: 'none', marginBottom: '20px' }}  // Added marginBottom
          />
          <iframe
            src="/policy/Aus_wordcloud.html"
            title="Wordcloud Visualization - Australia"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </>
      )}
      {selectedCountry === "india" && (
        <>
          <iframe
            src="/policy/India_lda_visualization.html"
            title="LDA Visualization - India"
            style={{ width: '100%', height: '500px', border: 'none', marginBottom: '20px' }}  // Added marginBottom
          />
          <iframe
            src="/policy/India_wordcloud.html"
            title="Wordcloud Visualization - India"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </>
      )}
      {selectedCountry === "china" && (
        <>
          <iframe
            src="/policy/China_lda.html"
            title="LDA Visualization - China"
            style={{ width: '100%', height: '500px', border: 'none', marginBottom: '20px' }}  // Added marginBottom
          />
          <iframe
            src="/policy/China_wordcloud.html"
            title="Wordcloud Visualization - China"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </>
      )}
      {selectedCountry === "singapore" && (
        <>
          <iframe
            src="/policy/Singapore_lda_visualization.html"
            title="LDA Visualization - Singapore"
            style={{ width: '100%', height: '500px', border: 'none', marginBottom: '20px' }}  // Added marginBottom
          />
          <iframe
            src="/policy/Singapore_wordcloud.html"
            title="Wordcloud Visualization - Singapore"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </>
      )}
      {/* Optional: Handle case when no country matches */}
      {selectedCountry && !["australia", "india", "china", "singapore"].includes(selectedCountry) && (
        <div>
          <p>No Policy Analysis available for the selected country.</p>
        </div>
      )}
    </div>
  );
};

export default PolicyAnalysis;
