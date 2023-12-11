import {configureStore} from "@reduxjs/toolkit"
import tryReducer from "../features/counterSlice"
export const store = configureStore({
    reducer : tryReducer
})