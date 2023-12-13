import {configureStore} from "@reduxjs/toolkit"
import tryReducer from "../features/countSlice"
export const store = configureStore({
    reducer : tryReducer
})