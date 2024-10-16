
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './ChartLayout.scss';
import { BsArrowDown, BsPieChartFill, BsTable } from 'react-icons/bs';
export const ChartLayout = ({chartChild, DataChild, title,filePath,chartDescription,dataSource})=>{
    const [isChart,SetIsChart]=useState(true);
    const [isData,SetIsData]=useState(false);


    const SelectChart=()=>{

    }

    return(
        <div className='chart-background'>
            <div className='title'>{title}</div>

            <div className='chart-desc pb-3'>{chartDescription}</div>

                <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1 d-flex justify-content-between" onClick={()=>{SetIsChart(true); SetIsData(false)}}><BsPieChartFill /> <span>Chart</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2 d-flex justify-content-between" onClick={()=>{SetIsChart(false); SetIsData(true)}}><BsTable className='me-2'/><span>Data</span></Nav.Link>
      </Nav.Item>
    </Nav>


    {isChart && chartChild}

    {isData && DataChild}


    <div className=' mt-3 d-flex justify-content-between'>
<div className='Source'><b>Data Source:-</b> {dataSource}</div>

<div className='arrow-ico' onClick={()=>{window.location.href=window.location.origin+filePath}}><BsArrowDown /></div>

    </div>

        </div>
    )
}