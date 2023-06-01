import React, { useState } from "react";


const Accordion = (props: any) => {
    const [data, setData] = useState(props.datas);

    const handleToggleActive = (index: number) => {
        if (data.active === index) {
            return setData({ ...data, active: null });
        }
        setData({ ...data, active: index });
    }

    return (
        <div className={`p-5 mb-5 duration-500  group ${data.active === props.index ? 'is-active' : ''}`}
            onClick={() => handleToggleActive(props.index)}
        >
            <div className="flex flex-row justify-between items-center cursor-pointer">
                <div className="font-bold text-4xl sm:text-7xl group-[.is-active]:font-bold">
                    {data.title}
                </div>
                <div className="text-xl rotate-90  duration-500 group-[.is-active]:rotate-[270deg]" >
                    {">"}
                </div>
            </div>
            <div className="mt-6 overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-screen">
                {data.content}
            </div>
        </div>
    );
}
export default Accordion;