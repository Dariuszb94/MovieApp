import React from 'react'

function Search ({handleInput, search}){ //16:41
    return (
   <section className="searchbox-wrap">
       <input type="text" 
       placeholder="Search for a movie..." 
       className="searchbox" 
       onChange={handleInput}
       onKeyPress={search}
       />
       </section>
 
    )
}
export default Search