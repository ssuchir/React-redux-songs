import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4'},
    { title: 'allstar', duration: '3.5'},
    { title: 'macarena', duration: '4.23'},
    { title: 'i want it that way', duration: '2.1'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
