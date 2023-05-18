import React from 'react'
import Button from './Button'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { textAnimation } from '../util'

const GetInTouch = () => {
  return (
    <>
      <div className='py-48 flex justify-center items-center'>
        <div className="flex flex-col gap-12 items-center">
          <motion.h1 className='text-4xl md:text-6xl py-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-text to-transparent-text'
            {...textAnimation(0)}
          >What's your next big project?</motion.h1>
          <a href='mailto:iraklibego1@gmail.com'>
            <Button style='w-fit' animationDelay={0.15} icon={<TbArrowUpRight size={28} />}>Get In Touch</Button>
          </a>
        </div>
      </div>
      <div className='w-full h-px bg-gradient-to-r from-transparent via-dark to-transparent '></div>

    </>
  )
}

export default GetInTouch