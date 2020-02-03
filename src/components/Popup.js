<<<<<<< HEAD
import React from 'react';
import Stars from './Stars';




function Popup({selected, closePopup}){

    return (
   <section className="popup">
   <div className="content">
   <h2>{selected.Title}<span>({selected.Year})</span></h2>
   <p className="rating">Rating: {selected.imdbRating}</p>

<Stars selected={selected}/>

 <div className="plot">
 <img src={selected.Poster} alt ={selected.Title}/>
 <p>{selected.Plot}</p>
 </div>
 <button className="close" onClick={closePopup}>Close</button>
   </div>
   </section>
    )
}
=======
import React from 'react';




function Popup({selected, closePopup}){
    return (
   <section className="popup">
   <div className="content">
   <h2>{selected.Title}<span>({selected.Year})</span></h2>
   <p className="rating">Rating: {selected.imdbRating}</p>




 <div className="plot">
 <img src={selected.Poster} alt ={selected.Title}/>
 <p>{selected.Plot}</p>
 </div>
 <button className="close" onClick={closePopup}>Close</button>
   </div>
   </section>
    )
}
>>>>>>> fbea4674b0c28f9867c116ed76e433acc3cc1d76
export default Popup