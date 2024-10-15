// import './OverallConsumption.scss';
import { SentimentTrend } from '../../components/Shenuki/SentimentTrend';

export const Sentiments = ()=>{

  return(
    <div>
      <div className='heading2'>
          <h1 className='heading-txt2'>Current & Future Renewable Energy Production Analysis</h1>
      </div>
      {/* Sentiment Analysis Component */}
      <SentimentTrend selectedCountry={"australia"} />

    </div>
  )
}