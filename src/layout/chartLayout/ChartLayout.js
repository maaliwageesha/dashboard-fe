
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './ChartLayout.scss';
export const ChartLayout = ({chartChild, DataChild, title})=>{
    const [isChart,SetIsChart]=useState(true);
    const [isData,SetIsData]=useState(false);


    const SelectChart=()=>{

    }

    return(
        <div>
            <div className='title'>{title}</div>
                <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{SetIsChart(true); SetIsData(false)}}>Chart</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{SetIsChart(false); SetIsData(true)}}>Data</Nav.Link>
      </Nav.Item>
    </Nav>

    {isChart && chartChild}

    {isData && DataChild}

        </div>
    )
}