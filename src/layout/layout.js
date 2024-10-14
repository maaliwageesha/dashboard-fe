import { BsGlobeAmericas } from 'react-icons/bs';
import './layout.scss';
import { LeftMenu } from './LeftMenu/LeftMenu';
export const Layout =({children})=>{

    return(
        <div>
            <div className='layout-head'><BsGlobeAmericas className='me-3'/>Dashboard for Renewable Energy in the Indo Pacific Region</div>
        <div className='d-flex'>
            <div>
           <LeftMenu/>
           </div>

        <div style={{width:'100%',backgroundColor:'rgba(136, 51, 255, 0.08)'}}>
           {children}
           </div>

        </div>
        </div>
    )
}