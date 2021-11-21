import React from "react"

import TokenButton from './TokenButton'
import SwapButton from "./SwapButton"
import AdvSettingsButton from "./AdvSetttingButton"
import DirectionButton from "./DirectionButton"
import Input from "./Input"
import Container from "./Container"
import SwapHeader from "./SwapHeader"
import SwapFromForm from "./SwapFromForm"
import SwapToForm from './SwapToForm'

const SwapBody = () => {
  return(
    <div className="lg:w-5/12 pl-14 w-full">
      <SwapHeader />
      <SwapFromForm />       
      <DirectionButton />
      
      <SwapToForm />   
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

