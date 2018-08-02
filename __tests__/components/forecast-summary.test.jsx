import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

it('renders the passed date', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="date"
      temperature="temperature"
      description="description"
      icon="icon"
    />
  ));

  expect(wrapper.find('.date').text()).toEqual('date');
});

it('renders the passed temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="date"
      temperature="temperature"
      description="description"
      icon="icon"
    />
  ));

  expect(wrapper.find('.temperature').text()).toEqual('temperature');
});

it('renders the passed description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="date"
      temperature="temperature"
      description="description"
      icon="icon"
    />
  ));

  expect(wrapper.find('.description').text()).toEqual('description');
});

it('renders the passed icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="date"
      temperature="temperature"
      description="description"
      icon="icon"
    />
  ));

  expect(wrapper.find('.icon').text()).toEqual('icon');
});
