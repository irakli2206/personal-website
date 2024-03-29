import { motion } from 'framer-motion'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1, transition: {type:'spring', damping: 20}}}
        >
            <header className='flex justify-between items-center h-28 max-w-screen-xl px-4 md:px-12 m-auto'>
                <a className='group flex items-center gap-8 cursor-pointer text-lightest transition hover:text-text active:scale-95' href='mailto:iraklibego1@gmail.com' >
                    <div className='rounded-full w-16 h-16 md:w-20 md:h-20 bg-dark shadow-mail-box group-hover:shadow-inner transition duration-200 flex justify-center items-center group-hover:text-lightest'>
                        <CiMail size={36} />
                    </div>
                    <p className='hidden md:block transition -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'>Get In Touch</p>
                </a>

                <div className='flex gap-4 md:gap-20 md:text-lg'>
                    <p className='flex gap-1 lg:gap-4 '>
                        <Link to='https://www.linkedin.com/in/irakli-begoidze-4398b1224/' target='_blank' referrerPolicy='no-referrer'
                            className='hover:drop-shadow-text transition'
                        >LinkedIn</Link>
                        <span>/</span>
                        <Link to='https://github.com/irakli2206' target='_blank' referrerPolicy='no-referrer' className='hover:drop-shadow-text transition'>GitHub</Link>
                    </p>
                    <Link to='resume' className='hover:drop-shadow-text transition'>Resume</Link>
                </div>
            </header>

            <div className='w-full h-px bg-gradient-to-r from-transparent via-dark to-transparent '></div>
        </motion.div>
    )
}

export default Header