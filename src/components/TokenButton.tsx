import React from "react"

import expand_more from './expand_more.svg'
import DAI from './DAI.svg'

const TokenButton = () => {
    return(
      <button className="flex-shrink-0 inline-flex text-xl font-semibold text-white pl-2 pr-0 rounded" type="button">
      <img
      className="object-cover object-center rounded mx-3"
      src={DAI} alt={"DAI"}
      width="30x"
      height="30px"
      />
      ETH
      <img
      className="object-cover object-center rounded "
      src={expand_more} alt={"expand_more"}
      width="30px"
      height="30px"
      />
    </button>
    )
  }
export default TokenButton