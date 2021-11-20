import React from "react"

const SwapButton = () => {
    return (
        <div className="container mx-auto flex py-32 items-center justify-center flex-col">
            <div className="text-center w-5/12">
                <div className="flex justify-center text-center">
                    <button className="bg-transparent w-full ml-14 border-gray1-g66 border text-orange1 font-sans font-medium text-xl pt-2 pb-3 px-4 rounded-lg">
                    Enter an amount
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SwapButton