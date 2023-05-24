import Accordion from '../components/Accordion';
import { useEffect, useState } from 'react';

function Test() {
    const [list, setList] = useState([
        { title: 'Education', content: 'Texas A&M University' },
        { title: 'Skills', content: 'React, TypeScript, Node.js, Express, MongoDB, Python, Java, C++' },
        { title: 'Experience', content: 'N/A' },
    ]);

    useEffect(() => {

    }, []);

    return (
        <div className='bg-[#f2f2f2] h-screen flex justify-center items-center'>
            <div className='list'>
                {
                    list.map((item, index) => (
                        <Accordion index={index} datas={item} />
                    ))
                }
            </div>

        </div>
    );
}

export default Test;