import React, { useState } from "react";

function NewPoemForm({poems, setPoems}) {
const [formData, setFormData] = useState({
  title: "",
  content: "",
  author: ""
})

function handleFormChange(e){
  setFormData({...formData,
    [e.target.name]: e.target.value
  })
}

  function handleFormSubmit(event){
    event.preventDefault()
    // console.log(formData)
    fetch('http://localhost:8004/poems', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setPoems([...poems, data])
    })
    setFormData({
      title: "",
      content: "",
      author: ""
    })
  }

  return (
    <form className="new-poem-form" onSubmit={handleFormSubmit}>
      <input placeholder="Title" name='title' value={formData.title} onChange={handleFormChange}/>
      <input placeholder="Author" name="author" value={formData.author} onChange={handleFormChange}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={formData.content} onChange={handleFormChange}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
