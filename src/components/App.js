import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import './SongDetails.css'


const App = () => {
  return (

  <div className="ui container grid">
    <div className="ui row">
        <div className="column eight wide">
        <br/>
          <SongList />
        </div>
        <div className="column eight wide">
        
        <SongDetail />
        </div>
      </div>
  </div>
);
};

export default App;
