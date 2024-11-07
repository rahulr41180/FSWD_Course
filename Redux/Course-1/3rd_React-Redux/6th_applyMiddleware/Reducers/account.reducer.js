
import { 
    getAccUserFulfilled,
    getAccUserPending,
    getAccUserRejected,
    inc,
    dec,
    incByAmnt,
    initUser,
} from "../Actions";

// Reducer

// Initialized State With Some Value
export function accountReducer(state={amount : 1}, action) {

    switch(action.type) {
        case inc : 
            return {...state, amount : state.amount + 1}
        case dec : 
            return {...state, amount : state.amount - 1}
        case incByAmnt :         
            return {...state, amount : state.amount + action.payload}
        case initUser :
            return {...state, amount : action.payload}
        case getAccUserFulfilled : 
            return {...state, amount : state.amount + action.payload, error : undefined,  pending : false}
        case getAccUserRejected : 
            return {...state, error : action.error, pending : false}
        case getAccUserPending : 
            return {...state, pending : action.pending}
        default : 
            return state
    }

}