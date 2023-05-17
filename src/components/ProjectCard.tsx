import React from 'react'
import { Job, Project } from '../types'

type Props = Project & {
    active: boolean
    onCardEnter: () => void
    onCardLeave: () => void
}

const ProjectCard = ({ active, onCardEnter, onCardLeave, img, title, description, tech }: Props) => {

    return (
        <div className={`w-full flex  tracking-wide p-8 transition duration-300 hover:shadow-experience-card hover:bg-dark rounded cursor-pointer ${active ? 'saturate-100' : 'saturate-0'}`}
            onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}
        >

            <div className='flex flex-col gap-2'>
                <img src={img} alt='' className='rounded' />
                <h1 className='text-3xl font-medium'>{title} </h1>
                {/* <h2 className='text-lg pt-2 text-lightest'>{location}</h2> */}
                <p className='text-md  text-lightest'>{description}</p>
                <div className='flex flex-wrap gap-4 pt-2'>
                    {tech.map(item => {
                        return (
                            <div className='px-6 py-2 text-center bg-primary rounded-full text-sm text-lightest'>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard