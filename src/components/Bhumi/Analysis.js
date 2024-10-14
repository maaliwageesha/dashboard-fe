export const Analysis = ({ selectedCountry }) => {
    return (
        <div>
            {selectedCountry === "australia" && (
                <iframe
                    src="Bhumi/Australia_estimated_subsidies_renewable_energy.html"
                    title="Plotly Graph - Australia"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "australia" && (
                <iframe
                    src="Bhumi/stakeholders.html"
                    title="Plotly Graph - Australia"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "australia" && (
                <iframe
                    src="Bhumi/sector_wise_subsidies_chart.html"
                    title="Plotly Graph - Australia"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "india" && (
                <iframe
                    src="Bhumi/india_renewable_energy_investment_deals_pie_chart.html"
                    title="Plotly Graph - india"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "china" && (
                <iframe
                    src="Bhumi/renewable_energy_investments_china.html"
                    title="Plotly Graph - china"
                    style={{ width: '100%', height: '500px', border: 'none' }}
                />
            )}
            {selectedCountry === "singapore" && (
                <iframe
                    src="Bhumi/singapore_renewable_energy_investments_pie_chart.html"
                    title="Plotly Graph - singapore"
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
