import React from 'react'
import { TbArrowBack } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
import ResumePDF from '../assets/Irakli Begoidze CV.pdf'

const Resume = () => {
    const navigate = useNavigate()

    return (
        <div className='h-full flex flex-col'>
            <Link
                to='/'
                className='px-12 text-2xl my-6 font-light flex gap-2 items-center cursor-pointer transition text-lightest w-fit hover:text-text'><TbArrowBack size={24} /> Go Back
            </Link>
            <object
                data={ResumePDF}
                type="application/pdf"
                className='h-full w-full basis-full'
                // style={{ height: 'calc(100vh - 43px)' }}
                aria-label="This object displays an PDF file"
            />
        </div>
    )
}

export default Resume