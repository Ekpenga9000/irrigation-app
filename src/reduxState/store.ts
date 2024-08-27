import {configureStore} from "@reduxjs/toolkit"; 
import authReducer from "./authSlice/authSlice";
import weatherSlice from "./weatherSlice/weatherSlice";
import irrigationSlice from "./irrigationSlice/irrigationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherSlice,
        irrigation:irrigationSlice
    }, 
}); 

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 