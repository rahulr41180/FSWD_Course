
import axios from "axios";

// Action Name Contstant
export const inc = "inc";
export const dec = "dec";
export const incByAmnt = "incByAmnt";
export const initUser = "initUser";
export const incBonus = "incBonus";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulfilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";
export const incPoint = "bonus/initPoint";

// Giving Action With Action Creator Function
// Increment Action
export function incrementAction() {
    return {type : inc};
}

// Decrement Action
export function decrementAction() {
    return {type : dec};
}

// Increment By Amount
export function incrementByAmountAction(value) {
    return {type : incByAmnt, payload : value}
}

// Getting User
export function initUserAction(value) {
    return {type : initUser, payload : value};
}

// If API has been fulfilled and it found a user
export function getAccountUserFulfilled(value) {
    return {type : getAccUserFulfilled, payload : value};
}

// If API has been through a error
export function getAccountUserRejected(error) {
    return {type : getAccUserRejected, error : error};
}

// If API is pending
export function getAccountUserPending(value) {
    return {type : getAccUserPending, pending : value};
}

export function bonusPointAction(value) {
    return {type : incPoint, payload : value};
}

// Getting Initial User
export function getUserAction(id) {
    return async (dispatch, getState) => {
        try {

            dispatch(getAccountUserPending(true));
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
            console.log('data:', data)
            // return {type : initUser, payload : data.amount}
            dispatch(getAccountUserFulfilled(data.amount));

        } catch(error) {

            dispatch(getAccountUserRejected(error.message))

        }
    }
}