import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    // fetch weather data
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render () {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Get a five-day forecast in the cities"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchWeather }, dispatch)

export default connect(null, mapDispatchToProps)(SearchBar)
