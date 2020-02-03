
import React from 'react';
import Result from './Result';

function Results ({results, selectedMovie}){
    return(
     <section className="results">
         {results.map(result => (
             <Result key={result.imdbID} result={result} selectedMovie={selectedMovie}/>
         ))}
     </section>
    )
}

export default Results