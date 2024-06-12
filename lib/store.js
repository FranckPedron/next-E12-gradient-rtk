import {configureStore} from "@reduxjs/toolkit";
import colorsReducer from "@/lib/features/colors/colorsSlice";

export const makeStore = () => {
    return configureStore({
        reducer:  colorsReducer,
    });
}
