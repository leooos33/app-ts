import React from "react"
import expand_more from './expand_more.svg'
import DAI from './DAI.svg'
import USDC from './USDC.svg'
import direction from './direction.svg'

const Swap = () => (
    <div className="text-gray-400 body-font font-sans">
      <div className="container mx-auto flex px-5 pt-20 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 pl-14  w-full text-gray1 text-lg font-semibold">
          <div className="flex items-center flex-wrap pb-2 border-gray-800 pl-3 mt-auto w-full">
            <span className=" inline-flex items-center">
              Swap from:
              </span>
            <span className="mr-3 inline-flex items-center ml-auto leading-none pr-3 py-1 ">
              Balance: -- stETH
            </span>
            </div>
              <form className="w-full ">
                <div className="flex items-center border-b border-t border-gray1-g66 py-1">
                  <button className="flex-shrink-0  inline-flex  text-2xl  font-semibold text-white py-1 pl-2 rounded" type="button">
                    <img
                    className="object-cover object-center rounded pt-1 mx-3"
                    src={DAI} alt={"DAI"}
                    width="30x"
                    height="30px"
                    />
                    stETH
                    <img
                    className="object-cover object-center rounded my-0.5"
                    src={expand_more} alt={"expand_more"}
                    width="30px"
                    height="30px"
                    />
                  </button>
                  <button className="flex-shrink-0  inline-flex  text-sm  font-semibold text-gray1-g66 py-0.5 border px-2 border-gray1-g66 rounded" type="button">
                    MAX
                  </button>
                  <input className="text-right appearance-none bg-transparent border-none w-full text-white text-2xl font-semibold text-white mr-3 py-1 pr-3 leading-tight focus:outline-none " type="text" placeholder="0.00" />
                </div>
              </form>

              <img
                className="object-cover items-center object-center rounded justify-center flex py-3 my-0.5 mx-auto"
                src={direction} alt={"direction"}
                width="20px"
                height="20px"
              />
              <form className="w-full ">
                <div className="flex items-center border-b border-t border-gray1-g66 py-1">
                  <button className="flex-shrink-0  hover:bg-teal-700 inline-flex hover:border-teal-700 text-2xl  font-semibold text-white py-1 pl-2 rounded" type="button">
                    <img
                      className="object-cover object-center rounded pt-1 mx-3"
                      src={USDC} alt={"USDC"}
                      width="30x"
                      height="30px"
                      />
                      stETH
                      <img
                      className="object-cover object-center rounded my-0.5"
                      src={expand_more} alt={"expand_more"}
                      width="30px"
                      height="30px"
                      />
                  </button>
                <input className="text-right appearance-none bg-transparent border-none w-full text-white text-2xl font-semibold text-white mr-3 py-1 pr-3 leading-tight focus:outline-none " type="text" placeholder="0.00" />
                </div>
              </form>
            </div>
            <button className="items-end ml-auto inline-flex  text-lg w-5/12  font-semibold text-white py-1 pr-3 " type="button">
              Advanced settings
              <img
                className="object-cover object-center pt-0.5"
                src={expand_more} alt={"expand_more"}
                width="25px"
                height="25px"
              />
            </button>
            <div>
              </div>
                <div className="container mx-auto flex py-32 items-center justify-center flex-col">
                  <div className="text-center w-5/12">
                    <div className="flex justify-center text-center">
                      <button className="bg-transparent w-full ml-14 border-gray1-g66 border text-orange1 font-sans font-medium text-2xl py-3 px-4 rounded-lg">
                      Enter an amount
                      </button>
                </div>
              </div>
            </div>
        </div>
</div>
)

export default Swap