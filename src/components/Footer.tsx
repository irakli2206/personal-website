import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='max-w-screen-xl py-12 px-12 m-auto flex justify-between gap-8'>
            <div className='flex flex-col md:flex-row gap-8  '>
                <Link to="https://github.com/irakli2206" target='_blank'>
                    <SiGithub size={36} className='transition cursor-pointer text-lightest hover:text-text' />
                </Link>
                <Link to="https://www.linkedin.com/in/irakli-begoidze-4398b1224/" target='_blank'>
                    <SiLinkedin size={36} className='transition cursor-pointer text-lightest hover:text-text' />
                </Link>
            </div>
            <p className='lg:text-xl text-lightest font-light [&>span]:text-text [&>span]:font-medium my-auto'>
                Designed in 
                <span><Link to='https://www.figma.com/' target='_blank'> Figma</Link></span>, constructed in
                <span><Link to='https://www.react.dev/' target='_blank'> React</Link></span>, enchanted with
                <span><Link to='https://www.framer.com/motion/' target='_blank'> Framer Motion</Link></span>
            </p>
        </div>
    )
}

export default Footer