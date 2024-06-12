import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    firstColor: "#123456",
    lastColor: "#654321",
    direction: "90deg",
    type: "linear",
    nbColors:0,
};

export const colorsSlice = createSlice({
    name: "colors",
    initialState,
    reducers:{
        changeFirstColor: (state, action) => {
            state.firstColor = action.payload;
            state.nbColors += 1;
        },
        changeLastColor: (state, action) => {
            state.lastColor = action.payload;
            state.nbColors += 1;
        },
        changeDirection: (state, action) => {
            state.direction = action.payload;
        },
        toggleRadialMode: (state, action) => {
            state.type = state.type === 'linear' ? 'radial' : 'linear';
        },

    },
});
export const {changeFirstColor, changeLastColor, changeDirection, toggleRadialMode} = colorsSlice.actions;
export default colorsSlice.reducer;
