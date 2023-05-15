import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from 'tsparticles'
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import smallDeer from "../../assets/sunrise2.svg"


const Header = (enabled: any) => {
    const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
        console.log(engine);
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    const options = {
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
                value: "#ece75f",
                // animation: {
                //     enable: true,
                //     speed: 20,
                //     sync: true
                // }
            },
            links: {
                blink: false,
                color: "#ffffff",
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
                value: 1
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
            color: "#000000",
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



    return (
        <div>
            <Particles className="h-screen" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options}
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <p className='flex flex-col justify-center items-center text-[#FFFFFF] text-3xl md:text-5xl xl:text-6xl'>
                    Hello, I'm Jason Le
                </p>
                <p className='flex flex-col justify-center items-center text-[#FFFFFF] text-2xl md:text-3xl xl:text-4xl'>
                    I'm a full-stack web deveoper.
                    {/* I'm a computer scientist */}
                    {/* I'm a student */}
                    {/* I'm a teacher */}
                </p>
            </div>
        </div>

    );

}

export default Header;