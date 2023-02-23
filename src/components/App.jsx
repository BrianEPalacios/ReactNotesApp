import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";



function App(){

  const [notes, setNotes] = useState([]);

  function deleteNote(id){
    setNotes(allNotes => {
      return allNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }

  function addNote(newNote){
    // set notes array to previous notes plus new note
    // newNote is coming from submiteNote
    setNotes(prevNotes =>{
      return [...prevNotes, newNote]
    });
  }

  return (
    <div>
    <Header />
    {/* sending function addNote to AddNote component */}
    <AddNote
      onAdd={addNote}
    />
    {notes.map((notesEntry, index) => (
      <Note
      key={index}
      id={index}
      title={notesEntry.title}
      content={notesEntry.content}
      onDelete={deleteNote}
      />
  ))}
    <Footer />
    </div>
  );
};

export default App;
