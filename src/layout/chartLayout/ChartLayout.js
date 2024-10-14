
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './ChartLayout.scss';
import { BsArrowDown } from 'react-icons/bs';
export const ChartLayout = ({chartChild, DataChild, title,filePath,chartDescription,dataSource})=>{
    const [isChart,SetIsChart]=useState(true);
    const [isData,SetIsData]=useState(false);


    const SelectChart=()=>{

    }

    return(
        <div className='chart-background'>
            <div className='title'>{title}</div>

            <div className='chart-desc'>{chartDescription}</div>

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


    <div className=' mt-3 d-flex justify-content-between'>
<div>Data Source:- {dataSource}</div>

<div className='arrow-ico' onClick={()=>{window.location.href=window.location.origin+filePath}}><BsArrowDown /></div>

    </div>

        </div>
    )
}