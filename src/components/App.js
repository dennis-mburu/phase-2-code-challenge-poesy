import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([])
  const [poemForm, setPoemForm] = useState(false)
  
  useEffect(()=>{
    fetch('http://localhost:8004/poems')
    .then(res => res.json())
    .then(data => setPoems(data))
  },[])
  // console.log(poems)

  function handlePoemForm(){
    setPoemForm(!poemForm)
  }

function handleUpdateDeleted(id){
  const updatedPoems = poems.filter(poem => poem.id !== id)
  setPoems(updatedPoems)
}

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handlePoemForm}>Show/hide new poem form</button>
        {poemForm ? <NewPoemForm poems={poems} setPoems={setPoems}/> : null}
      </div>
      <PoemsContainer poems={poems} updateDeleted={handleUpdateDeleted} />
    </div>
  );
}

export default App;
