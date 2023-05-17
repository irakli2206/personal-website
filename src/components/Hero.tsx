import React from 'react'
import Button from './Button'
import {TbArrowUpRight} from 'react-icons/tb'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 gap-6 max-w-screen-xl px-12 m-auto'>
        <div className='w-40 h-40 saturate-0 contrast-125'>
            <img className='rounded-full' src="https://media.licdn.com/dms/image/C5603AQEpNMdy_FYHBg/profile-displayphoto-shrink_800_800/0/1637247926422?e=1689811200&v=beta&t=m7ZK5WAHq6D8-UaXiMKTuVQOeWw5xgdKhcusV0-K5Pg" alt="" />
        </div>
        <p className='text-xl'>Hi, I’m Irakli 👋</p>
        <h1 
        className='py-2 text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-text to-transparent-text'
        
        >Crafting Modern Front-End <br/> Experiences with a Flair for <br/> Exquisite Design.</h1>
        <Button style='my-12' icon={<TbArrowUpRight size={28} />}>Write Me</Button>
    </div>
  )
}

export default Hero