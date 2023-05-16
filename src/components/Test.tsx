import { Transition } from '@headlessui/react'
import { useState } from 'react'

function Test() {
    const [isShowing, setIsShowing] = useState(false)

    return (
        <>
            <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
                Toggle
            </button>
            <Transition
                show={isShowing}
                enter="transition ease duration-700 transform"
                enterFrom="opacity-0 -translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-1000 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
            >
                I will fade in and out
            </Transition>
        </>
    )
}

export default Test;
