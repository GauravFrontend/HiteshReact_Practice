import {configureStore} from "@reduxjs/toolkit"
import tryreducer from "../features/bookSlice"
export const store = configureStore({
    reducer : tryreducer
})