import React, { useEffect, useRef } from 'react'
import { Job, Project } from '../types'
import { motion, useAnimationControls, useInView } from 'framer-motion'

type Props = Project & {
    active: boolean
    custom: number
    onCardEnter: () => void
    onCardLeave: () => void
}

const ProjectCard = ({ active, custom, onCardEnter, onCardLeave, img, title, description, tech, url }: Props) => {
    let controls = useAnimationControls()
    let ref = useRef(null)
    let inView = useInView(ref)

    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1, transition: { type: 'spring', damping: 10, mass: 0.2, delay: 0.1 * custom } })
        }
    }, [inView])


    return (
        <motion.a href={url} target='_blank' ref={ref} custom={custom} className={`w-full flex gap-4 lg:gap-12 tracking-wide p-8  hover:shadow-experience-card hover:bg-dark rounded cursor-pointer ${active ? 'saturate-100' : 'saturate-0'}`}
            onMouseEnter={onCardEnter} onMouseLeave={onCardLeave} initial={{ opacity: 0, y: 20, background: '#18181B' }} animate={controls} whileHover={{ background: '#27272A' }}
        >

            <div className='flex flex-col gap-2'>
                <img src={img} alt='' className='rounded' />
                <h1 className='text-3xl font-medium'>{title} </h1>
                {/* <h2 className='text-lg pt-2 text-lightest'>{location}</h2> */}
                <p className='text-md  text-lightest'>{description}</p>
                <div className='flex flex-wrap gap-4 pt-2'>
                    {tech.map(item => {
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

export default ProjectCard