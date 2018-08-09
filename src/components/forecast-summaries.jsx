import React from 'react';
import '../styles/forecast-summaries.scss';
import ForecastSummary from './forecast-summary';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={<WeatherIcon name="owm" iconId={forecast.icon} flip="horizontal" rotate="90" />}
          temperature={forecast.temperature.max}
          onSelect={props.onForecastSelect}
        />
      ))
    }
  </div>
);

export default ForecastSummaries;
