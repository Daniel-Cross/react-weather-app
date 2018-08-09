import React from 'react';
import PropTypes from 'prop-types';
import '../styles/forecast-summary.scss';

const ForecastSummary = props => (
  <div className="forecastSummaryContent">
    <div className="date">
      <span>
        {props.date}
      </span>
    </div>
    <div className="temperature">
      <span>
        {props.temperature}&deg;c
      </span>
    </div>
    <div className="description">
      <span>
        {props.description}
      </span>
    </div>
    <div className="icon">
      <span>
        {props.icon}
      </span>
    </div>
    <button
      value={props.date}
      onClick={props.onForecastSelect}
    >
      More Details
    </button>

  </div>
);

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  }),
  onForecastSelect: PropTypes.func,
};

export default ForecastSummary;
