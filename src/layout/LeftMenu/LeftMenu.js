
import './LeftMenu.scss';

// export const LeftMenu=()=>{

//     return(
//         <div className="d-flex flex-column menu-width">
//             <div className='menu-item'>Sentiments</div>
//             <div className='menu-item'>Network Analysis</div>
//             <div className='menu-item'>Consumption</div>
//             <div className='menu-item'>Popularity</div>
//             <div className='menu-item'>Energy Source Usage</div>
//             <div className='menu-item'>Bhoomi</div>
//         </div>
//     )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIco from '../../assets/home-icon.png'
import homeIco2 from '../../assets/home-icon2.png'
import userIco from '../../assets/user-icon2.png'
import userIco3 from '../../assets/user-icon3.png'
import dropdownup from '../../assets/dropdown-up.png'
import dropdowndown from '../../assets/dropdown-down.png'

import property from '../../assets/property-Icon.png'
import password from '../../assets/password-Icon.png'
import checklist from '../../assets/checklist-Icon.png'
import settings from '../../assets/settings-ico.png'
import { BsGraphDownArrow, BsGraphUpArrow, BsHddNetwork, BsPeople, BsTwitterX } from 'react-icons/bs';


export const LeftMenu = ({type,isOpen}) => {
  console.log("ffffffffffffffffffffffff",type)
  // States to handle the visibility of dropdown menus
  const [isManagementDropdownVisible, setManagementDropdownVisible] = useState(false);
  const [isSettingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  const [isNetworkDropdownVisible, setNetworkDropdownVisible] = useState(false);
  const [isStakeholderDropdownVisible, setStakeholderDropdownVisible] = useState(false);
  const [isSocialDropdownVisible, setSocialDropdownVisible] = useState(false);


  const path = window.location.pathname;

  const toggleManagementDropdown = () => {
    setManagementDropdownVisible(!isManagementDropdownVisible);
  };


  const toggleSettingsDropdown = () => {
    setSettingsDropdownVisible(!isSettingsDropdownVisible);
  };


  const toggleNetworkDropdown = () => {
    setNetworkDropdownVisible(!isNetworkDropdownVisible);
  };


  const toggleStakeholderDropdown = () => {
    setStakeholderDropdownVisible(!isStakeholderDropdownVisible);
  };


  const toggleSocialDropdown = () => {
    setSocialDropdownVisible(!isSocialDropdownVisible);
  };

  const togglePolicyDropdown = () => {
    setPolicyDropdownVisible(!isPolicyDropdownVisible);
  };

  const toggleInvestmentDropdown = () => {
    setInvestmentDropdownVisible(!isInvestmentDropdownVisible);
  };


  return (
    <nav className={`sidebar ${isOpen? 'sidebar-open' : ''}`}>
  
      <ul className="sidebar-nav">
        <li  className={`nav-item home p-1 ${path === '/' ? 'active' : ''}`}>
          <Link to="/" className="nav-links">
            <div>
            <span><img className='pe-3' src={path==="/"?homeIco2:homeIco} /></span>
            <span className="link-text">Dashboard</span>
            </div>
         
            <span style={{display:"none"}} className=" notification">3</span>
            
          </Link>
        </li>


        <div style={{background:"white"}}>
        <li className="nav-item ">
          <div className="nav-links" onClick={toggleManagementDropdown}>
          <div>
          <span><BsGraphUpArrow className='me-3' /></span>
            <span className="link-text">Sentiments</span>
            </div>
            <div className='d-flex'>
            <span  style={{display:"none"}}  className=" notification">1</span>
            <span className="dropdown-arrow">{isManagementDropdownVisible ? <img className='ps-2' src={dropdownup} /> : <img className='ps-2' src={dropdowndown} />}</span>
            </div>
          </div>
          {isManagementDropdownVisible && (
            <ul className="dropdown ps-2">

            

             <li className={`dropdown-item ${path === '/sentiments' ? 'active' : ''}`}>
              <span><img className='pe-3' src={checklist} /></span>
                <Link to="/sentiments" className="dropdown-nav-links">Sentiment Analysis</Link>
              </li>

              {/* <li className={`dropdown-item ${path === '/company'? 'active' : ''}`}>
              <span><img className='pe-3' src={checklist} /></span>
                <Link to="/company" className="dropdown-nav-links">Company</Link>
              </li>

     <li className={`dropdown-item ${path === '/checklist-management' || path=== '/checklist-management/create-checklist' ? 'active' : ''}`}>
              <span><img className='pe-3' src={checklist} /></span>
                <Link to="/checklist-management" className="dropdown-nav-links">Checklist Management</Link>
              </li> */}
             
            </ul>
          )}
        </li>
        {/* More nav items */}
        <li className="nav-item">




<div className="nav-links" onClick={toggleSettingsDropdown}>
          <div>
          <span><BsGraphDownArrow className='me-3' /></span>
            <span className="link-text">Cosumption</span>
            </div>
            <div className='d-flex'>
            <span  style={{display:"none"}}  className=" notification">1</span>
            <span className="dropdown-arrow">{isSettingsDropdownVisible ? <img className='ps-2' src={dropdownup} /> : <img className='ps-2' src={dropdowndown} />}</span>
            </div>
          </div>
          {isSettingsDropdownVisible && (
            <ul className="dropdown ps-2">
     <li className={`dropdown-item ${path === '/overall-consumption' ? 'active' : ''}`}>
                <span><img className='pe-3' src={property} /></span>
                <Link to="/overall-consumption" className="dropdown-nav-links">Overall</Link>
              </li>
     <li className={`dropdown-item ${path === '/energy-source' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} /></span>
                <Link to="/energy-source" className="dropdown-nav-links">Energy Source</Link>
              </li>

             
            </ul>
          )}

          
        </li>








        <li className="nav-item">




<div className="nav-links" onClick={toggleNetworkDropdown}>
          <div>
          <span><BsHddNetwork className='me-3' /></span>
            <span className="link-text">Network Analysis</span>
            </div>
            <div className='d-flex'>
            <span  style={{display:"none"}}  className=" notification">1</span>
            <span className="dropdown-arrow">{isSettingsDropdownVisible ? <img className='ps-2' src={dropdownup} /> : <img className='ps-2' src={dropdowndown} />}</span>
            </div>
          </div>
          {isNetworkDropdownVisible && (
            <ul className="dropdown ps-2">
            <li className={`dropdown-item ${path === '/user-management' ? 'active' : ''}`}>
                <span><img className='pe-3' src={property} /></span>
                <Link to="/network-diagram" className="dropdown-nav-links">Topic Wise Network Diagram</Link>
            </li>
            {/* <li className={`dropdown-item ${path === '/property-management' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} /></span>
                <Link to="/property-management" className="dropdown-nav-links">Economic Factors</Link>
            </li>


              <li className={`dropdown-item ${path === '/property-management' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} /></span>
                <Link to="/property-management" className="dropdown-nav-links">Geographical Factors</Link>
              </li>


              <li className={`dropdown-item ${path === '/property-management' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} /></span>
                <Link to="/property-management" className="dropdown-nav-links">Environmental Factors</Link>
              </li> */}

             
            </ul>
          )}

          
        </li>





        <li className="nav-item">




<div className="nav-links" onClick={toggleSocialDropdown}>
          <div>
          <span><BsTwitterX className='me-3' /></span>
            <span className="link-text">Popularity Analysis</span>
            </div>
            <div className='d-flex'>
            <span  style={{display:"none"}}  className=" notification">1</span>
            <span className="dropdown-arrow">{isSettingsDropdownVisible ? <img className='ps-2' src={dropdownup} /> : <img className='ps-2' src={dropdowndown} />}</span>
            </div>
          </div>
          {isSocialDropdownVisible && (
            <ul className="dropdown ps-2">
     <li className={`dropdown-item ${path === '/reddit-analysis' ? 'active' : ''}`}>
                <span><img className='pe-3' src={property} /></span>
                <Link to="/reddit-analysis" className="dropdown-nav-links">Reddit Analysis</Link>
              </li>
     <li className={`dropdown-item ${path === '/twitter-analysis' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} /></span>
                <Link to="/twitter-analysis" className="dropdown-nav-links">Twitter Analysis</Link>
              </li>
             
            </ul>
          )}

          
        </li>




        <li className="nav-item">




<div className="nav-links" onClick={toggleStakeholderDropdown}>
          <div>
          <span><BsPeople className='me-3' /></span>
            <span className="link-text">Stakeholder </span>
            </div>
            <div className='d-flex'>
            <span  style={{display:"none"}}  className=" notification">1</span>
            <span className="dropdown-arrow">{isSettingsDropdownVisible ? <img className='ps-2' src={dropdownup} /> : <img className='ps-2' src={dropdowndown} />}</span>
            </div>
          </div>
          {isStakeholderDropdownVisible && (
            <ul className="dropdown ps-2">
     <li className={`dropdown-item ${path === '/stakeholder-analysis' ? 'active' : ''}`}>
                <span><img className='pe-3' src={property} /></span>
                <Link to="/stakeholder-analysis" className="dropdown-nav-links">Stakeholder Analysis</Link>
              </li>

             
            </ul>
          )}

          
        </li>

      {/* Policy Analysis Menu Item with Dropdown */}
      <li className="nav-item">
        <div className="nav-links" onClick={togglePolicyDropdown}>
          <div>
            <span><BsGraphUpArrow className='me-3' /></span>
            <span className="link-text">Policies</span>
          </div>
          <div className='d-flex'>
            <span className="dropdown-arrow">
              {isPolicyDropdownVisible ? <img className='ps-2' src={dropdownup} alt="up" /> : <img className='ps-2' src={dropdowndown} alt="down" />}
            </span>
          </div>
        </div>
        {isPolicyDropdownVisible && (
          <ul className="dropdown ps-2">
            <li className={`dropdown-item ${path === '/Policies' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} alt="icon" /></span>
              <Link to="/Policies" className="dropdown-nav-links">Policy Analysis</Link>
            </li>
          </ul>
        )}
      </li>

      {/* Investment Analysis Menu Item with Dropdown */}
      <li className="nav-item">
        <div className="nav-links" onClick={toggleInvestmentDropdown}>
          <div>
            <span><BsGraphUpArrow className='me-3' /></span>
            <span className="link-text">Investments</span>
          </div>
          <div className='d-flex'>
            <span className="dropdown-arrow">
              {isInvestmentDropdownVisible ? <img className='ps-2' src={dropdownup} alt="up" /> : <img className='ps-2' src={dropdowndown} alt="down" />}
            </span>
          </div>
        </div>
        {isInvestmentDropdownVisible && (
          <ul className="dropdown ps-2">
            <li className={`dropdown-item ${path === '/Investments' ? 'active' : ''}`}>
              <span><img className='pe-3' src={property} alt="icon" /></span>
              <Link to="/Investments" className="dropdown-nav-links">Investment Analysis</Link>
            </li>
          </ul>
        )}
      </li>
        </div>
      </ul>
    </nav>
  );
};


