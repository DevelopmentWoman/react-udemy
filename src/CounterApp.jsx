import { useState } from 'react'
import PropTypes from 'prop-types'




export const CounterApp= ({value})=>{

    const [counter, setCounter] = useState(value);

    const aumentar = ()=>{
        setCounter(c=> c+1)
    }

    const  decrementar = ()=>{
        setCounter(c=>c-1)
    }

    const resetear = ()=>{
        setCounter(value)
    }


    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={aumentar}>
                +1
            </button>
            <button onClick={decrementar}>
                -1
            </button>
            <button onClick={resetear}>
                Reset
            </button>
        </>
    )

}



CounterApp.protoTypes = {
    value: PropTypes.number
}