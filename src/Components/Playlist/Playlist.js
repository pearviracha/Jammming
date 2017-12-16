import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
}

    handleNameChange(event) {
      this.props.onNameChange(event.target.value); //not sure (step 59)
    }

  render() {
    <div className="Playlist">
    <input onChange={this.handleNameChange} value={this.props.playlistName} />
  <TrackList tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          />
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
  }
}

export default Playlist;
