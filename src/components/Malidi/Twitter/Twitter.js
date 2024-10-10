
import './Twitter.scss'
export const Twitter =(selectedCountry)=>{

    return(
        <div>
                                {selectedCountry.selectedCountry=="australia" && <div>
          <iframe
      src="twitter/australia.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}
                    {selectedCountry.selectedCountry=="china" && <div>
          <iframe
      src="twitter/china.html"
      title="Plotly Graph"
      style={{ width: '100%', height: '500px', border: 'none' }}
    />
        </div>}

        </div>
    )
}