import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


function Stars ({selected}){
 

  return (<Rater total={10}  rating={selected.imdbRating} interactive={false} />)
}

export default Stars