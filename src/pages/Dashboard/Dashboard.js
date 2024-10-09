
import React ,{ useState } from 'react';
import {ElectricityUsage} from '../../components/Malidi/ElectricityUsage';
import './Dashboard.scss';
export const Dashboard = ()=>{
    const [selectedCountry, setSelectedCountry] = useState('australia');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    

    return(
        <div className='border-margin'>
            <div className='heading'>
                <h1 className='heading-txt'>DASHBOARD FOR RENEWABLE ENERGY</h1>
            </div>
            
            <div className='heading2'>
                <h1 className='heading-txt2'>Sentiment Trends with Prediction (2021-2026)</h1>
            </div>

            <div>
                <div>
                    <select value={selectedCountry} onChange={handleCountryChange}>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                    <option value="singapore">Singapore</option>
                    <option value="china">China</option>
                    </select>
                </div>

                <div  style={{ marginTop: '20px' }}>
                <iframe
                    src={`/SAGraphs/${selectedCountry}_sentiment_trends.html`}
                    width="100%"
                    height="600px"
                    title="Sentiment Trends"
                    frameBorder="0"
                ></iframe>
                </div>
            </div>

            {/* <iframe
                    src="http://127.0.0.1:8051/"
                    style={{ width: '100%', height: '600px', border: 'none', paddingLeft: '10px'}}
                    title="Australia Sentiment"
            /> */}
            <div className='heading2'>
                <h1 className='heading-txt2'>Social Network of Keywords in Renewable Energy Comments</h1>
            </div>
                
                <iframe
                    src="http://127.0.0.1:8053/"
                    style={{ width: '100%', height: '600px', border: 'none', paddingLeft: '10px', marginTop: '20px' }}
                    title="Australia Sentiment"/> 


            <div className='heading2'>
                <h1 className='heading-txt2'>Current & Future renewable energy production analysis</h1>
            </div>
                <ElectricityUsage/>
        </div>



        

        
    )
}

