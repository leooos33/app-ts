import React, {useContext} from "react"
import {ContextApp} from "../App";

import direction from './assets/direction.svg'

const DirectionButton = () => {
    const {state, changeState} = useContext(ContextApp);
    return (
        <button onClick={() => changeState({
            toToken: state?.fromToken, 
            fromToken: state?.toToken, 
            fromAmount: state?.toAmount, 
            toAmount: state?.fromAmount })}>
            <img
                className="object-cover items-center object-center rounded justify-center mt-2 mb-1 flex mx-auto"
                src={direction} alt={"direction"}
                width="20px"
                height="20px"
              />
        </button>
    )
}
export default DirectionButton

