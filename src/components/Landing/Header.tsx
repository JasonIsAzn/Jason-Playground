import { useCallback, useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from 'tsparticles'
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import randomLines from "../../assets/lines.svg"
import sunRise from "../../assets/sunrise.svg"
import smallDeer from "../../assets/smalldeer.svg"
import tree from "../..assets/tree.svg"

import { Typewriter } from 'react-simple-typewriter'


const Header = () => {
    const [background, setBackground] = useState(0);

    useEffect(() => {
        if (window.innerWidth < 1300) {
            setBackground(1);
        }
    }, []);


    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        console.log(engine);
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    let options0 = {
        name: "Polygon Mask",
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push"
                },
                onDiv: {
                    elementId: "repulse-div",
                    enable: false,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                slow: {
                    active: false,
                    radius: 0,
                    factor: 1
                }
            }
        },
        particles: {
            color: {
                value: "#ECE75F",
            },
            links: {
                blink: false,
                color: "#FFFFFF",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 1
            },
            number: {
                limit: 0,
                value: 200
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false
                },
                value: {
                    min: 0.05,
                    max: 0.4
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 2
            }
        },
        polygon: {
            draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 1
            },
            enable: true,
            move: {
                radius: 10
            },
            inline: {
                arrangement: "equidistant"
            },
            scale: 1,
            type: "inline",
            url: randomLines,
        },
        background: {
            color: "#121212",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        "fullScreen": {
            "enable": true,
            "zIndex": true ? -1 : 1
        },
    } as ISourceOptions;


    let options1 = {
        name: "Polygon Mask",
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push"
                },
                onDiv: {
                    elementId: "repulse-div",
                    enable: false,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                slow: {
                    active: false,
                    radius: 0,
                    factor: 1
                }
            }
        },
        particles: {
            color: {
                value: "#ECE75F",
            },
            links: {
                blink: false,
                color: "#FFFFFF",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 1
            },
            number: {
                limit: 0,
                value: 200
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false
                },
                value: {
                    min: 0.05,
                    max: 0.4
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 2
            }
        },
        polygon: {
            draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 1
            },
            enable: true,
            move: {
                radius: 10
            },
            inline: {
                arrangement: "equidistant"
            },
            scale: 1,
            type: "inline",
            url: smallDeer,
        },
        background: {
            color: "#121212",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        "fullScreen": {
            "enable": true,
            "zIndex": true ? -1 : 1
        },
    } as ISourceOptions;



    let options3 = {
        name: "Polygon Mask",
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push"
                },
                onDiv: {
                    elementId: "repulse-div",
                    enable: false,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                slow: {
                    active: false,
                    radius: 0,
                    factor: 1
                }
            }
        },
        particles: {
            color: {
                value: "#ECE75F",
            },
            links: {
                blink: false,
                color: "#FFFFFF",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 1
            },
            number: {
                limit: 0,
                value: 200
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false
                },
                value: {
                    min: 0.05,
                    max: 0.4
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 2
            }
        },
        polygon: {
            draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 1
            },
            enable: true,
            move: {
                radius: 10
            },
            inline: {
                arrangement: "equidistant"
            },
            scale: 1,
            type: "inline",
            url: sunRise,
        },
        background: {
            color: "#121212",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        "fullScreen": {
            "enable": true,
            "zIndex": true ? -1 : 1
        },
    } as ISourceOptions;


    let options2 = {
        name: "Polygon Mask",
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push"
                },
                onDiv: {
                    elementId: "repulse-div",
                    enable: false,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10
                    }
                }
            },
            modes: {
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6
                },
                connect: {
                    distance: 80,
                    links: {
                        opacity: 0.5
                    },
                    radius: 60
                },
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                slow: {
                    active: false,
                    radius: 0,
                    factor: 1
                }
            }
        },
        particles: {
            color: {
                value: "#ECE75F",
            },
            links: {
                blink: false,
                color: "#FFFFFF",
                consent: false,
                distance: 30,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                outModes: "bounce",
                speed: 1
            },
            number: {
                limit: 0,
                value: 200
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 2,
                    sync: false
                },
                value: {
                    min: 0.05,
                    max: 0.4
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 2
            }
        },
        polygon: {
            draw: {
                enable: true,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 1
            },
            enable: true,
            move: {
                radius: 10
            },
            inline: {
                arrangement: "equidistant"
            },
            scale: 1,
            type: "inline",
            url: sunRise,
        },
        background: {
            color: "#121212",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        "fullScreen": {
            "enable": true,
            "zIndex": true ? -1 : 1
        },
    } as ISourceOptions;

    function goDown() {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }

    function changeBackground() {
        if (background === 0) {
            setBackground(1);
        } else if (background === 1) {
            setBackground(2);
        } else if (background === 2) {
            setBackground(0);
        } else {
            // setBackground(0);
        }

    }


    return (
        <div id="section-header" className=''>
            {/* Background */}
            {/* THIS IS HORRIBLE */}

            {background === 0 && (
                <Particles className="h-screen" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options0} />
            )}

            {background === 1 && (
                <Particles className="h-screen" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options1} />
            )}

            {background === 2 && (
                <Particles className="h-screen" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options2} />
            )}

            {background === 3 && (
                <Particles className="h-screen" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options3} />
            )}


            {/* Title */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

                <h1 className='flex flex-row md:flex-row space-x-2 md:space-x-5 justify-center items-center text-white text-2xl md:text-5xl xl:text-6xl'>
                    <span>Hello, I'm</span>
                    <span className='text-primary_yellow inline-block'> Jason Le</span>
                </h1>

                <h1 className='flex flex-row md:flex-row space-x-3 md:space-x-4 justify-center items-center text-white text-2xl md:text-3xl xl:text-4xl'>
                    <span>{'I\'m a'}</span>
                    <span className="flex flex-row  justify-center items-center underline decoration-primary_yellow">
                        <Typewriter
                            words={['web developer', 'student', 'teacher']}
                            loop={0}
                            typeSpeed={35}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>

            <button onClick={() => changeBackground()}
                className="absolute m-6 mr-8 top-0 right-0 h-14  w-14">

                {background === 0 && (
                    <img src={require("../../assets/radio-yellow.png")} alt="change background" />
                )}
                {background === 1 && (
                    <img src={require("../../assets/radio-red.png")} alt="change background" />
                )}
                {background === 2 && (
                    <img src={require("../../assets/radio-green.png")} alt="change background" />
                )}
                {background === 3 && (
                    <img src={require("../../assets/radio-blue.png")} alt="change background" />
                )}

            </button>

            {/* Down Button */}
            <button id="go-down-button" onClick={goDown}
                className="absolute m-6 mb-0 sm:mb-2 mr-8 bottom-0 right-0 transform -translate-x-0 -translate-y-0 z-10 animate-bounce object-scale-down h-14  w-14">
                <img src={require("../../assets/arrow.png")} alt="go Down Button" />
            </button>
        </div >
    );
}

export default Header;