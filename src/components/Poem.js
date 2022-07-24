import React, { useState } from "react";

function Poem({ id, title, content, author, updateDeleted={updateDeleted}}) {
  const [readStatus, setReadStatus] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:8004/poems/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => updateDeleted(id))
  }

  function handleReadStatus(){
    setReadStatus(!readStatus)
  }

  return (
    <div >
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleReadStatus}>{readStatus ? "Mark as Unread" : "Mark as Read"}</button>
      <button style={{'float': 'right'}} onClick={handleDelete}>Delete Poem</button>
    </div>
  );
}

export default Poem;
