import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const url = "https://zapnote-backend.onrender.com"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    //api call 
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      }

      const response = await fetch(`${url}/api/notes/fetchallnotes`, options);
      const json = await response.json();
      setNotes(json)

    } catch (error) {
      console.log(error);
    }

  }

  //add note
  const addNote = async (title, description, tag) => {
    //api call
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      }

      const response = await fetch(`${url}/api/notes/addnote`, options);
      const note = await response.json();
      setNotes(notes.concat(note));

    } catch (error) {
      console.log(error);
    }
  }
  //delete note
  const deleteNote = async (id) => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      }

      const response = await fetch(`${url}/api/notes/deletenote/${id}`, options);
      const data = await response.json();
      console.log(data)

    } catch (error) {
      console.log(error);
    }
    console.log(`deleting note with id ${id}`)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }
  //update note
  const updateNote = async (id, title, description, tag) => {
    //api call
    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      }

      const response = await fetch(`${url}/api/notes/updatenote/${id}`, options);
      const data = await response.json();
      var newNotes =JSON.parse(JSON.stringify(notes))
    } catch (error) {
      console.log(error);
    }


    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].tag = tag
        newNotes[index].description = description
        break;
      }
    }
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;