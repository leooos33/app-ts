import React from 'react';

import { StoreProvider } from "easy-peasy"
import store from "./state/store"

import { useEagerConnect } from './hooks/useEagerConnect';
import { useInactiveListener } from './hooks/useInactiveListener';

import Header from './components/Header';
//import GlobalModal from './components/GlobalModal';
//import { BrowserRouter as Router, Route } from "react-router-dom"
import Swap from './components/Swap.tsx';

const Background = ({children}) => {
    return (
        <div className="absolute w-screen h-screen bg-black1">
        {children}
        </div>
    )
}

function App() {

    const triedEager = useEagerConnect()
    useInactiveListener(!triedEager)

    return (
        <StoreProvider store={store}>
            <Background>
                <Header />
                <Swap />
            </Background>
        </StoreProvider>
    );
}

export default App;
