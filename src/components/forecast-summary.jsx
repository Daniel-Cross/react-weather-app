import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div className="forecastSummaryContent">
    <div className="date">
      <span>
        {props.date}
      </span>
    </div>
    <br />
    <div className="temperature">
      <span>
        {props.temperature}
      </span>
    </div>
    <br />
    <div className="description">
      <span>
        {props.description}
      </span>
    </div>
    <br />
    <div className="icon">
      <span>
        {props.icon}
      </span>
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default ForecastSummary;
