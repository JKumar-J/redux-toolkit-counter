import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Changed "actions" to "action"
        incrementByAmount: (state, action) => { 
            const num = action.payload;
            state.value += num;
        }
    }
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
