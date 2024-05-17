import React from 'react'
import Button from './Button'
import { TbArrowUpRight } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { textAnimation } from '../util'
import Image from '../assets/1637247926422.jpeg'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 gap-6 max-w-screen-xl px-4 lg:px-12 m-auto'>
      <div className='w-40 h-40 saturate-0 contrast-125'>
        <motion.img
          {...textAnimation(0)}
          className='rounded-full' src={'https://media.licdn.com/dms/image/D4D03AQHa4ePkgPBCWw/profile-displayphoto-shrink_800_800/0/1715325468901?e=1721260800&v=beta&t=dJSKWsEnHLntjzn_xXC8dQj-1UKrD0W3tn1b3zNWj-M'} alt="" />
      </div>
      <motion.p {...textAnimation(0.12)} className='text-xl'>Hi, I’m Irakli 👋</motion.p>
      <motion.h1
        {...textAnimation(0.24)}
        className='py-2 text-4xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-text to-transparent-text'

      >Crafting Modern Front-End <br /> Experiences with a Flair for <br /> Exquisite Design.</motion.h1>
      <a href='mailto:iraklibego1@gmail.com' className='my-12'>
        <Button animationDelay={0.36} icon={<TbArrowUpRight size={28} />}>Write Me</Button>
      </a>
    </div>
  )
}

export default Hero