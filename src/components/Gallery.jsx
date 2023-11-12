import React from 'react'
import about from "../assets/about.png"

const Gallery = () => {
    return (
        <section className='mt-[60px] py-[30px] w-full'>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Gallery</h1>
            <div className='flex items-center mt-[50px] gap-[40px] flex-wrap justify-center'>
                <div className='w-[400px] md:h-[300px] bg-red-300 rounded-[12px] overflow-hidden shadow-lg shadow-slate-40 hover:scale-110 transition'>
                    <img src={about} className='object-cover w-full h-full'/>
                </div>
                <div className='w-[400px] md:h-[300px] bg-red-300 rounded-[12px] overflow-hidden shadow-lg shadow-slate-40 hover:scale-110 transition'>
                    <img src={about} className='object-cover w-full h-full'/>
                </div>
                <div className='w-[400px] md:h-[300px] bg-red-300 rounded-[12px] overflow-hidden shadow-lg shadow-slate-40 hover:scale-110 transition'>
                    <img src={about} className='object-cover w-full h-full'/>
                </div>
                <div className='w-[400px] md:h-[300px] bg-red-300 rounded-[12px] overflow-hidden shadow-lg shadow-slate-40 hover:scale-110 transition'>
                    <img src={about} className='object-cover w-full h-full'/>
                </div>
            </div>
        </section>
    )
}

export default Gallery
