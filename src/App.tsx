import React from 'react';

import { StoreProvider } from "easy-peasy"
import store from "./state/store"

import { useEagerConnect } from './hooks/useEagerConnect';
import { useInactiveListener } from './hooks/useInactiveListener';
import { useWeb3React } from '@web3-react/core';
import Header from './components/Header';
//import GlobalModal from './components/GlobalModal';
//import { BrowserRouter as Router, Route } from "react-router-dom"
import Swap from './components/Swap.tsx';


function App() {

    const triedEager = useEagerConnect()
    useInactiveListener(!triedEager)

    return (
        <StoreProvider store={store}>
            <div className="absolute w-screen h-screen bg-black">
            <Header />
            <Swap />
            </div>
        </StoreProvider>
    );
}

export default App;
