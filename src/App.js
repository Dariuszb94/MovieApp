import React, {useState} from 'react';
import Search from './components/Search';
import axios from 'axios'
import Results from './components/Results';
import Popup from './components/Popup';


function App() {
  const [state, setState]=useState({
s:"",
results:[],
selected:{}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=885b8a6d";

  const search=(e)=>{
    if (e.key==="Enter"){
axios.get(apiurl+"&s="+state.s, {params:{_limit:5}})
.then(({data})=>{
  let results=data.Search;
  if (results){
  setState(prevState => {
    return {...prevState, results:results}
  })}
  else{
    alert("There are no movies for your search");
  }
})
.catch(handleErrors)
    }
  }
 



  const handleInput=(e) => {
    
    let s=e.target.value;
setState(prevState =>{
  return {...prevState,s:s}
});

  }
  const openPopup=id =>{
    axios(apiurl+"&i="+id).then(({data})=>{
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
      <header className="App-header">
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
