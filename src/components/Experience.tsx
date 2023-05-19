import React, { useEffect, useRef, useState } from 'react'
import ExperienceCard from './ExperienceCard'
import { Job, Project } from '../types'
import { TbArrowNarrowRight } from 'react-icons/tb'
import KTP from '../assets/projects/KTP.svg'
import Poemo from '../assets/projects/Poemo.svg'
import Proficio from '../assets/projects/Proficio.svg'
import Resumate from '../assets/projects/Resumate.svg'
import ProjectCard from './ProjectCard'
import { AnimatePresence, motion, useAnimationControls, useInView } from 'framer-motion'
import { textAnimation } from '../util'
import { Link } from 'react-router-dom'

const Experience = () => {
    let [active, setActive] = useState(-1)
    let [activeProject, setActiveProject] = useState(-1)

    let [workTitle, setWorkTitle] = useState(0)

    let jobData: Job[] = [
        {
            company: 'Convo-Agency',
            description: 'Lead 3-person team, organize standups, gather updates, provide feedback. Drive tech stack decisions, coordinate with PM. Tackle high-priority, complex tasks.',
            location: 'Remote (Short-Term Contract)',
            period: '2023',
            role: 'Lead Frontend Developer',
            tech: ['NextJS', 'GraphQL', 'ShopifyAPI', 'Javascript', 'Formik', 'Yup'],
            url: 'https://convo-agency.co.il/'
        },
        {
            company: 'Conso4s',
            description: 'Joined international team, contributed to ReactJS/React Native apps. Collaborated closely with friendly team. Enhanced UX, optimized performance, reviewed code. Effective communication, updated practices, delivered efficient code.',
            location: 'Tbilisi, Georgia (Hybrid)',
            period: '2021-2022',
            role: 'Middle ReactJS/React Native Developer',
            tech: ['ReactJS', 'React Native', 'Typescript', 'Vercel CI/CD', 'Redux Toolkit'],
            url: 'https://conso4s.com/'
        },
        {
            company: 'Ancestral Whispers',
            description: 'Transformed a hobby-based project into a thriving startup by building a compact team and offering unique services. Dedicated efforts in optimizing the website while fearlessly experimenting with cutting-edge technologies to drive innovation and achieve outstanding results.',
            location: 'Tbilisi, Georgia',
            period: '2021',
            role: 'Founder & Developer',
            tech: ['NextJS', 'Typescript', 'ChakraUI', 'Supabase', 'Cloudinary', 'Mapbox'],
            url: 'https://www.ancestralwhispers.org/'
        },
        {
            company: 'Comas Digital PLC',
            description: "Did basic UI design in Figma. Customized MaterialUI components based on project's requirements. Added multiple information display pages, optimized performance and maintained code. Implemented Strapi CMS.",
            location: 'Remote',
            period: '2019-2021',
            role: 'Junior ReactJS Developer',
            tech: ['ReactJS', 'Javascript', 'MaterialUI', 'Figma', 'Strapi'],
            url: 'https://comasdigital.hk/'
        },
    ]

    let projectData: Project[] = [
        {
            title: 'Poemo',
            description: 'OpenAI-based project that generates beautiful poems based on prompts.',
            tech: ['ReactJS', 'ChakraUI', 'OpenAI API'],
            img: Poemo,
            url: 'https://poem-generator-six.vercel.app/'
        },
        {
            title: 'KTP',
            description: 'Linguistics and toponymy project explaining the etymologies of various placenames in Georgia and the surrounding areas',
            tech: ['ReactJS', 'ChakraUI', 'Mapbox'],
            img: KTP,
            url: 'https://kartvelian-toponymy-project.vercel.app/'
        },
        {
            title: 'Proficio',
            description: 'Fake website offering website deveopment and UI design services.',
            tech: ['ReactJS', 'MaterialUI'],
            img: Proficio,
            url: 'https://www.proficio.design/'
        },
        {
            title: 'Resumate (Unfinished)',
            description: `Initially meant to be a real project that serves to analyze resumes using OpenAI's API. Eventually realized that the costs would be way too high to 
            generate profit, so I had to abandon the project`,
            tech: ['ReactJS', 'NextUI', 'OpenAI API', 'React-PDF'],
            img: Resumate,
            url: 'https://resumate.vercel.app/'
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

    useEffect(() => {
        setTimeout(() => {
            setWorkTitle(prev => {
                if (prev == 0) return 1
                if (prev == 1) return 2
                if (prev == 2) return 3
                else return 0
            })
        }, 2500)
    }, [workTitle])

    let getWorkTitle = () => {
        switch (workTitle) {
            case (0):
                return <motion.h2 key={0} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { mass: 0.2 } }} exit={{ opacity: 0, x: 20 }} className='text-3xl text-lightest font-light'>Senior Front-End Developer</motion.h2>
            case (1):
                return <motion.h2 key={1} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { mass: 0.2 } }} exit={{ opacity: 0, x: 20 }} className='text-3xl text-lightest font-light'>UI Designer</motion.h2>
            case (2):
                return <motion.h2 key={2} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { mass: 0.2 } }} exit={{ opacity: 0, x: 20 }} className='text-3xl text-lightest font-light'>Deadline Respecter</motion.h2>
            case (3):
                return <motion.h2 key={3} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: { mass: 0.2 } }} exit={{ opacity: 0, x: 20 }} className='text-3xl text-lightest font-light'>Bugfix Enjoyer</motion.h2>

        }
    }

    return (
        <>
            <div className='py-40 max-w-screen-xl px-4 lg:px-12 m-auto flex flex-col lg:flex-row gap-24 relative'>
                <div className='lg:basis-4/12 h-fit flex flex-col lg:sticky top-8'>
                    <motion.h1
                        {...textAnimation(0)}
                        className='text-6xl w-fit text-transparent py-2 font-medium bg-clip-text bg-gradient-to-r from-text to-transparent-text'>Irakli Begoidze  </motion.h1>
                    <div >
                        <AnimatePresence mode='popLayout'>
                            {getWorkTitle()}

                        </AnimatePresence>
                    </div>
                    <motion.p
                        {...textAnimation(0.15)}
                        className='text-xl pt-8 font-light text-lightest'>
                        In the summer of 2019, my coding journey began out of sheer boredom. Guided by a web developer friend, I swiftly acquired front-end skills and started creating basic projects. However, my hunger for knowledge grew, leading me to accumulate diverse experience with various technologies. I've worked in multiple companies, and I'm proud to have launched my own startup,
                        <a href='https://www.ancestralwhispers.org/' target='_blank' className='text-text font-medium'> Ancestral Whispers </a>.
                        <br />  <br />
                        Problem-solving fuels my passion for coding, providing me with the challenges I crave. During my free time, I... write even more code, the portfolio MUST grow. Other than that, I also indulge in reading about history and drawing maps.
                    </motion.p>
                </div>
                <div className='lg:basis-8/12 flex flex-col gap-48'>
                    <div className='flex flex-col gap-6' >
                        {/* <h1 className='text-5xl font-medium ml-auto'>Experience</h1> */}

                        {jobData.map((exp, i) => {
                            // let isActive = active === -1 ? true : active === i
                            return <ExperienceCard {...exp} index={i} activeIndex={active} onCardEnter={() => onCardEnter(i)} onCardLeave={onCardLeave} />
                        })}
                        <Link to='/resume' className='group pt-4 cursor-pointer flex ps-12 items-center gap-2 justify-end'>
                            <p className='text-xl md:text-2xl text-start font-light transition '>View Full Resume</p>
                            <TbArrowNarrowRight size={24} className='transition group-hover:translate-x-2' />
                        </Link>

                    </div>

                    <div className='flex flex-col gap-6'>
                        {projectData.map((project, i) => {
                            let isActive = activeProject === i
                            return <ProjectCard {...project} active={isActive} custom={i} onCardEnter={() => onProjectCardEnter(i)} onCardLeave={onProjectCardLeave} />
                        })}
                    </div>
                </div>


            </div>
            <div className='w-full h-px bg-gradient-to-r from-transparent via-dark to-transparent '></div>
        </>
    )
}

export default Experience