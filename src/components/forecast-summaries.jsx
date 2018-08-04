import React from 'react';
import '../styles/forecast-summaries.scss';
import ForecastSummary from './forecast-summary';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={moment(forecast.date).format('ddd Do MMM')}
          description={forecast.description}
          icon={<WeatherIcon name="owm" iconId={forecast.icon} flip="horizontal" rotate="90" />}
          temperature={forecast.temperature.max}
        />
      ))
    }
  </div>
);

export default ForecastSummaries;
