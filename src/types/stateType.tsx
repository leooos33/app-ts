import {Dispatch} from "react";

export type SwapState = {
    fromToken: string,
    toToken: string,
    fromAmount: number,
    toAmount: number
}

export enum ActionType {
    CHANGE = 'CHANGE'
}

type ActionObjectPayload = {
    type: ActionType.CHANGE,
    payload: SwapState
}

export type Action = ActionObjectPayload

export type ContextState = {
    state: SwapState;
    changeState: Dispatch<Action>
}