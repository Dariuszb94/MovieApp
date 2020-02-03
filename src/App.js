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
    if (e.key==="Enter"){
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
  }

  function handleErrors(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      alert(error.response.data);
      alert(error.response.status);
      alert(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      alert(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
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
  const openPopup=id =>{
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
      <header className="Header">
<h1>Movie Database</h1>
      </header>
      <main>
       <Search handleInput={handleInput} search={search}/>
     <Results results={state.results} openPopup={openPopup}/>
     {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> :false}
      </main>
    </div>
  );
}

export default App;
