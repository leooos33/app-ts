import React, {useContext} from "react"
import {ContextSwap} from "../App";

const InputFrom = () => {
    const {state, changeState} = useContext(ContextSwap);
    
    return (
        <input className="text-right appearance-none bg-transparent border-none w-full text-white text-2xl font-semibold text-white mr-3 my-1 pr-3 leading-tight focus:outline-none" 
        type="number"
        min = "0"
        placeholder = '0.0'
        autoComplete = "off" 
        value = {state?.fromAmount !== 0 ? state?.fromAmount : ''}

        onChange={(e) => changeState(({
            fromAmount: parseFloat(e.target.value), 
           })) } 
        />
    )
}

export default InputFrom
