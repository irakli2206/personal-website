import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import Stack from '../components/Stack'

const Home = () => {
    const [cursor, setCursor] = useState<any>({ x: 0, y: 0 })
    let cursorRef = useRef(null) as MutableRefObject<HTMLDivElement | null>

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let x = e.pageX
            let y = e.pageY
            setCursor({ x: x, y: y })
            //  if(cursorRef) cursorRef.current?.setAttribute('style', `background: radial-gradient(600px at ${x}px ${y}px, red, transparent)`)
        })
    }, [])


    return (
        <>

            <Header />
            <Hero />
            <Stack />
            <Experience />
            <GetInTouch />
            <Footer />

            {/* <div ref={cursorRef} className='pointer-events-none fixed inset-0 z-10 transition duration-300 absolute'
          style={{ background: `radial-gradient(400px at ${cursor.x}px ${cursor.y}px, rgba(39, 39, 42, 1) 0%,rgba(39, 39, 42, 0) 80% )` }}
        ></div> */}
        </>
    )
}

export default Home