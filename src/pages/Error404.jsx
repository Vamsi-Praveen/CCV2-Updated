import React, { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import error from '../assets/error503.svg'
import { motion } from 'framer-motion'

const Error404 = ({noFooter}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <section>
      <Header />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex items-center w-full h-[480px] justify-center pt-[5rem] pb-[50px]'>
        <img src={error} alt='Error Page Not Found 404' className='h-[480px] pt-[40px]' />
      </motion.div>
      {noFooter?'':( <Footer />)}
    </section>
  )
}

export default Error404
