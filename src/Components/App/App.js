import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        name:'',
        artist: '',
        album: ''
      ],
      playlistName: 'Relaxxx',
      playlistTracks: [
        name:'',
        artist: '',
        album: '',
      ]
    }

    addTrack(track) {
      let tracks = this.state.playlistTracks;
      if (!tracks.includes(track)) {
        tracks.push(track);
        this.setState({playlistTracks: tracks});
      }
    }

  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}
                      onAdd = {this.addTrack}/>
      <Playlist playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
