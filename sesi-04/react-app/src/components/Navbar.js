import { useState } from "react"

function Navbar(){
    const [ isOpen, setIsOpen ] = useState(false)
    return(
            <div className="bg-gradient-to-br from-rose-500 to-pink-500">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b border-rose-400 lg:border-b-0">
                        <div>
                            <a href="#" className="font-semibold text-white">QTemu</a>
                        </div>
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-white block lg:hidden">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path className={! isOpen ?'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block': 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}>
                        <div className="flex flex-col lg:flex-row">
                            <a href="#" className="block px-4 py-3 lg:py-2 text-rose-200 hover:text-white">Create Meetup</a>
                            <a href="#" className="block px-4 py-3 lg:py-2 text-rose-200 hover:text-white">Explore</a>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <a href="#" className="block px-4 py-3 lg:py-2 text-rose-200 hover:text-white">Login</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Navbar