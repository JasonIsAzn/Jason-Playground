import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    const [isHovered, setIsHovered] = useState(true);
    const [open, setOpen] = useState(false);

    return (
        <div id="section-contact" className='flex flex-col py-8 bg-[#F5F5F1]'>
            <div className="grid grid-cols-12">
                <p className='col-start-2 col-span-11 text-5xl md:text-6xl lg:text-7xl font-bold m-10'>Contact</p>

                {/* Contact Methods */}
                {!open && (
                    < div className="col-span-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-x-10 my-48 text-3xl font-semibold m-8">
                        <a href="mailto:jasonisazn@tamu.edu" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="https://www.linkedin.com/in/vjasonle/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/JasonIsAzn" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/thereal.jle/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                )}

                {/* Expanded Section */}
                {open && (
                    <div className='col-span-12 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center space-x-4 text-3xl font-semibold m-8'>
                        <div className='flex col-span-5 col-start-2 mt-24 md:text-4xl lg:text-4xl'>Test-Contact</div>
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