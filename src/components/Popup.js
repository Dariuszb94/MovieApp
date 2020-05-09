
import React from 'react';
import Stars from './Stars';

function Popup({selected, closePopup}){

    return (
   <section className="popup">
   <div className="content">
   <h2>{selected.Title}<span>({selected.Year})</span></h2>
 


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

export default Popup