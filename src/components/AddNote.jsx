import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function AddNote(props){

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState(
    {
      title: "",
      content: ""
    },
  );

function handleChange(event){
  const {name, value} = event.target;
  setNote(prevNote => {
    // [name] actually turns it into title or content depending
    return{
      ...prevNote,
      [name]: value
    }
  });
};

function submitNote(event){
  // calls the addNote function and we send it our note
  props.onAdd(note);
  setNote({
    title: "",
    content: ""
  },
)
  event.preventDefault();
}

function expand(){
  setExpanded(true);
}

  return (
    <div>
      <form className="create-note">

        {isExpanded && <input
        className="inputBoxes"
        onChange={handleChange}
        name="title"
        value={note.title}
        placeholder="Title"/>}


        <textarea
          className="inputBoxes"
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default AddNote;
