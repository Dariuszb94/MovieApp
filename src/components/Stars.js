import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


function Stars ({selected}){
 let  rating=parseInt(selected.imdbRating);

  return (<Rater total={10}  rating={rating} interactive={false} />)
}

export default Stars