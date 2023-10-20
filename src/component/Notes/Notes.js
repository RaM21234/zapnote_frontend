import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from "../../context/notes/noteContext"
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import takenote from "../../images/takenote.PNG";
import leftview from "../../images/leftview.jfif";
import secure from "../../images/secure.jfif";
import { GrGrow } from "react-icons/gr";
import { BsStack } from "react-icons/bs";



const Notes = () => {
    let navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, getNotes, updateNote } = context


    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate('/login')
        }

    }, []);
    const ref = useRef(null);
    const [note, setNote] = useState({ id: "", utitle: "", udescription: "", utag: "" });


    const editNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, utitle: currentNote.title, udescription: currentNote.description, utag: currentNote.tag })
    }

    const handleClick = (e) => {
        e.preventDefault()
        updateNote(note.id, note.utitle, note.udescription, note.utag)
        
        console.log("updating the note", note)
    }

    //spread syntax used 
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>

            <section class="text-gray-600 body-font ">
                <div class="container px-5 py-16 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden ">
                        <img alt="feature" class="object-cover object-center " src={takenote} />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center ">

                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <BsStack size={25} />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3"> Organization</h2>
                                <p class="leading-relaxed text-base"> Notes help you structure and organize information. This can be especially helpful when dealing with complex subjects or large amounts of data.</p>
                                <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                <GrGrow size={25} />
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Self-Reflection</h2>
                                <p class="leading-relaxed text-base"> Notes can be a tool for self-reflection and self-improvement. You can record personal thoughts, ideas, and experiences to track your growth and development.</p>
                                <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="text-gray-600 body-font overflow-hidden ">
                <div class="container px-5  mx-auto ">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full lg:h-1/2 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <AddNote />
                        </div>
                        <img alt="ecommerce" class="hidden lg:flex lg:w-1/2 w-full lg:h-1/2 h-64 object-cover object-center rounded" src={leftview} />
                    </div>
                </div>
            </section>

            <div >
                {/* update modal */}
                <label type="button" for="my_modal_6" ref={ref} class="btn hidden">open modal</label>

                <input type="checkbox" id="my_modal_6" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">

                        <form>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Title</label>
                                <input type="text" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4" id="utitle" name="utitle" aria-describedby="emailHelp" value={note.utitle} onChange={onChange} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4" id="utag" name="utag" value={note.utag} onChange={onChange} />


                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea type="text" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4" row="4" id="udescription" name="udescription" value={note.udescription} onChange={onChange} rows="3"></textarea>

                            </div>
                        </form>
                        <div class="modal-action">
                            <label for="my_modal_6" class="btn" >Close!</label>
                            <button type="button" disabled={note.utitle.length < 5 || note.udescription.length < 5} className="btn btn-primary" onClick={handleClick}>update note </button>
                        </div>
                    </div>
                </div>

                <section class="text-gray-600 body-font">
                    <div class=" mx-auto flex px-5 pb-20 items-center justify-center flex-col">
                        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={secure} />
                        <div class="text-center lg:w-2/3 w-full">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We've designed our data center with security in mind</h1>
                            <p class="mb-8 leading-relaxed">While you work, our servers automatically back up your critical data. So when accidents happen — if your computer crashes or gets stolen — you can be up and running again in seconds.Our data centers are protected with several layers of security to prevent any unauthorized access to your data.</p>
                            
                        </div>
                    </div>
                </section>

                <h1 class="text-center text-3xl xl:text-5xl font-bold mb-5 underline">
                    Your Notes
                </h1>

                <div className="grid grid-flow-row lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-2   justify-center mt-2.5">
                    {notes.length === 0 && <div class="text-center text-xl my-10 text-red-500 ">No notes to display...</div>}
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} editNote={editNote} />
                    })}
                </div>
            </div >

        </>
    )
}

export default Notes
