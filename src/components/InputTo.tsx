import React, {useContext} from "react"
import {ContextApp} from "../App";

const InputTo = () => {
    const {state, changeState} = useContext(ContextApp);
    return (
        <input className="text-right appearance-none bg-transparent border-none w-full text-white text-2xl font-semibold text-white mr-3 my-1 pr-3 leading-tight focus:outline-none " type="number" 
        placeholder={state?.toAmount}        
        autoComplete = "off"
        />

    )
}

export default InputTo