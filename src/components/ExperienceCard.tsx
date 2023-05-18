import React, { useEffect, useRef } from 'react'
import { Job } from '../types'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { textAnimation } from '../util'

type Props = Job & {
    active?: boolean
    activeIndex: number
    index: number
    onCardEnter: () => void
    onCardLeave: () => void
}

const ExperienceCard = ({ active, activeIndex, index, onCardEnter, onCardLeave, period, company, role, location, description, tech, url }: Props) => {
    let controls = useAnimationControls()
    let ref = useRef(null)
    let inView = useInView(ref)

    let isActive = activeIndex !== -1



    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1, transition: { type: 'spring', damping: 10, mass: 0.2, delay: 0.1 * index } })
        }

    }, [inView])

    useEffect(() => {
        if (inView) {
            if (isActive) {
                if (activeIndex == index) controls.start({ y: 0, opacity: 1, background: '#27272A', transition: { type: 'spring', damping: 10, mass: 0.2 } })
                else controls.start({ y: 0, opacity: 0.5, background: '#18181B', transition: { type: 'spring', damping: 10, mass: 0.2 } })
            }
            else controls.start({ y: 0, opacity: 1, background: '#18181B', transition: { type: 'spring', damping: 10, mass: 0.2 } })
        }
    }, [activeIndex])


    return (
        <motion.a href={url} target='_blank' className={`w-full flex gap-4 lg:gap-12 tracking-wide p-4 lg:p-8 hover:shadow-experience-card   rounded cursor-pointer  `}
            onMouseEnter={onCardEnter} onMouseLeave={onCardLeave} ref={ref} initial={{ opacity: 0, y: 20, background: '#18181B' }} animate={controls}
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