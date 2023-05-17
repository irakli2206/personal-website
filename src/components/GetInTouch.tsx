import React from 'react'
import Button from './Button'
import { TbArrowUpRight } from 'react-icons/tb'

const GetInTouch = () => {
  return (
    <>
      <div className='py-48 flex justify-center items-center'>
        <div className="flex flex-col gap-12 items-center">
          <h1 className='text-6xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-text to-transparent-text'>What's your next big project?</h1>
          <Button style='w-fit' icon={<TbArrowUpRight size={28} />}>Get In Touch</Button>
        </div>
      </div>
      <div className='w-full h-px bg-gradient-to-r from-transparent via-dark to-transparent '></div>

    </>
  )
}

export default GetInTouch