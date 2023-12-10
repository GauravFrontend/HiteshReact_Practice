import {configureStore} from "@reduxjs/toolkit"
import tryReducer from "../features/todoSlice"
export const store = configureStore({
    reducer:tryReducer
})
