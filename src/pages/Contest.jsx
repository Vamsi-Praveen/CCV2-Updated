import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx'
import banner from '../assets/banner1.jpg';
import calender from '../assets/calender.svg';
import location from '../assets/location.svg'
import Avatar from '../components/Avatar.jsx';
import line from '../assets/line.svg'
import Footer from '../components/Footer.jsx'
import Questions from '../components/Questions.jsx';
import { useLoaderData } from 'react-router-dom';
import { useData } from '../context/DataContext.jsx';
import axios from 'axios'
import Gallery from '../components/Gallery.jsx';

const Contest = () => {
  const data = useLoaderData()
  const { setDataContext } = useData();
  useEffect(() => {
    window.scrollTo(0, 0);
    // const getQuestions = async () =>{
    //   await axios.get(`http://localhost:8000/questions/getbyid/${data.date}`)
    //   .then((data)=>{
    //     setDataContext(data.data)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    // }
    // getQuestions()
    setDataContext(data)
  }, [data])
  return (
    <>
      <section className='pb-[30px]'>
        <Header />
        <div className='mt-[80px]'>
          <img src={banner} className='w-full h-full md:w-full md:h-[400px] md:object-cover' />
        </div>
        {
          data.winner.name != ' ' ?
            (
              <div>
                <div className='px-[40px] py-[30px] md:px-[80px] md:py-[50px]'>
                  <div>
                    <h1 className='font-bold text-[28px] text-black'>Code Carnival</h1>
                    <div className='mt-[10px] flex flex-col gap-[5px]'>
                      <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center'>
                        <img src={calender} alt='Calender' />
                        {data.date}
                      </p>
                      <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center mt-'>
                        <img src={location} alt='Location' className='w-[24px]' />
                        {data.location}
                      </p>
                      <p className='text-[#B5ABAB]'>Total participants: {data.participants}</p>
                    </div>
                  </div>
                  <div className='mt-[20px]'>
                    <h1 className='text-[24px] text-black font-bold'>Report</h1>
                    <p className='text-[16px] md:text-[18px] font-normal leading-[1.9rem] text-slate-800 mt-4'>
                      {data.report}
                    </p>
                  </div>
                  <div className='md:mt-[50px]'>
                    <div className='relative'>
                      <h1 className='text-[28px] font-Poppins text-black font-bold mt-[25px] md:mb-[40px]'>Organisers</h1>
                      <div className='absolute left-[5rem] bottom-[-30px] mb-[20px] '>
                        <img src={line} className='w-[100px] ' />
                      </div>
                    </div>
                    <div className='flex mt-[10px] md:gap-[20px] md:items-center'>
                      <Avatar type={"staff"} name={data.coordinator} qualification={data.qualification} image={data.coordinator_image} />
                    </div>
                  </div>
                  <div className='relative'>
                    <h1 className='text-[28px] font-Poppins text-black font-bold mt-[25px] md:mb-[40px]'>Event Toppers</h1>
                    <div className='absolute left-[6rem] top-10 mb-[20px] '>
                      <img src={line} className='w-[100px] ' />
                    </div>
                    <div className='flex mt-[10px] md:gap-[20px] items-center md:flex-row flex-col'>
                      <Avatar type={"Winner"} name={data.winner.name} branch={data.winner.dept} roll={data.winner.roll} image={data.winner.image} />
                      <Avatar type={"Runner"} name={data.runner.name} branch={data.runner.dept} roll={data.runner.roll} image={data.runner.image} />
                    </div>
                  </div>
                  <Questions data={data.questions} />
                </div>
              </div>
            ) :
            (
              <div className='h-[200px] flex justify-center items-center'>
                <ul className='stripped-li px-[20px]'>
                  <li>Contest Details Updated Soon...</li>
                </ul>
              </div>
            )
        }
      </section >
      <Footer />
    </>
  )
}

export default Contest
