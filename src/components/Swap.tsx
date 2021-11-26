import React from "react"

import SwapButton from "./SwapButton"
import AdvSettingsButton from "./AdvSetttingButton"
import DirectionButton from "./DirectionButton"
import SwapHeader from "./SwapHeader"
import SwapForm from "./SwapForm"

const SwapBody = () => {
  return(
    <div className="lg:w-2/5 w-full">
      <SwapHeader />
      <SwapForm isFrom = {true} />       

      <DirectionButton />
      
      <SwapForm isFrom = {false} />   
    </div>
  )
}

const Swap = () => (
  <div className="body-font font-sans text-md font-semibold text-gray1 text-center ">
    <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
        <SwapBody />
        <AdvSettingsButton />

        <SwapButton />
        
    </div>
  </div>
)

export default Swap

