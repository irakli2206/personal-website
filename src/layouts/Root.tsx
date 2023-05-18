import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>

            <main className='bg-darkest  min-h-screen text-text flex justify-center a:hover:dark '
            >
                <div className='flex-1 relative z-20' >
                    {/* <Header /> */}
                    <Outlet />
                </div>

            </main>

        </>
    )
}

export default Root