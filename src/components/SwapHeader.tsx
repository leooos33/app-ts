import React from "react"

import Balance from "./Balance"


const SwapHeader = () => {
    return (
        <div className="flex items-center flex-wrap pb-2 pl-3 mt-auto w-full">
            <span className="inline-flex items-center">
            Swap from:
            </span>
            <span className="mr-3 inline-flex items-center ml-auto leading-none pr-3 py-1 ">
            Balance: <Balance/> ETH
            </span>
        </div>
    )
}
export default SwapHeader