
import './LeftMenu.scss';

export const LeftMenu=()=>{

    return(
        <div className="d-flex flex-column menu-width">
            <div className='menu-item'>Sentiments</div>
            <div className='menu-item'>Network Analysis</div>
            <div className='menu-item'>Consumption</div>
            <div className='menu-item'>Popularity</div>
            <div className='menu-item'>Energy Source Usage</div>
            <div className='menu-item'>Bhoomi</div>
        </div>
    )
}