import React from "react"
import { useSwapContext } from "../context/Swap";

const Input = () => {
    return (
        <input className="text-right appearance-none bg-transparent border-none w-full text-white text-2xl font-semibold text-white mr-3 my-1 pr-3 leading-tight focus:outline-none " type="text" placeholder="0.00" 
        onChange={(e) => setAmount(parseFloat(e.target.value))}/>
    )
}

export default Input