import React, { useState } from 'react'
import { SiChakraui, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiMui, SiTailwindcss, SiSupabase, SiFigma } from 'react-icons/si'


const Stack = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className=' border-t-2 border-b-2 border-primary w-full bg-dark shadow-stack relative'>
            <div className='rounded bg-darkest border border-primary flex gap-12 absolute py-4 px-8 text-2xl text-lightest -translate-y-1/2 right-64'>
                <p className={`transition cursor-pointer ${activeTab == 0 && 'text-text'}`} onClick={() => setActiveTab(0)}>Main Stack</p>
                <p className={`transition cursor-pointer ${activeTab == 1 && 'text-text'}`} onClick={() => setActiveTab(1)}>Worked With</p>
            </div>
            <div className='max-w-screen-xl flex flex-wrap justify-evenly gap-32  text-lightest py-24  m-auto 
                    [&>*]:w-32 [&>*]:h-32 [&>*]:mx-16' >
                <SiTypescript style='' />
                <SiReact />
                <SiNextdotjs />
                <SiTailwindcss />
                <SiChakraui />
                <SiSupabase />
                <SiFigma />
            </div>
        </div>
    )
}

export default Stack