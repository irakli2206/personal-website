import React from 'react'

type Props = {
    style?: string
    children: JSX.Element | JSX.Element[] | string
    icon?: JSX.Element
}

const Button = ({ style, children, icon }: Props) => {
    return (
        <button className={`${style} group rounded border-solid border-light border px-28 py-4 tracking-widest text-xl flex gap-4 shadow-button
        bg-gradient-to-b from-dark/50 to-dark/0
        hover:shadow-inner transition active:scale-95
        `}>
            {children}
            <span className='transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                {icon}
            </span>
        </button>
    )
}

export default Button