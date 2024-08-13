"use client"
import { useRef } from 'react'
import { useEffect, useState, Children } from 'react'
import { ChevronDown } from "lucide-react"
function LangWrapper({ children, locale }) {
    const [isOpen, setOpen] = useState(false)
    const butRef = useRef(null)
    const openCss = !isOpen ? 'opacity-0 translate-y-2 transition ease duration-300 transform pointer-events-none' : 'opacity-100 translate-y-0 transition ease duration-300 transform pointer-events-auto'
    useEffect(() => {
        const handleClick = (e) => {
            if (!butRef.current)
                return
            if (!butRef?.current?.contains(e.target)) {
                setOpen(false)
                return
            }
            setOpen(!isOpen)
        }
        document.addEventListener('click', handleClick, true)
        return () => document.removeEventListener('click', handleClick)
    }, [isOpen])
    return (
        <button ref={butRef} className="flex text-gray-400 rounded shadow-lg py-1 px-2 bg-transparent hover:bg-zinc-700 focus:outline-none justify-center items-center relative">

            <span className="block  h-[1rem] aspect-[4/3]  mr-1" style={{ backgroundImage: `url(/${locale}.svg)` }}></span>  <ChevronDown size={20} />
            < div className={`bg-gray-900 bgh-gray-700 shadow-md rounded text-sm absolute mt-12 top-0 right-0 min-w-full w-48 z-30 $ ${openCss}`} >
                <span className="absolute top-0 right-0 w-3 h-3 bg-gray-900 transform rotate-45 -mt-1 mr-3"></span>
                <div className="bg-gray-900 overflow-auto rounded w-full relative z-10">
                    <ul className="list-reset">
                        {children}
                    </ul>
                </div>
            </div>
        </button>
    )
}

export default LangWrapper
