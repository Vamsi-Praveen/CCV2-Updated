import React, { useEffect } from 'react'
import Header from '../components/Header'
import about from "../assets/about.png"
import Footer from '../components/Footer'
import { useLoaderData } from 'react-router-dom'
import line from '../assets/line.svg'
import {motion} from "framer-motion"

const Gallery = () => {
  var data = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='pb-[30px]'>
      <Header />
      <div className='my-[110px]'>
        <div className='relative mb-[50px]'>
          <motion.h1 className='font-bold text-[24px] md:text-[30px] text-black text-center'
            initial={{y:100,oapcity:0}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:0.2,duration:0.2
            }}
          >Code Carnival's Gallery</motion.h1>
          <div className='absolute right-[0px] md:right-[30rem] md:bottom-[-30px] mb-[20px] '>
            <img src={line} className='w-[100px] ' />
          </div>
        </div>
        <div className='flex items-center  md:mt-[50px] mt-[30px] gap-[40px] flex-wrap justify-center'>
          {
            data && data.map((item) => (
              <motion.div className=' w-[200px] md:w-[400px] md:h-[250px] rounded-[12px] overflow-hidden shadow-lg shadow-slate-40 hover:scale-110 transition'
                initial={{y:-20,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{delay:0.1,duration:0.2}}
              
              
              >
                <img src={item.imageurl} className='object-cover w-full h-full' />
              </motion.div>
            ))
          }

        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Gallery
