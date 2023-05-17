import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import React, { useState } from 'react'
import { SiChakraui, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiMui, SiTailwindcss, SiSupabase, SiFigma } from 'react-icons/si'


const Stack = () => {
    const [activeTab, setActiveTab] = useState(0)

    const mainControls = useAnimationControls()
    const workedControls = useAnimationControls()

    return (
        <div className=' border-t-2 border-b-2 border-primary transition w-full bg-dark shadow-stack relative'>
            <div className='rounded bg-darkest border border-primary flex gap-12 absolute py-4 px-8 text-2xl text-lightest -translate-y-1/2 right-64 z-30'>
                <p className={`transition cursor-pointer ${activeTab == 0 && 'text-text'}`} onClick={() => setActiveTab(0)}>Main Stack</p>
                <p className={`transition cursor-pointer ${activeTab == 1 && 'text-text'}`} onClick={() => setActiveTab(1)}>Worked With</p>
            </div>
            <AnimatePresence mode='popLayout'>
                {activeTab == 0 ?

                    <motion.div
                        key={0}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2}}}
                        className={`max-w-screen-xl flex flex-wrap justify-evenly gap-32  text-lightest py-24  m-auto 
                    [&>*]:w-32 [&>*]:h-32 [&>*]:mx-16`} >
                        <SiTypescript style='' />
                        <SiReact />
                        <SiNextdotjs />
                        <SiTailwindcss />
                        <SiChakraui />
                        <SiSupabase />
                        <SiFigma />
                    </motion.div>

                    :
                    <motion.div
                        key={1}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2}}}
                        className={`max-w-screen-xl flex flex-wrap justify-evenly gap-32  text-lightest py-24  m-auto 
                [&>*]:w-32 [&>*]:h-32 [&>*]:mx-16`} >
                        <SiNodedotjs style='' />
                        <SiNestjs />
                        <SiMui />

                    </motion.div>
                }
            </AnimatePresence>

        </div>
    )
}

export default Stack