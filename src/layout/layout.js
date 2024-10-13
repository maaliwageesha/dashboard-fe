import './layout.scss';
import { LeftMenu } from './LeftMenu/LeftMenu';
export const Layout =({children})=>{

    return(
        <div>
            <div className='layout-head'>Dashboard for Renewable Energy in the Indo Pacific Region</div>
        <div className='d-flex'>
            <div style={{width:'15%'}}>
           <LeftMenu/>
           </div>

        <div style={{width:'85%'}}>
           {children}
           </div>

        </div>
        </div>
    )
}