<<<<<<< HEAD
import React from 'react';
import Result from './Result';

function Results ({results, openPopup}){
    return(
     <section className="results">
         {results.map(result => (
             <Result key={result.imdbID} result={result} openPopup={openPopup}/>
         ))}
     </section>
    )
}
=======
import React from 'react';
import Result from './Result';

function Results ({results, openPopup}){
    return(
     <section className="results">
         {results.map(result => (
             <Result key={result.imdbID} result={result} openPopup={openPopup}/>
         ))}
     </section>
    )
}
>>>>>>> fbea4674b0c28f9867c116ed76e433acc3cc1d76
export default Results