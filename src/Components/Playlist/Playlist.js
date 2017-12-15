import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render() {
    <div className="Playlist">
  <playlistName={'Relaxxx'}/>
  <TrackList tracks={this.props.playlistTracks}/>
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>
  }
}

export default Playlist;
