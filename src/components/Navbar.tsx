import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';
import './underline.css'

const Navbar = () => {
    const navlinks = [
        { title: "About", path: "/#section-about" },
        { title: "Projects", path: "/#section-projects" },
        { title: "Resume", path: "/#section-resume" },
        { title: "Contact", path: "/#section-contact" }
    ]

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div id="section-navbar" className="sticky top-0 z-50">
            <div className="bg-grey-yellow-5">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 items-center justify-center h-14">

                        <div className="ml-4 flex items-center hidden md:block">
                            <a href="/" className="text-white ">
                                {/* LOGO */}
                            </a>
                        </div>

                        <div className="flex items-baseline justify-center cursor-pointer"
                        >
                            <HashLink smooth to="/#" className='mt-4 sm:mt-0 sm:-ml-14 text-2xl md:text-3xl text-white font-semibold font-mono'>
                                JASON LE
                            </HashLink>
                        </div>

                        <div className="md:hidden"></div>

                        {/* NavLinks */}
                        <div className="hidden sm:block ">
                            <div className="flex justify-end items-baseline space-x-4 text-white">
                                {navlinks.map((link, index) => (
                                    <HashLink smooth to={link.path}>
                                        <span className="text-xl leading-tightlink link-underline link-underline-black hover:text-[#F2F3F5]"> {link.title} </span>
                                    </HashLink>

                                ))}
                            </div>
                        </div>

                        {/* Nav Mobile Menu */}

                        <div className="mr-1 flex justify-end sm:hidden">
                            <button
                                type="button"
                                onClick={handleMenu}
                                className="inline-flex text-white i tems-center p-2 rounded-md text-grey-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                                <span className='sr-only'>Open Main Menu</span>
                                <span className='flex justify-center items-center'>{open === true ? <FaTimes /> : <FaBars />}</span>

                            </button>
                        </div>
                        {open ? (
                            <div
                                className='col-span-3 sm:hidden'
                            >
                                <div className="pt-6 flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-grey-yellow-5 w-full"
                                    onClick={() => setOpen(false)}
                                >
                                    {navlinks.map((link, index) => (
                                        <HashLink smooth to={link.path}>
                                            <span className="ml-4 xs:ml-10 text-xl leading-tightlink link-underline link-underline-black text-white hover:text-[#F2F3F5]"> {link.title} </span>
                                        </HashLink>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                    </div>
                </div>
            </ div>
            {/* </Transition> */}
        </div>
    )
}

export default Navbar;