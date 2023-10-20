import React, { useContext } from 'react'
import noteContext from "../../context/notes/noteContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context
    const { note, editNote } = props
    const notify =  () => toast("Note deleted successfully");
    return (
        <>

            <div class="card w-96 h-auto card-side bg-base-100 shadow-2xl">
                <div class="card-body w-80">
                <div class="text-center">
                    <div class="badge badge-info gap-2">
                        {note.tag}
                    </div>
                </div>
                    <h2 class="card-title">{note.title}</h2>
                    <div class="overflow-x-hidden ">{note.description}</div>
                    <div class="card-actions justify-end">
                        <img width="19" height="19" src="https://img.icons8.com/pastel-glyph/64/create-new--v2.png" alt="create-new--v2" onClick={() => { editNote(note) }} />
                        <img className="mx-2" width="24" height="24" src="https://img.icons8.com/material-rounded/24/filled-trash.png" alt="filled-trash" onClick={() => { deleteNote(note._id);notify() }} />
                        <ToastContainer />
                    </div>
                </div>
            </div>





        </>
    )
}

export default NoteItem


// favicon from icon8.com 