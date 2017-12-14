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
</div>
  }
}

export default TrackList;
