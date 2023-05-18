import React, { useEffect, useRef } from 'react'
import { Job } from '../types'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { textAnimation } from '../util'

type Props = Job & {
    active: boolean
    custom: number
    onCardEnter: () => void
    onCardLeave: () => void
}

const ExperienceCard = ({ active, custom, onCardEnter, onCardLeave, period, company, role, location, description, tech, url }: Props) => {
    let controls = useAnimationControls()
    let ref = useRef(null)
    let inView = useInView(ref)

    useEffect(() =>{
        if(inView) {
            controls.start({ y: 0, opacity: 1, transition: { type: 'spring', damping: 10, mass: 0.2, delay: 0.1 * custom }})
        }  
    }, [inView])

    console.log(active)

    return (
        <motion.a href={url} target='_blank' ref={ref} custom={custom} className={`w-full flex gap-4 lg:gap-12 tracking-wide p-4 lg:p-8 hover:shadow-experience-card  rounded cursor-pointer ${active ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={onCardEnter} onMouseLeave={onCardLeave} initial={{opacity: 0, y: 20, background: '#18181B'}} animate={controls} whileHover={{background: '#27272A'}}
         >
            <p className='basis-2/12 text-md font-medium leading-8 text-end'>{period}</p>
            <div className='basis-10/12 flex flex-col'>
                <h1 className='text-xl font-medium'>{role} · {company} </h1>
                {/* <h2 className='text-lg pt-2 text-lightest'>{location}</h2> */}
                <p className='text-md py-6 text-lightest'>{description}</p>
                <div className='flex flex-wrap gap-4 pt-2'>
                    {tech.map((item: any) => {
                        return (
                            <div className='px-4 md:px-6 py-2 text-center bg-primary rounded-full text-xs md:text-sm text-lightest'>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </motion.a>
    )
}

export default ExperienceCard