import React, {useContext} from "react"

import { useWeb3React } from "@web3-react/core"
import { formatEther } from '@ethersproject/units'

import {ContextSwap} from "../App";

const MaxButton = () => {
  const {state, changeState} = useContext(ContextSwap);

  const { account, library, chainId } = useWeb3React()
  
  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
    return (
        <div>
          {account ? (
                    <button className="flex-shrink-0 inline-flex text-sm font-bold font-mono text-gray1-g66 py-0.5 border px-2.5 border-gray1-g66 rounded hover:border-orange1 hover:text-orange1" 
                    type="button" 
                    onClick={() => changeState({
                      fromAmount: formatEther(balance)
                    })}>
                      MAX
                    </button>
                    ) : (
                    <button className="flex-shrink-0 inline-flex text-sm font-bold font-mono text-gray1-g66 py-0.5 border px-2.5 border-gray1-g66 rounded" 
                    type="button">
                    MAX
                  </button>
          ) }
      </div>
    )
}
export default MaxButton