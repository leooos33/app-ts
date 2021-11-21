import React, { useContext, useState} from "react";

export type SwapContext = {
    // Token being traded from. The user must own these tokens.
    fromToken: string;
    setFromToken: (m: string) => void;
  
    // Token being traded to. The user will receive these tokens after the swap.
    toToken: string;
    setToToken: (m: string) => void;
  
    // Amount used for the swap.
    fromAmount: number;
    setFromAmount: (a: number) => void;
  
    // *Expected* amount received from the swap.
    toAmount: number;
    setToAmount: (a: number) => void;
  
    // Function to flip what we consider to be the "to" and "from" tokens.
    swapToFromTokens: () => void;
    /*
    // The amount (in units of percent) a swap can be off from the estimate
    // shown to the user.
    slippage: number;
    setSlippage: (n: number) => void;
    */
  };
const _SwapContext = React.createContext<null | SwapContext>(null);

export function SwapContextProvider(props: any) {
    const [fromToken, setFromToken] = useState(props.fromToken ?? 'ABC');
    const [toToken, setToToken] = useState(props.toToken ?? 'XYZ');
    const [fromAmount, _setFromAmount] = useState(props.fromAmount ?? 0);
    const [toAmount, _setToAmount] = useState(props.toAmount ?? 0);

    const swapToFromTokens = () => {
      const oldFrom = fromToken;
      const oldTo = toToken;
      const oldToAmount = toAmount;
      _setFromAmount(oldToAmount);
      setFromToken(oldTo);
      setToToken(oldFrom);
    };
  
    const setFromAmount = (amount: number) => {
      _setFromAmount(amount);
    };
  
    const setToAmount = (amount: number) => {
      _setToAmount(amount);
    };
  
    return (
      <_SwapContext.Provider
        value={{
          fromToken,
          setFromToken,
          toToken,
          setToToken,
          fromAmount,
          setFromAmount,
          toAmount,
          setToAmount,
          swapToFromTokens,
        }}
      >
        {props.children}
      </_SwapContext.Provider>
    );
  }
  
export function useSwapContext(): SwapContext {
    const ctx = useContext(_SwapContext);

    return ctx;
}