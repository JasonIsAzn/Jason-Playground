import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    const [isHovered, setIsHovered] = useState(true);
    const [open, setOpen] = useState(false);
    const [over, setOver] = useState<number | null>(null);

    return (
        <div id="section-contact" className='flex flex-col py-8 bg-[#F5F5F1]'>
            <div className="grid grid-cols-12">
                <p className='col-start-2 col-span-11 text-5xl md:text-6xl lg:text-7xl font-bold m-10'>Contact</p>

                {/* Contact Methods */}
                {!open && (
                    < div className="col-span-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-x-10 my-48 text-3xl font-semibold m-8">
                        <button
                            className='flex hover:lg:text-4xl'
                            onMouseOver={() => setOver(0)}
                            onMouseLeave={() => setOver(null)}
                        >
                            <a
                                href="mailto:jasonisazn@tamu.edu"
                                rel="noreferrer"
                                target="_blank"
                                className='space-x-4'>
                                <FontAwesomeIcon size={over === 0 ? "lg" : "1x"}
                                    icon={faEnvelope} />


                            </a>
                        </button>


                        <button
                            className='flex hover:lg:text-4xl'
                            onMouseOver={() => setOver(1)}
                            onMouseLeave={() => setOver(null)}
                        >
                            <a
                                href="https://www.linkedin.com/in/vjasonle/"
                                rel="noreferrer"
                                target="_blank"
                                className='space-x-4'>
                                <FontAwesomeIcon size={over === 1 ? "lg" : "1x"}
                                    icon={faLinkedinIn} />
                            </a>
                        </button>
                        <button
                            className='flex hover:lg:text-4xl'
                            onMouseOver={() => setOver(2)}
                            onMouseLeave={() => setOver(null)}
                        >
                            <a
                                href="https://github.com/JasonIsAzn"
                                rel="noreferrer"
                                target="_blank"
                                className='space-x-4'>
                                <FontAwesomeIcon size={over === 2 ? "lg" : "1x"}
                                    icon={faGithub} />
                            </a>
                        </button>

                        <button
                            className='flex hover:lg:text-4xl'
                            onMouseOver={() => setOver(3)}
                            onMouseLeave={() => setOver(null)}
                        >
                            <a
                                href="https://www.instagram.com/thereal.jle/"
                                rel="noreferrer"
                                target="_blank"
                                className='space-x-4'>
                                <FontAwesomeIcon size={over === 3 ? "lg" : "1x"}
                                    icon={faInstagram} />
                            </a>
                        </button>
                    </div>
                )}

                {/* Expanded Section */}
                {open && (
                    <div className='col-start-3 sm:col-start-4 col-span-2 my-8 mb-0 sm:mb-8'>
                        <div className='my-12 text-2xl sm:text-xl md:text-2xl lg:text-3xl'>
                            <div className='flex flex-col space-y-4'>
                                <button
                                    className='flex hover:lg:text-4xl'
                                    onMouseOver={() => setOver(0)}
                                    onMouseLeave={() => setOver(null)}
                                >
                                    <a
                                        href="mailto:jasonisazn@tamu.edu"
                                        rel="noreferrer"
                                        target="_blank"
                                        className='space-x-4'>
                                        <FontAwesomeIcon size={over === 0 ? "lg" : "1x"}
                                            icon={faEnvelope} />
                                        <span className='text'>Email</span>

                                    </a>
                                </button>
                                <button
                                    className='flex hover:lg:text-4xl'
                                    onMouseOver={() => setOver(1)}
                                    onMouseLeave={() => setOver(null)}
                                >
                                    <a
                                        href="https://www.linkedin.com/in/vjasonle/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className='space-x-4'>
                                        <FontAwesomeIcon size={over === 1 ? "lg" : "1x"}
                                            icon={faLinkedinIn} />
                                        <span className='text'>Linkedin</span>

                                    </a>
                                </button>
                                <button
                                    className='flex hover:lg:text-4xl'
                                    onMouseOver={() => setOver(2)}
                                    onMouseLeave={() => setOver(null)}
                                >
                                    <a
                                        href="https://github.com/JasonIsAzn"
                                        rel="noreferrer"
                                        target="_blank"
                                        className='space-x-4'>
                                        <FontAwesomeIcon size={over === 2 ? "lg" : "1x"}
                                            icon={faGithub} />
                                        <span className='text'>GitHub</span>

                                    </a>
                                </button>

                                <button
                                    className='flex hover:lg:text-4xl'
                                    onMouseOver={() => setOver(3)}
                                    onMouseLeave={() => setOver(null)}
                                >
                                    <a
                                        href="https://www.instagram.com/thereal.jle/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className='space-x-4'>
                                        <FontAwesomeIcon size={over === 3 ? "lg" : "1x"}
                                            icon={faInstagram} />
                                        <span className='text'>Instagram</span>

                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {open && (
                    <div className='col-span-12 sm:col-span-6 sm:border-l border-black flex items-center justify-center sm:pl-12 md:justify-start md:pl-24 lg:pl-48 ml-6 md:ml-0'>
                        <div className="flex items-center justify-start border-t sm:border-t-0 border-black pt-14">
                            <div className="mx-6 sm:mx-0 w-full max-w-lg">
                                <h1 className="text-4xl font-medium">Email Me </h1>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    className="mt-10">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="relative z-0">
                                            <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary_yellow-dark focus:outline-none focus:ring-0" placeholder=" " />
                                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary_yellow-dark peer-focus:dark:text-primary_yellow-dark">Your name</label>
                                        </div>
                                        <div className="relative z-0">
                                            <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary_yellow-dark focus:outline-none focus:ring-0" placeholder=" " />
                                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary_yellow-dark peer-focus:dark:text-primary_yellow-dark">Your email</label>
                                        </div>
                                        <div className="relative z-0 col-span-2">
                                            <textarea name="message" rows={5} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary_yellow-dark focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary_yellow-dark peer-focus:dark:text-primary_yellow-dark">Your message</label>
                                        </div>
                                    </div>
                                    <button
                                        className="mt-5 rounded-md bg-black px-10 py-2 text-white"
                                        onClick={() => alert("This feature is currently under development. Please reach out directly via my other contact methods.")}
                                    >
                                        Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>

                )}

                {/* Button */}
                <div className="col-start-11 col-span-2 flex justify-center items-center mt-16 mr-16 cursor-pointer">
                    <div className={"flex justify-center items-center w-12 h-12 rounded-full bg-grey-yellow-5 transition-width duration-200 " + (open ? '' : 'hover:w-52 hover:x-2 hover:sm:w-64')}
                        onMouseEnter={() => setIsHovered(false)}
                        onMouseLeave={() => setIsHovered(true)}
                        onClick={() => setOpen(!open)}
                    >
                        {isHovered ? (
                            <div className='text-white font-semibold'>
                                {open ? '-' : '+'}
                            </div>
                        ) : (
                            <div className='flex overflow-hidden whitespace-nowrap text-white text-lg cursor-pointer'>
                                {open ? '-' : 'Feel free to reach out!'}
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Contact;