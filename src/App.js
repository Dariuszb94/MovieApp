import React, {useState} from 'react';
import Search from './components/Search';
import axios from 'axios'
import Results from './components/Results';
import SelectedMovie from './components/SelectedMovie';
import {apiurl} from './components/Const';

function App() { //define states 
  const [state, setState]=useState({
urlEnd:"", //unique url for movie
results:[],  //listed movie after search
selected:{} //popup movie
  });

  const getMovies=(e)=>{  
axios.get(apiurl+"&s="+state.urlEnd, {params:{_limit:5}}) //get movies from db
.then(({data})=>{ 
  let results=data.Search;
  if (results){
  setState(prevState => {
    return {...prevState, results:results}
  })
}
  else{
    alert("There are no movies for your search");
  }
})
.catch(handleErrors) //error handling
  }

  function handleErrors(error) {
    if (error.response) {
      alert(error.response.data);
      alert(error.response.status);
      alert(error.response.headers);
    } else if (error.request) {
      alert(error.request);
    } else {
      alert('Error', error.message);
    }
    alert(error.config);
  }

  const handleInput=(e) => {  //add text from text input to url
    let urlEnd=e.target.value;
setState(prevState =>{
  return {...prevState,urlEnd:urlEnd}
});
  }

  const selectedMovie=id =>{ //popup movie
    axios.get(apiurl+"&i="+id)
    .then(({data})=>{
      let result=data;
      setState(prevState=>{
return {...prevState,selected:result}
      });
    })
    .catch(handleErrors)
  }

  const closePopup = () => {  //back to the movie list
  setState(prevState=>{
    return{...prevState, selected:{}}
  });
}

  return (
    <div className="App">
       <main>
      <div className="container">
      <header className="header">
<h1>The Movie Database</h1>
      </header>
         <div className="searchbar">
       <Search handleInput={handleInput} /><button onClick={getMovies} className="searchBtn">Search</button> 
       </div>
     <Results results={state.results} selectedMovie={selectedMovie}/> 
     {(typeof state.selected.Title != "undefined") ? <SelectedMovie selected={state.selected} closePopup={closePopup} /> :false}
     </div> 
      </main>
    </div>
  );
}

export default App;
