import React from 'react';
import Track;
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    <div className="TrackList">
    <Track track={track}
      key={track.id}
      onAdd={this.props.onAdd}
      isRemoval={this.props.isRemoval}
      onRemove={this.props.onRemove} />
      <{this.props.track.nam}/> //step 35 correct? 
      <{this.props.track.artist}/>
      <{this.props.track.album} /> //step 35?

</div>
  }
}

export default TrackList;
