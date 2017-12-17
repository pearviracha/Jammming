import React from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'Relaxxx',
      playlistTracks: [
        name:'',
        artist: '',
        album: '',
      ]
    };

    this.search = this.search.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
}

    addTrack(track) {
      let tracks = this.state.playlistTracks;
      if (!tracks.includes(track)) {
        tracks.push(track);
        this.setState({playlistTracks: tracks});
      }
    }

    removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks.pop(); //is this how to set new state of plyalist? (49)
    }

    updatePlaylistName(name) {
      this.setState({playlistName: name});
    }

    savePlaylist() {
      const trackURIs = this.state.playlistTracks.map(track => trackURIs);
    }

    search(term) {
      Spotify.search(term).then(searchResults => {
        this.setState({searchResults: searchResults});
      });
    }


  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search} />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults}
                      onAdd = {this.addTrack}/>
      <Playlist playlistTracks={this.state.playlistTracks}
                playlistName={this.state.playlistName}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
