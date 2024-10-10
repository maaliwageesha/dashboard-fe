


export const ElectricityUsage =(selectedCountry)=>{
  console.log(selectedCountry)

    return(
      <div>
       {selectedCountry.selectedCountry=="australia" && <div>

             <iframe
      src="consumption/australia/1.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />

<iframe
      src="consumption/australia/2.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />


<iframe
      src="consumption/australia/3.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />


<iframe
      src="consumption/australia/CombineAll.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}


        {selectedCountry.selectedCountry=="china" && <div>
          <iframe
      src="consumption/china/china.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}


        {selectedCountry.selectedCountry=="india" && <div>
          <iframe
      src="consumption/india/india.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}


        {selectedCountry.selectedCountry=="singapore" && <div>
          <iframe
      src="consumption/singapore/singapore.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}


        </div>
    )
}