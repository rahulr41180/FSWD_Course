
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { accountReducer } from "../Reducers/account.reducer";
import { bonusReducer } from "../Reducers/bonus.reducer";

export const store = createStore(
    combineReducers({
        account : accountReducer,
        bonus : bonusReducer
    }),

    applyMiddleware(logger, thunk)
)