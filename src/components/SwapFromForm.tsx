import React, {useContext} from "react"
import {ContextApp} from "../App";

import MaxButton from './MaxButton'
import InputFrom from "./InputFrom"
import Container from "./Container"
import TokenButtonFrom from "./TokenButtonFrom";

const SwapFromForm = () => {
    const {state, changeState} = useContext(ContextApp);
    return (
    <Container>
        <TokenButtonFrom />
        <MaxButton />
        <InputFrom />
    </Container>
    )
}
export default SwapFromForm
