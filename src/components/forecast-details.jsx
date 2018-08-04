import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="big-date">
      <span>
        {moment(props.forecast.date).format('ddd Do MMM')}
      </span>
    </div>
    <br />
    <div className="temp-max">
      <span>
        {props.forecast.temperature.max}
      </span>
    </div>
    <br />
    <div className="temp-min">
      <span>
        {props.forecast.temperature.min}
      </span>
    </div>
    <br />
    <div className="big-humidity">
      <span>
        {props.forecast.humidity}
      </span>
    </div>
    <br />
    <div className="wind-speed">
      <span>
        {props.forecast.wind.speed}
      </span>
    </div>
    <br />
    <div className="wind-direction">
      <span>
        {props.forecast.wind.direction}
      </span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
};

export default ForecastDetails;
