import React from "react"

import { useWeb3React } from "@web3-react/core"
import { formatEther } from '@ethersproject/units'

const Balance = () => {
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
      <>
        <span className="mr-3 inline-flex items-center ml-auto leading-none pr-3 py-1 ">
        { account ? 
        (
        balance === null ? 'Error' : balance ? `Balance: ${formatEther(balance)} ETH` : ''
        ) : (
        'Balance: --'
        ) }
          </span>
      </>
      )
  }
export default Balance