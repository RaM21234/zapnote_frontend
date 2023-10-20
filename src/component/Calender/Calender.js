import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calender = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
        } else {
            navigate('/login')
        }
    }, []);
    return (
        <>
            <div class="my-5">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"

                />
            </div>
        </>
    )
}

export default Calender
