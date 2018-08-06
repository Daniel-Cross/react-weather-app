import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search-form.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div className="searchForm">
        <input
          className="searchCity"
          placeholder="Search City..."
          onChange={this.handleInputChange}
          value={this.state.searchText}
        />
        <br />
        <button
          className="searchButton"
          onClick={() => this.props.handleCitySubmit(this.state.searchText)}
        >
          Search
        </button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  handleCitySubmit: PropTypes.func.isRequired,
};

export default SearchForm;
