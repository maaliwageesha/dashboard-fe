import { Usage } from '../../components/Dilanthi/Usage/Usage';
import './EnergySouce.scss';

export const EnergySource = ()=>{

    return(
        <div>


<div className='heading2'>
          <h1 className='heading-txt2'>Usage of Renewable Energy</h1>
        </div>
        {/* Renewable Energy Usage Component */}
        <Usage selectedCountry={"australia"} />

        </div>
    )
}