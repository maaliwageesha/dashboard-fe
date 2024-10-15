
import './Main.scss';
export const Main = () =>{

    return(
        <div className="p-3">

            <div className="text-start">Main Dashboard</div>          


            {/* <div className="row">
                <div className="col-4 p-3">
                    <div className="bg-white w-100 dash-cube">hi</div>
                </div>

                <div className="col-4 p-3">
                    <div className="bg-white w-100 dash-cube">hi</div>
                </div>

                <div className="col-4 p-3">
                    <div className="bg-white w-100 dash-cube">hi</div>
                </div>
            
            </div> */}

            {/* Investment Graphs */}

            <div className="row">
                <div >
                    <iframe
                        src="Bhumi/Australia_estimated_subsidies_renewable_energy.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <iframe
                        src="Bhumi/sector_wise_subsidies_chart.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
                </div>
                <div className="col-6">
                    <h4>Pie chart</h4>
                    <iframe
                        src=""
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
                </div>

            </div>

            {/* Consumption Graphs */}
            <div className="row">
                <div >
                    <iframe
                        src="Dil/Australia_renewable_energy.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
                </div>
            </div>

            <div className="row">
                <h4>Investment line graph</h4>
                <iframe
                    src=""
                    title="Plotly Graph"
                    style={{ width: '100%', height: '400px', border: 'none' }}
                />
            </div>
            <div className="row">
                    <iframe
                        src="consumption/australia/CombineAll.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
            </div>

            {/* Sentiment Graphs */}

            <div className="row">
                    <iframe
                        src="SAGraphs/australia_sentiment_trends.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
            </div>

            <div className='row'>
                <div className='col-6'>
                    <iframe
                        src="twitter/australia.html"
                        title="Plotly Graph"
                        style={{ width: '100%', height: '400px', border: 'none' }}
                    />
                </div>
                <div className='col-6'>
                    <div className='col-6 w-100'>
                        <iframe
                            src="reddit/reddit.html"
                            title="Plotly Graph"
                            style={{ width: '100%', height: '400px', border: 'none' }}
                        />
                    </div>
                </div>
                
            </div>

            {/* Topic Modeling Graphs */}
            <div className="row">
                <h4>Policy Document Topic Modeling Graphs</h4>
                <iframe
                    src=""
                    title="Plotly Graph"
                    style={{ width: '100%', height: '400px', border: 'none' }}
                />
            </div>
        </div>

    )
}