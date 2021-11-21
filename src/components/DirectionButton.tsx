import React, { useContext} from "react";
import direction from './assets/direction.svg'

const DirectionButton = () => {
    return (
        <button>
            <img
                className="object-cover items-center object-center rounded justify-center mt-2 mb-1 flex mx-auto"
                src={direction} alt={"direction"}
                width="20px"
                height="20px"
              />
        </button>
    )
}
export default DirectionButton

export type SwapContext = {
    // Token being traded from. The user must own these tokens.
    from: string;
    setFrom: (m: string) => void;
  
    // Token being traded to. The user will receive these tokens after the swap.
    toMint: string;
    setTo: (m: string) => void;
  
    // Amount used for the swap.
    fromAmount: number;
    setFromAmount: (a: number) => void;
  
    // *Expected* amount received from the swap.
    toAmount: number;
    setToAmount: (a: number) => void;
  
    // Function to flip what we consider to be the "to" and "from" tokens.
    swapToFrom: () => void;
  
    // The amount (in units of percent) a swap can be off from the estimate
    // shown to the user.
    slippage: number;
    setSlippage: (n: number) => void;
  
  };

const _SwapContext = React.createContext<null | SwapContext>(null);

export function ArrowButton() {
    const { swapToFrom} = useSwapContext();
    return (
        <img
        className="object-cover items-center object-center rounded justify-center mt-2 mb-1 flex mx-auto"
        src={direction} alt={"direction"}
        width="20px"
        height="20px"
      />
    );
}

function useSwapContext(): SwapContext {
    const ctx = useContext(_SwapContext);
        if (ctx === null) {
        throw new Error("Context not available");
        }
    return ctx;
}