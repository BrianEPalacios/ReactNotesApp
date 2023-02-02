import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
  return (
    <div>
    <Header />
    {notes.map(notesEntry => (
      <Note
      key={notesEntry.id}
      title={notesEntry.title}
      content={notesEntry.content}
      />
    ))}
    <Footer />
    </div>
  );
};

export default App;
