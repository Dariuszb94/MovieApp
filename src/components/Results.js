
import React from 'react';
import Result from './Result';

function Results ({results, selectedMovie}){ //from App.js 
    return( //creating a list of movies from "Result.js"
     <section className="results">
         {results.map(result => (
             <Result key={result.imdbID} result={result} selectedMovie={selectedMovie} />
         ))}
     </section>
    )
}

export default Results