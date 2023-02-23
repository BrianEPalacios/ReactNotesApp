import React, { useState } from "react";

function AddNote(props){

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

  return (
    <div>
      <form className="create-note">

        <input
        className="inputBoxes"
        onChange={handleChange}
        name="title"
        value={note.title}
        placeholder="Title"/>

        <textarea
          className="inputBoxes"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default AddNote;
