import React, {useContext} from "react"
import {ContextSwap} from "../App";

import { useWeb3React } from "@web3-react/core"
import { injected } from "../web3/connectors"

import expand_more from './assets/expand_more.svg'
import DAI from './assets/DAI.svg'
import USDC from './assets/USDC.svg'
import highlight_off from './assets/highlight_off.svg'
import search from './assets/search.svg'

const TokenButton = ({isFrom}:{isFrom: boolean}) => {
  const [showModal, setShowModal] = React.useState(false);

  const {state, changeState} = useContext(ContextSwap);

  const { account } = useWeb3React()
    return (
      <>
      <button className="flex-shrink-0 inline-flex text-xl font-semibold text-white pl-2 pr-0 rounded" type="button" 
      onClick={() => setShowModal(true)}>
      <img
      className="object-cover object-center mx-3"
      src = {isFrom ? (USDC) : (DAI)} alt = '' //TODO 
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
      
      {showModal ? (<>
    <div
      className="justify-center items-center flex fixed inset-0 pb-24 z-50 outline-none focus:outline-none font-sans">

      <div className="absolute w-screen h-screen" onClick={() => setShowModal(false)}>
      </div>
      
      <div className="absolute w-1/4 px-5 mx-auto">
        {/*content*/}
        <div className="border-gray1 border rounded-lg shadow-xl relative flex flex-col w-full bg-black1 outline-none focus:outline-none items-center ">
          
          {/*Modal header*/}
          <div className="flex items-center flex-wrap px-1 w-11/12 ">
          <span className="inline-flex items-center text-xl text-orange1 ">
              Choose a token
          </span>
          <span className="inline-flex items-center py-2 ml-auto leading-none">
          <button
              className="background-transparent"
              type="button"
              onClick={() => setShowModal(false)}>
            <img
            className="object-cover object-center rounded"
            src={highlight_off} alt = ''
            width="30px"
            height="30px"
            />
          </button>
          </span>
          </div>

          {/*Modal body*/}
          <form className="w-full ">
            <div className="flex items-center border-b border-t border-gray1-g66 mx-5 py-3">
            <img
            className="object-cover object-center "
            src ={search} alt = ''
            width="30x"
            height="30px"
            />
            <input className="text-right appearance-none bg-transparent w-full text-white text-xl font-semibold my-1 leading-tight focus:outline-none placeholder-color-gray1-g33" type="text" 
            placeholder='Search name or paste address'       
            autoComplete = "off"
            />
            </div>
        </form>

        <div className=" w-full px-5 ml-1 h-96 overflow-y-auto" >

        <div className = "flex my-1 py-2 text-lg text-white">
        <img
            className="object-center mr-2"
            src ={USDC} alt = ''
            width="30x"
            height="30px"
            />
        ABC
        <span className="inline-flex ml-auto ">
        { account ? (
          '123' ) : (
          '0.0'
        ) }
          </span>
        </div>

        <div className = "flex my-1 py-2 text-lg text-white"
         
>
        <img
            className="object-center mr-2"
            src ={DAI} alt=''
            width="30x"
            height="30px"
            />
        XYZ
        <span className="inline-flex ml-auto ">
        { account ? (
          '456' ) : (
          '0.0'
        ) }
          </span>
        </div>
        </div>

        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black" ></div>
  </>):(null)}
  </>
    )
  }
export default TokenButton