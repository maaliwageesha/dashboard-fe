
import React from 'react';
import NetworkGraph from './NetworkGraph';
import {ElectricityUsage} from '../../components/Malidi/ElectricityUsage';
import './Dashboard.scss';
export const Dashboard = ()=>{

    return(
        <div className='border-margin'>
            <div className='heading'>
                <h1 className='heading-txt'>DASHBOARD FOR RENEWABLE ENERGY</h1>
            </div>
            
            <div className='heading2'>
                <h1 className='heading-txt2'>Sentiment Trends with Prediction (2021-2026)</h1>
            </div>

            <iframe
                        src="http://127.0.0.1:8051/"
                        style={{ width: '100%', height: '600px', border: 'none', paddingLeft: '10px'}}
                        title="Australia Sentiment"
            />
            
            {/* <iframe
                src="http://127.0.0.1:8051/"
                style={{ width: '50%', height: '600px', border: 'none', marginTop: '20px' }}
                title="Australia Sentiment"
            /> */}


        <div className='heading2'>
            <h1 className='heading-txt2'>Current & Future renewable energy production analysis</h1>
            </div>
            <ElectricityUsage/>

            {/* If you want to add more Dash apps, you can create separate Dash apps and add more iframes here */}
        </div>

        

        
    )
}

