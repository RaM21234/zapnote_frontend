import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import front_page from "../../images/front_page.webp"
import front from "../../images/front.webp"
import paperless from "../../images/paperless.png"
import integrations from "../../images/integrations.png"
import Footer from './Footer'
import {
    Link
} from "react-router-dom";

const Landing = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
        } else {
            navigate('/login')
        }
    }, []);
    return (
        <>

            <section class="text-white body-font">
                <div class="container px-5 pt-20 mx-auto flex flex-wrap">
                    <div class="lg:w-2/3 mx-auto">
                        <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                            <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src="https://th.bing.com/th/id/R.0e4d6c156e2ae0d98510f1b8dade5726?rik=7IDxbrvPrjrLDQ&riu=http%3a%2f%2fwww.musictruth.com%2fwp-content%2fuploads%2f2017%2f01%2fUrban_Light_TwoBulbs.jpg&ehk=imGFD3YVgG40QjhHHbxBlrf3nAnYwOrcZtFElRkNwUQ%3d&risl=&pid=ImgRaw&r=0" />
                            <div class="text-center relative z-10 w-full">
                                <h2 class="text-3xl text-white font-bold  mb-5">ZapNote</h2>
                                <p class="leading-relaxed">The idea of just wandering off to a cafe with a notebook and writing and seeeing where that takes me for awhile is just a bliss</p>
                                <p>-JK ROWLING</p>
                                <p class="leading-relaxed mt-5">Writing is an exploration. You start from nothing and learn as you go</p>
                                <p>-EL DOCTOROW</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
                    <div class="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={front_page} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Zap-Note Notes on Cloud

                        </h1>
                        <p class="mb-8 leading-relaxed">"From staying on top of your to-dos to making your schedule work for you,<br /> iNotebook helps bring order to the chaos."</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"><Link to="/" role="button">Add a Note</Link></button>

                        </div>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Dive into your day
                        </h1>
                        <p class="mb-8 leading-relaxed">"Your Notes shows you the information you need, when you need it, <br /> so you can start your day with a clear view and less stress."</p>

                    </div>
                    <div class="lg:max-w-2xl lg:w-full  md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={front} />
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
                    <div class="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={paperless} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Go paperless

                        </h1>
                        <p class="mb-8 leading-relaxed">From instruction manuals and warranty information to boarding passes and receipts,<br /> relax knowing they’re always handy if you need them later.</p>

                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Designed to fit your workflow </h1>
                        <p class="mb-8 leading-relaxed">"ZapNote provides all sort of tools so you can be more<br /> productive from brainstorm to execution."</p>

                    </div>
                    <div class="lg:max-w-2xl lg:w-full  md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={integrations} />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Landing
