
import React from 'react'

function Result ({result, selectedMovie}){ //from App.js
  
    return( // after clicking on img, user will be redirect to seleceted movie
 <div className="result" onClick={()=>selectedMovie(result.imdbID)} > 
     <img src={result.Poster} alt={result.Title}/>  
     <h3>{result.Title}</h3>
 </div>
    )
}

export default Result