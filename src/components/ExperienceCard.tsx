import React from 'react'
import { Job } from '../types'

type Props = Job & {
    active: boolean
    onCardEnter: () => void
    onCardLeave: () => void
}

const ExperienceCard = ({ active, onCardEnter, onCardLeave, period, company, role, location, description, tech }: Props) => {

    return (
        <div className={`w-full flex gap-12 tracking-wide p-8 transition duration-300 hover:shadow-experience-card hover:bg-dark rounded cursor-pointer ${active ? 'opacity-100' : 'opacity-50'}`}
            onMouseEnter={onCardEnter} onMouseLeave={onCardLeave}
        >
            <p className='basis-2/12 text-md font-medium leading-8 text-end'>{period}</p>
            <div className='basis-10/12 flex flex-col'>
                <h1 className='text-xl font-medium'>{role} · {company} </h1>
                {/* <h2 className='text-lg pt-2 text-lightest'>{location}</h2> */}
                <p className='text-md py-6 text-lightest'>{description}</p>
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

export default ExperienceCard