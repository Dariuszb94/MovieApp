import React from 'react'

function Search ({handleInput, search}){ //16:41
    return (
   <section className="searchbox-wrap">
       <input type="text" 
       placeholder="Type a movie title" 
       className="searchbox" 
       onChange={handleInput}
       onKeyPress={search}
       />
       </section>
 
    )
}
export default Search