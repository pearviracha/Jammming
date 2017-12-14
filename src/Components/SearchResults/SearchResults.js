import React from 'react';
import TrackList from './Components/TrackList/TrackList';
import './SearchResults.css'

class SearchResults extends React.Component {
  render() {
    <div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}>
</div>
  }
}

export default SearchResults;
