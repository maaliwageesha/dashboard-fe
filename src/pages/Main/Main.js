
import './Main.scss';
export const Main = () =>{

    return(
        <div className="p-3">

            <div className="text-start">Main Dashboard</div>


            <div className="row">
                <div className="col-4 p-3">
                    <div className="bg-white w-100 dash-cube">hi</div>
                </div>

                <div className="col-4 p-3">
                    <div className="bg-white w-100 dash-cube">hi</div>
                </div>

                <div className="col-4 p-3">
                    <div className="bg-white w-100 dash-cube">hi</div>
                </div>
            
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
        </div>
    )
}