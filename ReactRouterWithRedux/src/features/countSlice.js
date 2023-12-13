import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count : 10
};

export const countSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        addCount:(state,action) => {
            state.count = state.count+Number(action.payload)
        },
        removeCount:(state,action) => {
            state.count = state.count-Number(action.payload)
        }
    }
})

export const {addCount,removeCount} = countSlice.actions

export default countSlice.reducer