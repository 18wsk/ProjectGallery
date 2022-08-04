import React from 'react'
import { useState, useEffect } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const urMom = 21;

    const incrementCounter = () => {
        setCounter(counter+1)
    }

    useEffect(()=> {
        console.log(counter)
    }, [counter, urMom])

    return (
        <div>
            <p>{counter}</p>
            <button onClick={incrementCounter}>MyButton</button>
        </div>
    )
}
