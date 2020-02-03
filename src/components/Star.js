import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
 
class Star extends React.Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1
        };
      }
      
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
  function xsdadx ({selected}){
      return console.log(selected.imdbRating)
  }
      render() {
        const { rating } = this.state;
        
        return (                
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent 
              name="rate1" 
              editing={false}
              starCount={10}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        );
      }
    }
 
export default Star