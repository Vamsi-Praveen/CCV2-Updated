import React from 'react'
import Tabs from './Tabs'

const Questions = ({data}) => {
    return (
        <section className='mt-[60px] py-[30px]'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>Questions Asked</h1>
            <div className='flex items-center justify-center'>
                <Tabs ques={data}/>
            </div>
        </section>
    )
}

export default Questions
