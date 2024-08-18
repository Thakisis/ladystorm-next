"use client"
import { useState, useEffect } from 'react'

function OfferCardClient({ children, className }) {
    const [OutHandler, setOutHandler] = useState(null)
    const [Mouse, setMouse] = useState({ width: 0, height: 0, mouseX: 0, mouseY: 0 })
    const MouseMove = (e) => {

        const parent = e.target.parentElement
        const width = parent.offsetWidth
        const height = parent.offsetHeight
        const offsetLeft = parent.offsetLeft
        const offsetTop = parent.offsetTop
        const PX = (e.pageX - offsetLeft - width / 2) / width
        const PY = (e.pageY - offsetTop - height / 2) / height

        const transform = `rotateY(${PX * 30}deg) rotateX(${PY * -30}deg)`
        const transition = "1s cubic-bezier(0.23, 1, 0.32, 1)"
        e.target.style.transform = transform
        e.target.style.transition = transition
        const bg = e.target.querySelector('span')
        const transformBG = `translateX(${PX * -50}px) translateY(${PY * -50}px)`
        bg.style.transform = transformBG
        bg.style.transition = transition


    }
    const handleMouseEnter = () => {
        clearTimeout(OutHandler)
    }
    const handleMouseLeave = (e) => {

        const outTimeOut = setTimeout(() => {

            const transform = `rotateY(0deg) rotateX(0deg)`
            e.target.style.transform = transform

        }, 1000)
        setOutHandler(outTimeOut)
    }

    return (
        <div className={className}
            onMouseMove={MouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='pointer-events-none'>
                {children}
            </div>
        </div>
    )
}

export default OfferCardClient
