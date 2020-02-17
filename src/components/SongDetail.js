import React from 'react';
import { connect } from 'react-redux';
import './SongDetails.css'

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song!</div>;
  }

  return (

  <div className="song-details">
    <p>Title: {song.title}
      <br/>
      Artist: {song.artist}
      <br/>
      Duration: {song.duration}
    </p>
  </div>
  );
};

const mapStateToProps = (state) => {
    return{ song: state.selectedSong }
};

export default connect (mapStateToProps) (SongDetail);
