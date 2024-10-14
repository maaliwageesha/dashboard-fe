export const SentimentTrend = ({ selectedCountry }) => {
    return (
        <div>
            {selectedCountry === "australia" && (
                <iframe
                    src="SAGraphs/australia_sentiment_trends.html"
                    title="Sentiment Trend - Australia"
                    style={{width: '100%', height: '500px', border: 'none'}}
                />
            )}

            {selectedCountry === "india" && (
                <iframe
                    src="SAGraphs/india_sentiment_trends.html"
                    title="Sentiment Trend - Australia"
                    style={{width: '100%', height: '500px', border: 'none'}}
                />
            )}

            {selectedCountry === "singapore" && (
                <iframe
                    src="SAGraphs/singapore_sentiment_trends.html"
                    title="Sentiment Trend - Australia"
                    style={{width: '100%', height: '500px', border: 'none'}}
                />
            )}

            {selectedCountry === "china" && (
                <iframe
                    src="SAGraphs/china_sentiment_trends.html"
                    title="Sentiment Trend - Australia"
                    style={{width: '100%', height: '500px', border: 'none'}}
                />
            )}

            {/* Optional: Handling case when no country is selected */}
            {selectedCountry && !["australia", "india", "china", "singapore"].includes(selectedCountry) && (
                <div>
                    <p>Please select a valid country to view the renewable energy graph.</p>
                </div>
            )}
        </div>
    );
}