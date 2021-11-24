import React, {useReducer} from 'react';
import {Action, State, ContextState} from "./types/stateType";

import { useEagerConnect } from './hooks/useEagerConnect';
import { useInactiveListener } from './hooks/useInactiveListener';

import Header from './components/Header';
//import GlobalModal from './components/GlobalModal';
//import { BrowserRouter as Router, Route } from "react-router-dom"
import Swap from './components/Swap';

export const ContextApp = React.createContext<Partial<ContextState>>({});

const Background = ({children}) => {
    return (
        <div className="absolute w-screen h-screen bg-black1">
        {children}
        </div>
    )
}

const SwapReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'CHANGE':
            return action.payload;
        default: throw new Error('Unexpected action');
    }
}

const App: React.FC = () => {

    const initialState = {
        fromToken: "ABC",
        toToken: "XYZ",
        fromAmount: 0,
        toAmount: 0.875491717521170868*2
    }

    const[state, changeState] = useReducer<React.Reducer<State, Action>>(SwapReducer, initialState)

    const ContextState: ContextState = {
        state,
        changeState
    };

    const triedEager = useEagerConnect()
    useInactiveListener(!triedEager)
    
    return (
        <ContextApp.Provider value={ContextState}>
            <Background>
                <Header />
                <Swap />
            </Background>
        </ContextApp.Provider>
    );
}

export default App;
