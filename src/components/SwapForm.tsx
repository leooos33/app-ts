import React from "react"


import MaxButton from './MaxButton'
import InputFrom from "./InputFrom"
import InputTo from "./InputTo";
import Container from "./Container"
import TokenButton from "./TokenButton";

const SwapForm = ({isFrom}:{isFrom:boolean} ) => {
    return (
    <Container>
        
        <TokenButton isFrom={isFrom}/>
        
        {isFrom ? (<MaxButton />) : (null)}

        {isFrom ? (<InputFrom />) : (<InputTo />)}

    </Container>
    )
}
export default SwapForm
