
import React from 'react';
import Stars from './Stars';

function SelectedMovie({selected, closePopup}){ //from App.js

    return (
   <section className="selectedMovie">
   <div className="content">
   <h2>{selected.Title}&nbsp;({selected.Year})</h2>
 <div className="summary">
 <img src={selected.Poster} alt ={selected.Title} className="posterImg"/>
 <p className="plot">{selected.Plot}</p>
 </div>
 <div className="rating">Rating: <Stars selected={selected}/> </div> 
<p>Genre: {selected.Genre}</p>
 <button className="close" onClick={closePopup}>Back to search</button>
   </div>
   </section>
    )
}

export default SelectedMovie