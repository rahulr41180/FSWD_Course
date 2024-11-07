
import { incBonus, incByAmnt } from "../Actions";

export function bonusReducer(state={points : 0}, action) {

    switch(action.type) {
        case incBonus : 
            return {...state, points : state.points + 1};
        case incByAmnt : 
            if(action.payload >= 100) {
                return {...state, points : state.points + action.payload};
            }
        default : 
            return state
    }

}