import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./Note.jsx";
//import note from "../notes";
import CreateArea from "./CreateArea";



function App(){

const[notes,setNotes]=useState([]);

function addNote(newNote){
console.log(newNote);
setNotes(prevNotes => {
    return [...prevNotes,newNote];
});

}

function deleteNote(id){
console.log("delete triggered");
setNotes(prevNotes=>{
    return prevNotes.filter((noteItem,index) => {
        return index !== id;
    })
})
}

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem,index) => {
    return <Note 
    id={index}
    key={index}
    title={noteItem.title}
    content={noteItem.content}
    onDelete={deleteNote}
    />
}
            
        )};
        <Footer />
    </div>
}

export default App;