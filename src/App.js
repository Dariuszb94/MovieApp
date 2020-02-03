import React, {useState} from 'react';
import Search from './components/Search';
import axios from 'axios'
import Results from './components/Results';
import Popup from './components/Popup';
import {apiurl} from './components/Const';

function App() {
  const [state, setState]=useState({
urlEnd:"",
results:[],
selected:{}
  });

  const search=(e)=>{
axios.get(apiurl+"&s="+state.urlEnd, {params:{_limit:5}})
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
.catch(handleErrors)
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

  const handleInput=(e) => {
    let urlEnd=e.target.value;
setState(prevState =>{
  return {...prevState,urlEnd:urlEnd}
});
  }

  const selectedMovie=id =>{
    axios.get(apiurl+"&i="+id)
    .then(({data})=>{
      let result=data;
      setState(prevState=>{
return {...prevState,selected:result}
      });
    })
    .catch(handleErrors)
  }

  const closePopup = () => {
  setState(prevState=>{
    return{...prevState, selected:{}}
  });
}

  return (
    <div className="App">
       <main>
      <div className="container">
      <header className="header">
<h1>Search for movies</h1>
      </header>
     
    
         <div className="searchbar">
          
       <Search handleInput={handleInput} /><button onClick={search} className="searchBtn">Search</button> 
       </div>
      
     <Results results={state.results} selectedMovie={selectedMovie}/> 
     {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> :false}
     </div> 
      </main>
    </div>
  );
}

export default App;
