import React, {useReducer, useContext} from 'react';

import { useEagerConnect } from './hooks/useEagerConnect';
import { useInactiveListener } from './hooks/useInactiveListener';

import Header from './components/Header';
//import GlobalModal from './components/GlobalModal';
//import { BrowserRouter as Router, Route } from "react-router-dom"
import Swap from './components/Swap';

export const ContextApp = React.createContext(null);

interface SwapState {
    fromToken: string;
    toToken: string;
    fromAmount: number;
    toAmount: number;
  }

const App: React.FC = () => {

    const triedEager = useEagerConnect()
    useInactiveListener(!triedEager)

    const [state, changeState] = useReducer(
        (state: SwapState, newState: Partial<SwapState>) => ({
          ...state,
          ...newState,
        }),
        {
            fromToken: "ABC",
            toToken: "XYZ",
            fromAmount: 0,
            toAmount: 0.875491717521170868*2
        }
      );
  
    return (
        <ContextApp.Provider value={{state, changeState}}>
            <Background>
                <Header />
                <Swap />
            </Background>
        </ContextApp.Provider>
    );
}

export default App;

const Background = ({children}) => {
    return (
        <div className="absolute w-screen h-screen bg-black1">
        {children}
        </div>
    )
}