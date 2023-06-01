import { useState, useContext, useRef } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Ripple, initTE } from "tw-elements";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import GlobalContext from "../../context/GlobalContext";

initTE({ Ripple });

const About = () => {
    const responsive = {
        0: { items: 1 },
        700: { items: 2 },
        1024: { items: 3 },
    };

    let anime_items = [
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://myanimelist.net/animelist/Jason_LV", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img id="image" alt="anime 0" src={require("../../assets/anime_0.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>One Piece</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://myanimelist.net/animelist/Jason_LV", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="anime 1" src={require("../../assets/anime_1.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Attack on Titan</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://myanimelist.net/animelist/Jason_LV", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="anime 2" src={require("../../assets/anime_2.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Demon Slayer</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://myanimelist.net/animelist/Jason_LV", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="anime 3" src={require("../../assets/anime_3.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Steins;Gate</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
        transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://myanimelist.net/animelist/Jason_LV", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="anime 4" src={require("../../assets/anime_4.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>JoJo's Bizarre Adventure</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://myanimelist.net/animelist/Jason_LV", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="anime 5" src={require("../../assets/anime_5.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Naruto</p>
            </div>
        </div>,
    ];

    const artist_items = [
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6?si=oHXLf14aRoalpId7U3U71w", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="artist 0" src={require("../../assets/artist_0.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Miley Cyrus</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH?si=CVdQ0FvpRuCc8D2G6a6gHw", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="artist 1" src={require("../../assets/artist_1.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Artic Monkey</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM?si=lH67jmlwTWGmj03LKKnUSA", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="artist 2" src={require("../../assets/artist_2.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Kali Uchis</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="artist 3" src={require("../../assets/artist_3.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Eminem</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="artist 4" src={require("../../assets/artist_4.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Lana Del Rey</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="artist 5" src={require("../../assets/artist_5.png")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Joji</p>
            </div>
        </div>,
    ];

    const gym_items = [
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/cbum/", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="gym 0" src={require("../../assets/gym_0.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Cbum</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/noeldeyzel_bodybuilder/", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="gym 1" src={require("../../assets/gym_1.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'> Noel Deyzel</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
            transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("https://www.instagram.com/jsrms_19/", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="gym 2" src={require("../../assets/gym_2.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>Jesus Ramos</p>
            </div>
        </div>,

        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="gym 3" src={require("../../assets/gym_0.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>gym 3</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("", "_blank")}

        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="gym 4" src={require("../../assets/gym_0.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>gym 4</p>
            </div>
        </div>,
        <div
            className="flex flex-col justify-center items-center bg-grey-yellow-5 bg-opacity-70 rounded-xl py-[90px] xs:py-[170px] sm:py-[180px] px-4 mx-4
    transform transition duration-500 scale-95 hover:scale-100 hover:bg-opacity-90 cursor-pointer"
            onClick={() => window.open("", "_blank")}
        >
            <div className="flex flex-col items-center justify-center h-48 mx-5">
                <img alt="gym 5" src={require("../../assets/gym_0.jpg")}></img>
                <p className='font-bold mt-8 text-white text-xl'>gym 5</p>
            </div>
        </div>,
    ];

    const [isHovered, setIsHovered] = useState(false);
    const [item, setItem] = useState(0);
    const [itemHovered, setItemHovered] = useState<number | null>(null);
    const globalContext = useContext(GlobalContext);

    function isMobiletDevice(): boolean {
        const userAgent: string = navigator.userAgent;

        const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        return isMobile ? true : false;
    }

    var collapseRef = useRef<null | HTMLDivElement>(null);
    var expandRef = useRef<null | HTMLDivElement>(null);

    function collapseSection() {
        globalContext.setAboutOpen(!globalContext.aboutOpen);
        if (!globalContext.aboutOpen) {
            expandRef!.current!.scrollIntoView();
        } else {
            collapseRef!.current!.scrollIntoView();
        }
    }

    function onMouseHover(hover: boolean) {
        if (isMobiletDevice()) {
            return;
        }
        setIsHovered(hover);
    }

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

    const [anime_activeIndex, anime_setActiveIndex] = useState(0);
    const [animeitems] = useState(anime_items);

    const anime_slidePrev = () => {
        if (anime_activeIndex === 0) return;
        anime_setActiveIndex(anime_activeIndex - 1);
    }
    const anime_slideNext = () => {
        let offset = 1;
        if (window.innerWidth >= 1024) {
            offset = 3;
        } else if (window.innerWidth > 640) {
            offset = 2;
        }
        if (anime_activeIndex === animeitems.length - offset) return;
        anime_setActiveIndex(anime_activeIndex + 1);
    }

    const anime_onArrowHover = (direction: string) => {
        const arrow = document.getElementById(`${direction}-arrow`);
        if (arrow != null) {
            if (direction === 'left') {
                console.log(anime_activeIndex)
                if (anime_activeIndex === 0) return;
                arrow.setAttribute('class', arrow.className.replace('border-r-white', 'border-r-primary_yellow'))
            } else {
                console.log(anime_activeIndex)
                if (anime_activeIndex === animeitems.length - 3) return;
                arrow.setAttribute('class', arrow.className.replace('border-l-white', 'border-l-primary_yellow'))
            }
        }
    }

    const anime_offArrowHover = (direction: string) => {
        const arrow = document.getElementById(`${direction}-arrow`);
        if (arrow != null) {
            if (direction === 'left') {
                arrow.setAttribute('class', arrow.className.replace('border-r-primary_yellow', 'border-r-white'))
            } else {
                arrow.setAttribute('class', arrow.className.replace('border-l-primary_yellow', 'border-l-white'))
            }
        }
    }

    const anime_syncActiveIndex = ({ item }: any) => anime_setActiveIndex(item);


    const [music_activeIndex, music_setActiveIndex] = useState(0);
    const [musicitems] = useState(artist_items);

    const music_slidePrev = () => {
        if (music_activeIndex === 0) return;
        music_setActiveIndex(music_activeIndex - 1);
    }
    const music_slideNext = () => {
        let offset = 1;
        if (window.innerWidth >= 1024) {
            offset = 3;
        } else if (window.innerWidth > 640) {
            offset = 2;
        }
        if (music_activeIndex === musicitems.length - offset) return;
        music_setActiveIndex(music_activeIndex + 1);
    }

    const music_onArrowHover = (direction: string) => {
        const arrow = document.getElementById(`${direction}-arrow`);
        if (arrow != null) {
            if (direction === 'left') {
                console.log(music_activeIndex)
                if (music_activeIndex === 0) return;
                arrow.setAttribute('class', arrow.className.replace('border-r-white', 'border-r-primary_yellow'))
            } else {
                console.log(music_activeIndex)
                if (music_activeIndex === musicitems.length - 3) return;
                arrow.setAttribute('class', arrow.className.replace('border-l-white', 'border-l-primary_yellow'))
            }
        }
    }

    const music_offArrowHover = (direction: string) => {
        const arrow = document.getElementById(`${direction}-arrow`);
        if (arrow != null) {
            if (direction === 'left') {
                arrow.setAttribute('class', arrow.className.replace('border-r-primary_yellow', 'border-r-white'))
            } else {
                arrow.setAttribute('class', arrow.className.replace('border-l-primary_yellow', 'border-l-white'))
            }
        }
    }

    const music_syncActiveIndex = ({ item }: any) => music_setActiveIndex(item);


    const [gym_activeIndex, gym_setActiveIndex] = useState(0);
    const [gymitems] = useState(gym_items);

    const gym_slidePrev = () => {
        if (gym_activeIndex === 0) return;
        gym_setActiveIndex(gym_activeIndex - 1);
    }
    const gym_slideNext = () => {
        let offset = 1;
        if (window.innerWidth >= 1024) {
            offset = 3;
        } else if (window.innerWidth > 640) {
            offset = 2;
        }
        if (gym_activeIndex === gymitems.length - offset) return;
        gym_setActiveIndex(gym_activeIndex + 1);
    }

    const gym_onArrowHover = (direction: string) => {
        const arrow = document.getElementById(`${direction}-arrow`);
        if (arrow != null) {
            if (direction === 'left') {
                console.log(gym_activeIndex)
                if (gym_activeIndex === 0) return;
                arrow.setAttribute('class', arrow.className.replace('border-r-white', 'border-r-primary_yellow'))
            } else {
                console.log(gym_activeIndex)
                if (gym_activeIndex === gymitems.length - 3) return;
                arrow.setAttribute('class', arrow.className.replace('border-l-white', 'border-l-primary_yellow'))
            }
        }
    }

    const gym_offArrowHover = (direction: string) => {
        const arrow = document.getElementById(`${direction}-arrow`);
        if (arrow != null) {
            if (direction === 'left') {
                arrow.setAttribute('class', arrow.className.replace('border-r-primary_yellow', 'border-r-white'))
            } else {
                arrow.setAttribute('class', arrow.className.replace('border-l-primary_yellow', 'border-l-white'))
            }
        }
    }

    const gym_syncActiveIndex = ({ item }: any) => gym_setActiveIndex(item);




    return (
        <div id="section-about" className='p-2 h-full pb-24 bg-[#F5F5F5]'>
            <div className="grid grid-cols-12">
                {/* Title */}
                <div className="col-span-12 col-start-2 space-y-2 my-12 mb-24 text-5xl md:text-6xl lg:text-8xl"
                    ref={collapseRef}>
                    <p className='font-bold '>Howdy,</p>
                    <p className='font-semibold'> It's nice to meet you. </p>
                </div>


                {/* Paragraph */}
                <div></div> {/* IT JUST WOKRS - CRIES */}

                <div className="col-span-10 col-start-2 space-y-8 lg:col-span-5 text-2xl md:text-4xl lg:text-4xl">
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
                <div className="my-2 invisible" >_</div>
                <div className="invisible" ref={expandRef}>_</div>

                {/* Expanded Section */}
                {globalContext.aboutOpen && (
                    <div className='col-span-11 col-start-2'>
                        <div className='col-start-2 flex justify-center items-center mt-48 md:text-4xl'>
                            <Menu as="div" className="relative  inline-block text-left">
                                <Menu.Button className=""
                                >
                                    <button
                                        className="flex items-center border-b border-black whitespace-nowrap bg-[#F5F5F5] px-6 pl-2 pb-2 pt-2.5 leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
                                        type="button"
                                        aria-expanded="false"
                                        data-te-ripple-init
                                        onClick={() => setItemHovered(null)}

                                    >
                                        <span className="mr-6 w-2 transform -scale-y-100"
                                        >
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
                                        <div>
                                            <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 0 ? "" : "hidden")}>Pick a topic</span>
                                            <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 1 ? "" : "hidden")}>Anime</span>
                                            <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 2 ? "" : "hidden")}>Musician</span>
                                            <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 3 ? "" : "hidden")}>Gym</span>
                                        </div>
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

                                <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 0 ? "" : "hidden")}>about my personal interest</span>
                                <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 1 ? "" : "hidden")}>that I'm currently watching and my favorites.</span>
                                <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 2 ? "" : "hidden")}>that I'm obsessed with.</span>
                                <span className={"text-2xl md:text-4xl lg:text-4xl " + (item === 3 ? "" : "hidden")}>rats that inspired my on fitness journey.</span>
                            </Menu>
                        </div>

                        {/* Image Default Set */}
                        {(item === 0) && (
                            <div className='col-span-10 col-start-2 flex flex-col sm:flex-row justify-center items-center mt-24 space-y-8 sm:space-y-0 sm:space-x-16 mx-16 sm:mx-32 lg:mx-[250px]'>
                                <div className={"flex flex-wrap justify-center border border-4 rounded-full mx-10 sm:mx-0 " + (itemHovered === 0 ? 'border-primary_yellow' : 'border-black hover:border-primary_yellow')}
                                    onClick={() => resetItemHover(1)}
                                >
                                    <div className='cursor-pointer'>
                                        <img src={require("../../assets/default_anime.jpg")} alt="..." className="rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                </div>

                                <div className={"flex flex-wrap justify-center border border-4 rounded-full mx-10 sm:mx-0 " + (itemHovered === 1 ? 'border-primary_yellow' : 'border-black hover:border-primary_yellow')}
                                    onClick={() => resetItemHover(2)}
                                >
                                    <div className='cursor-pointer'>
                                        <img src={require("../../assets/default_music.jpg")} alt="..." className=" rounded-full max-w-full h-auto align-middle border-none" />
                                    </div>
                                </div>


                                <div className={"flex flex-wrap justify-center border border-4 rounded-full mx-10 sm:mx-0 " + (itemHovered === 2 ? 'border-primary_yellow' : 'border-black hover:border-primary_yellow')}
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
                            <div className='flex flex-col rounded-md justify-center items-center mt-8 mb-24 pt-12 px-12 mr-8 sm:mr-12 md:mr-20 lg:mr-28
                            bg-gradient-to-r 
                            from-primary_yellow
                            to-primary_yellow
                            via-slate-500
                            animate-gradient-xy'
                            >
                                <AliceCarousel
                                    mouseTracking
                                    disableDotsControls
                                    disableButtonsControls
                                    items={animeitems}
                                    activeIndex={anime_activeIndex}
                                    responsive={responsive}
                                    onSlideChanged={anime_syncActiveIndex}
                                />
                                <div className="flex flex-row b-refs-buttons m-2">

                                    <button className="h-0 w-0 border-y-8 border-y-transparent border-r-[16px] border-r-white mx-2"
                                        id='left-arrow'
                                        onMouseOver={() => anime_onArrowHover('left')}
                                        onMouseOut={() => anime_offArrowHover('left')}
                                        onClick={anime_slidePrev}></button>
                                    <button className="h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-white mx-2 "
                                        id='right-arrow'
                                        onMouseOver={() => anime_onArrowHover('right')}
                                        onMouseOut={() => anime_offArrowHover('right')}
                                        onClick={anime_slideNext}></button>
                                </div>
                            </div>
                        )}

                        {/* Image Music Set */}
                        {(item === 2) && (
                            <div className='flex flex-col rounded-md justify-center items-center mt-8 mb-24 pt-12 px-12 mr-8 sm:mr-12 md:mr-20 lg:mr-28
                            bg-gradient-to-r 
                            from-primary_yellow
                            to-primary_yellow
                            via-slate-500
                            animate-gradient-xy'
                            >
                                <AliceCarousel
                                    mouseTracking
                                    disableDotsControls
                                    disableButtonsControls
                                    items={musicitems}
                                    activeIndex={music_activeIndex}
                                    responsive={responsive}
                                    onSlideChanged={music_syncActiveIndex}
                                />
                                <div className="flex flex-row b-refs-buttons m-2">

                                    <button className="h-0 w-0 border-y-8 border-y-transparent border-r-[16px] border-r-white mx-2"
                                        id='left-arrow'
                                        onMouseOver={() => music_onArrowHover('left')}
                                        onMouseOut={() => music_offArrowHover('left')}
                                        onClick={music_slidePrev}></button>
                                    <button className="h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-white mx-2 "
                                        id='right-arrow'
                                        onMouseOver={() => music_onArrowHover('right')}
                                        onMouseOut={() => music_offArrowHover('right')}
                                        onClick={music_slideNext}></button>
                                </div>
                            </div>
                        )}
                        {/* Image Gym Set */}
                        {(item === 3) && (
                            <div className='flex flex-col rounded-md justify-center items-center mt-8 mb-24 pt-12 px-12 mr-8 sm:mr-12 md:mr-20 lg:mr-28
                            bg-gradient-to-r 
                            from-primary_yellow
                            to-primary_yellow
                            via-slate-500
                            animate-gradient-xy'
                            >
                                <AliceCarousel
                                    mouseTracking
                                    disableDotsControls
                                    disableButtonsControls
                                    items={gymitems}
                                    activeIndex={gym_activeIndex}
                                    responsive={responsive}
                                    onSlideChanged={gym_syncActiveIndex}
                                />
                                <div className="flex flex-row b-refs-buttons m-2">

                                    <button className="h-0 w-0 border-y-8 border-y-transparent border-r-[16px] border-r-white mx-2"
                                        id='left-arrow'
                                        onMouseOver={() => gym_onArrowHover('left')}
                                        onMouseOut={() => gym_offArrowHover('left')}
                                        onClick={gym_slidePrev}></button>
                                    <button className="h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-white mx-2 "
                                        id='right-arrow'
                                        onMouseOver={() => gym_onArrowHover('right')}
                                        onMouseOut={() => gym_offArrowHover('right')}
                                        onClick={gym_slideNext}></button>
                                </div>
                            </div>
                        )}


                    </div>
                )}

                {/* Button */}
                <div
                    className={"col-span-2 flex justify-center items-center mt-16 cursor-pointer " + (globalContext.aboutOpen ? 'col-start-11' : 'col-start-9')}
                    id='expand-about-btn'
                >
                    <div className={"flex justify-center items-center w-12 h-12 rounded-full bg-grey-yellow-5 transition-width duration-200 " + (isMobiletDevice() ? '' : (globalContext.aboutOpen ? '' : 'hover:w-52 hover:x-2 hover:sm:w-64'))
                    }
                        onMouseEnter={() => onMouseHover(true)}
                        onMouseLeave={() => onMouseHover(false)}
                        onClick={() => collapseSection()}
                    >
                        {globalContext.aboutOpen ? (
                            <div className='text-white font-semibold '>
                                -
                            </div>
                        ) : (
                            <div className='flex overflow-hidden whitespace-nowrap text-white text-lg cursor-pointer'>
                                {isHovered ? (isMobiletDevice() ? '+' : 'Learn more about me!') : '+'}
                            </div>
                        )}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About;