<<<<<<< HEAD
import React from 'react'

function Result ({result, openPopup}){
    return(
 <div className="result" onClick={()=>openPopup(result.imdbID)}>
     <img src={result.Poster} alt={result.Title}/>
     <h3>{result.Title}</h3>
     
 </div>
    )
}
=======
import React from 'react'

function Result ({result, openPopup}){
    return(
 <div className="result" onClick={()=>openPopup(result.imdbID)}>
     <img src={result.Poster} alt={result.Title}/>
     <h3>{result.Title}</h3>
     
 </div>
    )
}
>>>>>>> fbea4674b0c28f9867c116ed76e433acc3cc1d76
export default Result