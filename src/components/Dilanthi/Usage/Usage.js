export const Usage = (selectedCountry) => {
    return (

        <div>                       {selectedCountry.selectedCountry=="australia" && <div>
            <iframe
        src="Dil/Australia_renewable_energy.html"
        title="Plotly Graph"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
          </div>}
                      {selectedCountry.selectedCountry=="china" && <div>
            <iframe
        src="Dil/China_renewable_energy.html"
        title="Plotly Graph"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
          </div>}
          </div>
    )
}