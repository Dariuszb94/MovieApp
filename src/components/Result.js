
import React from 'react'

function Result ({result, selectedMovie}){
  
    return(
 <div className="result" onClick={()=>selectedMovie(result.imdbID)}>
     <img src={result.Poster} alt={result.Title}/>
     <h3>{result.Title}</h3>
 </div>
    )
}

export default Result