import {StatusType} from "../counter/Counter";

type InitialStateType = typeof initialState
const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 0,
    status: 'display' as StatusType
}

export const counterReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {...state, count: state.count + 1}
        case "RESET_COUNTER":
            return {...state, count: action.minValue}
        case "CHANGE_MAX_VALUE":
            return {...state, maxValue: action.maxValue}
        case "CHANGE_MIN_VALUE":
            return {...state, minValue: action.minValue}
        case "CHANGE_STATUS":
            return {...state, status: action.status}

        default:
            return state
    }
}


export const incrementCounterAC = () => {
    return {type: 'INCREMENT_COUNTER'} as const
}

export const resetCounterAC = (minValue: number) => {
    return {type: 'RESET_COUNTER', minValue} as const
}

export const changeMaxValueAC = (maxValue: number) => {
    return {type: 'CHANGE_MAX_VALUE', maxValue} as const
}

export const changeMinValueAC = (minValue: number) => {
    return {type: 'CHANGE_MIN_VALUE', minValue} as const
}

export const changeStatusAC = (status: StatusType) => {
    return {type: 'CHANGE_STATUS', status} as const
}

type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
type ChangeMinValueActionType = ReturnType<typeof changeMinValueAC>
type ChangeStatusActionType = ReturnType<typeof changeStatusAC>


type ActionsType = IncrementCounterActionType
    | ResetCounterActionType
    | ChangeMaxValueActionType
    | ChangeMinValueActionType
    | ChangeStatusActionType
