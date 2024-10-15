import { PolicyAnalysis } from '../../components/Kalpani/Policy Analysis/PolicyAnalysis';

export const PoliciesPage = () => {  
  return (
    <div>
      <div className='heading2'>
        <h1 className='heading-txt2'>Assessment of Current Landscape of Renewable Energy through Policy Document Analysis</h1>
      </div>
      {/* Policy Analysis Component */}
      <PolicyAnalysis selectedCountry={"australia"} />
    </div>
  );
};
