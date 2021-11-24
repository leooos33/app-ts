import React from "react"

import Balance from "./Balance"

const SwapHeader = () => {
    return (
        <div className="flex items-center flex-wrap pb-2 pl-3 mt-auto w-full">
            <span className="inline-flex items-center">
            Swap from:
            </span>
            <Balance />
        </div>
    )
}
export default SwapHeader