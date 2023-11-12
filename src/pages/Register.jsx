import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx'
import banner from '../assets/banner1.jpg';
import calender from '../assets/calender.svg';
import location from '../assets/location.svg'
import Avatar from '../components/Avatar.jsx';
import line from '../assets/line.svg'
import Footer from '../components/Footer.jsx'
import SearchInput from '../components/SearchInput.jsx';
import { useLoaderData } from 'react-router-dom';
import SelectInput from '../components/SelectInput.jsx';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"

const Register = () => {
  const dataContext = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [data, setData] = useState({
    name: '',
    rollno: '',
    dept: '',
    college: '',
    year: '',
    hackerrank: '',
    coding_date: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    data.coding_date = dataContext.date
    if (data.dept == '' || data.dept == 'null' || data.year == '' || data.year == 'null') {
      toast.error("All Feilds Are Required");
      return;
    }

    axios.post('http://localhost:8000/user/register', data)
      .then((data) => {
        if (data.status == 201) {
          toast.success("Registered Succesfull");
          setData({
            name: '',
            rollno: '',
            dept: '',
            year: '',
            hackerrank: '',
            coding_date: '',
            college:""
          })
        }
      })
      .catch((err) => {
        if (err.response.status == 300) {
          toast.error("User Already Registered")
          setData({
            name: '',
            rollno: '',
            dept: '',
            year: '',
            hackerrank: '',
            coding_date: '',
            college:''
          })
        }
        toast.error("Something error occured")
      })
  }
  return (
    <>
      <section className='pb-[120px]'>
        <Header />
        <div className='mt-[80px]'>
          <img src={banner} className='w-full h-full md:w-full md:h-[400px] md:object-cover' />
        </div>
        <div>
          <div className='px-[40px] py-[30px] md:px-[80px] md:py-[50px]'>
            <div>
              <h1 className='font-bold text-[28px] text-black'>Code Carnival</h1>
              <div className='mt-[10px] flex flex-col gap-[5px]'>
                <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center'>
                  <img src={calender} alt='Calender' />
                  {dataContext.date}
                </p>
                <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center mt-'>
                  <img src={location} alt='Location' className='w-[24px]' />
                  {dataContext.location}
                </p>
              </div>
            </div>
            <div className='mt-[20px]'>
              <h1 className='text-[24px] text-black font-bold'>About</h1>
              <p className='text-[16px] md:text-[18px] font-normal leading-[1.5rem] text-slate-800 mt-4'>
                <b>Code Carnival</b> is the coding competition conducted every week by the department of <b>CSE, IT & AIML</b> in association with the CSI Student chapter. This aims in building the competitive spirit of coding skills in students. This platform brings the students of various branches to solve the problems using their logical thinking.<br /><br />
                Competitive programming is a sport where contestants solve algorithmic problems within a time limit using a programming language of their choice. It tests problem-solving skills, knowledge of algorithms, and ability to write efficient code.<br /><br />
                Web development and software engineering require basic algebra and arithmetic, while more specialized areas such as machine learning, computer graphics, or data analysis require advanced mathematical competency. Also, logical thinking and problem-solving skills are essential for coding.
              </p>
            </div>
            <div>
              <div className='relative'>
                <h1 className='text-[28px] font-Poppins text-black font-bold mt-[25px] md:mb-[40px]'>Organisers</h1>
                <div className='absolute left-[5rem] bottom-[-30px] mb-[20px] '>
                  <img src={line} className='w-[100px] ' />
                </div>
              </div>
              <div className='flex mt-[10px] md:gap-[20px] md:items-center'>
                <Avatar name={dataContext.coordinator} type={"staff"} image={dataContext.coordinator_image} qualification={dataContext.qualification} />
              </div>
            
            </div>
            <div className='w-full h-[500px] p-[20px]'>
              <h1 className='text-xl md:text-4xl font-bold text-center text-black px-[20px]'>Register Now for the Event</h1>
              <form onSubmit={handleSubmit} className='mt-[40px] flex items-center justify-center w-full flex-col gap-[20px]'>
                <SearchInput type={"text"} placeholder={"Name"} value={data.name} onChange={handleChange} name={"name"} />
                <SearchInput type={"text"} placeholder={"Roll No."} value={data.rollno} onChange={handleChange} name={"rollno"} />
                <SearchInput type={"text"} placeholder={"Hackerank Profile Name"} value={data.hackerrank} onChange={handleChange} name={"hackerrank"} />
                <SelectInput type={"dept"} name={"dept"} onChange={handleChange} value={data.dept} />
                <SelectInput type={"college"} name={"college"} onChange={handleChange} value={data.college} />
                <SelectInput type={"year"} name={"year"} onChange={handleChange} value={data.year} />
                <button type="submit" className='w-[180px] h-[35px] md:w-[238px] md:h-[37px] rounded-[11px] bg-black text-white hover:scale-105 transition'>Register Now</button>
              </form>
            </div>
          </div>
        </div>
        <Toaster position='top-center' />
      </section >
      <Footer />
    </>
  )
}

export default Register
