import { id } from "@ethersproject/hash";
import React, {useContext, useCallback} from "react"
import {ContextApp} from "../App";
import {ActionType} from "../types/stateType";

const InputFrom = () => {
    const {state, changeState} = useContext(ContextApp);
    
    return (
        <input className="text-right appearance-none bg-transparent border-none w-full text-white text-2xl font-semibold text-white mr-3 my-1 pr-3 leading-tight focus:outline-none" 
        type="number"
        placeholder = '0.0'
        autoComplete = "off" 
        value = {state?.fromAmount != 0 ? state?.fromAmount : ''}

        onChange={(e) => changeState(({type: ActionType.CHANGE, 
            payload: {
            toToken: state?.toToken, 
            fromToken: state?.fromToken, 
            fromAmount: parseFloat(e.target.value), 
            toAmount: state?.toAmount }})) } 
        />
    )
}

export default InputFrom
