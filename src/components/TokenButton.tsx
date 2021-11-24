import React, {useContext} from "react"
import {ContextApp} from "../App";
import {ActionType} from "../types/stateType";


import expand_more from './assets/expand_more.svg'
import DAI from './assets/DAI.svg'
import USDC from './assets/USDC.svg'

const TokenButton = ({isFrom}:{isFrom: boolean}) => {
  const {state, changeState} = useContext(ContextApp);
    return(
      <button className="flex-shrink-0 inline-flex text-xl font-semibold text-white pl-2 pr-0 rounded" type="button">
      <img
      className="object-cover object-center mx-3"
      src = {isFrom ? (USDC) : (DAI)} //TODO
      width="30x"
      height="30px"
      />
      { isFrom ? (state?.fromToken) : (state?.toToken)}
      <img
      className="object-cover object-center rounded"
      src={expand_more} alt={"expand_more"}
      width="30px"
      height="30px"
      />
    </button>
    )
  }
export default TokenButton

