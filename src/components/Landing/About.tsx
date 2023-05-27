import { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

const About = () => {
    const [isHovered, setIsHovered] = useState(true); // button hover
    const [open, setOpen] = useState(false); // If expanded is open
    const [item, setItem] = useState(0); // item chosen in expanded section
    const [itemHovered, setItemHovered] = useState<number | null>(null); // item hover effect


    console.log("test", itemHovered)

    useEffect(() => {
        setItemHovered(null);
    }, [item])

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function resetItemHover(index: number) {
        setItem(index);
        await delay(20);
        setItemHovered(null);
    }

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <div id="section-about" className='p-2 h-full pb-24 bg-[#F5F5F5]'>
            <div className="grid grid-cols-12">
                {/* Title */}
                <div className="col-span-12 col-start-2 space-y-2 my-12 mb-24 text-5xl md:text-6xl lg:text-8xl">
                    <p className='font-bold '>Howdy,</p>
                    <p className='font-semibold'> It's nice to meet you. </p>
                </div>


                {/* Paragraph */}
                <div></div> {/* IT JUST WOKRS - CRIES */}

                <div className="col-span-10 col-start-2 space-y-8 text-2xl lg:col-span-5 md:text-4xl lg:text-4xl">
                    <p >I'm currently a student at <span className="text-[#500] font-semibold">Texas A&M</span> studying computer science. I'm working as a Teacher Assistant for engineering and computer science courses.</p>

                    <p> I learn by working on side projects with friends. I have a passion for software engineering, web development, and teaching. I'm currently learning app development, machine learning, and cyber security.</p>

                    <p> I enjoy listening to music, watching anime, and working out </p>

                </div>

                {/* Profile Image */}
                <div className="col-span-10 col-start-2 lg:col-span-7 flex justify-center items-center">
                    <div className="mt-16 w-[60%] sm:1/3 lg:mt-0 lg:w-1/2">
                        <img src={require("../../assets/profile.jpg")} alt="profile" className="rounded-full" />
                    </div>
                </div>

                {/* Expanded Section */}
                {open && (
                    <div className='col-span-11 col-start-2'>
                        <div className='col-start-2 flex justify-center items-center mt-48 md:text-4xl'>
                            <Menu as="div" className="relative  inline-block text-left">
                                <Menu.Button className="">
                                    <button
                                        className="flex items-center border-b border-black whitespace-nowrap bg-[#F5F5F5] px-6 pl-2 pb-2 pt-2.5 leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
                                        type="button"
                                        aria-expanded="false"
                                        data-te-ripple-init
                                        onClick={() => setItemHovered(null)}
                                    >
                                        <span className="mr-6 w-2 transform -scale-y-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className={item === 0 ? "" : "hidden"}>Pick a topic</span>
                                        <span className={item === 1 ? "" : "hidden"}>Anime</span>
                                        <span className={item === 2 ? "" : "hidden"}>Musician</span>
                                        <span className={item === 3 ? "" : "hidden"}>Gym</span>
                                    </button>
                                </Menu.Button>



                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="-top-2 transform -translate-y-full absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <div
                                                    className={classNames(
                                                        active ? 'cursor-pointer' : 'text-gray-700',
                                                        'flex justify-center items-center text-3xl px-4 py-2 ' + (item === 1 ? 'hidden' : '')
                                                    )}
                                                    onClick={() => resetItemHover(1)}
                                                    onMouseEnter={() => setItemHovered(0)}
                                                    onMouseLeave={() => setItemHovered(null)}
                                                >
                                                    Anime
                                                </div>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <div
                                                    className={classNames(
                                                        active ? 'cursor-pointer ' : 'text-gray-700',
                                                        'flex justify-center items-center text-3xl px-4 py-2 ' + (item === 2 ? 'hidden' : '')
                                                    )}
                                                    onClick={() => resetItemHover(2)}
                                                    onMouseEnter={() => setItemHovered(1)}
                                                    onMouseLeave={() => setItemHovered(null)}
                                                >
                                                    Musician
                                                </div>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <div
                                                    className={classNames(
                                                        active ? 'cursor-pointer' : 'text-gray-700',
                                                        'flex justify-center items-center text-3xl px-4 py-2 ' + (item === 3 ? 'hidden' : '')
                                                    )}
                                                    onClick={() => resetItemHover(3)}
                                                    onMouseEnter={() => setItemHovered(2)}
                                                    onMouseLeave={() => setItemHovered(null)}
                                                >
                                                    Gym
                                                </div>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({ active }) => (
                                                <div
                                                    className={classNames(
                                                        active ? 'cursor-pointer' : 'text-gray-700',
                                                        'flex justify-center items-center text-3xl px-4 py-2 ' + (item === 0 ? 'hidden' : '')
                                                    )}
                                                    onClick={() => resetItemHover(0)}
                                                    onMouseEnter={() => setItemHovered(null)}
                                                    onMouseLeave={() => setItemHovered(null)}
                                                >
                                                    Topics
                                                </div>
                                            )}
                                        </Menu.Item>


                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <span className={item === 0 ? "" : "hidden"}>about my personal interest</span>
                            <span className={item === 1 ? "" : "hidden"}>that I'm currently watching and enjoy.</span>
                            <span className={item === 2 ? "" : "hidden"}>that I'm obsessed with.</span>
                            <span className={item === 3 ? "" : "hidden"}>rats that inspire me.</span>
                        </div>

                        {/* Image Default Set */}
                        {(item === 0) && (
                            <div className='col-span-10 col-start-2 flex flex-col sm:flex-row justify-center items-center mt-24 space-y-8 sm:space-y-0 sm:space-x-16 mx-16 sm:mx-32 lg:mx-[250px]'>
                                <div className={"flex flex-wrap justify-center border border-4 rounded-full " + (itemHovered === 0 ? 'border-primary_yellow' : 'border-black hover:border-primary_yellow')}
                                    onClick={() => resetItemHover(1)}
                                >
                                    <div className='cursor-pointer'>
                                        <img src={require("../../assets/default_anime.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                </div>

                                <div className={"flex flex-wrap justify-center border border-4 rounded-full " + (itemHovered === 1 ? 'border-primary_yellow' : 'border-black hover:border-primary_yellow')}
                                    onClick={() => resetItemHover(2)}
                                >
                                    <div className='cursor-pointer'>
                                        <img src={require("../../assets/default_music.jpg")} alt="..." className=" rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                </div>


                                <div className={"flex flex-wrap justify-center border border-4 rounded-full " + (itemHovered === 2 ? 'border-primary_yellow' : 'border-black hover:border-primary_yellow')}
                                    onClick={() => resetItemHover(3)}
                                >
                                    <div className='cursor-pointer'>
                                        <img src={require("../../assets/default_gym.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                </div>


                            </div>
                        )}

                        {/* Image Anime Set */}
                        {(item === 1) && (
                            <div className='col-span-10 col-start-2 flex flex-row justify-center items-center mt-24 space-x-16 mx-[300px]'>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]">
                                    <div>
                                        <img src={require("../../assets/anime_0.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>One Piece</div>
                                </div>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]">
                                    <div>
                                        <img src={require("../../assets/anime_1.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Attack on Titan</div>
                                </div>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]">
                                    <div>
                                        <img src={require("../../assets/anime_2.png")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Demon Slayer</div>
                                </div>
                            </div>
                        )}

                        {/* Image Music Set */}
                        {(item === 2) && (
                            <div className='col-span-10 col-start-2 flex flex-row justify-center items-center mt-24 space-x-16 mx-[300px]'>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]"
                                    onClick={() => window.open("https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6?si=oHXLf14aRoalpId7U3U71w", "_blank")}
                                >
                                    <div>
                                        <img src={require("../../assets/artist_0.png")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Miley Cyrus</div>
                                </div>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]"
                                    onClick={() => window.open("https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH?si=CVdQ0FvpRuCc8D2G6a6gHw", "_blank")}
                                >
                                    <div>
                                        <img src={require("../../assets/artist_1.png")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Artic Monkey</div>

                                </div>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]"
                                    onClick={() => window.open("https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM?si=lH67jmlwTWGmj03LKKnUSA", "_blank")}

                                >
                                    <div>
                                        <img src={require("../../assets/artist_2.png")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Kali Uchis</div>

                                </div>
                            </div>
                        )}
                        {/* Image Gym Set */}
                        {(item === 3) && (
                            <div className='col-span-10 col-start-2 flex flex-row justify-center items-center mt-24 space-x-16 mx-[300px]'>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]"
                                    onClick={() => window.open("https://www.instagram.com/cbum/", "_blank")}
                                >
                                    <div>
                                        <img src={require("../../assets/gym_0.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Cbum</div>
                                </div>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]"
                                    onClick={() => window.open("https://www.instagram.com/noeldeyzel_bodybuilder/", "_blank")}

                                >
                                    <div>
                                        <img src={require("../../assets/gym_1.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Noel Deyzel</div>
                                </div>

                                <div className="flex flex-wrap justify-center rounded-full w-[300px] h-[300px]"
                                    onClick={() => window.open("https://www.instagram.com/jsrms_19/", "_blank")}
                                >
                                    <div>
                                        <img src={require("../../assets/gym_2.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none cursor-pointer" />
                                    </div>
                                    <div className='font-bold text-lg -mt-6 cursor-pointer'>Jesus Ramos</div>
                                </div>
                            </div>
                        )}


                    </div>
                )}

                {/* Button */}
                <div className={"col-span-2 flex justify-center items-center mt-16 cursor-pointer " + (open ? 'col-start-11' : 'col-start-9')}>
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
                                {open ? '-' : 'Learn more about me!'}
                            </div>
                        )}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About;