import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems, updateDeleted}) {
  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      <div >
        {poems.map((poem) => {
          return <Poem key={poem.id} {...poem} updateDeleted={updateDeleted}/>
        })}
      </div>
    </div>
  );
}

export default PoemsContainer;
