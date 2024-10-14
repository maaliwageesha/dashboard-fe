import './OverallConsumption.scss';
import { ElectricityUsage } from '../../components/Malidi/Consumption/ElectricityUsage';

export const OverallConsumption = ()=>{

    return(
        <div>


<div className='heading2'>
          <h1 className='heading-txt2'>Current & Future Renewable Energy Production Analysis</h1>
        </div>
        {/* Electricity Usage Component */}
        <ElectricityUsage selectedCountry={"australia"} />

        </div>
    )
}