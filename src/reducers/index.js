import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    { title: 'Thunderstruck', duration: '4:52', artist: "AC/DC"},
    { title: 'Shout at the Devil', duration: '3:16', artist: "Mötley Crüe"},
    { title: 'Welcome to the Jungle', duration: '4:33', artist: "Guns N' Roses"},
    { title: 'Crazy Train', duration: '4:56', artist: "Ozzy Osbourne"},
    { title: 'You Shook Me All Night Long', duration: '3:28', artist: "AC/DC"},
    { title: 'Stairway to Heaven', duration: '8:02', artist: "Led Zeppelin"},
    { title: 'Jump', duration: '4:02', artist: "Van Halen"},
    { title: 'Back In Black', duration: '4:13', artist: "AC/DC"},
    { title: 'Paint it, Black', duration: '3:23', artist: "Rolling Stones"},
    { title: 'Iron Man', duration: '3:33', artist: "Black Sabbath"},

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
