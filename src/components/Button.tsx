import { motion } from 'framer-motion'
import React from 'react'
import { textAnimation } from '../util'

type Props = {
    style?: string
    children: JSX.Element | JSX.Element[] | string
    icon?: JSX.Element
    animationDelay: number
}

const Button = ({ style, children, icon, animationDelay }: Props) => {
    return (
        <motion.button {...textAnimation(animationDelay)}
            // whileHover={{boxShadow: }}
            whileTap={{
                scale: 0.95, transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 200,
                    mass: 0.2
                }
            }}
            className={`${style} group rounded border-solid border-light border px-12 md:px-16 sm:px-20 py-4 tracking-widest text-md md:text-xl flex gap-4 shadow-button
        bg-gradient-to-b from-dark/50 to-dark/0
        hover:shadow-inner   
        `}>
            {children}
            <span className='transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                {icon}
            </span>
        </motion.button>
    )
}

export default Button