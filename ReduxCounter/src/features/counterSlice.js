import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count : 10
};

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addValue:(state,action) => {
            state.count = state.count+Number(action.payload);
        },
        removeValue:(state,action) => {
            console.log(action.payload)
            state.count = state.count-Number(action.payload);
        }
    }
})

export default counterSlice.reducer
export const {addValue,removeValue} = counterSlice.actions