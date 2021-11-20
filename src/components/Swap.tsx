import React from "react"

import Balance from './Balance'
import TokenButton from './TokenButton'
import MaxButton from './MaxButton'
import SwapButton from "./SwapButton"
import AdvSettingsButton from "./AdvSetttingButton"
import DirectionButton from "./DirectionButton"
import Input from "./Input"
import Container from "./Container"


const Swap = () => (
  <div className="body-font font-sans">
    <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
      <div className="text-center lg:w-5/12 pl-14  w-full text-gray1 text-md font-semibold">
        <div className="flex items-center flex-wrap pb-2 border-gray-800 pl-3 mt-auto w-full">
          <span className="inline-flex items-center">
            Swap from:
          </span>
          <Balance />
        </div>
        <Container>
          <TokenButton />
          <MaxButton />
          <Input />
        </Container> 
        <DirectionButton />
        <Container>
          <TokenButton />
          <Input />                
        </Container> 
      </div>
        <AdvSettingsButton />
        <SwapButton />
    </div>
  </div>
)

export default Swap