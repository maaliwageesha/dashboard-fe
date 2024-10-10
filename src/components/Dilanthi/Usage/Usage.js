export const Usage = ({ selectedCountry }) => {
    return (
        <div>
            {selectedCountry === "australia" && (
                <iframe
                    src="Dil/Australia_renewable_energy.html"
                    title="Plotly Graph - Australia"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "india" && (
                <iframe
                    src="Dil/India_renewable_energy.html"
                    title="Plotly Graph - India"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "china" && (
                <iframe
                    src="Dil/China_renewable_energy.html"
                    title="Plotly Graph - China"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "singapore" && (
                <iframe
                    src="Dil/Singapore_renewable_energy.html"
                    title="Plotly Graph - Singapore"
                    style={{ width: '100%', height: '500px', border: 'none' }}
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
