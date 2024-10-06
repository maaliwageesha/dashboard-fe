
import React from 'react';
import NetworkGraph from './NetworkGraph';

import './Dashboard.scss';
export const Dashboard = ()=>{

    return(
        <div>
            <h1>Dashboard</h1>

            {/* Australia Sentiment Graph */}
            <iframe
                src="http://127.0.0.1:8050/"
                style={{ width: '50%', height: '600px', border: 'none', marginTop: '20px' }}
                title="Australia Sentiment"
            />

            {/* If you want to add more Dash apps, you can create separate Dash apps and add more iframes here */}
        </div>
    )
}

