import { InvestmentForecast } from '../../components/Kalpani/Investments/InvestmentForecast';

export const InvestmentsPage = () => {  
  return (
    <div>
      <div className='heading2'>
        <h1 className='heading-txt2'>Analysis of Government Investments on Renewable Energy Sector</h1>
      </div>
      {/* Investment Forecast Component */}
      <InvestmentForecast selectedCountry={"australia"} />
    </div>
  );
};
