import React from 'react'

function Search ({handleInput, getMovies}){ //from App.js
    return (
  
       <input type="text" 
       placeholder="Type a movie title here" 
       className="searchbox" 
       onChange={handleInput}  
       onKeyPress={getMovies}
       />
     
    )
}
export default Search