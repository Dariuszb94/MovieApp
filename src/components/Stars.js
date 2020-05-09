import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


function Stars ({selected}){ //from Popup.js
 let  rating=parseInt(selected.imdbRating); //change rating from string to number
  return (<Rater total={10}  rating={rating} interactive={false} />)  //total= total number of stars, rating=number of stars active, interactive=readonly
}

export default Stars