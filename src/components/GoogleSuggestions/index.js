// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onPull = event => {
    this.setState({searchInput: event.target.value})
  }

  applyText = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filterList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="bg">
        <img
          className="ima"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="inner-bg">
          <div className="card">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              placeholder="Search Google"
              type="search"
              value={searchInput}
              className="search"
              onChange={this.onPull}
            />
          </div>
          <ul>
            {filterList.map(each => (
              <SuggestionItem
                key={each.id}
                details={each}
                applyText={this.applyText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
