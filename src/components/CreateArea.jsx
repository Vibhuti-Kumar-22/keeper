import React, {  useState } from "react";

function CreateArea(props) {

const [note,setNote]=useState({
    title:"",
    content:""
})

function handeChanges(event ){
 const {name,value} = event.target;

 setNote(prevNote =>{
    return {
        ...prevNote,
        [name]:value
    }
 })
}

function submitNotes(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({
        title: "",
        content: ""
    });

}

  return (
    <div>
      <form>
        <input name="title" onChange={handeChanges} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handeChanges} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
