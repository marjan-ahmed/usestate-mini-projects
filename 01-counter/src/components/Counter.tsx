import React, { useState } from 'react'

const Counter:React.FC = () => {
    const [counter, setCounter] = useState<number>(0)


    const handleInc = () =>  {
        setCounter(counter + 1)
    }
    
    const handleDec = () => {
        if (counter <= 0) return;
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return (
        <div className='flex flex-col p-10 gap-10 justify-center items-center w-[300px] h-[350px] bg-gray-200 shadow-lg rounded-xl'>
            <span className='text-4xl font-bold text-[poppins]'>{counter}</span>
            <div className="flex flex-wrap gap-4">
                <button onClick={handleInc} className='px-4 py-1 text-2xl rounded-2xl bg-gray-600 text-white'>+</button>
                <button onClick={handleDec} className='px-4 py-1 text-2xl rounded-2xl bg-gray-600 text-white'>-</button>
                <button onClick={handleReset} className='px-4 py-1  rounded-2xl bg-gray-600 text-white'>Reset</button>
            </div>
        </div>
    )
}

export default Counter;