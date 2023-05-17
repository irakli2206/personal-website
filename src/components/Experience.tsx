import React, { useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { Job, Project } from '../types'
import { TbArrowNarrowRight } from 'react-icons/tb'
import KTP from '../assets/projects/KTP.svg'
import Poemo from '../assets/projects/Poemo.svg'
import Proficio from '../assets/projects/Proficio.svg'
import Resumate from '../assets/projects/Resumate.svg'
import ProjectCard from './ProjectCard'

const Experience = () => {
    let [active, setActive] = useState(-1)
    let [activeProject, setActiveProject] = useState(-1)

    let jobData: Job[] = [
        {
            company: 'Convo-Agency',
            description: 'Lead 3-person team, organize standups, gather updates, provide feedback. Drive tech stack decisions, coordinate with PM. Tackle high-priority, complex tasks.',
            location: 'Remote (Short-Term Contract)',
            period: '2023',
            role: 'Lead Frontend Developer',
            tech: ['NextJS', 'GraphQL', 'ShopifyAPI', 'Javascript', 'Formik', 'Yup']
        },
        {
            company: 'Conso4s',
            description: 'Joined international team, contributed to ReactJS/React Native apps. Collaborated closely with friendly team. Enhanced UX, optimized performance, reviewed code. Effective communication, updated practices, delivered efficient code.',
            location: 'Tbilisi, Georgia (Hybrid)',
            period: '2021-2022',
            role: 'Middle ReactJS/React Native Developer',
            tech: ['ReactJS', 'React Native', 'Typescript', 'Vercel CI/CD', 'Redux Toolkit']
        },
        {
            company: 'Ancestral Whispers',
            description: 'Transformed a hobby-based project into a thriving startup by building a compact team and offering unique services. Dedicated efforts in optimizing the website while fearlessly experimenting with cutting-edge technologies to drive innovation and achieve outstanding results.',
            location: 'Tbilisi, Georgia',
            period: '2021',
            role: 'Founder & Developer',
            tech: ['NextJS', 'Typescript', 'ChakraUI', 'Supabase', 'Cloudinary', 'Figma']
        },
        {
            company: 'Comas Digital PLC',
            description: 'Transformed a hobby-based project into a thriving startup by building a compact team and offering unique services. Dedicated efforts in optimizing the website while fearlessly experimenting with cutting-edge technologies to drive innovation and achieve outstanding results.',
            location: 'Remote',
            period: '2019-2021',
            role: 'Junior ReactJS Developer',
            tech: ['ReactJS', 'Javascript', 'MaterialUI', 'Figma']
        },
    ]

    let projectData: Project[] = [
        {
            title: 'Poemo',
            description: 'OpenAI-based project that generates beautiful poems based on prompts.',
            tech: ['ReactJS', 'ChakraUI', 'OpenAI API'],
            img: Poemo
        },
        {
            title: 'KTP',
            description: 'OpenAI-based project that generates beautiful poems based on prompts.',
            tech: ['ReactJS', 'ChakraUI', 'OpenAI API'],
            img: KTP
        },
        {
            title: 'Proficio',
            description: 'OpenAI-based project that generates beautiful poems based on prompts.',
            tech: ['ReactJS', 'ChakraUI', 'OpenAI API'],
            img: Proficio
        },
        {
            title: 'Resumate',
            description: 'OpenAI-based project that generates beautiful poems based on prompts.',
            tech: ['ReactJS', 'ChakraUI', 'OpenAI API'],
            img: Resumate
        },
    ]

    const onCardEnter = (index: number) => {
        setActive(index)
    }

    const onCardLeave = () => {
        setActive(-1)
    }

    const onProjectCardEnter = (index: number) => {
        setActiveProject(index)
    }

    const onProjectCardLeave = () => {
        setActiveProject(-1)
    }

    return (
        <>
            <div className='py-40 max-w-screen-xl px-12 m-auto flex gap-24 relative'>
                <div className='basis-4/12 h-fit flex flex-col sticky top-8'>
                    <h1 className='text-6xl w-fit text-transparent py-2 font-medium bg-clip-text bg-gradient-to-r from-text to-transparent-text'>Irakli Begoidze</h1>
                    <h2 className='text-3xl text-lightest font-light'>Senior Front-End Developer</h2>
                    <p className='text-xl pt-8 font-light text-lightest'>
                        In the summer of 2019, my coding journey began out of sheer boredom. Guided by a web developer friend, I swiftly acquired front-end skills and started creating basic projects. However, my hunger for knowledge grew, leading me to accumulate diverse experience with various technologies. I've worked in multiple companies, and I'm proud to have launched my own startup,
                        <span className='text-text font-medium'> Ancestral Whispers </span>.
                        <br />  <br />
                        Problem-solving fuels my passion for coding, providing me with the challenges I crave. During my free time, I... write even more code, the portfolio MUST grow. Other than that, I also indulge in reading about history and drawing maps.
                    </p>
                </div>
                <div className='basis-8/12 flex flex-col gap-48'>
                    <div className='flex flex-col gap-6'>
                        {jobData.map((exp, i) => {
                            let isActive = active === -1 ? true : active === i
                            return <ExperienceCard {...exp} active={isActive} onCardEnter={() => onCardEnter(i)} onCardLeave={onCardLeave} />
                        })}
                        <div className='group pt-4 cursor-pointer flex ps-12 items-center gap-2 justify-end'>
                            <p className=' text-2xl text-start font-light transition '>View Full Resume</p>
                            <TbArrowNarrowRight size={24} className='transition group-hover:translate-x-2' />
                        </div>
                        
                    </div>

                    <div className='flex flex-col gap-6'>
                        {projectData.map((project, i) => {
                            let isActive = activeProject === i
                            return <ProjectCard {...project} active={isActive} onCardEnter={() => onProjectCardEnter(i)} onCardLeave={onProjectCardLeave} />
                        })}
                    </div>
                </div>


            </div>
            <div className='w-full h-px bg-gradient-to-r from-transparent via-dark to-transparent '></div>
        </>
    )
}

export default Experience