
import React from 'react';
import Stars from './Stars';

function Popup({selected, closePopup}){

    return (
   <section className="popup">
   <div className="content">
   <h2>{selected.Title}<span>({selected.Year})</span></h2>
   <p className="rating">Rating: {selected.imdbRating}</p>
<p>Genre: {selected.Genre}</p>
<Stars selected={selected}/>

 <div className="summary">
 <img src={selected.Poster} alt ={selected.Title}/>
 <p>{selected.Plot}</p>
 </div>
 <button className="close" onClick={closePopup}>Close</button>
   </div>
   </section>
    )
}

export default Popup