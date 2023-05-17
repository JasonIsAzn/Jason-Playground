import React, { useState } from 'react'

function Test() {
    const [switchText, setSwitchText] = useState(true);



    return (
        <div>
            <div className="bg-white w-52 h-72 m-8 static hover:border-black hover:border hover:border-dashed"
                onMouseEnter={() => setSwitchText(false)}
                onMouseLeave={() => setSwitchText(true)}

            >
                <div className="bg-white w-52 h-72 hover:-m-3 border hover:border-primary_yellow border-black absolute  hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    {switchText && (
                        <div>
                            <h1 className="m-4 text-4xl font-bold">Project 1</h1>
                            <p className="m-4 text-4xl">Short Description</p>
                        </div>
                    )}
                    {!switchText && (
                        <div>
                            <h1 className="m-4 text-4xl font-bold">Details</h1>
                            <p className="m-4 text-4xl">Learn More</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Test;
