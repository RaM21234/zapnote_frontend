import React, { useContext, useEffect } from 'react'
import noteContext from '../../context/notes/noteContext'


const About = () => {
   
    return (
        <>
            <section class="pt-28 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 md:grid-cols-2">

                        <div>
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am<br class="block sm:hidden" /> Ram Kumar</h2>
                            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                Hi, I'm Ram kumar Verma. I'm passionate about software development.<br />
                                In my previous role at the Indian Institute of Information Technology, I developed a full-stack web application using MERN. The application used AES-256 encryption to protect user data and it was hosted on a secure server.<br />

                            </p>

                            <p class="mt-4 text-xl text-gray-600 md:mt-8">
                                <span class="relative inline-block">
                                    <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span class="relative"> Have a question? </span>
                                </span>
                                <br class="block sm:hidden" />Ask me on <a href="https://www.linkedin.com/in/ram-kumar-verma-926a25229/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title=""
                                    class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">LinkedIn</a>
                            </p>
                        </div>

                        <div class="relative">
                            <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />

                            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
         

        </>
    )
}

export default About
